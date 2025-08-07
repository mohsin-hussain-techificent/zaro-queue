const PricingPlans = () => {
  const plans = [
    {
      id: 1,
      name: "Starter",
      minutes: "1,000 mins",
      features: ["Inbound voice", "Basic training"],
      price: "$199/mo",
      isEnterprise: false
    },
    {
      id: 2,
      name: "Pro",
      minutes: "4,000 mins",
      features: ["CRM integrations", "Smart escalation routing"],
      price: "$499/mo",
      isEnterprise: false
    },
    {
      id: 3,
      name: "Enterprise",
      minutes: "Unlimited",
      features: ["White-label", "Multi-agent setup", "Priority SLA"],
      // price: "Custom Quote",
      isEnterprise: true
    }
  ]

  return (
    <section className="pricing-section">
      <div className="container">
        {/* Header Section */}
        <div className="pricing-header">
          <div className="pricing-title">
            <span className="title">Pricing Plans</span>
            <span className="divider"></span>
          </div>
          <div className="pricing-description">
            <p>Choose the perfect plan for your business needs. All plans include our core features with scalable options to grow with you.</p>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="pricing-cards">
          {plans.map((plan, index) => (
            <div 
              key={plan.id} 
              className={`pricing-card ${plan.isEnterprise ? 'enterprise' : ''}`}
              style={{
                paddingTop: index % 2 === 0 ? '40px' : '20px'
              }}
            >
              <div className="card-content">
                <div className="plan-header">
                  <h3 className="plan-name">{plan.name}</h3>
                  <div className="plan-minutes">{plan.minutes}</div>
                </div>
                
                <div className="plan-features">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="feature-item">
                      <span className="feature-check">✓</span>
                      <span className="feature-text">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="plan-footer">
                  {
                    plan?.price && ( 

                      <div className="plan-price">{plan.price}</div>
                    )
                  }
                  <button className={`plan-button ${plan.isEnterprise ? 'enterprise-btn' : ''}`}>
                    {plan.isEnterprise ? 'Custom Quote' : 'Purchase'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .pricing-section {
          background: #f0f0f0;
          padding: 100px 0;
          color: #000;
        }

        .container {
          margin: 0 auto;
          padding: 0 30px;
          max-width: 1400px;
        }

        .pricing-header {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 50px;
          margin-bottom: 80px;
          padding-left: 20px;
          padding-right: 20px;
        }

        .pricing-title {
          display: flex;
          align-items: center;
          gap: 15px;
          grid-column: 1;
        }

        .title {
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: clamp(16px, 0.8vw, 22px);
          font-weight: 500;
          line-height: 1.2em;
          color: #000;
        }

        .divider {
          width: 40px;
          height: 1px;
          background: #000;
        }

        .pricing-description {
          grid-column: 2;
          text-align: left;
        }

        .pricing-description p {
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: clamp(20px, 0.9vw, 28px);
          font-weight: 400;
          font-style: normal;
          line-height: 1.5em;
          color: #666;
          margin: 0;
        }

        .pricing-cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          padding: 0 20px;
          align-items: stretch;
        }

        .pricing-card {
          background: #fff;
          border: 2px solid #e0e0e0;
          border-radius: 16px;
          padding: 40px 30px;
          display: flex;
          flex-direction: column;
          flex: 1;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
        }

        .pricing-card:nth-child(1) {
          background: linear-gradient(135deg, #f8f9ff 0%, #ffffff 100%);
          border-color: #4f46e5;
        }

        .pricing-card:nth-child(2) {
          background: linear-gradient(135deg, #f0f9ff 0%, #ffffff 100%);
          border-color: #06b6d4;
        }

        .pricing-card:nth-child(3) {
          background: linear-gradient(135deg, #fef7ff 0%, #ffffff 100%);
          border-color: #8b5cf6;
        }

        .pricing-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, #4f46e5, #06b6d4, #8b5cf6);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .pricing-card:nth-child(1)::before {
          background: linear-gradient(90deg, #4f46e5, #6366f1);
        }

        .pricing-card:nth-child(2)::before {
          background: linear-gradient(90deg, #06b6d4, #0891b2);
        }

        .pricing-card:nth-child(3)::before {
          background: linear-gradient(90deg, #8b5cf6, #a855f7);
        }

        .pricing-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }

        .pricing-card:hover::before {
          opacity: 1;
        }

        .pricing-card.enterprise {
          background: linear-gradient(135deg, #fef7ff 0%, #ffffff 100%);
          border-color: #8b5cf6;
        }

        .pricing-card.enterprise::before {
          background: linear-gradient(90deg, #8b5cf6, #a855f7);
          opacity: 1;
        }

        .card-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .plan-header {
          margin-bottom: 30px;
        }

        .plan-name {
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: clamp(24px, 1.2vw, 32px);
          font-weight: 600;
          color: #1f2937;
          margin: 0 0 10px 0;
          letter-spacing: -0.02em;
        }

        .plan-minutes {
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: clamp(18px, 0.9vw, 24px);
          font-weight: 400;
          color: #6b7280;
          margin: 0;
        }

        .plan-features {
          flex: 1;
          margin-bottom: 30px;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 15px;
        }

        .feature-check {
          color: #fff;
          font-size: 14px;
          font-weight: bold;
          width: 24px;
          height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #10b981;
          border-radius: 50%;
          flex-shrink: 0;
        }

        .feature-text {
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: clamp(16px, 0.8vw, 20px);
          font-weight: 400;
          color: #4b5563;
          line-height: 1.4;
        }

        .plan-footer {
          text-align: center;
        }

        .plan-price {
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: clamp(28px, 1.4vw, 36px);
          font-weight: 600;
          color: #1f2937;
          margin-bottom: 20px;
        }

        .plan-button {
          width: 100%;
          padding: 16px 24px;
          background: #1f2937;
          color: #fff;
          border: none;
          border-radius: 8px;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: clamp(16px, 0.8vw, 18px);
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .plan-button:hover {
          background: #374151;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(31, 41, 55, 0.3);
        }

        .plan-button.enterprise-btn {
          background: linear-gradient(135deg, #8b5cf6 0%, #a855f7 100%);
          color: #fff;
        }

        .plan-button.enterprise-btn:hover {
          background: linear-gradient(135deg, #a855f7 0%, #c084fc 100%);
        }

        @media (max-width: 1024px) {
          .pricing-cards {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
          
          .pricing-card {
            height: 480px;
            padding: 30px 25px;
          }
        }

        @media (max-width: 768px) {
          .pricing-section {
            padding: 60px 0;
          }

          .container {
            padding: 0 20px;
          }

          .pricing-header {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .pricing-title {
            grid-column: 1;
          }

          .pricing-description {
            grid-column: 1;
          }

          .pricing-description p {
            font-size: 19px;
          }

          .pricing-cards {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .pricing-card {
            height: auto;
            min-height: 400px;
            padding: 30px 25px;
          }

          .plan-name {
            font-size: 28px;
          }

          .plan-minutes {
            font-size: 20px;
          }

          .plan-price {
            font-size: 32px;
          }

          .plan-button {
            font-size: 16px;
            padding: 14px 20px;
          }
        }

        @media (max-width: 480px) {
          .pricing-card {
            padding: 25px 20px;
          }

          .plan-name {
            font-size: 24px;
          }

          .plan-minutes {
            font-size: 18px;
          }

          .plan-price {
            font-size: 28px;
          }

          .feature-text {
            font-size: 16px;
          }
        }
      `}</style>
    </section>
  )
}

export default PricingPlans 