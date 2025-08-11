import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const InsightsCarousel = () => {
  const testimonials = [
    {
      id: 1,
      text: "We trained our AI agent in hours, and it now handles 90% of our inquiries flawlessly ",
      author: "Nick M., Tech Startup Founder",
    },
    {
      id: 2,
      text: "Zero Queue slashed our support workload by 50% in just one month. Customers love the instant, accurate responses",
      author: "Sara D., E-Commerce Operations Lead",
    },
    {
      id: 3,
      text: " We trained our AI agent in hours, and it now handles 90% of our inquiries flawlessly",
      author: "Nick M., Tech Startup Founder",
    },
    {
      id: 4,
      text: "Zero Queue slashed our support workload by 50% in just one month. Customers love the instant, accurate responses",
      author: "Sara D., E-Commerce Operations Lead",
    },
  ];

  return (
    <section className="reviews-section">
      <div className="container">
        {/* Header Section */}
        <div className="reviews-header">
          <div className="reviews-title">
            <span className="title">Customer Success Stories</span>
            {/* <span className="divider"></span>
            <span className="rating">5.0</span>
            <span style={{
              marginLeft: "3px",
              color: "black"
            }}>★</span> */}
          </div>
          {/* <div className="reviews-description">
            <p>Their words are a testament to our commitment to excellence and our ability to bring their visions to life. Read on to see how we've made a lasting impact on their brands and projects.</p>
          </div> */}
        </div>

        {/* Testimonials Carousel */}
        <div className="testimonials-carou sel">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={50}
            slidesPerView={3}
            loop={true}
            autoplay={{
              delay: 3000, // 3 seconds between slides
              disableOnInteraction: false, // keep autoplay after swiping
            }}
            pagination={{
              clickable: true,
              type: "bullets",
            }}
            className="testimonials-swiper"
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={testimonial.id}>
                <div
                  className="testimonial-card"
                  style={{
                    // paddingTop: index % 2 === 0 ? '73px' : '30px'
                    paddingTop: "30px",
                    paddingBottom: "70px",
                  }}
                >
                  <div className="testimonial-content">
                    <div className="quote-mark">
                      <img src="/Quote.svg" alt="Quote" />
                    </div>
                    <div className="testimonial-text">{testimonial.text}</div>
                    <div className="testimonial-author">
                      — {testimonial.author}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <style jsx>{`
        :global(.swiper-pagination-bullet-active) {
          background: #000 !important;
        }
        .reviews-section {
          background: #f8f8f8;
          padding: 100px 0;
        }

        .container {
          // max-width: 1200px;
          margin: 0 auto;
          padding: 0 30px;
        }

        .reviews-header {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 50px;
          margin-bottom: 60px;
          padding-left: 20px;
          padding-right: 20px;
        }

        .reviews-title {
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

        .rating {
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: clamp(16px, 0.8vw, 22px);
          font-weight: 500;
          line-height: 1.2em;
          color: #000;
        }

        .reviews-description {
          grid-column: 2;
          text-align: left;
        }

        .reviews-description p {
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: clamp(20px, 0.9vw, 28px);
          font-weight: 400;
          font-style: normal;
          line-height: 1.5em;
          color: #000;
          margin: 0;
        }

        .testimonials-carousel {
          position: relative;
          padding-bottom: 60px;
        }

        .testimonials-swiper {
          width: 100%;
        }

        .testimonial-card {
          padding: 30px;
          height: auto;
          min-height: 280px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          cursor: pointer;
        }

        .testimonial-card:hover {
          cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none"><circle cx="30" cy="30" r="26" fill="black"/><text x="30" y="38" text-anchor="middle" fill="white" font-size="24" font-family="Arial" letter-spacing="2">&lt;&gt;</text></svg>'),
            auto;
        }

        .testimonial-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .quote-mark {
          margin-bottom: 10px;
        }

        .quote-mark img {
          width: 35px;
          height: 35px;
          object-fit: contain;
        }

        .testimonial-text {
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: clamp(20px, 0.9vw, 28px);
          font-weight: 400;
          font-style: normal;
          line-height: 1.5em;
          color: #000;
          margin: 0;
          flex: 1;
        }

        .testimonial-author {
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: clamp(16px, 0.8vw, 22px);
          font-weight: 500;
          line-height: 1.2em;
          color: #000;
          margin-top: auto;
        }

        .swiper-pagination {
          position: relative;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 8px;
          z-index: 10;
          margin-top: 40px;
          justify-content: center;
        }

        .swiper-pagination-bullet {
          width: 6px !important;
          height: 6px !important;
          border-radius: 50% !important;
          background: #666 !important;
          opacity: 1 !important;
          border: none !important;
          transition: all 0.3s ease;
          display: block !important;
        }

        .swiper-pagination-bullet-active {
          background: #000 !important;
          opacity: 1 !important;
          width: 20px !important;
          height: 3px !important;
          border-radius: 1.5px !important;
        }

        @media (max-width: 768px) {
          .reviews-section {
            padding: 60px 0;
          }

          .container {
            padding: 0 20px;
          }

          .reviews-header {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .reviews-title {
            grid-column: 1;
          }

          .reviews-description {
            grid-column: 1;
          }

          .reviews-description {
            max-width: 100%;
          }

          .reviews-description p {
            font-size: 19px;
          }

          .testimonial-card {
            padding: 25px;
            min-height: 250px;
          }

          .testimonial-text {
            font-size: 19px;
          }

          .testimonial-author {
            font-size: 16px;
          }

          .quote-mark img {
            width: 30px;
            height: 30px;
          }
        }
      `}</style>
    </section>
  );
};

export default InsightsCarousel;
