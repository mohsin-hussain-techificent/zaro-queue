import { useState, useEffect } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="header-content">
          <img src="/assets/logo-light.svg" alt="Pixel Pier NYC" className="logo" />
          
          <div className="nav-container">
            <nav className={`main-nav ${isMenuOpen ? 'open' : ''}`}>
              <ul className="nav-menu">
                <li><a href="/work">Work</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/about">Studio</a></li>
                <li><a href="/blog">Journal</a></li>
              </ul>
            </nav>
            
            <div className="secondary-nav">
              <ul className="nav-menu">
                <li><a href="/contact">Contact</a></li>
                <li><a href="/careers">Careers</a></li>
              </ul>
            </div>
            
            <button 
              className="menu-button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <i className="fas fa-bars"></i> Menu
            </button>
          </div>
        </div>
      </header>

      <style jsx>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          padding: 20px 0;
          transition: all 0.3s ease;
        }

        .header.scrolled {
          background: rgba(255, 255, 255, 0.98);
          box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
        }

        .header-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: var(--vamtam-site-max-width);
          margin: 0 auto;
          padding: 0 20px;
        }

        .logo {
          height: 41px;
          width: auto;
        }

        .nav-container {
          display: flex;
          align-items: center;
          gap: 40px;
        }

        .main-nav {
          display: flex;
        }

        .nav-menu {
          display: flex;
          list-style: none;
          gap: 30px;
          margin: 0;
          padding: 0;
        }

        .nav-menu a {
          color: var(--vamtam-body-link-regular);
          text-decoration: none;
          font-size: 16px;
          font-weight: 500;
          transition: color 0.3s ease;
        }

        .nav-menu a:hover {
          color: var(--vamtam-body-link-hover);
        }

        .menu-button {
          background: none;
          border: none;
          font-size: 16px;
          cursor: pointer;
          padding: 10px 20px;
          transition: all 0.3s ease;
          display: none;
        }

        .menu-button:hover {
          background-color: var(--vamtam-btn-hover-bg-color);
          color: var(--vamtam-btn-hover-text-color);
        }

        @media (max-width: 1024px) {
          .main-nav {
            display: none;
          }

          .secondary-nav {
            display: none;
          }

          .menu-button {
            display: block;
          }
        }

        @media (max-width: 768px) {
          .header-content {
            padding: 0 15px;
          }

          .logo {
            height: 35px;
          }
        }
      `}</style>
    </>
  )
} 