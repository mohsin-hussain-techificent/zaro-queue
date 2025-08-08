import React from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useVoiceContext } from "./VoiceContext";
import VoiceNotification from "./VoiceNotification";

export default function LiveDemo({ imageSrc }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const {
    isRecording,
    isLoading,
    startRecording,
    stopRecording,
    notification,
    hideNotification,
  } = useVoiceContext();

  return (
    <>
      <Box
        sx={{
          py: { xs: 4, md: 6 },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "white",
          position: "relative",
          overflow: "hidden",
          px: 2,
        }}
      >
        {/* Optional top-left image */}
        {imageSrc && (
          <Box
            component="img"
            src={imageSrc}
            alt="logo"
            sx={{
              position: "absolute",
              left: { xs: 16, md: 40 },
              top: { xs: 20, md: 40 },
              width: { xs: 40, md: 80 },
              height: "auto",
              opacity: 0.9,
            }}
          />
        )}

        {/* Text & Mic Button */}
        <Box sx={{ textAlign: "center", width: { xs: "85%", md: "60%" } }}>
          <Typography
            variant="overline"
            sx={{
              display: "block",
              color: "grey.600",
              letterSpacing: 2,
              fontSize: { xs: 11, md: 12 },
            }}
          >
            LIVE DEMO
          </Typography>

          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              mt: 1,
              mb: 0.5,
              fontSize: { xs: "1.6rem", md: "2.2rem" },
              color: "text.primary",
            }}
          >
            See it yourself
          </Typography>

          <Typography
            variant="body2"
            sx={{
              color: "grey.700",
              mb: { xs: 3, md: 4 },
              fontSize: { xs: "0.9rem", md: "1rem" },
            }}
          >
            Interact with our chatbot and experience the next gen tech
          </Typography>

          {/* Enhanced Mic Button with Wave Animation */}
          <div className="mic-container">
            {/* Animated wave rings */}
            <div className={`wave-ring ring-1 ${isRecording ? "active" : ""}`}></div>
            <div className={`wave-ring ring-2 ${isRecording ? "active" : ""}`}></div>
            <div className={`wave-ring ring-3 ${isRecording ? "active" : ""}`}></div>
            <div className={`wave-ring ring-4 ${isRecording ? "active" : ""}`}></div>
            <div className={`wave-ring ring-5 ${isRecording ? "active" : ""}`}></div>

            {/* Main mic button */}
            <div className={`mic-button ${isRecording ? "recording" : ""} ${isLoading ? "loading" : ""}`}>
              {/* Gradient background */}
              <div className="mic-bg"></div>
              
              {/* Floating particles when recording */}
              {isRecording && (
                <div className="particles">
                  <div className="particle p1"></div>
                  <div className="particle p2"></div>
                  <div className="particle p3"></div>
                  <div className="particle p4"></div>
                  <div className="particle p5"></div>
                  <div className="particle p6"></div>
                </div>
              )}

              {/* Start Recording Button */}
              <button
                className={`voice-btn ${isRecording || isLoading ? "hidden" : ""}`}
                onClick={startRecording}
                aria-label="Start voice recording"
                disabled={isLoading}
              >
                <svg
                  className="microphone-icon"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z" />
                  <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z" />
                </svg>
              </button>

              {/* Stop Recording Button */}
              <button
                className={`voice-btn ${!isRecording ? "hidden" : ""}`}
                onClick={stopRecording}
                aria-label="Stop voice recording"
              >
                <svg
                  className="pause-icon"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                </svg>
              </button>

              {/* Loading Spinner */}
              <button
                className={`voice-btn loading-btn ${!isLoading ? "hidden" : ""}`}
                disabled
                aria-label="Loading..."
              >
                <div className="loading-spinner"></div>
              </button>
            </div>
          </div>
        </Box>
      </Box>

      {/* Notification */}
      <VoiceNotification
        message={notification.message}
        type={notification.type}
        isVisible={notification.show}
        onClose={hideNotification}
      />

      {/* Enhanced Styles */}
      <style jsx>{`
        .mic-container {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 120px;
          height: 120px;
        }

        /* Wave rings */
        .wave-ring {
          position: absolute;
          border: 2px solid transparent;
          border-radius: 50%;
          opacity: 0;
          transform: scale(0.8);
          transition: all 0.3s ease;
        }

        .wave-ring.active {
          border-color: rgba(102, 126, 234, 0.4);
          animation: wave-expand 2s infinite ease-out;
        }

        .ring-1 { width: 70px; height: 70px; animation-delay: 0s; }
        .ring-2 { width: 85px; height: 85px; animation-delay: 0.3s; }
        .ring-3 { width: 100px; height: 100px; animation-delay: 0.6s; }
        .ring-4 { width: 115px; height: 115px; animation-delay: 0.9s; }
        .ring-5 { width: 130px; height: 130px; animation-delay: 1.2s; }

        @keyframes wave-expand {
          0% {
            transform: scale(0.8);
            opacity: 0;
            border-color: rgba(102, 126, 234, 0.8);
          }
          50% {
            opacity: 1;
            border-color: rgba(102, 126, 234, 0.4);
          }
          100% {
            transform: scale(1.4);
            opacity: 0;
            border-color: rgba(102, 126, 234, 0);
          }
        }

        /* Main mic button */
        .mic-button {
          position: relative;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 10;
        }

        .mic-button:hover {
          transform: translateY(-3px) scale(1.05);
        }

        .mic-button.recording {
          animation: mic-pulse 1.5s infinite ease-in-out;
        }

        .mic-button.loading {
          animation: mic-rotate 2s infinite linear;
        }

        @keyframes mic-pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }

        @keyframes mic-rotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        /* Gradient background */
        .mic-bg {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border-radius: 50%;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          box-shadow: 0 8px 32px rgba(102, 126, 234, 0.3);
          transition: all 0.3s ease;
        }

        .mic-button.recording .mic-bg {
          background: linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%);
          box-shadow: 0 12px 40px rgba(255, 107, 107, 0.4);
        }

        .mic-button.loading .mic-bg {
          background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
          box-shadow: 0 12px 40px rgba(79, 172, 254, 0.4);
        }

        /* Floating particles */
        .particles {
          position: absolute;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: rgba(255, 255, 255, 0.8);
          border-radius: 50%;
          animation: float 3s infinite ease-in-out;
        }

        .p1 { top: 20%; left: 10%; animation-delay: 0s; }
        .p2 { top: 80%; right: 15%; animation-delay: 0.5s; }
        .p3 { top: 40%; left: 80%; animation-delay: 1s; }
        .p4 { top: 10%; right: 40%; animation-delay: 1.5s; }
        .p5 { bottom: 20%; left: 30%; animation-delay: 2s; }
        .p6 { top: 60%; right: 70%; animation-delay: 2.5s; }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) scale(0);
            opacity: 0;
          }
          50% {
            transform: translateY(-20px) scale(1);
            opacity: 1;
          }
        }

        /* Voice button styles */
        .voice-btn {
          background: none;
          border: none;
          color: white;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          padding: 0;
          margin: 0;
          position: relative;
          z-index: 2;
        }

        .voice-btn:hover:not(:disabled) {
          transform: scale(1.1);
        }

        .hidden {
          display: none !important;
        }

        .microphone-icon,
        .pause-icon {
          width: 24px;
          height: 24px;
          filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
        }

        .microphone-icon {
          animation: mic-float 3s infinite ease-in-out;
        }

        @keyframes mic-float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-2px);
          }
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
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .mic-container {
            width: 100px;
            height: 100px;
          }
          
          .mic-button {
            width: 50px;
            height: 50px;
          }
          
          .ring-1 { width: 60px; height: 60px; }
          .ring-2 { width: 75px; height: 75px; }
          .ring-3 { width: 90px; height: 90px; }
          .ring-4 { width: 105px; height: 105px; }
          .ring-5 { width: 120px; height: 120px; }
          
          .microphone-icon,
          .pause-icon {
            width: 20px;
            height: 20px;
          }
        }
      `}</style>
    </>
  );
}