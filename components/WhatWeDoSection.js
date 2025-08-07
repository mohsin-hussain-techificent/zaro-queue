import { useEffect, useState } from 'react'

export default function WhatWeDoSection() {
  const [fadeOpacity, setFadeOpacity] = useState(1)

  useEffect(() => {
    const handleScroll = () => {
      // Fade effect for What We Do section
      const fadeText = document.getElementById('fade-text')
      if (fadeText) {
        const rect = fadeText.getBoundingClientRect()
        const windowHeight = window.innerHeight
        
        // Calculate opacity based on scroll position
        let opacity = 1
        if (rect.top < windowHeight && rect.bottom > 0) {
          // Text is in viewport - make it prominent
          const progress = (windowHeight - rect.top) / (windowHeight + rect.height)
          opacity = Math.max(0.1, Math.min(1, progress))
        } else if (rect.top >= windowHeight) {
          // Text is below viewport - fade it
          opacity = 0.1
        } else if (rect.bottom < 0) {
          // Text is above viewport - fade it
          opacity = 0.1
        }
        
        setFadeOpacity(opacity)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="what-we-do">
      <div className="container">
        <div className="what-we-do-content">
          <div className="section-label">What We Do</div>
          <div className="main-text" id="fade-text">
            <p className={`text-line ${fadeOpacity < 0.2 ? 'faded' : ''}`} style={{ opacity: Math.max(0.1, Math.min(1, fadeOpacity * 2)) }}>
              Our journey began with a passion for
            </p>
            <p className={`text-line ${fadeOpacity < 0.3 ? 'faded' : ''}`} style={{ opacity: Math.max(0.1, Math.min(1, (fadeOpacity - 0.1) * 2)) }}>
              visual storytelling and a commitment to
            </p>
            <p className={`text-line ${fadeOpacity < 0.4 ? 'faded' : ''}`} style={{ opacity: Math.max(0.1, Math.min(1, (fadeOpacity - 0.2) * 2)) }}>
              turning ideas into impactful designs.
            </p>
            <p className={`text-line ${fadeOpacity < 0.5 ? 'faded' : ''}`} style={{ opacity: Math.max(0.1, Math.min(1, (fadeOpacity - 0.3) * 2)) }}>
              With a team of dedicated professionals,
            </p>
            <p className={`text-line ${fadeOpacity < 0.6 ? 'faded' : ''}`} style={{ opacity: Math.max(0.1, Math.min(1, (fadeOpacity - 0.4) * 2)) }}>
              we've honed our skills to deliver
            </p>
            <p className={`text-line ${fadeOpacity < 0.7 ? 'faded' : ''}`} style={{ opacity: Math.max(0.1, Math.min(1, (fadeOpacity - 0.5) * 2)) }}>
              exceptional results for our clients.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* What We Do Section */
        .what-we-do {
          padding: 120px 0;
          background: #f5f5f5;
          color: #333;
          width: 100%;
        }

        .what-we-do-content {
          width: 100%;
          max-width: 100%;
          margin: 0;
          padding: 0 40px;
        }

        @media (min-width: 1200px) {
          .what-we-do-content {
            // padding-left: 10%;
            padding-right: 10%;
          }
          
          .main-text {
            padding-left: 15%;
          }
        }

        .section-label {
          font-size: 14px;
          font-weight: 500;
          color: #666;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 40px;
          font-family: 'Plus Jakarta Sans', sans-serif;
          text-align: left;
        }

        .main-text {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: clamp(70px, 3vw, 90px);
          font-weight: 300;
          text-transform: none;
          line-height: 1.2em;
          color: #000;
          transition: all 0.3s ease;
          width: 80%;
          max-width: 100%;
        }

        .main-text.faded {
          color: #999;
        }

        .text-line {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: clamp(70px, 3vw, 90px);
          font-weight: 300;
          text-transform: none;
          line-height: 1.2em;
          color: #000;
          transition: all 0.3s ease;
          margin: 0 0 8px 0;
        }

        .text-line.faded {
          color: #999;
        }

        .text-line:last-child {
          margin-bottom: 0;
        }

        .container {
          max-width: 100%;
          margin: 0;
          padding: 0;
        }

        @media (max-width: 768px) {
          .what-we-do {
            padding: 80px 0;
          }

          .what-we-do-content {
            padding: 0 20px;
          }

          .main-text {
            font-size: clamp(50px, 4vw, 70px);
          }
        }
      `}</style>
    </section>
  )
} 