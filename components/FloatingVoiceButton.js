import React, { useEffect, useState } from 'react';
import VoiceNotification from './VoiceNotification';

const FloatingVoiceButton = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [conversation, setConversation] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [notification, setNotification] = useState({ show: false, message: '', type: 'info' });

  // ElevenLabs Agent ID - this is the specific voice agent you want to connect to
  const AGENT_ID = "ZvAwcehlvHp8ijfiLbdR";

  const showNotification = (message, type = 'info') => {
    setNotification({ show: true, message, type });
  };

  const hideNotification = () => {
    setNotification({ show: false, message: '', type: 'info' });
  };

  const handleStartRecording = async () => {
    setIsLoading(true);
    showNotification('Requesting microphone access...', 'info');
    
    try {
      await navigator.mediaDevices.getUserMedia({ audio: true });
      showNotification('Connecting to voice agent...', 'info');
      
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
            reject(new Error('ElevenLabs client failed to load'));
          }, 10000);
        });
      };

      const Conversation = await waitForElevenLabs();
      
      const newConversation = await Conversation.startSession({
        agentId: AGENT_ID, // This is where the agentId is used!
        onConnect: () => {
          console.log("Connected to agent:", AGENT_ID);
          setIsLoading(false);
          showNotification('Voice agent connected! Start speaking...', 'success');
        },
        onDisconnect: () => {
          console.log("Disconnected from agent:", AGENT_ID);
          setIsRecording(false);
          setConversation(null);
          showNotification('Voice session ended', 'info');
        },
        onMessage: (msg) => {
          console.log("Agent response:", msg);
          showNotification(`Agent: ${msg}`, 'info');
        },
        onError: (err) => {
          console.error("Voice error:", err);
          setIsLoading(false);
          setIsRecording(false);
          showNotification('Voice connection error', 'error');
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
      showNotification('Failed to start voice session', 'error');
    }
  };

  const handleStopRecording = async () => {
    showNotification('Ending voice session...', 'info');
    
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
    showNotification('Voice session ended', 'success');
  };

  return (
    <>
      <div className="floating-voice-container">
        <div className="command-animate logout-command">
          <div className={`pulse-bg ${isRecording ? 'recording-pulse' : ''}`}></div>
          <div className="voice-command">
            <button 
              className={`voice-btn ${isRecording || isLoading ? 'hidden' : ''}`}
              onClick={handleStartRecording}
              aria-label="Start voice recording"
              disabled={isLoading}
            >
              <svg className="microphone-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/>
                <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/>
              </svg>
            </button>
            
            <button 
              className={`voice-btn ${!isRecording ? 'hidden' : ''}`}
              onClick={handleStopRecording}
              aria-label="Stop voice recording"
            >
              <svg className="pause-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
              </svg>
            </button>

            <button 
              className={`voice-btn loading-btn ${!isLoading ? 'hidden' : ''}`}
              disabled
              aria-label="Loading..."
            >
              <div className="loading-spinner"></div>
            </button>
          </div>
        </div>

        <style jsx>{`
          .floating-voice-container {
            position: fixed;
            bottom: 30px;
            right: 30px;
            z-index: 1000;
            display: flex;
            align-items: center;
            justify-content: flex-end;
          }

          .command-animate {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .logout-command {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            border-radius: 50px;
            padding: 15px 25px;
            box-shadow: 0 8px 32px rgba(102, 126, 234, 0.3);
            transition: all 0.3s ease;
          }

          .logout-command:hover {
            transform: translateY(-2px);
            box-shadow: 0 12px 40px rgba(102, 126, 234, 0.4);
          }

          .pulse-bg {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            border-radius: 50px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            opacity: 0.7;
            animation: pulse 2s infinite;
          }

          .pulse-bg.recording-pulse {
            background: linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%);
            animation: recording-pulse 1s infinite;
          }

          @keyframes pulse {
            0% {
              transform: scale(1);
              opacity: 0.7;
            }
            50% {
              transform: scale(1.05);
              opacity: 0.4;
            }
            100% {
              transform: scale(1);
              opacity: 0.7;
            }
          }

          @keyframes recording-pulse {
            0% {
              transform: scale(1);
              opacity: 0.7;
              box-shadow: 0 0 20px rgba(255, 107, 107, 0.6);
            }
            50% {
              transform: scale(1.05);
              opacity: 0.4;
              box-shadow: 0 0 30px rgba(255, 107, 107, 0.8);
            }
            100% {
              transform: scale(1);
              opacity: 0.7;
              box-shadow: 0 0 20px rgba(255, 107, 107, 0.6);
            }
          }

          .voice-command {
            position: relative;
            z-index: 1;
          }

          .voice-btn {
            background: none;
            border: none;
            color: white;
            cursor: pointer;
            font-size: 1.2rem;
            display: inline-block;
            transition: all 0.3s ease;
            padding: 0;
            margin: 0;
          }

          .voice-btn:hover:not(:disabled) {
            transform: scale(1.1);
          }

          .voice-btn:disabled {
            cursor: not-allowed;
            opacity: 0.7;
          }

          .microphone-icon,
          .pause-icon {
            width: 24px;
            height: 24px;
            transition: all 0.3s ease;
          }

          .hidden {
            display: none !important;
          }

          .loading-spinner {
            width: 20px;
            height: 20px;
            border: 2px solid rgba(255, 255, 255, 0.3);
            border-top: 2px solid white;
            border-radius: 50%;
            animation: spin 1s linear infinite;
          }

          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }

          /* Responsive design */
          @media (max-width: 768px) {
            .floating-voice-container {
              bottom: 20px;
              right: 20px;
            }

            .logout-command {
              padding: 12px 20px;
            }

            .voice-btn {
              font-size: 1rem;
            }

            .microphone-icon,
            .pause-icon {
              width: 20px;
              height: 20px;
            }

            .loading-spinner {
              width: 16px;
              height: 16px;
            }
          }

          @media (max-width: 480px) {
            .floating-voice-container {
              bottom: 15px;
              right: 15px;
            }

            .logout-command {
              padding: 10px 16px;
            }

            .voice-btn {
              font-size: 0.9rem;
            }

            .microphone-icon,
            .pause-icon {
              width: 18px;
              height: 18px;
            }

            .loading-spinner {
              width: 14px;
              height: 14px;
            }
          }

          /* Accessibility improvements */
          .voice-btn:focus {
            outline: 2px solid white;
            outline-offset: 2px;
          }

          /* Smooth entrance animation */
          .floating-voice-container {
            animation: slideIn 0.5s ease-out;
          }

          @keyframes slideIn {
            from {
              transform: translateX(100px);
              opacity: 0;
            }
            to {
              transform: translateX(0);
              opacity: 1;
            }
          }
        `}</style>
      </div>

      <VoiceNotification
        message={notification.message}
        type={notification.type}
        isVisible={notification.show}
        onClose={hideNotification}
      />
    </>
  );
};

export default FloatingVoiceButton; 