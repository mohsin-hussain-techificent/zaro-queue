import React, { createContext, useContext, useState, useEffect, useRef } from "react";

const VoiceContext = createContext();

export const useVoiceContext = () => {
  const context = useContext(VoiceContext);
  if (!context) {
    throw new Error("useVoiceContext must be used within a VoiceProvider");
  }
  return context;
};

export const VoiceProvider = ({ children }) => {
  const [isRecording, setIsRecording] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [conversation, setConversation] = useState(null);
  const [notification, setNotification] = useState({
    show: false,
    message: "",
    type: "info",
  });

  // Refs for timeout management
  const sessionTimeoutRef = useRef(null);
  const warningTimeoutRef = useRef(null);
  const userActivityDetectedRef = useRef(false);
  const sessionStartTimeRef = useRef(null);
  
  // Session timeout duration (3 minutes in milliseconds)
  const SESSION_TIMEOUT_DURATION = 3 * 60 * 1000; // 3 minutes
  const WARNING_TIME = 30 * 1000; // 30 seconds warning

  // ElevenLabs Agent ID - this is the specific voice agent you want to connect to
  const AGENT_ID = process.env.NEXT_PUBLIC_AGENNT_ID;

  const showNotification = (message, type = "info") => {
    setNotification({ show: true, message, type });
  };

  const hideNotification = () => {
    setNotification({ show: false, message: "", type: "info" });
  };

  // Clear all timeouts
  const clearAllTimeouts = () => {
    if (sessionTimeoutRef.current) {
      clearTimeout(sessionTimeoutRef.current);
      sessionTimeoutRef.current = null;
    }
    if (warningTimeoutRef.current) {
      clearTimeout(warningTimeoutRef.current);
      warningTimeoutRef.current = null;
    }
  };

  // Force end session due to timeout
  const endSessionDueToTimeout = async () => {
    console.log("Session expired due to inactivity");
    showNotification("Session expired due to inactivity", "warning");
    
    if (conversation) {
      try {
        await conversation.endSession();
      } catch (error) {
        console.error("Error ending conversation due to timeout:", error);
      }
    }
    
    setConversation(null);
    setIsRecording(false);
    clearAllTimeouts();
    userActivityDetectedRef.current = false;
  };

  // Set up the timeout system - only called once when session starts
  const setupSessionTimeout = () => {
    console.log("Setting up session timeout...");
    clearAllTimeouts();
    
    sessionStartTimeRef.current = Date.now();
    userActivityDetectedRef.current = false;

    // Set warning timeout (2.5 minutes)
    warningTimeoutRef.current = setTimeout(() => {
      console.log("30 second warning triggered, user activity detected:", userActivityDetectedRef.current);
      if (!userActivityDetectedRef.current) {
        showNotification("Session will expire in 30 seconds due to inactivity", "warning");
      }
    }, SESSION_TIMEOUT_DURATION - WARNING_TIME);

    // Set session timeout (3 minutes)
    sessionTimeoutRef.current = setTimeout(() => {
      console.log("Session timeout triggered, user activity detected:", userActivityDetectedRef.current);
      if (!userActivityDetectedRef.current) {
        endSessionDueToTimeout();
      }
    }, SESSION_TIMEOUT_DURATION);

    console.log("Timeouts set - Warning in", (SESSION_TIMEOUT_DURATION - WARNING_TIME) / 1000, "seconds, Expiration in", SESSION_TIMEOUT_DURATION / 1000, "seconds");
  };

  // Mark that user has been active
  const markUserActive = () => {
    console.log("User activity detected");
    userActivityDetectedRef.current = true;
  };

  const startRecording = async () => {
    if (isRecording || isLoading) return;

    setIsLoading(true);
    showNotification("Requesting microphone access...", "info");

    try {
      await navigator.mediaDevices.getUserMedia({ audio: true });
      showNotification("Connecting to voice agent...", "info");

      const waitForElevenLabs = () => {
        return new Promise((resolve, reject) => {
          const checkInterval = setInterval(() => {
            if (window.ElevenLabs && window.ElevenLabs.Conversation) {
              clearInterval(checkInterval);
              resolve(window.ElevenLabs.Conversation);
            }
          }, 100);

          setTimeout(() => {
            clearInterval(checkInterval);
            reject(new Error("ElevenLabs client failed to load"));
          }, 10000);
        });
      };

      const Conversation = await waitForElevenLabs();

      const newConversation = await Conversation.startSession({
        agentId: AGENT_ID,
        onConnect: () => {
          console.log("Connected to agent:", AGENT_ID);
          setIsLoading(false);
          setIsRecording(true);
          // Setup timeout AFTER connection is established and recording starts
          setTimeout(() => {
            setupSessionTimeout();
          }, 1000); // Small delay to ensure everything is set up
        },
        onDisconnect: () => {
          console.log("Disconnected from agent:", AGENT_ID);
          clearAllTimeouts();
          setIsRecording(false);
          setConversation(null);
          userActivityDetectedRef.current = false;
          showNotification("Voice session ended", "info");
        },
        onMessage: (msg) => {
          console.log("Agent response received:", msg);
          // Only mark as active if this is likely a response to user input
          // You might need to adjust this logic based on ElevenLabs message types
          if (msg && typeof msg === 'string' && msg.trim().length > 0) {
            markUserActive();
          }
        },
        onError: (err) => {
          console.error("Voice error:", err);
          clearAllTimeouts();
          setIsLoading(false);
          setIsRecording(false);
          userActivityDetectedRef.current = false;
          showNotification("Voice connection error", "error");
        },
        // These events may or may not be available in ElevenLabs
        onUserSpeechStart: () => {
          console.log("User started speaking");
          markUserActive();
        },
        onUserSpeechEnd: () => {
          console.log("User finished speaking");
          markUserActive();
        },
        onUserInteraction: () => {
          console.log("User interaction detected");
          markUserActive();
        }
      });

      console.log("Conversation started with agent:", AGENT_ID);
      console.log("Conversation ID:", newConversation.getId());
      localStorage.setItem("convId", newConversation.getId());
      setConversation(newConversation);

    } catch (err) {
      console.error("Failed to start conversation:", err);
      clearAllTimeouts();
      setIsLoading(false);
      userActivityDetectedRef.current = false;
      showNotification("Failed to start voice session", "error");
    }
  };

  const stopRecording = async () => {
    if (!isRecording) return;

    console.log("Manually stopping recording");
    showNotification("Ending voice session...", "info");
    
    clearAllTimeouts();
    userActivityDetectedRef.current = false;

    if (conversation) {
      try {
        await conversation.endSession();
        console.log("Conversation ended with agent:", AGENT_ID);
      } catch (error) {
        console.error("Error ending conversation:", error);
      }
      setConversation(null);
    }
    setIsRecording(false);
    showNotification("Voice session ended", "success");
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      clearAllTimeouts();
      userActivityDetectedRef.current = false;
    };
  }, []);

  // Debug logging to track session state
  useEffect(() => {
    console.log("Recording state changed:", isRecording);
    if (!isRecording) {
      clearAllTimeouts();
      userActivityDetectedRef.current = false;
    }
  }, [isRecording]);

  const value = {
    isRecording,
    isLoading,
    conversation: !!conversation,
    notification,
    startRecording,
    stopRecording,
    hideNotification,
    showNotification,
    markUserActive, // Expose for manual activity marking if needed
  };

  return (
    <VoiceContext.Provider value={value}>{children}</VoiceContext.Provider>
  );
};