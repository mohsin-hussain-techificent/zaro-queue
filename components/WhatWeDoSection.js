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
          <div className="section-label">How Zero Queue Works</div>
          <div className="main-text" id="fade-text">
            <div className={`text-line ${fadeOpacity < 0.2 ? 'faded' : ''}`} style={{ opacity: Math.max(0.1, Math.min(1, fadeOpacity * 2)) }}>
              <span className="arrow-icon" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 40 40" width="24"><path d="m31.3214642 38.0401891c-2.3308988-.7700313-4.5785068-1.7238883-6.7255977-2.8373032-.7630963-.3919551-1.5157502-.815122-2.2546229-1.2522033-1.6753169-.9885675-3.2847471-2.0846671-4.8179013-3.2743579-.8602127-.669443-1.696184-1.3666615-2.5077808-2.0915932-.4197038-.3746132-.8255289-.7526894-1.2278731-1.1412081-.4197039-.4023531-.8289919-.81165-1.2313361-1.2313361-.8255289-.8567408-1.6163563-1.7446667-2.3690812-2.6604214-.003472 0-.003472-.0034719-.006935-.0034719-.29135792-.3503274-.57925279-.7110618-.8636846-1.0786956-1.75514463-2.2546229-3.29859924-4.6756499-4.61322619-7.2389282-.263618-.5098852-.51682021-1.0302129-.75962439-1.5539326-.86021267-1.8487357-1.6059671-3.76344704-2.22336671-5.73010408-.37807623-1.22787311-.71453371-2.48007637-.99203054-3.74959487-.30523675-1.37705064-.54804094-2.77834262-.72840367-4.19703865v40h40c-2.3551402-.2913579-4.6583346-.7665594-6.8886274-1.404755-.5966036-.1768997-1.1967057-.3607344-1.7897752-.5549759zm-19.1435611-11.4147446-.0312207.0346838-.0659045-.1005883z" fill-rule="evenodd" transform="matrix(-1 0 0 -1 40 40)"></path></svg>
              </span>
              <span className="text-title">Train Your Agent</span>
              <br />
              <span className="text-para">You will provide the business info from your side and train the agents for you hassle free.</span>
            </div>
            <div className={`text-line ${fadeOpacity < 0.3 ? 'faded' : ''}`} style={{ opacity: Math.max(0.1, Math.min(1, (fadeOpacity - 0.1) * 2)) }}>
              <span className="arrow-icon" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 40 40" width="24"><path d="m31.3214642 38.0401891c-2.3308988-.7700313-4.5785068-1.7238883-6.7255977-2.8373032-.7630963-.3919551-1.5157502-.815122-2.2546229-1.2522033-1.6753169-.9885675-3.2847471-2.0846671-4.8179013-3.2743579-.8602127-.669443-1.696184-1.3666615-2.5077808-2.0915932-.4197038-.3746132-.8255289-.7526894-1.2278731-1.1412081-.4197039-.4023531-.8289919-.81165-1.2313361-1.2313361-.8255289-.8567408-1.6163563-1.7446667-2.3690812-2.6604214-.003472 0-.003472-.0034719-.006935-.0034719-.29135792-.3503274-.57925279-.7110618-.8636846-1.0786956-1.75514463-2.2546229-3.29859924-4.6756499-4.61322619-7.2389282-.263618-.5098852-.51682021-1.0302129-.75962439-1.5539326-.86021267-1.8487357-1.6059671-3.76344704-2.22336671-5.73010408-.37807623-1.22787311-.71453371-2.48007637-.99203054-3.74959487-.30523675-1.37705064-.54804094-2.77834262-.72840367-4.19703865v40h40c-2.3551402-.2913579-4.6583346-.7665594-6.8886274-1.404755-.5966036-.1768997-1.1967057-.3607344-1.7897752-.5549759zm-19.1435611-11.4147446-.0312207.0346838-.0659045-.1005883z" fill-rule="evenodd" transform="matrix(-1 0 0 -1 40 40)"></path></svg>
              </span>
              <span className="text-title">Seamless Integration</span>
              <br />
              <span className="text-para">Connect effortlessly with your phone system using Plivo SIP and ElevenLabs AI technology.</span>
            </div>
            <div className={`text-line ${fadeOpacity < 0.4 ? 'faded' : ''}`} style={{ opacity: Math.max(0.1, Math.min(1, (fadeOpacity - 0.2) * 2)) }}>
              <span className="arrow-icon" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 40 40" width="24"><path d="m31.3214642 38.0401891c-2.3308988-.7700313-4.5785068-1.7238883-6.7255977-2.8373032-.7630963-.3919551-1.5157502-.815122-2.2546229-1.2522033-1.6753169-.9885675-3.2847471-2.0846671-4.8179013-3.2743579-.8602127-.669443-1.696184-1.3666615-2.5077808-2.0915932-.4197038-.3746132-.8255289-.7526894-1.2278731-1.1412081-.4197039-.4023531-.8289919-.81165-1.2313361-1.2313361-.8255289-.8567408-1.6163563-1.7446667-2.3690812-2.6604214-.003472 0-.003472-.0034719-.006935-.0034719-.29135792-.3503274-.57925279-.7110618-.8636846-1.0786956-1.75514463-2.2546229-3.29859924-4.6756499-4.61322619-7.2389282-.263618-.5098852-.51682021-1.0302129-.75962439-1.5539326-.86021267-1.8487357-1.6059671-3.76344704-2.22336671-5.73010408-.37807623-1.22787311-.71453371-2.48007637-.99203054-3.74959487-.30523675-1.37705064-.54804094-2.77834262-.72840367-4.19703865v40h40c-2.3551402-.2913579-4.6583346-.7665594-6.8886274-1.404755-.5966036-.1768997-1.1967057-.3607344-1.7897752-.5549759zm-19.1435611-11.4147446-.0312207.0346838-.0659045-.1005883z" fill-rule="evenodd" transform="matrix(-1 0 0 -1 40 40)"></path></svg>
              </span>
              <span className="text-title">Launch Instantly</span>
              <br />
              <span className="text-para">Deploy your AI agent to manage customer calls 24/7 with zero downtime.</span>
            </div>
            <div className={`text-line ${fadeOpacity < 0.5 ? 'faded' : ''}`} style={{ opacity: Math.max(0.1, Math.min(1, (fadeOpacity - 0.3) * 2)) }}>
              <span className="arrow-icon" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 40 40" width="24"><path d="m31.3214642 38.0401891c-2.3308988-.7700313-4.5785068-1.7238883-6.7255977-2.8373032-.7630963-.3919551-1.5157502-.815122-2.2546229-1.2522033-1.6753169-.9885675-3.2847471-2.0846671-4.8179013-3.2743579-.8602127-.669443-1.696184-1.3666615-2.5077808-2.0915932-.4197038-.3746132-.8255289-.7526894-1.2278731-1.1412081-.4197039-.4023531-.8289919-.81165-1.2313361-1.2313361-.8255289-.8567408-1.6163563-1.7446667-2.3690812-2.6604214-.003472 0-.003472-.0034719-.006935-.0034719-.29135792-.3503274-.57925279-.7110618-.8636846-1.0786956-1.75514463-2.2546229-3.29859924-4.6756499-4.61322619-7.2389282-.263618-.5098852-.51682021-1.0302129-.75962439-1.5539326-.86021267-1.8487357-1.6059671-3.76344704-2.22336671-5.73010408-.37807623-1.22787311-.71453371-2.48007637-.99203054-3.74959487-.30523675-1.37705064-.54804094-2.77834262-.72840367-4.19703865v40h40c-2.3551402-.2913579-4.6583346-.7665594-6.8886274-1.404755-.5966036-.1768997-1.1967057-.3607344-1.7897752-.5549759zm-19.1435611-11.4147446-.0312207.0346838-.0659045-.1005883z" fill-rule="evenodd" transform="matrix(-1 0 0 -1 40 40)"></path></svg>
              </span>
              <span className="text-title">Smart Escalation</span>
              <br />
              <span className="text-para">Automatically route complex queries to your human team for a flawless handover.</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .arrow-icon {
          display: inline-block;
          vertical-align: middle;
          margin-right: 0.6em;
          margin-bottom: 0.1em;
          transform: rotate(45deg);
        }
        .arrow-icon svg {
          width: 24px;
          height: 24px;
          transition: width 0.2s, height 0.2s;
        }
        @media (max-width: 768px) {
          .arrow-icon svg {
            width: 18px;
            height: 18px;
          }
        }
        .text-title {
          font-size: clamp(18px, 2.8vw, 28px);
          font-weight: 600;
          margin-right: 0.5em;
          vertical-align: middle;
          display: inline-block;
        }
        .text-para {
          font-size: clamp(14px, 2vw, 20px);
          font-weight: 400;
          color: #222;
          margin-left: calc(1.2em + 24px + 0.6em);
          /* 1.2em for arrow, 24px for svg, 0.6em for margin */
          display: block;
          padding-right: 5%;
        }
        @media (max-width: 768px) {
          .text-title {
            font-size: clamp(15px, 4vw, 22px);
          }
          .text-para {
            font-size: clamp(13px, 3vw, 16px);
            margin-left: calc(1em + 24px + 0.6em);
          }
        }
        @media (max-width: 768px) {
          .text-title {
            font-size: clamp(15px, 4vw, 22px);
          }
          .text-para {
            font-size: clamp(13px, 3vw, 16px);
          }
        }
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
          font-size: clamp(32px, 4vw, 60px);
          font-weight: 300;
          text-transform: none;
          line-height: 1.2em;
          color: #000;
          transition: all 0.3s ease;
          width: 100%;
          max-width: 100%;
          box-sizing: border-box;
          overflow-x: hidden;
        }

        .main-text.faded {
          color: #999;
        }

        .text-line {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: clamp(28px, 4vw, 48px);
          font-weight: 300;
          text-transform: none;
          line-height: 1.2em;
          color: #000;
          transition: all 0.3s ease;
          margin: 0 0 8px 0;
          width: 100%;
          box-sizing: border-box;
          word-break: break-word;
          overflow-x: hidden;
        }

        .text-line strong {
          font-size: 1.1em;
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
            padding: 60px 0;
          }

          .what-we-do-content {
            padding: 0 10px;
          }

          .main-text {
            font-size: clamp(22px, 6vw, 32px);
            width: 100%;
            padding-left: 0;
          }

          .text-line {
            font-size: clamp(18px, 6vw, 28px);
            width: 100%;
          }
        }
      `}</style>
    </section>
  )
}