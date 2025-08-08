import React, { useState, useEffect } from 'react';

const StudioStatsSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (isMobile) {
    return <MobileStudioStatsSection />;
  }

  return <DesktopStudioStatsSection />;
};

const MobileStudioStatsSection = () => {
  return (
    <section className="studio-stats-mobile">
      <div className="mobile-container">
        {/* Red blur spot - comes first */}
        {/* <div className="mobile-blur-spot">
          <img 
            src="/blur-spot-1011x1024.webp" 
            alt="Blur spot"
            className="mobile-blur-image"
          />
        </div> */}

        {/* Description text - comes second */}
        {/* <div className="mobile-description">
          <h3 className="mobile-description-text">
            Dive into our studio's core - numbers that mirror our dedication, creativity, and pursuit of excellence. These stats offer a glimpse into our design prowess and its real-world impact.
          </h3>
        </div> */}

        {/* Stats - comes third */}
        <div className="mobile-stats">
          <div className="mobile-stat-item">
            <div className="mobile-stat-number">80%</div>
            <h4 className="mobile-stat-label">Automates  of Calls: Resolves customer queries without human intervention</h4>
          </div>
          
          <div className="mobile-stat-item">
            <div className="mobile-stat-number">70%</div>
            <h4 className="mobile-stat-label">Reduces Costs  to  Streamline operations and lower support expenses</h4>
          </div>
          
          <div className="mobile-stat-item">
            <div className="mobile-stat-number">+26</div>
            <h4 className="mobile-stat-label">24/7 Multilingual Support upto 26 languages, Scalable, global, and always available</h4>
          </div>
        </div>

        {/* Partner logos - comes last */}
        {/* <div className="mobile-partner-logos"> */}
          {/* First logo - logo-1.svg */}
          {/* <div className="mobile-logo-item">
            <img src="/assets/logo-1.svg" alt="Coiffuré" />
          </div> */}
          {/* Second logo - logo-2.svg */}
          {/* <div className="mobile-logo-item">
            <img src="/assets/logo-2.svg" alt="Tecnologia" />
          </div> */}
          {/* Third logo - logo-3.svg */}
          {/* <div className="mobile-logo-item">
            <img src="/assets/logo-3.svg" alt="FABRIK" />
          </div> */}
          {/* Fourth logo - logo-4.svg */}
          {/* <div className="mobile-logo-item">
            <img src="/assets/logo-4.svg" alt="NUMÉRIQUE" />
          </div> */}
          {/* Fifth logo - logo-5.svg */}
          {/* <div className="mobile-logo-item">
            <img src="/assets/logo-5.svg" alt="MACCHINA" />
          </div> */}
        {/* </div> */}
      </div>

      <style jsx>{`
        .studio-stats-mobile {
          background: #000;
          background-image: url('/GettyImages-1487864067-edit.jpg');
          background-position: bottom left;
          background-repeat: no-repeat;
          background-size: contain;
          color: #fff;
          padding: 60px 20px;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .mobile-container {
          width: 100%;
          max-width: 400px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 40px;
        }

        .mobile-blur-spot {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 20px;
        }

        .mobile-blur-image {
          width: 120px;
          height: 120px;
          opacity: 0.8;
          filter: blur(8px);
          transform: scale(1.1);
        }

        .mobile-description {
          text-align: center;
          margin-bottom: 20px;
        }

        .mobile-description-text {
          font-family: "Plus Jakarta Sans", Sans-serif;
          font-size: 18px;
          font-weight: 400;
          line-height: 1.5em;
          color: #E9E9E7;
          margin: 0;
          text-align: center;
        }

        .mobile-stats {
          display: flex;
          flex-direction: column;
          gap: 30px;
          width: 100%;
          margin-bottom: 20px;
        }

        .mobile-stat-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 8px;
        }

        .mobile-stat-number {
          font-family: "Plus Jakarta Sans", Sans-serif;
          font-size: 60px;
          font-weight: 300;
          color: #E9E9E7;
          line-height: 1.2em;
          margin: 0;
        }

        .mobile-stat-label {
          font-family: "Plus Jakarta Sans", Sans-serif;
          font-size: 20px;
          font-weight: 500;
          color: #E9E9E7;
          margin: 0;
          line-height: 1.3em;
        }

        .mobile-partner-logos {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
          border-top: 1px solid rgba(255, 255, 255, 0.2);
          padding-top: 30px;
          width: 100%;
        }

        .mobile-logo-item {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .mobile-logo-item img {
          max-width: 120px;
          height: auto;
          filter: brightness(0) invert(1);
          opacity: 0.8;
          transition: opacity 0.3s ease;
        }

        .mobile-logo-item:hover img {
          opacity: 1;
        }

        @media (max-width: 480px) {
          .studio-stats-mobile {
            padding: 40px 15px;
          }

          .mobile-container {
            gap: 30px;
          }

          .mobile-blur-image {
            width: 100px;
            height: 100px;
          }

          .mobile-description-text {
            font-size: 16px;
          }

          .mobile-stat-number {
            font-size: 50px;
          }

          .mobile-stat-label {
            font-size: 18px;
          }

          .mobile-partner-logos {
            gap: 15px;
          }

          .mobile-logo-item img {
            max-width: 100px;
          }
        }
      `}</style>
    </section>
  );
};

const DesktopStudioStatsSection = () => {
  return (
    <section className="studio-stats">
      {/* <div className="container"> */}
        {/* Main container - elementor-element-9250352 */}
        <div className="main-container">
          {/* Inner wrapper - e-con-inner */}
          <div className="inner-wrapper">
            {/* Left container with blur spot and description - elementor-element-eec780e */}
            <div className="left-container">
              {/* Blur spot image - elementor-element-870181f */}
              {/* <div className="blur-spot-container">
                <img 
                  src="/blur-spot-1011x1024.webp" 
                  alt="Blur spot"
                  className="blur-spot-image"
                />
              </div> */}

              {/* Description - elementor-element-05bb38d */}
              {/* <div className="description-container">
                <h3 className="description-text">
                  Dive into our studio's core - numbers that mirror our dedication, creativity, and pursuit of excellence. These stats offer a glimpse into our design prowess and its real-world impact.
                </h3>
              </div> */}
            </div>

            {/* Stats row */}
            <div className="stats-row">
              {/* First stat - elementor-element-8bffe74 */}
              <div className="stat-container">
                <div className="stat-number">80%</div>
                <h4 className="stat-label">Automates  of Calls: Resolves customer queries without human intervention</h4>
              </div>
              
              {/* Second stat - elementor-element-49590fb */}
              <div className="stat-container">
                <div className="stat-number">70%</div>
                <h4 className="stat-label">Reduces Costs  to  Streamline operations and lower support expenses</h4>
              </div>
              
              {/* Third stat - elementor-element-c314a7c */}
              <div className="stat-container">
                <div className="stat-number">+26</div>
                <h4 className="stat-label">24/7 Multilingual Support upto 26 languages, Scalable, global, and always available</h4>
              </div>
            </div>

            {/* Partner logos - elementor-element-8e03d4e */}
            {/* <div className="partner-logos"> */}
              {/* First logo - logo-1.svg */}
              {/* <div className="logo-item">
                <img src="/assets/logo-1.svg" alt="Coiffuré" />
              </div> */}
              {/* Second logo - logo-2.svg */}
              {/* <div className="logo-item">
                <img src="/assets/logo-2.svg" alt="Tecnologia" />
              </div> */}
              {/* Third logo - logo-3.svg */}
              {/* <div className="logo-item">
                <img src="/assets/logo-3.svg" alt="FABRIK" />
              </div> */}
              {/* Fourth logo - logo-4.svg */}
              {/* <div className="logo-item">
                <img src="/assets/logo-4.svg" alt="NUMÉRIQUE" />
              </div> */}
              {/* Fifth logo - logo-5.svg */}
              {/* <div className="logo-item">
                <img src="/assets/logo-5.svg" alt="MACCHINA" />
              </div> */}
            {/* </div> */}
          </div>
        </div>
      {/* </div> */}

      <style jsx>{`
        .studio-stats {
          position: relative;
          background: #000;
          color: #fff;
          // padding: 120px 0;
          overflow: hidden;
        }

        .container {
          position: relative;
          max-width: 100%;
          margin: 0;
          padding: 0;
        }

        /* Main container - elementor-element-9250352 */
        .main-container {
          position: relative;
          width: 100%;
          height: 100%;
          background-color: #000;
          background-image: url('/GettyImages-1487864067-edit.jpg');
          background-position: bottom left;
          background-repeat: no-repeat;
          background-size: contain;
          display: flex;
          flex-direction: row;
          align-items: flex-end;
          gap: 0px;
          padding: 0px;
          min-height: 60vh;
        }

        /* Inner wrapper - e-con-inner */
        .inner-wrapper {
          display: flex;
          flex-direction: column;
          width: 100%;
          min-height: 60vh;
          gap: 0px;
          position: relative;
        }

        /* Left container - elementor-element-eec780e */
        .left-container {
          display: flex;
          min-height: 60vh;
          flex-direction: row;
          width: 100%;
          height: 100%;
          flex-grow: 1;
          align-self: stretch;
          align-items: center;
        }

        /* Blur spot container - elementor-element-870181f */
        .blur-spot-container {
          width: 25%;
          max-width: 25%;
          display: flex;
          align-items: center;
          justify-content: center;
          align-self: center;
        }

        .blur-spot-image {
          width: 100%;
          height: auto;
          opacity: 0.8;
          filter: blur(10px);
          transform: scale(1.1);
        }

        /* Description container - elementor-element-05bb38d */
        .description-container {
          width: 50%;
          max-width: 50%;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 0px;
          margin: 8% 15% 8% 4%;
          align-self: center;
        }

        .description-text {
          font-family: "Plus Jakarta Sans", Sans-serif;
          font-size: clamp(28px, 1.4vw, 30px);
          font-weight: 400;
          line-height: 1.2em;
          color: #E9E9E7;
          margin: 0;
          white-space: normal;
          max-width: 100%;
        }

        /* Stats row */
        .stats-row {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: flex-start;
          gap: 0px;
          width: 100%;
          margin-top: 40px;
        }

        /* Individual stat containers - 33% width each like original */
        .stat-container {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: center;
          gap: 10px;
          width: 33%;
          max-width: 33%;
          margin-top: 0px;
          margin-bottom: 20px;
          margin-left: 0px;
          margin-right: 0px;
          padding-top: 0px;
          padding-bottom: 0px;
          padding-left: 20px;
          padding-right: 20px;
        }

        .stat-number {
          font-family: "Plus Jakarta Sans", Sans-serif;
          font-size: clamp(80px, 6vw, 120px);
          font-weight: 300;
          color: #E9E9E7;
          line-height: 1.2em;
          margin: 0;
          
        }

        .stat-label {
          font-family: "Plus Jakarta Sans", Sans-serif;
          font-size: clamp(24px, 1.1vw, 40px);
          font-weight: 500;
          color: #E9E9E7;
          margin: 0;
          line-height: 1.3em;
          text-align:left
        }

        /* Partner logos - elementor-element-8e03d4e */
        .partner-logos {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 40px;
          flex-wrap: wrap;
          width: 100%;
          min-height: 130px;
          border-top: 1px solid rgba(255, 255, 255, 0.2);
          padding: 25px 0 0 0;
          margin-top: 40px;
        }

        .logo-item {
          flex: 1;
          min-width: 120px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .logo-item img {
          max-width: 100%;
          height: auto;
          filter: brightness(0) invert(1);
          opacity: 0.8;
          transition: opacity 0.3s ease;
        }

        .logo-item:hover img {
          opacity: 1;
        }

        /* Responsive Design - exactly like original */
        @media (max-width: 1024px) {
          .main-container {
            padding: 65px 0px 0px 0px;
            min-height: 20vh;
          }

          .inner-wrapper {
            min-height: 20vh;
            margin-top: 0px;
            margin-bottom: 40px;
            margin-left: 0px;
            margin-right: 0px;
          }

          .left-container {
            min-height: 20vh;
            margin-top: 0px;
            margin-bottom: 40px;
            margin-left: 0px;
            margin-right: 0px;
          }

          .blur-spot-container {
            width: 33%;
            max-width: 33%;
          }

          .description-container {
            width: 100%;
            max-width: 100%;
            margin: 0% 0% 0% 0%;
          }

          .description-text {
            font-size: clamp(16px, 1.8vw, 20px);
          }

          .stats-row {
            flex-direction: column;
            gap: 20px;
          }

          .stat-container {
            width: 100%;
            max-width: 100%;
            align-items: center;
            text-align: center;
          }

          .stat-number {
            font-size: clamp(40px, 3.5vw, 60px);
          }

          .stat-label {
            font-size: clamp(14px, 1.3vw, 18px);
          }

          .partner-logos {
            padding: 25px 0 0 0;
          }
        }
      `}</style>
    </section>
  );
};

export default StudioStatsSection;

