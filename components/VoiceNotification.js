import React, { useState, useEffect } from 'react';

const VoiceNotification = ({ message, type = 'info', isVisible, onClose }) => {
  const [isShowing, setIsShowing] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setIsShowing(true);
      const timer = setTimeout(() => {
        setIsShowing(false);
        setTimeout(() => onClose(), 300);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <div className={`voice-notification ${type} ${isShowing ? 'show' : 'hide'}`}>
      <div className="notification-content">
        <div className="notification-icon">
          {type === 'success' && (
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
            </svg>
          )}
          {type === 'error' && (
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
            </svg>
          )}
          {type === 'info' && (
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
            </svg>
          )}
        </div>
        <span className="notification-message">{message}</span>
        <button className="notification-close" onClick={() => {
          setIsShowing(false);
          setTimeout(() => onClose(), 300);
        }}>
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
          </svg>
        </button>
      </div>

      <style jsx>{`
        .voice-notification {
          position: fixed;
          top: 20px;
          right: 20px;
          z-index: 1001;
          background: rgba(0, 0, 0, 0.9);
          color: white;
          border-radius: 12px;
          padding: 16px 20px;
          min-width: 300px;
          max-width: 400px;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          transform: translateX(100%);
          opacity: 0;
          transition: all 0.3s ease;
        }

        .voice-notification.show {
          transform: translateX(0);
          opacity: 1;
        }

        .voice-notification.hide {
          transform: translateX(100%);
          opacity: 0;
        }

        .voice-notification.success {
          border-left: 4px solid #4CAF50;
        }

        .voice-notification.error {
          border-left: 4px solid #f44336;
        }

        .voice-notification.info {
          border-left: 4px solid #2196F3;
        }

        .notification-content {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .notification-icon {
          flex-shrink: 0;
          width: 20px;
          height: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .notification-icon svg {
          width: 18px;
          height: 18px;
        }

        .notification-message {
          flex: 1;
          font-size: 14px;
          font-weight: 500;
          line-height: 1.4;
        }

        .notification-close {
          background: none;
          border: none;
          color: rgba(255, 255, 255, 0.7);
          cursor: pointer;
          padding: 4px;
          border-radius: 4px;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .notification-close:hover {
          color: white;
          background: rgba(255, 255, 255, 0.1);
        }

        .notification-close svg {
          width: 16px;
          height: 16px;
        }

        @media (max-width: 768px) {
          .voice-notification {
            top: 15px;
            right: 15px;
            left: 15px;
            min-width: auto;
            max-width: none;
          }
        }
      `}</style>
    </div>
  );
};

export default VoiceNotification; 