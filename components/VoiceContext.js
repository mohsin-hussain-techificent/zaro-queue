import React, { createContext, useContext, useState, useEffect } from "react";

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

  // ElevenLabs Agent ID - this is the specific voice agent you want to connect to
  const AGENT_ID = "ZvAwcehlvHp8ijfiLbdR";

  const showNotification = (message, type = "info") => {
    setNotification({ show: true, message, type });
  };

  const hideNotification = () => {
    setNotification({ show: false, message: "", type: "info" });
  };

  const startRecording = async () => {
    if (isRecording || isLoading) return; // Prevent multiple starts

    setIsLoading(true);
    showNotification("Requesting microphone access...", "info");

    try {
      await navigator.mediaDevices.getUserMedia({ audio: true });
      showNotification("Connecting to voice agent...", "info");

      // Wait for ElevenLabs to be available (loaded from document head)
      const waitForElevenLabs = () => {
        return new Promise((resolve, reject) => {
          const checkInterval = setInterval(() => {
            if (window.ElevenLabs && window.ElevenLabs.Conversation) {
              clearInterval(checkInterval);
              resolve(window.ElevenLabs.Conversation);
            }
          }, 100);

          // Timeout after 10 seconds
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
          // showNotification(
          //   "Voice agent connected! Start speaking...",
          //   "success"
          // );
        },
        onDisconnect: () => {
          console.log("Disconnected from agent:", AGENT_ID);
          setIsRecording(false);
          setConversation(null);
          showNotification("Voice session ended", "info");
        },
        onMessage: (msg) => {
          console.log("Agent response:", msg);
          // showNotification(`Agent: ${msg}`, 'info');
        },
        onError: (err) => {
          console.error("Voice error:", err);
          setIsLoading(false);
          setIsRecording(false);
          showNotification("Voice connection error", "error");
        },
      });

      console.log("Conversation started with agent:", AGENT_ID);
      console.log("Conversation ID:", newConversation.getId());
      localStorage.setItem("convId", newConversation.getId());
      setConversation(newConversation);
      setIsRecording(true);
    } catch (err) {
      console.error("Failed to start conversation:", err);
      setIsLoading(false);
      showNotification("Failed to start voice session", "error");
    }
  };

  const stopRecording = async () => {
    if (!isRecording) return; // Prevent stopping when not recording

    showNotification("Ending voice session...", "info");

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

  const value = {
    isRecording,
    isLoading,
    conversation: !!conversation,
    notification,
    startRecording,
    stopRecording,
    hideNotification,
    showNotification,
  };

  return (
    <VoiceContext.Provider value={value}>{children}</VoiceContext.Provider>
  );
};
