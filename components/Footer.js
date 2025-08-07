export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-left">
            <div className="footer-headline-wrapper">
              <h2 className="footer-title">Let’s talk</h2>
              <span className="footer-arrow-svg">
                <svg xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 0 40 40" width="40"><path d="m31.3214642 38.0401891c-2.3308988-.7700313-4.5785068-1.7238883-6.7255977-2.8373032-.7630963-.3919551-1.5157502-.815122-2.2546229-1.2522033-1.6753169-.9885675-3.2847471-2.0846671-4.8179013-3.2743579-.8602127-.669443-1.696184-1.3666615-2.5077808-2.0915932-.4197038-.3746132-.8255289-.7526894-1.2278731-1.1412081-.4197039-.4023531-.8289919-.81165-1.2313361-1.2313361-.8255289-.8567408-1.6163563-1.7446667-2.3690812-2.6604214-.003472 0-.003472-.0034719-.006935-.0034719-.29135792-.3503274-.57925279-.7110618-.8636846-1.0786956-1.75514463-2.2546229-3.29859924-4.6756499-4.61322619-7.2389282-.263618-.5098852-.51682021-1.0302129-.75962439-1.5539326-.86021267-1.8487357-1.6059671-3.76344704-2.22336671-5.73010408-.37807623-1.22787311-.71453371-2.48007637-.99203054-3.74959487-.30523675-1.37705064-.54804094-2.77834262-.72840367-4.19703865v40h40c-2.3551402-.2913579-4.6583346-.7665594-6.8886274-1.404755-.5966036-.1768997-1.1967057-.3607344-1.7897752-.5549759zm-19.1435611-11.4147446-.0312207.0346838-.0659045-.1005883z" fill-rule="evenodd" transform="matrix(-1 0 0 -1 40 40)"></path></svg>
              </span>
            </div>
            {/* <div className="footer-social">
              <a href="#">Instagram</a>
              <a href="#">Facebook</a>
              <a href="#">LinkedIn</a>
              <a href="#">Twitter</a>
            </div> */}
          </div>
          {/* <div className="footer-right">
            <div className="footer-links">
              <div className="link-column">
                <h4>Agency</h4>
                <ul>
                  <li><a href="#">About</a></li>
                  <li><a href="#">Team</a></li>
                  <li><a href="#">Careers</a></li>
                </ul>
              </div>
              <div className="link-column">
                <h4>Work</h4>
                <ul>
                  <li><a href="#">Portfolio</a></li>
                  <li><a href="#">Case Studies</a></li>
                  <li><a href="#">Process</a></li>
                </ul>
              </div>
              <div className="link-column">
                <h4>Services</h4>
                <ul>
                  <li><a href="#">Design</a></li>
                  <li><a href="#">Strategy</a></li>
                  <li><a href="#">Development</a></li>
                </ul>
              </div>
              <div className="link-column">
                <h4>Contact</h4>
                <ul>
                  <li><a href="#">Get in Touch</a></li>
                  <li><a href="#">hello@pixelpier.com</a></li>
                  <li><a href="#">New York City</a></li>
                </ul>
              </div>
            </div>
          </div> */}
        </div>
        <div className="footer-bottom">
          <div className="footer-logo">
            <img src="/assets/logo-symbol.svg" alt="Pixel Pier NYC" />
          </div>
          <div className="footer-copyright">
            <p>© 2024 <a href="https://techificent.com" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>Techificent</a>. All rights reserved.</p>
          </div>
          <div className="footer-privacy">
            {/* <a href="#">Privacy Policy</a> */}
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer-headline-wrapper {
          position: relative;
          display: flex;
          align-items: flex-start;
          background: none;
          border-radius: 0;
          margin-bottom: 30px;
        }
        .footer-title {
          font-size: 4rem;
          font-weight: 300;
          margin: 0;
          color: #000;
          font-family: 'Plus Jakarta Sans', sans-serif;
          background: none;
        }
        .footer-arrow-svg {
          margin-left: 30px;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: flex-start;
          justify-content: flex-end;
        }
        /* Footer */
        .footer {
          padding: 80px 0 40px;
          background: #fff;
          color: #000;
          border-top: 1px solid #eee;
        }
        .footer-left {
          margin-left: 2%
        }
        .footer-content {
          display: flex;
          justify-content: space-between;
          margin-bottom: 60px;
        }

        .footer-title {
          /* see .footer-headline-wrapper for new styles */
        }

        .footer-social {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .footer-social a {
          color: #000;
          text-decoration: none;
          font-weight: 300;
          font-family: 'Plus Jakarta Sans', sans-serif;
        }

        .footer-links {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 40px;
        }

        .link-column h4 {
          font-size: 18px;
          font-weight: 300;
          margin-bottom: 20px;
          color: #000;
          font-family: 'Plus Jakarta Sans', sans-serif;
        }

        .link-column ul {
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .link-column li {
          margin-bottom: 10px;
        }

        .link-column a {
          color: #666;
          text-decoration: none;
          transition: color 0.3s ease;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 300;
        }

        .link-column a:hover {
          color: #000;
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 40px;
          border-top: 1px solid #eee;
        }

        .footer-logo img {
          height: 30px;
        }

        .footer-copyright {
          color: #666;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 300;
        }

        .footer-privacy a {
          color: #666;
          text-decoration: none;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 300;
        }

        .container {
          max-width: 100%;
          margin: 0;
          padding: 0;
        }

        @media (max-width: 768px) {
          .footer-content {
            flex-direction: column;
            gap: 40px;
          }

          .footer-links {
            grid-template-columns: repeat(2, 1fr);
          }

          .footer-bottom {
            flex-direction: column;
            gap: 20px;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  )
} 