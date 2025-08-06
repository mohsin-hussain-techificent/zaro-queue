import { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const PortfolioCarousel = () => {
  const [swiper, setSwiper] = useState(null)
  const [mousePosition, setMousePosition] = useState({ x: -1000, y: -1000 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (isHovering) {
        setMousePosition({ x: e.clientX, y: e.clientY })
      }
    }

    const handleCardMouseEnter = () => {
      setIsHovering(true)
    }

    const handleCardMouseLeave = () => {
      setIsHovering(false)
      setMousePosition({ x: -1000, y: -1000 })
    }

    // Add event listeners to all project cards
    const projectCards = document.querySelectorAll('.project-card')
    projectCards.forEach(card => {
      card.addEventListener('mouseenter', handleCardMouseEnter)
      card.addEventListener('mouseleave', handleCardMouseLeave)
      card.addEventListener('mousemove', handleMouseMove)
    })

    // Add event listener to the entire carousel for default cursor
    const carousel = document.querySelector('.portfolio-carousel')
    if (carousel) {
      carousel.addEventListener('mouseleave', () => {
        setIsHovering(false)
        setMousePosition({ x: -1000, y: -1000 })
      })
    }

    return () => {
      projectCards.forEach(card => {
        card.removeEventListener('mouseenter', handleCardMouseEnter)
        card.removeEventListener('mouseleave', handleCardMouseLeave)
        card.removeEventListener('mousemove', handleMouseMove)
      })
      if (carousel) {
        carousel.removeEventListener('mouseleave', () => {
          setIsHovering(false)
          setMousePosition({ x: -1000, y: -1000 })
        })
      }
    }
  }, [isHovering])

  const projects = [
    {
      id: 1,
      title: 'Symphony',
      description: 'Transcending expectations. Shaping unprecedented user journeys.',
      tags: ['Art Direction', 'User Research', 'User Testing'],
      image: '/assets/pmv-chamara-mTFzk87Lt_w-unsplash-2.jpg'
    },
    {
      id: 2,
      title: 'Beyond',
      description: 'A new age of outstanding craft beer has arrived.',
      tags: ['Art Direction', 'Branding', 'Strategy', 'Website Design'],
      image: '/assets/studio-blackthorns-9jJhIfbEQtU-unsplash.jpg'
    },
    {
      id: 3,
      title: 'Curc',
      description: 'Cosmetics that inspire confidence and beauty.',
      tags: ['Art Direction', 'Cosmetics', 'Branding'],
      image: '/assets/pmv-chamara-mTFzk87Lt_w-unsplash-2.jpg'
    },
    {
      id: 4,
      title: 'TechFlow',
      description: 'Streamlining digital experiences for modern businesses.',
      tags: ['Web Design', 'Development', 'UX/UI'],
      image: '/assets/studio-blackthorns-9jJhIfbEQtU-unsplash.jpg'
    },
    {
      id: 5,
      title: 'Echo',
      description: 'Creating lasting impressions through strategic design.',
      tags: ['Branding', 'Strategy', 'Print Design'],
      image: '/assets/pmv-chamara-mTFzk87Lt_w-unsplash-2.jpg'
    },
    {
      id: 6,
      title: 'Pulse',
      description: 'Amplifying brand voices in the digital landscape.',
      tags: ['Digital Marketing', 'Social Media', 'Content'],
      image: '/assets/studio-blackthorns-9jJhIfbEQtU-unsplash.jpg'
    },
    {
      id: 7,
      title: 'Nexus',
      description: 'Connecting users through intuitive mobile experiences.',
      tags: ['UI/UX Design', 'Mobile App', 'Prototyping'],
      image: '/assets/pmv-chamara-mTFzk87Lt_w-unsplash-2.jpg'
    }
  ]

  return (
    <div className="portfolio-carousel">
      <style jsx global>{`
        .portfolio-carousel .swiper-pagination-bullet {
          background: #666 !important;
          background-color: #666 !important;
        }
        .portfolio-carousel .swiper-pagination-bullet-active {
          background: #fff !important;
          background-color: #fff !important;
        }
      `}</style>
      <div 
        className="custom-cursor"
          style={{
          left: mousePosition.x,
          top: mousePosition.y,
          opacity: isHovering ? 1 : 0
        }}
      >
        &lt;&gt;
      </div>

      
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={2.2}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        pagination={{
          clickable: true,
          el: '.swiper-pagination',
          type: 'bullets',
        }}
        onSwiper={setSwiper}
        className="portfolio-swiper"
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id}>
            <div className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-overlay">
                <div className="project-top">
                  <div className="project-tags">
                    {project.tags.map((tag, index) => (
                      <span key={index}>{tag}</span>
                    ))}
                  </div>
                  <div className="project-arrow"></div>
                </div>
                <div className="project-bottom">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
              <div className="swiper-pagination"></div>
        <div className="carousel-bottom-area"></div>

      <style jsx>{`
        .portfolio-carousel {
          position: relative;
          width: 100%;
          height: 100vh;
          margin-top: 60px;
          cursor: default;
        }
        
        /* Ensure default cursor shows in empty areas */
        .portfolio-carousel * {
          cursor: default;
        }
        
        /* Override cursor for specific elements */
        .project-card {
          cursor: none !important;
        }
        
        .swiper-pagination {
          cursor: default !important;
        }
        
        .swiper-pagination-bullet {
          cursor: pointer !important;
        }
        
        .portfolio-carousel:hover {
          cursor: none;
        }
        
        .custom-cursor {
          position: fixed;
          width: 100px;
          height: 100px;
          background: #000;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-size: 28px;
          font-weight: bold;
          z-index: 9999;
          pointer-events: none;
          transform: translate(-50%, -50%);
          transition: opacity 0.3s ease;
        }
        

        
        .portfolio-swiper {
          width: 100%;
          height: 100%;
        }
        
        .project-card {
          position: relative;
          height: 85vh;
          min-height: 700px;
          border-radius: 0;
          overflow: hidden;
          background: #000;
          cursor: none !important;
        }
        
        .project-image {
          width: 100%;
          height: 100%;
          position: relative;
        }
        
        .project-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }
        
        .project-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: clamp(20px, 1vw, 40px);
          background: linear-gradient(180deg, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0) 100%);
        }
        
        .project-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
        }
        
        .project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          max-width: 70%;
        }
        
        .project-tags span {
          font-size: 14px;
          color: #fff;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 300;
          line-height: 1.2em;
          letter-spacing: normal;
        }
        
        .project-arrow {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-size: 16px;
          cursor: pointer;
        }
        
        .project-arrow::before {
          content: '';
          width: 0;
          height: 0;
          border-left: 8px solid #fff;
          border-top: 6px solid transparent;
          border-bottom: 6px solid transparent;
        }
        
        .project-bottom {
          background: linear-gradient(360deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%);
          padding: clamp(40px, 2vw, 80px) clamp(20px, 1vw, 40px) clamp(20px, 1vw, 40px);
        }
        
        .project-title {
          font-size: clamp(1.5rem, 2vw, 2rem);
          font-weight: 300;
          color: #fff;
          margin-bottom: 10px;
          font-family: 'Plus Jakarta Sans', sans-serif;
        }
        
        .project-description {
          font-size: clamp(16px, 0.9vw, 22px);
          color: #fff;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 300;
          line-height: 1.3em;
        }
        

        
        .swiper-pagination {
          position: absolute;
          bottom: 40px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 8px;
          z-index: 10;
          cursor: default;
          width: auto;
          height: auto;
        }
        
        .swiper-pagination-bullet {
          width: 6px !important;
          height: 6px !important;
          border-radius: 50% !important;
          background: #666 !important;
          background-color: #666 !important;
          opacity: 1 !important;
          border: none !important;
          cursor: pointer;
          transition: all 0.3s ease;
          display: inline-block !important;
          visibility: visible !important;
        }
        
        .swiper-pagination-bullet-active {
          background: #fff !important;
          background-color: #fff !important;
          opacity: 1 !important;
          width: 20px !important;
          height: 3px !important;
          border-radius: 1.5px !important;
        }
        
        /* Maximum specificity overrides for Swiper's blue */
        .portfolio-carousel .swiper-pagination .swiper-pagination-bullet {
          background: #666 !important;
          background-color: #666 !important;
        }
        
        .portfolio-carousel .swiper-pagination .swiper-pagination-bullet-active {
          background: #fff !important;
          background-color: #fff !important;
        }
        
        /* Global overrides to kill any blue */
        .swiper-pagination-bullet,
        .swiper-pagination-bullet-active {
          background: #666 !important;
          background-color: #666 !important;
        }
        
        .swiper-pagination-bullet-active {
          background: #fff !important;
          background-color: #fff !important;
        }
        
        /* Nuclear option - override ALL Swiper blue */
        .swiper-pagination-bullet {
          background: #666 !important;
          background-color: #666 !important;
          color: #666 !important;
        }
        
        .swiper-pagination-bullet-active {
          background: #fff !important;
          background-color: #fff !important;
          color: #fff !important;
        }
        

        
        .carousel-bottom-area {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 60px;
          cursor: default;
          z-index: 5;
        }

        @media (max-width: 768px) {
          .project-card {
            height: 60vh;
            min-height: 400px;
          }
          
          .portfolio-swiper {
            height: 60vh;
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
    </div>
  )
} 

export default PortfolioCarousel 