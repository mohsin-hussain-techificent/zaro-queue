import React from 'react';

const ContactSection = () => {
  return (
    <section className="contact-section">
      <div className="container">
        <div className="contact-content">
          <div className="contact-header">
            <h2 className="contact-title">Contact Section</h2>
            <h3 className="contact-subtitle">Ready to Revolutionize Your Customer Support?</h3>
            <p className="contact-description">
              Schedule a free consultation to see Zero Queue in action and discover how it can transform your business.
            </p>
          </div>
          
          <div className="contact-buttons">
            <button className="btn btn-primary">
              <span>Book a Demo</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M4 10H16M16 10L10 4M16 10L10 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            
            <button className="btn btn-secondary">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M2 3H18V17H2V3ZM2 3L10 11L18 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Get in Touch</span>
            </button>
            
            <button className="btn btn-tertiary">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10 2L13.09 8.26L20 9L15 14.14L16.18 21.02L10 17.77L3.82 21.02L5 14.14L0 9L6.91 8.26L10 2Z" fill="currentColor"/>
              </svg>
              <span>Log In to Your Account</span>
            </button>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .contact-section {
          padding: 80px 0;
          background: linear-gradient(135deg, #fafbfc 0%, #f1f3f4 100%);
          position: relative;
        }
        
        .contact-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.02'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
          pointer-events: none;
        }
        
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          position: relative;
          z-index: 1;
        }
        
        .contact-content {
          text-align: center;
          max-width: 800px;
          margin: 0 auto;
        }
        
        .contact-header {
          margin-bottom: 50px;
        }
        
        .contact-title {
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 12px;
          font-weight: 600;
          color: #6b7280;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          margin-bottom: 16px;
        }
        
        .contact-subtitle {
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: clamp(28px, 4vw, 36px);
          font-weight: 600;
          color: #111827;
          margin-bottom: 20px;
          line-height: 1.3;
        }
        
        .contact-description {
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: clamp(16px, 2.5vw, 18px);
          color: #6b7280;
          line-height: 1.6;
          max-width: 500px;
          margin: 0 auto;
        }
        
        .contact-buttons {
          display: flex;
          flex-direction: column;
          gap: 16px;
          max-width: 400px;
          margin: 0 auto;
        }
        
        .btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          padding: 16px 24px;
          border: none;
          border-radius: 12px;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 16px;
          font-weight: 500;
          text-decoration: none;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        
        .btn svg {
          transition: transform 0.3s ease;
        }
        
        .btn:hover svg {
          transform: translateX(4px);
        }
        
        /* Primary Button - Elegant Dark */
        .btn-primary {
          background: linear-gradient(135deg, #1f2937 0%, #374151 100%);
          color: #fff;
          box-shadow: 0 4px 16px rgba(31, 41, 55, 0.15);
        }
        
        .btn-primary:hover {
          background: linear-gradient(135deg, #111827 0%, #1f2937 100%);
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(31, 41, 55, 0.25);
        }
        
        /* Secondary Button - Clean Outline */
        .btn-secondary {
          background: transparent;
          color: #374151;
          border: 2px solid #d1d5db;
          backdrop-filter: blur(10px);
        }
        
        .btn-secondary:hover {
          border-color: #9ca3af;
          background: rgba(55, 65, 81, 0.05);
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
        }
        
        /* Tertiary Button - Soft Gradient */
        .btn-tertiary {
          background: linear-gradient(135deg, #8b5cf6 0%, #a855f7 100%);
          color: #fff;
          box-shadow: 0 4px 16px rgba(139, 92, 246, 0.2);
        }
        
        .btn-tertiary:hover {
          background: linear-gradient(135deg, #7c3aed 0%, #9333ea 100%);
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(139, 92, 246, 0.3);
        }
        
        @media (max-width: 768px) {
          .contact-section {
            padding: 60px 0;
          }
          
          .contact-header {
            margin-bottom: 40px;
          }
          
          .contact-subtitle {
            font-size: 28px;
            margin-bottom: 16px;
          }
          
          .contact-description {
            font-size: 16px;
          }
          
          .contact-buttons {
            gap: 12px;
          }
          
          .btn {
            padding: 14px 20px;
            font-size: 15px;
          }
        }
        
        @media (max-width: 480px) {
          .contact-section {
            padding: 50px 0;
          }
          
          .contact-subtitle {
            font-size: 24px;
          }
          
          .contact-description {
            font-size: 15px;
          }
          
          .btn {
            padding: 12px 18px;
            font-size: 14px;
          }
        }
      `}</style>
    </section>
  );
};

export default ContactSection; 