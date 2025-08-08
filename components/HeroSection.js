
import { useEffect, useState, useRef } from "react";

export default function HeroSection() {
  const [currentText, setCurrentText] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const scrollLockRef = useRef(0); // store scroll pos when modal opens
  const texts = ["Deliver", "Instant", "Support"];

  // Reliable page lock when modal open (works better cross-browser than overflow:hidden)
  useEffect(() => {
    if (showModal) {
      scrollLockRef.current = window.scrollY || window.pageYOffset || 0;
      // lock body in place
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollLockRef.current}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.width = "100%";
    } else {
      // restore
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";
      // restore scroll position
      window.scrollTo(0, scrollLockRef.current || 0);
    }
    // cleanup on unmount
    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";
      window.scrollTo(0, scrollLockRef.current || 0);
    };
  }, [showModal]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
      setCurrentChar(0);
    }, 2500);
    return () => clearInterval(interval);
  }, [texts.length]);

  useEffect(() => {
    const charInterval = setInterval(() => {
      setCurrentChar((prev) => {
        if (prev < texts[currentText].length - 1) return prev + 1;
        return prev;
      });
    }, 100);
    return () => clearInterval(charInterval);
  }, [currentText, texts]);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY || window.pageYOffset || 0);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handlePlayClick = (e) => {
    e.preventDefault();
    setShowModal(true);
  };
  const closeModal = () => setShowModal(false);

  const currentDisplayText = texts[currentText].substring(0, currentChar + 1);

  return (
    <>
      {/* Logo Only */}
      <div className="logo-container">
        <div className="logo">
          <img src="/assets/logo-light.svg" alt="Pixel Pier NYC" />
        </div>
      </div>

      {/* Hero Section - Dark Theme */}
      <section className="hero-section" style={{
        maxHeight: "100vh",
      }}>
        <div className="hero-left">
          <div className="hero-content">
            <h1 className="hero-title">
              <div className="elementor-headline">
                <div className="elementor-headline-plain-text">
                  Eliminate Wait Times with Zero Queue
                </div>
                <div
                  className="elementor-headline-plain-text"
                  style={{ whiteSpace: "nowrap" }}
                >
                  AI-Powered Voice Agents That{" "}
                  <span className="elementor-headline-dynamic-text elementor-headline-text-active">
                    {currentDisplayText}
                  </span>
                </div>
              </div>
            </h1>
            <div className="hero-cta">
              <a href="#" className="video-link" onClick={handlePlayClick}>
                <div className="elementor-icon-wrapper">
                  <div className="elementor-icon elementor-animation-pulse-grow">
                    <i className="fas fa-play"></i>
                  </div>
                </div>
                <span className="cta-text">Check out our reel</span>
              </a>
            </div>
            <p className="hero-description">
              Transform customer support with AI agents tailored to your
              business. Always on, always accurate, and always ready to
              assist—without the queue.
            </p>
            {/* <div className="hero-cta">
              <a href="#demo" className="ai-cta-button demo">
                Experience the Demo
              </a>

              <a href="#pricing" className="ai-cta-button pricing">
                Explore Pricing Plans
              </a>
              <a href="#strategy" className="ai-cta-button strategy">
                Schedule a Free Strategy Session
              </a>
            </div> */}
          </div>
        </div>

        <div className="hero-right"
          style={{
            maxHeight: "100vh",
          }}
        >
          <div className="hero-image"
            style={{
              maxHeight: "100vh",
            }}
          >
            <img
              src="/assets/GettyImages-1487864067.jpg"
              alt="Hero Background"
              style={{
                transform: `scale(${1.2 - scrollY * 0.0002}) translateY(${scrollY * 0.2
                  }px)`,
                filter: `brightness(${0.9 - scrollY * 0.0002}) contrast(${1.2 - scrollY * 0.0002
                  })`,
              }}
            />
          </div>
          <div className="social-icons">
            <a href="#" className="social-icon">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="fab fa-behance"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </section>

      {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            {/* Close button is placed *outside* the video frame so it doesn't overlap inside the iframe */}
            <button className="modal-close" onClick={closeModal} aria-label="Close">
              <i className="fas fa-times" />
            </button>

            <div className="video-container">
              <iframe
                src="https://www.youtube.com/embed/RXidlUSBhMY?autoplay=1&rel=0"
                title="Pixel Pier NYC Reel"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        /* Modal Overlay */
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.75);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 3000;
          overscroll-behavior: none; /* prevent swipe-to-go-back / overscroll */
          touch-action: none; /* help block touch scrolling on mobile while modal open */
        }

        /* Modal Content */
        .modal-content {
          position: relative;
          background: transparent; /* we want dark overlay, video itself has border radius */
          padding: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: visible; /* allow close button to visually sit outside the video frame */
        }

       .modal-close {
          position: absolute;
          top: -18px; /* outside the video top edge */
          right: -18px; /* outside the video right edge */
          z-index: 3100; /* above iframe */
          background: rgba(0, 0, 0, 0.85);
          color: #fff;
          border: none;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 6px 20px rgba(0,0,0,0.5);
        }
        .modal-close i { font-size: 16px; }

        /* Responsive video — larger on desktop, constrained on small screens */
        .video-container {
          width: min(1200px, 92vw); /* max width for desktop; responsive for smaller */
          aspect-ratio: 16 / 9;     /* keeps proper video aspect ratio */
          max-height: 80vh;         /* ensure it never exceeds viewport height */
          border-radius: 12px;
          overflow: hidden;
          background: #000;
          box-shadow: 0 12px 40px rgba(0,0,0,0.6);
        }

        .video-container iframe {
          width: 100%;
          height: 100%;
          border: 0;
          display: block;
        }

        .hero-cta {
          display: flex;
          flex-wrap: wrap;
          gap: 18px;
          margin: 40px 0 30px;
        }

        /* Base Button Style */
        .ai-cta-button {
          padding: 14px 24px;
          font-size: clamp(14px, 1vw, 18px);
          font-weight: 500;
          font-family: "Plus Jakarta Sans", sans-serif;
          text-decoration: none;
          color: #fff;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
          transition: all 0.3s ease;
          backdrop-filter: blur(6px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius:10px
        }

        /* Button 1: Teal Green */
        .ai-cta-button.demo {
          background: linear-gradient(135deg, #00d4aa 0%, #008b8b 100%);
          box-shadow: 0 6px 20px rgba(0, 212, 170, 0.3);
        }
        .ai-cta-button.demo:hover {
          background: linear-gradient(135deg, #00e6b2 0%, #00a79d 100%);
          box-shadow: 0 8px 28px rgba(0, 212, 170, 0.4);
        }

        /* Button 2: Electric Blue */
        .ai-cta-button.strategy {
          background: linear-gradient(135deg, #4f9aff 0%, #1e69d2 100%);
          box-shadow: 0 6px 20px rgba(79, 154, 255, 0.3);
        }
        .ai-cta-button.strategy:hover {
          background: linear-gradient(135deg, #72b3ff 0%, #2a77e3 100%);
          box-shadow: 0 8px 28px rgba(79, 154, 255, 0.4);
        }

        /* Button 3: Vibrant Purple */
        .ai-cta-button.pricing {
          background: linear-gradient(135deg, #a64eff 0%, #7e1dd2 100%);
          box-shadow: 0 6px 20px rgba(166, 78, 255, 0.3);
        }
        .ai-cta-button.pricing:hover {
          background: linear-gradient(135deg, #be71ff 0%, #8b2fe3 100%);
          box-shadow: 0 8px 28px rgba(166, 78, 255, 0.4);
        }

        /* Logo Only */
        .logo-container {
          position: fixed;
          top: 0;
          left: 0;
          z-index: 1000;
          padding: 30px 40px;
        }

        .logo img {
          height: 40px;
        }

        /* Hero Section - Dark Theme */
        .hero-section {
          display: flex;
          position: relative;
          overflow: visible;
          width: 100%;
          background: #000;
          margin: 0;
          padding: 0;
        }

        .hero-left {
          flex: 1;
          background: #00000000;
          display: flex;
          align-items: center;
          padding: 0 40px;
          z-index: 2;
          position: relative;
          max-width: 55%;
          margin: 0;
        }

        .hero-content {
          max-width: 450px;
          position: relative;
          z-index: 3;
        }

        .hero-title {
          font-size: clamp(25px, 3vw, 80px) !important;
          font-weight: 300;
          line-height: 1em;
          margin-bottom: 50px;
          color: #fff;
          font-family: "Plus Jakarta Sans", sans-serif;
          text-transform: none;
          letter-spacing: normal;
        }

        .elementor-headline {
          font-size: clamp(25px, 5.5vw, 75px) !important;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-weight: 300;
          text-transform: none;
          line-height: 1em;
        }

        .elementor-headline-plain-text {
          display: block;
          line-height: 1.1;
          margin-bottom: 8px;
          font-size: clamp(18px, 2.5vw, 50px) !important;
          white-space: nowrap;
        }

        .elementor-headline-dynamic-wrapper {
          display: inline;
          position: relative;
          margin-left: 5px;
        }

        .elementor-headline-dynamic-text {
          font-size: inherit !important;
          display: inline-block;
          transition: all 0.3s ease;
          color: #fff;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-weight: 300;
          text-transform: none;
          line-height: 1em;
          position: relative;
        }

        .elementor-headline-text-active {
          animation: fadeInUp 0.5s ease;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .hero-cta {
          display: flex;
          align-items: center;
          margin-bottom: 40px;
        }

        .video-link {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
          color: inherit;
          transition: all 0.3s ease;
        }

        .video-link:hover {
          transform: scale(1.02);
        }

        .elementor-icon-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .elementor-icon {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #333;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .elementor-icon:hover {
          transform: scale(1.05);
          border-color: rgba(255, 255, 255, 0.3);
        }

        .elementor-icon i {
          color: #00d4aa;
          font-size: 16px;
          transition: all 0.3s ease;
        }

        .elementor-animation-pulse-grow {
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0% {
            transform: scale(1);
            box-shadow: 0 4px 20px rgba(0, 212, 170, 0.3);
          }
          50% {
            transform: scale(1.05);
            box-shadow: 0 6px 30px rgba(0, 212, 170, 0.5);
          }
          100% {
            transform: scale(1);
            box-shadow: 0 4px 20px rgba(0, 212, 170, 0.3);
          }
        }

        .cta-text {
          font-size: clamp(16px, 0.8vw, 22px);
          color: #fff;
          font-weight: 500;
          font-family: "Plus Jakarta Sans", sans-serif;
          line-height: 1.2em;
          text-decoration: none;
        }

        .hero-description {
          font-size: clamp(20px, 0.9vw, 28px);
          color: #ccc;
          line-height: 1.3em;
          max-width: clamp(460px, 30vw, 480px);
          font-family: "Plus Jakarta Sans", sans-serif;
          font-weight: normal;
          text-transform: none;
        }

        .hero-right {
          flex: 1;
          position: relative;
          background: #000;
          overflow: visible;
          max-width: 45%;
          margin: 0;
          height: 100%;
        }

        .hero-image {
          width: 100%;
          height: auto;
          position: relative;
          overflow: hidden;
          transform: scale(1) translateY(0px) !important;
        }

        .hero-image img {
          width: 100%;
          height: auto
          object-fit: cover;
          object-position: top right;
          transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          filter: brightness(0.8) contrast(1.1);
          transform: scale(1.1) translateY(0px);
          will-change: transform, filter;
        }

        .social-icons {
          position: absolute;
          right: 30px;
          top: 50%;
          transform: translateY(-50%);
          display: flex;
          flex-direction: column;
          gap: 15px;
          z-index: 3;
        }

        .social-icon {
          color: #fff;
          font-size: 20px;
          transition: color 0.3s ease;
          text-decoration: none;
        }

        .social-icon:hover {
          color: #00d4aa;
        }

    

  @media (max-width: 1020px) {
  .hero-section {
    flex-direction: column;
  }


  .hero-left {
    padding: 0px 20px;
    max-width: 100%;
    order: 2;
    transform:translateY(-56%);
  }

  .hero-right {
    max-width: 100%;
    order: 1;
    display: flex;
    justify-content: flex-end;
  }

  .hero-image {
    width: 100%;
    max-height: 78vh;
    overflow: hidden;
    display: flex;
    justify-content: flex-end;
 
  }

  .hero-image img {
    width: 100%; /* ✅ Slightly increase width */
    height: auto;
    max-height: 78vh;
    object-fit: contain; /* or 'cover' if you want cropping */
    object-position: right center;
    transform: none !important;
    filter: none !important;
  }


}

@media (min-width: 393px) and (max-width: 400px) {
  .hero-image img {
    max-height: 96vh;
  }

        @media (max-width: 768px) {
          .logo-container {
            padding: 20px;
          }

          .hero-section {
            flex-direction: column;
          }

          .hero-left {
            padding: 80px 20px;
            max-width: 100%;
            order: 2;
            transform:translateY(-16%);

          }

          .hero-right {
            height: 300px;
            max-width: 100%;
            order: 1;
          }

          .social-icons {
            right: 20px;
          }
        }
        @media (max-width: 480px) {
         .modal-close {
            top: -14px;
            right: -14px;
            width: 36px;
            height: 36px;
          }
          .video-container {
            width: 96vw;
            aspect-ratio: 16 / 9;
            max-height: 70vh;
          }
            
          .hero-right {
            height: 40vh;
            max-width: 100%;
          }

          .hero-image {
            height: 100%;
            transform: scale(1.1) translateY(0px) !important;

          }

          .hero-image img {
            object-position: center;
              transform: scale(1.1) translateY(0px) !important;

            filter: brightness(0.9) contrast(1);
          }

          .hero-left {
            padding: 30px 15px;
            // min-height: 60vh;
          }
        }
      `}</style>
    </>
  );
}
