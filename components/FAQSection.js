import { useState } from 'react'

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    {
      id: 1,
      question: "How do I train my AI agent?",
      answer: "You will provide the business info from your side and train the agents for you hassle free."
    },
    {
      id: 2,
      question: "Can it escalate to a human team?",
      answer: "Yes, Zero Queue intelligently transfers complex calls to your team when needed."
    },
    {
      id: 3,
      question: "Is my data secure?",
      answer: "Absolutely. All calls and transcripts are encrypted and stored with enterprise-grade security."
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index)
  }

  return (
    <section className="faq-section">
      <div className="container">
        <div className="faq-header">
          <h3 className="faq-title">Frequently Asked Questions</h3>
          <div className="faq-subtitle">Everything you need to know about our services</div>
        </div>
        
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div 
              key={faq.id} 
              className={`faq-item ${openIndex === index ? 'active' : ''}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">
                <h3>{faq.question}</h3>
                <div className="faq-icon">
                  <svg 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      d="M12 5V19M5 12H19" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .faq-section {
          padding: 120px 0;
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          position: relative;
          overflow: hidden;
        }

        .faq-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
          pointer-events: none;
        }

        .container {
          max-width: 800px;
          margin: 0 auto;
          padding: 0 30px;
          position: relative;
          z-index: 1;
        }

        .faq-header {
          text-align: center;
          margin-bottom: 80px;
        }

        .faq-title {
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: clamp(42px, 2.5vw, 60px);
          font-weight: 300;
          color: #000;
          margin-bottom: 20px;
          line-height: 1.2;
        }

        .faq-subtitle {
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 18px;
          color: #666;
          font-weight: 400;
        }

        .faq-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .faq-item {
          background: #fff;
          border-radius: 16px;
          padding: 0;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1px solid rgba(0, 0, 0, 0.05);
          overflow: hidden;
        }

        .faq-item:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
        }

        .faq-item.active {
          box-shadow: 0 8px 40px rgba(0, 0, 0, 0.15);
        }

        .faq-question {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 30px 40px;
          transition: all 0.3s ease;
        }

        .faq-question h3 {
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 18px;
          font-weight: 500;
          color: #000;
          margin: 0;
          line-height: 1.4;
          flex: 1;
          padding-right: 20px;
        }

        .faq-icon {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #f8f9fa;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          flex-shrink: 0;
        }

        .faq-icon svg {
          transition: transform 0.3s ease;
          color: #666;
        }

        .faq-item.active .faq-icon {
          background: #000;
        }

        .faq-item.active .faq-icon svg {
          transform: rotate(45deg);
          color: #fff;
        }

        .faq-answer {
          max-height: 0;
          overflow: hidden;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          opacity: 0;
        }

        .faq-item.active .faq-answer {
          max-height: 200px;
          opacity: 1;
          padding: 0 40px 30px 40px;
        }

        .faq-answer p {
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 16px;
          line-height: 1.6;
          color: #666;
          margin: 0;
        }

        @media (max-width: 768px) {
          .faq-section {
            padding: 80px 0;
          }

          .faq-header {
            margin-bottom: 60px;
          }

          .faq-title {
            font-size: 32px;
          }

          .faq-subtitle {
            font-size: 16px;
          }

          .faq-question {
            padding: 25px 30px;
          }

          .faq-question h3 {
            font-size: 16px;
          }

          .faq-item.active .faq-answer {
            padding: 0 30px 25px 30px;
          }

          .faq-answer p {
            font-size: 15px;
          }
        }

        @media (max-width: 480px) {
          .container {
            padding: 0 20px;
          }

          .faq-question {
            padding: 20px 25px;
          }

          .faq-item.active .faq-answer {
            padding: 0 25px 20px 25px;
          }
        }
      `}</style>
    </section>
  )
} 