import React from 'react';

const StudioStatsSection = () => {
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
              <div className="blur-spot-container">
                <img 
                  src="/blur-spot-1011x1024.webp" 
                  alt="Blur spot"
                  className="blur-spot-image"
                />
              </div>

              {/* Description - elementor-element-05bb38d */}
              <div className="description-container">
                <h3 className="description-text">
                  Dive into our studio's core - numbers that mirror our dedication, creativity, and pursuit of excellence. These stats offer a glimpse into our design prowess and its real-world impact.
                </h3>
              </div>
            </div>

            {/* Stats row */}
            <div className="stats-row">
              {/* First stat - elementor-element-8bffe74 */}
              <div className="stat-container">
                <div className="stat-number">260+</div>
                <h4 className="stat-label">Satisfied Clients</h4>
              </div>
              
              {/* Second stat - elementor-element-49590fb */}
              <div className="stat-container">
                <div className="stat-number">40%</div>
                <h4 className="stat-label">Client Referrals</h4>
              </div>
              
              {/* Third stat - elementor-element-c314a7c */}
              <div className="stat-container">
                <div className="stat-number">70+</div>
                <h4 className="stat-label">Award Recognitions</h4>
              </div>
            </div>

            {/* Partner logos - elementor-element-8e03d4e */}
            <div className="partner-logos">
              <div className="logo-item">
                <img src="/assets/logo-1.svg" alt="Coiffuré" />
              </div>
              <div className="logo-item">
                <img src="/assets/logo-2.svg" alt="Tecnologia" />
              </div>
              <div className="logo-item">
                <img src="/assets/logo-3.svg" alt="FABRIK" />
              </div>
              <div className="logo-item">
                <img src="/assets/logo-4.svg" alt="NUMÉRIQUE" />
              </div>
              <div className="logo-item">
                <img src="/assets/logo-5.svg" alt="MACCHINA" />
              </div>
            </div>
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
          align-items: center;
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

        @media (max-width: 768px) {
          .studio-stats {
            padding: 80px 0;
          }

          .main-container {
            padding: 30px 20px 30px 20px;
            flex-direction: column;
            align-items: center;
          }

          .inner-wrapper {
            gap: 0px 0px;
            row-gap: 0px;
            column-gap: 0px;
            padding-top: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            padding-right: 0px;
          }

          .left-container {
            gap: 0px 0px;
            row-gap: 0px;
            column-gap: 0px;
            padding-top: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            padding-right: 0px;
          }

          .blur-spot-container {
            width: 100%;
            max-width: 100%;
            text-align: left;
          }

          .blur-spot-image {
            max-width: 80%;
          }

          .description-container {
            width: 100%;
            max-width: 100%;
            margin: 0px;
            padding: 0px;
          }

          .description-container {
            margin-bottom: 20px;
          }

          .stats-row {
            gap: 20px;
          }

          .stat-container {
            align-items: center;
            text-align: center;
          }

          .partner-logos {
            padding: 25px 0 0 0;
            justify-content: center;
            gap: 20px;
          }

          .logo-item {
            min-width: 80px;
          }
        }

        @media (max-width: 480px) {
          .description-container {
            padding: 0 15px;
          }

          .partner-logos {
            padding: 15px 0 0 0;
            flex-direction: column;
            gap: 15px;
          }

          .logo-item {
            min-width: 120px;
          }
        }
      `}</style>
    </section>
  );
};

export default StudioStatsSection;
