export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-left">
            <h2 className="footer-title">Let's talk</h2>
            <div className="footer-social">
              <a href="#">Instagram</a>
              <a href="#">Facebook</a>
              <a href="#">LinkedIn</a>
              <a href="#">Twitter</a>
            </div>
          </div>
          <div className="footer-right">
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
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-logo">
            <img src="/assets/logo-symbol.svg" alt="Pixel Pier NYC" />
          </div>
          <div className="footer-copyright">
            <p>© 2024 Pixel Pier NYC. All rights reserved.</p>
          </div>
          <div className="footer-privacy">
            <a href="#">Privacy Policy</a>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Footer */
        .footer {
          padding: 80px 0 40px;
          background: #fff;
          color: #000;
          border-top: 1px solid #eee;
        }

        .footer-content {
          display: flex;
          justify-content: space-between;
          margin-bottom: 60px;
        }

        .footer-title {
          font-size: 3rem;
          font-weight: 300;
          margin-bottom: 30px;
          color: #000;
          font-family: 'Plus Jakarta Sans', sans-serif;
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