import Layout from '../components/Layout'
import PortfolioCarousel from '../components/PortfolioCarousel'
import HeroSection from '../components/HeroSection'
import WhatWeDoSection from '../components/WhatWeDoSection'
import OurCapabilitiesSection from '../components/OurCapabilitiesSection'
import OurGoalsSection from '../components/OurGoalsSection'
import StudioStatsSection from '../components/StudioStatsSection'
import InsightsCarousel from '../components/InsightsCarousel'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <Layout>
      <div className="site-wrapper">
        <HeroSection />
        
        {/* Selected Work Section */}
        <section className="selected-work">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Selected Work</h2>
            </div>
            
            <PortfolioCarousel />
          </div>
        </section>

        <WhatWeDoSection />
        <OurCapabilitiesSection />
        {/* <OurGoalsSection /> */}
        <StudioStatsSection />
        <InsightsCarousel />
        <Footer />
      </div>

      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        /* Only target the specific elements that need margin reset */
        html {
          margin: 0 !important;
          padding: 0 !important;
          background: #000 !important;
          overflow-x: hidden !important;
        }

        body {
          margin: 0 !important;
          padding: 0 !important;
          background: #000 !important;
          overflow-x: hidden !important;
        }

        body {
          margin: 0 !important;
          padding: 0 !important;
          overflow-x: hidden !important;
          background: #000 !important;
        }

        #__next {
          margin: 0 !important;
          padding: 0 !important;
          background: #000 !important;
        }

        html, body {
          margin: 0;
          padding: 0;
          overflow-x: hidden;
          background: #000;
          width: 100%;
          height: 100%;
          position: relative;
        }

        .site-wrapper {
          background: #000;
          color: #fff;
          min-height: auto;
          font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          overflow-x: hidden;
          width: 100%;
          margin: 0;
          padding: 0;
          position: relative;
        }

        /* Selected Work Section */
        .selected-work {
          padding: 100px 0 0 0;
          background: #000;
          color: #fff;
          width: 100%;
        }

        .container {
          max-width: 100%;
          margin: 0;
          padding: 0;
        }

        .section-header {
          margin-bottom: 60px;
          text-align: center;
        }

        .section-title {
          font-size: clamp(2rem, 5vw, 3rem);
          font-weight: 300;
          margin-bottom: 20px;
          color: #fff;
          font-family: 'Plus Jakarta Sans', sans-serif;
          letter-spacing: -0.02em;
          text-align: left;
        }
        
        .section-description {
          font-size: clamp(18px, 1vw, 22px);
          color: #ccc;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 300;
          line-height: 1.4;
          margin-bottom: 40px;
          max-width: 600px;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .carousel-slide {
            flex: 0 0 100%;
            min-width: 100%;
          }
          
          .project-card {
            height: 60vh;
            min-height: 400px;
          }
          
          .project-tags {
            max-width: 60%;
          }
          
          .project-arrow {
            width: 30px;
            height: 30px;
            font-size: 14px;
          }
        }
      `}</style>
    </Layout>
  )
} 