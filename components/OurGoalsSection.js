export default function OurGoalsSection() {
  return (
    <section className="our-goals">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Goals</h2>
        </div>
        <div className="goals-grid">
          <div className="goal-card">
            <div className="goal-icon">
              <i className="fas fa-trophy"></i>
            </div>
            <h3>Award-Winning Design</h3>
            <p>Creating designs that stand out and win recognition in the industry.</p>
          </div>
          <div className="goal-card">
            <div className="goal-icon">
              <i className="fas fa-brain"></i>
            </div>
            <h3>Brand Strategy</h3>
            <p>Developing comprehensive brand strategies that drive business growth.</p>
          </div>
          <div className="goal-card">
            <div className="goal-icon">
              <i className="fas fa-bullhorn"></i>
            </div>
            <h3>Proven Marketing</h3>
            <p>Implementing marketing strategies that deliver measurable results.</p>
          </div>
          <div className="goal-card">
            <div className="goal-icon">
              <i className="fas fa-cogs"></i>
            </div>
            <h3>Future-Proof Development</h3>
            <p>Building scalable solutions that adapt to future technological changes.</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Our Goals Section */
        .our-goals {
          padding: 100px 0;
          background: #fff;
          color: #000;
        }

        .section-header {
          margin-bottom: 60px;
          text-align: center;
        }

        .section-title {
          font-size: clamp(2rem, 5vw, 3rem);
          font-weight: 300;
          margin-bottom: 20px;
          color: #000;
          font-family: 'Plus Jakarta Sans', sans-serif;
          letter-spacing: -0.02em;
          text-align: center;
        }

        .goals-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 40px;
          margin-top: 60px;
        }

        .goal-card {
          text-align: center;
          padding: 40px 20px;
        }

        .goal-icon {
          font-size: 48px;
          color: #000;
          margin-bottom: 20px;
        }

        .goal-card h3 {
          font-size: 20px;
          font-weight: 300;
          margin-bottom: 15px;
          color: #000;
          font-family: 'Plus Jakarta Sans', sans-serif;
        }

        .goal-card p {
          color: #666;
          line-height: 1.6;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 300;
        }

        .container {
          max-width: 100%;
          margin: 0;
          padding: 0;
        }

        @media (max-width: 768px) {
          .goals-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }
        }
      `}</style>
    </section>
  )
} 