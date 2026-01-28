import React, { useEffect, useRef, useState } from 'react';

export default function AchievementsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const achievements = [
    {
      id: 1,
      title: '2ND WINNER',
      subtitle: 'INVENTION NATIONAL POSTER DESIGN COMPETITION',
      organization: 'UDAYANA UNIVERSITY',
      date: 'NOVEMBER 2025',
      type: 'INDIVIDUAL COMPETITION',
      certificateImage: '/Achievements/Juara invention original.jpeg',
      certificateFull: '/Achievements/SertifInvent.png'
    },
    {
      id: 2,
      title: 'FAVORITE WINNER',
      subtitle: 'UI/UX DESIGN NATIONAL CREATIVE COMPETITION',
      organization: 'ITPLN UNIVERSITY',
      date: 'NOVEMBER 2025',
      type: 'TEAM COMPETITION',
      certificateImage: '/Achievements/Sertifikat NCC Shadow.png',
      certificateFull: '/Achievements/Juara Favorit original.jpg'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % achievements.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + achievements.length) % achievements.length);
  };

  const openCertificate = (achievement) => {
    setSelectedCertificate(achievement);
  };

  const closeCertificate = () => {
    setSelectedCertificate(null);
  };

  const downloadCertificate = async (achievement) => {
    try {
      const response = await fetch(achievement.certificateFull);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${achievement.title.replace(/\s+/g, '_')}_Certificate.${achievement.certificateFull.split('.').pop()}`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Download failed:', error);
      // Fallback: open in new tab
      window.open(achievement.certificateFull, '_blank');
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700;800&display=swap');
        
        .achievements-section {
          background: linear-gradient(180deg, #FF69B4 0%, #FFB6D9 100%);
          position: relative;
          overflow: hidden;
          scroll-margin-top: 80px;
        }

        .flower-decoration {
          position: absolute;
          object-fit: contain;
          z-index: 1;
          pointer-events: none;
        }

        .flower-top-left {
          left: -130px;
          top: -220px;
          width: 420px;
          height: 420px;
        }

        .flower-top-right {
          right: -120px;
          top: -80px;
          width: 280px;
          height: 280px;
        }

        .flower-bottom-left {
          left: -90px;
          bottom: -10px;
          width: 220px;
          height: 220px;
        }

        .flower-bottom-right {
          right: -100px;
          bottom: -0px;
          width: 260px;
          height: 260px;
        }

        .achievement-card {
          background: #FFFFFF;
          border-radius: 40px;
          border: 6px solid #E75A8C;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
          position: relative;
          overflow: hidden;
        }

        .achievement-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 182, 217, 0.05) 100%);
          pointer-events: none;
        }

        .certificate-preview {
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
          position: relative;
        }


        .certificate-preview:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 20px 50px rgba(231, 90, 140, 0.25);
        }

        .certificate-preview:hover::after {
          opacity: 1;
        }

        .badge {
          background: linear-gradient(135deg, #E75A8C 0%, #FF69B4 100%);
          border-radius: 15px;
          padding: 8px 24px;
          color: white;
          font-weight: 800;
          display: inline-block;
          box-shadow: 0 4px 10px rgba(231, 90, 140, 0.3);
        }

        .btn-primary {
          background: linear-gradient(135deg, #E75A8C 0%, #FF69B4 100%);
          border: none;
          border-radius: 50px;
          padding: 12px 32px;
          color: white;
          font-weight: 800;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 6px 15px rgba(231, 90, 140, 0.3);
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 14px;
          text-transform: uppercase;
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(231, 90, 140, 0.4);
        }

        .arrow-btn {
          background: rgba(255, 255, 255, 0.95);
          border: 3px solid #E75A8C;
          border-radius: 50%;
          width: 56px;
          height: 56px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
          color: #E75A8C;
          font-size: 24px;
          font-weight: 900;
          font-family: Arial, sans-serif;
          flex-shrink: 0;
        }

        .arrow-btn:hover {
          background: #E75A8C;
          color: white;
          border-color: #E75A8C;
        }

        .arrow-btn:active {
          opacity: 0.8;
        }

        /* Responsive Arrow Positioning */
        @media (max-width: 1023px) {
          .arrow-btn {
            width: 44px;
            height: 44px;
            font-size: 20px;
            border-width: 2px;
          }
        }

        @media (max-width: 640px) {
          .arrow-btn {
            width: 36px;
            height: 36px;
            font-size: 18px;
            border-width: 2px;
          }
        }

        /* Modal Styles */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.95);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 20px;
          animation: fadeIn 0.3s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .modal-content {
          max-width: 95vw;
          max-height: 90vh;
          position: relative;
          animation: slideUp 0.3s ease;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .modal-certificate-img {
          max-width: 100%;
          max-height: 80vh;
          object-fit: contain;
          border-radius: 12px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
        }

        .modal-actions {
          display: flex;
          gap: 16px;
          margin-top: 24px;
          flex-wrap: wrap;
          justify-content: center;
        }

        .modal-btn {
          background: linear-gradient(135deg, #E75A8C 0%, #FF69B4 100%);
          border: none;
          border-radius: 50px;
          padding: 14px 36px;
          color: white;
          font-weight: 800;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 6px 20px rgba(231, 90, 140, 0.4);
          display: inline-flex;
          align-items: center;
          gap: 12px;
          font-size: 15px;
          text-transform: uppercase;
          font-family: 'Fredoka', sans-serif;
        }

        .modal-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(231, 90, 140, 0.5);
        }

        .modal-btn:active {
          transform: translateY(0);
        }

        .modal-close {
          position: absolute;
          top: -50px;
          right: 0;
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(10px);
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: white;
          font-size: 28px;
          font-weight: bold;
          z-index: 10;
          transition: all 0.3s ease;
        }

        .modal-close:hover {
          background: rgba(231, 90, 140, 0.9);
          border-color: #E75A8C;
          transform: rotate(90deg);
        }

        /* Scroll Animations */
        .fade-in-up {
          opacity: 0;
          transform: translateY(50px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }

        .fade-in-up.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .slide-transition {
          transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
        }

        /* Navigation Container for Better Positioning */
        .nav-container {
          position: relative;
        }

        .arrow-left {
          position: absolute;
          left: -70px;
          top: 50%;
          transform: translateY(-50%);
        }

        .arrow-right {
          position: absolute;
          right: -70px;
          top: 50%;
          transform: translateY(-50%);
        }

        @media (max-width: 1279px) {
          .arrow-left {
            left: -60px;
          }
          .arrow-right {
            right: -60px;
          }
        }

        @media (max-width: 1150px) {
          .arrow-left {
            left: -50px;
          }
          .arrow-right {
            right: -50px;
          }
        }

        @media (max-width: 1023px) {
          .arrow-left {
            left: 12px;
          }
          .arrow-right {
            right: 12px;
          }
        }

        @media (max-width: 640px) {
          .arrow-left {
            left: 6px;
          }
          .arrow-right {
            right: 6px;
          }
        }
      `}</style>

      <section id="achievements" className="achievements-section py-20 lg:py-32" ref={sectionRef}>
        {/* Flower Decorations */}
        <img src="/Skills/Bunga Kiri.png" alt="" className="flower-decoration flower-top-left" />
        <img src="/Skills/Bunga Kiri.png" alt="" className="flower-decoration flower-top-right" style={{ transform: 'scaleX(-1)' }} />
        <img src="/Skills/Bunga Kiri.png" alt="" className="flower-decoration flower-bottom-left" />
        <img src="/Skills/Bunga Kiri.png" alt="" className="flower-decoration flower-bottom-right" style={{ transform: 'scaleX(-1)' }} />

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          
          {/* Header */}
          <div className={`text-center mb-16 fade-in-up ${isVisible ? 'visible' : ''}`}>
            <h2 
              className="text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white mb-4 uppercase"
              style={{ fontFamily: "'Fredoka', sans-serif", textShadow: '4px 4px 0px rgba(0,0,0,0.1)' }}
            >
              ACHIEVEMENTS
            </h2>
            <p 
              className="text-white text-lg lg:text-xl font-medium uppercase tracking-wide"
              style={{ fontFamily: "'Fredoka', sans-serif" }}
            >
              COMPETITIONS I HAVE WON RECENTLY
            </p>
          </div>

          {/* Achievement Slider */}
          <div className={`nav-container fade-in-up ${isVisible ? 'visible' : ''}`}>
            <div className="achievement-card p-8 lg:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                
                {/* Left Side - Certificate Image */}
                <div 
                  className="certificate-preview slide-transition"
                  onClick={() => openCertificate(achievements[currentSlide])}
                >
                  <img 
                    src={achievements[currentSlide].certificateImage}
                    alt={achievements[currentSlide].title}
                    className="w-full h-auto object-contain"
                  />
                </div>

                {/* Right Side - Achievement Info */}
                <div className="space-y-6 slide-transition">
                  <h3 
                    className="text-4xl lg:text-5xl xl:text-6xl font-extrabold uppercase leading-tight"
                    style={{ fontFamily: "'Fredoka', sans-serif", color: '#FFC632' }}
                  >
                    {achievements[currentSlide].title}
                  </h3>
                  
                  <h4 
                    className="text-2xl lg:text-3xl font-extrabold uppercase leading-tight"
                    style={{ fontFamily: "'Fredoka', sans-serif", color: '#E75A8C' }}
                  >
                    {achievements[currentSlide].subtitle}
                  </h4>

                  <p 
                    className="text-xl lg:text-2xl font-bold uppercase"
                    style={{ fontFamily: "'Fredoka', sans-serif", color: '#FF69B4' }}
                  >
                    {achievements[currentSlide].organization}
                  </p>

                  <div className="flex flex-wrap gap-4">
                    <span 
                      className="badge"
                      style={{ fontFamily: "'Fredoka', sans-serif", fontSize: '16px' }}
                    >
                      {achievements[currentSlide].date}
                    </span>
                    <span 
                      className="badge"
                      style={{ fontFamily: "'Fredoka', sans-serif", fontSize: '16px' }}
                    >
                      {achievements[currentSlide].type}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-4 pt-4">
                    <button 
                      className="btn-primary"
                      style={{ fontFamily: "'Fredoka', sans-serif" }}
                      onClick={() => downloadCertificate(achievements[currentSlide])}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                        <polyline points="7 10 12 15 17 10"/>
                        <line x1="12" y1="15" x2="12" y2="3"/>
                      </svg>
                      DOWNLOAD
                    </button>
                    <button 
                      className="btn-primary"
                      style={{ fontFamily: "'Fredoka', sans-serif" }}
                      onClick={() => openCertificate(achievements[currentSlide])}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <circle cx="11" cy="11" r="8"/>
                        <path d="m21 21-4.35-4.35"/>
                      </svg>
                      VIEW CERTIFICATE
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            {achievements.length > 1 && (
              <>
                <button 
                  onClick={prevSlide}
                  className="arrow-btn arrow-left"
                  aria-label="Previous achievement"
                >
                  &lt;
                </button>
                <button 
                  onClick={nextSlide}
                  className="arrow-btn arrow-right"
                  aria-label="Next achievement"
                >
                  &gt;
                </button>
              </>
            )}
          </div>

          {/* Slide Indicators */}
          {achievements.length > 1 && (
            <div className="flex justify-center gap-3 mt-8">
              {achievements.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-4 h-4 rounded-full transition-all ${
                    currentSlide === index 
                      ? 'bg-white w-8' 
                      : 'bg-white/50 hover:bg-white/75'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Certificate Modal */}
      {selectedCertificate && (
        <div 
          className="modal-overlay"
          onClick={closeCertificate}
        >
          <div 
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="modal-close"
              onClick={closeCertificate}
              aria-label="Close certificate"
            >
              ×
            </button>
            <img 
              src={selectedCertificate.certificateFull}
              alt={selectedCertificate.title}
              className="modal-certificate-img"
            />
            <div className="modal-actions">
              <button 
                className="modal-btn"
                onClick={() => downloadCertificate(selectedCertificate)}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                DOWNLOAD CERTIFICATE
              </button>
              <button 
                className="modal-btn"
                onClick={closeCertificate}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
                CLOSE
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}