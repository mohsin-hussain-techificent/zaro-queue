import { useEffect, useState } from 'react'

export default function HeroSection() {
  const [currentText, setCurrentText] = useState(0)
  const [currentChar, setCurrentChar] = useState(0)
  const [showModal, setShowModal] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const texts = ['Design', 'Strategy', 'Experience', 'Branding']

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length)
      setCurrentChar(0)
    }, 2500)

    return () => clearInterval(interval)
  }, [texts.length])

  useEffect(() => {
    const charInterval = setInterval(() => {
      setCurrentChar((prev) => {
        if (prev < texts[currentText].length - 1) {
          return prev + 1
        }
        return prev
      })
    }, 100)

    return () => clearInterval(charInterval)
  }, [currentText, texts])

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handlePlayClick = () => {
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
  }

  const currentDisplayText = texts[currentText].substring(0, currentChar + 1)

  return (
    <>
      {/* Logo Only */}
      <div className="logo-container">
        <div className="logo">
          <img src="/assets/logo-light.svg" alt="Pixel Pier NYC" />
        </div>
      </div>

      {/* Hero Section - Dark Theme */}
      <section className="hero-section">
        <div className="hero-left">
          <div className="hero-content">
            <h1 className="hero-title">
              <div className="elementor-headline">
                <div className="elementor-headline-plain-text">Let's Tell Your Brand</div>
                <div className="elementor-headline-plain-text" style={{ whiteSpace: 'nowrap' }}>
                  Story Through{' '}
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
              A design and strategy studio born in New York that creates visual stories that resonate.
            </p>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-image">
            <img 
              src="/assets/GettyImages-1487864067.jpg" 
              alt="Hero Background"
              style={{
                transform: `scale(${1.2 - scrollY * 0.0002}) translateY(${scrollY * 0.2}px)`,
                filter: `brightness(${0.9 - scrollY * 0.0002}) contrast(${1.2 - scrollY * 0.0002})`
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

      {/* Video Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              <i className="fas fa-times"></i>
            </button>
            <div className="video-container">
              <iframe
                src="https://www.youtube.com/embed/RXidlUSBhMY?autoplay=1"
                title="Pixel Pier NYC Reel"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
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
          // min-height: 113vh !important;
          // height: 113vh !important;
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
          margin-top: -50px;
        }

        .hero-title {
          font-size: clamp(70px, 3vw, 90px);
          font-weight: 300;
          line-height: 1em;
          margin-bottom: 50px;
          color: #fff;
          font-family: 'Plus Jakarta Sans', sans-serif;
          text-transform: none;
          letter-spacing: normal;
        }

        .elementor-headline {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: clamp(70px, 3vw, 90px);
          font-weight: 300;
          text-transform: none;
          line-height: 1em;
        }

        .elementor-headline-plain-text {
          display: block;
          line-height: 1.1;
          margin-bottom: 8px;
          white-space: nowrap;
        }

        .elementor-headline-dynamic-wrapper {
          display: inline;
          position: relative;
          margin-left: 5px;
        }

        .elementor-headline-dynamic-text {
          display: inline-block;
          transition: all 0.3s ease;
          color: #fff;
          font-family: 'Plus Jakarta Sans', sans-serif;
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
          0% { transform: scale(1); box-shadow: 0 4px 20px rgba(0, 212, 170, 0.3); }
          50% { transform: scale(1.05); box-shadow: 0 6px 30px rgba(0, 212, 170, 0.5); }
          100% { transform: scale(1); box-shadow: 0 4px 20px rgba(0, 212, 170, 0.3); }
        }

        .cta-text {
          font-size: clamp(16px, 0.8vw, 22px);
          color: #fff;
          font-weight: 500;
          font-family: 'Plus Jakarta Sans', sans-serif;
          line-height: 1.2em;
          text-decoration: none;
        }

        .hero-description {
          font-size: clamp(20px, 0.9vw, 28px);
          color: #ccc;
          line-height: 1.3em;
          max-width: clamp(460px, 30vw, 480px);
          font-family: 'Plus Jakarta Sans', sans-serif;
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
          height: 100vh;
          position: relative;
          overflow: hidden;
        }

        .hero-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top right;
          transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          filter: brightness(0.8) contrast(1.1);
          transform: scale(1.1);
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

        /* Video Modal */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.95);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10000;
          padding: 20px;
        }

        .modal-content {
          position: relative;
          width: 90vw;
          height: 90vh;
          background: #000;
          overflow: hidden;
        }

        .modal-close {
          position: absolute;
          top: 30px;
          right: 30px;
          background: rgba(0, 0, 0, 0.8);
          border: none;
          color: #fff;
          font-size: 28px;
          cursor: pointer;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10001;
          transition: all 0.3s ease;
        }

        .modal-close:hover {
          background: rgba(255, 255, 255, 0.2);
        }

        .video-container {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .video-container iframe {
          width: 100%;
          height: 100%;
          border: none;
        }

        /* Responsive Design */
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
      `}</style>
    </>
  )
} 