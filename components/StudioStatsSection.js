export default function StudioStatsSection() {
  return (
    <section className="studio-stats">
      <div className="container">
        <div className="stats-content">
          <div className="stats-intro">
            <p>
              Dive into our studio's score - numbers that mirror our dedication, creativity, and pursuit of excellence. These stats offer a glimpse into our design prowess and its real-world impact.
            </p>
          </div>
          <div className="stats-grid">
            <div className="stat-item">
              <h3 className="stat-number">260+</h3>
              <p className="stat-label">Satisfied Clients</p>
            </div>
            <div className="stat-item">
              <h3 className="stat-number">40%</h3>
              <p className="stat-label">Client Referrals</p>
            </div>
            <div className="stat-item">
              <h3 className="stat-number">70+</h3>
              <p className="stat-label">Award Recognitions</p>
            </div>
          </div>
          <div className="client-logos">
            <img src="/assets/coiffure.svg" alt="Coiffure" />
            <img src="/assets/technologia.svg" alt="Tecnologia" />
            <img src="/assets/Fabrik.svg" alt="SFABRIK" />
            <img src="/assets/logo-gallery.svg" alt="NUMERIQUE" />
            <img src="/assets/machina.svg" alt="MACCHINA" />
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Studio Stats Section */
        .studio-stats {
          padding: 100px 0;
          background: #f8f8f8;
          color: #000;
        }

        .stats-content {
          text-align: center;
        }

        .stats-intro {
          max-width: 600px;
          margin: 0 auto 60px;
        }

        .stats-intro p {
          font-size: 18px;
          line-height: 1.6;
          color: #666;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 300;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 40px;
          margin-bottom: 60px;
        }

        .stat-item {
          text-align: center;
        }

        .stat-number {
          font-size: 4rem;
          font-weight: 300;
          margin-bottom: 10px;
          color: #000;
          font-family: 'Plus Jakarta Sans', sans-serif;
        }

        .stat-label {
          font-size: 16px;
          color: #666;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 300;
        }

        .client-logos {
          display: flex;
          justify-content: center;
          gap: 40px;
          flex-wrap: wrap;
        }

        .client-logos img {
          height: 40px;
          opacity: 0.7;
          transition: opacity 0.3s ease;
        }

        .client-logos img:hover {
          opacity: 1;
        }

        .container {
          max-width: 100%;
          margin: 0;
          padding: 0;
        }

        @media (max-width: 768px) {
          .stats-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }
          
          .client-logos {
            gap: 20px;
          }
          
          .client-logos img {
            height: 30px;
          }
        }
      `}</style>
    </section>
  )
} 