export default function OurCapabilitiesSection() {
  return (
    <section className="our-capabilities">
      <div className="container">
        <div className="capabilities-header">
          <div className="section-label">Our Capabilities</div>
        </div>
        <div className="capabilities-grid">
          <div className="capabilities-row">
            <div className="capability-card">
              <div className="capability-icon">
                <img
                  src="/assets/GettyImages-1456747446-1.svg"
                  alt="Award-Winning Design"
                />
              </div>
              <h3 className="capability-title">Award-Winning Design</h3>
              <p className="capability-description">
                From envisioning your brand's identity to crafting compelling
                logos and ➤ <strong>Packaging</strong>, our comprehensive
                services encompass ➤ <strong>Art Direction</strong>, ➤{' '}
                <strong>Brand Guidelines</strong>, ➤{' '}
                <strong>Logo & Trademark</strong> and ➤{' '}
                <strong>Branding Identity</strong> solutions.
              </p>
            </div>

            <div className="capability-card">
              <div className="capability-icon">
                <img
                  src="/assets/GettyImages-1456747446-2.svg"
                  alt="Brand Strategy"
                />
              </div>
              <h3 className="capability-title">Brand Strategy</h3>
              <p className="capability-description">
                Brand strategy is the blueprint for how a company presents
                itself to the world. A well-crafted strategy lays the ➤{' '}
                <strong>Foundation</strong> for consistent brand experiences
                that resonate with target audiences.
              </p>
            </div>
          </div>

          <div className="capabilities-row">
            <div className="capability-card">
              <div className="capability-icon">
                <img
                  src="/assets/GettyImages-1207574548.svg"
                  alt="Future-Proof Development"
                />
              </div>
              <h3 className="capability-title">Future-Proof Development</h3>
              <p className="capability-description">
                Development is the art of crafting dynamic, interactive, and
                user-friendly ➤ <strong>Websites</strong> and ➤{' '}
                <strong>Apps</strong>. It's about crafting seamless digital
                experiences that captivate audiences across various platforms.
              </p>
            </div>

            <div className="capability-card">
              <div className="capability-icon">
                <img
                  src="/assets/GettyImages-1444653136.svg"
                  alt="Proven Marketing"
                />
              </div>
              <h3 className="capability-title">Proven Marketing</h3>
              <p className="capability-description">
                From cultivating engaging ➤ Social Media presence to precise
                direct and ➤ <strong>Product Marketing</strong>, we reach your
                ➤ <strong>Target Audience</strong> with compelling ➤{' '}
                <strong>Content Creation</strong> strategies.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Our Capabilities Section */
        .our-capabilities {
          padding: 120px 0;
          background: #f5f5f5;
          border-top: none;
        }

        .capabilities-header {
          margin-bottom: 40px;
        }

        .capabilities-grid {
          display: flex;
          flex-direction: column;
          gap: 40px;
        }

        .capabilities-row {
          display: flex;
          gap: 40px;
          width: 100%;
        }

        /* Row 1: big | small */
        .capabilities-row:first-child .capability-card:first-child {
          flex: 0 0 65%;
        }
        .capabilities-row:first-child .capability-card:last-child {
          flex: 0 0 35%;
        }

        /* Row 2: small | big */
        .capabilities-row:last-child .capability-card:first-child {
          flex: 0 0 35%;
        }
        .capabilities-row:last-child .capability-card:last-child {
          flex: 0 0 65%;
        }

        .capability-card {
          background: #fff;
          padding: 40px;
          border-radius: 0;
          box-shadow: none;
          border: none;
          position: relative;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .capability-card:hover {
          transform: translateY(-5px);
        }

        .capability-card::before {
          content: '';
          position: absolute;
          top: 20px;
          right: 20px;
          width: 0;
          height: 0;
          border-left: 8px solid transparent;
          border-right: 8px solid transparent;
          border-bottom: 12px solid #000;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .capability-card:hover::before {
          opacity: 1;
        }

        .capability-icon {
          margin-bottom: 30px;
        }

        .capability-icon img {
          width: 70px;
          height: 70px;
          object-fit: contain;
        }

        .capability-title {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: clamp(32px, 1.5vw, 50px);
          font-weight: normal;
          color: #000;
          margin-bottom: 25px;
          padding-top: 30px;
          line-height: 1.2em;
          text-transform: none;
        }

        .capability-description {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 16px;
          font-weight: 400;
          color: #333;
          line-height: 1.6;
          margin: 0;
          letter-spacing: normal;
        }

        .capability-description strong {
          font-weight: 600;
          color: #000;
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

        .container {
          max-width: 100%;
          margin: 0;
          padding: 0;
        }

        @media (min-width: 1200px) {
          .our-capabilities .container {
            padding-left: 10%;
            padding-right: 10%;
          }

          .capabilities-grid {
            padding-left: 15%;
            padding-right: 5%;
          }
        }

        @media (max-width: 1199px) {
          .our-capabilities .container {
            padding-left: 5%;
            padding-right: 5%;
          }

          .capabilities-grid {
            padding-left: 0;
            padding-right: 0;
          }
        }

        @media (max-width: 768px) {
          .capabilities-grid {
            flex-direction: column;
            gap: 30px;
          }
          
          .capabilities-row {
            flex-direction: column;
            gap: 30px;
          }
          
          .capability-card {
            padding: 30px;
            flex: 1 1 100% !important;
          }
        }

        @media (min-width: 769px) and (max-width: 1024px) {
          .capabilities-row {
            flex-direction: column;
            gap: 30px;
          }
          
          .capability-card {
            flex: 1 1 100% !important;
          }
        }

        @media (min-width: 1025px) and (max-width: 1400px) {
          .our-capabilities .container {
            padding-left: 3%;
            padding-right: 3%;
            max-width: 100%;
            overflow-x: hidden;
          }

          .capabilities-grid {
            padding-left: 0;
            padding-right: 0;
            max-width: 100%;
            overflow-x: hidden;
          }

          .capabilities-row {
            max-width: 100%;
            overflow-x: hidden;
            gap: 20px;
          }

          .capability-card {
            padding: 20px 10px;
            word-wrap: break-word;
            overflow-wrap: break-word;
            box-sizing: border-box;
            min-width: 0;
            max-width: calc(50% - 10px);
          }

          .capability-description {
            word-break: break-word;
            hyphens: auto;
            overflow-wrap: break-word;
            font-size: 14px;
          }

          /* Use percentage-based widths instead of flex */
          .capabilities-row:first-child .capability-card:first-child {
            width: calc(50% - 10px);
            flex: none;
          }
          .capabilities-row:first-child .capability-card:last-child {
            width: calc(50% - 10px);
            flex: none;
          }

          .capabilities-row:last-child .capability-card:first-child {
            width: calc(50% - 10px);
            flex: none;
          }
          .capabilities-row:last-child .capability-card:last-child {
            width: calc(50% - 10px);
            flex: none;
          }
        }
      `}</style>
    </section>
  );
}
