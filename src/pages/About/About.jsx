import React, { useEffect, useRef, useState } from 'react';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
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

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700;800&display=swap');
        
        html {
          scroll-behavior: smooth;
        }
        
        .about-section {
          background: #F5F5F0;
          position: relative;
          overflow: hidden;
          scroll-margin-top: 80px;
        }
        
        .about-badge {
          background: linear-gradient(135deg, #FF69B4 0%, #FF85C1 100%);
          box-shadow: 0 4px 15px rgba(255, 105, 180, 0.3);
        }
        
        .info-card {
          background: linear-gradient(135deg, #FF69B4 0%, #FF85C1 100%);
          box-shadow: 0 6px 20px rgba(255, 105, 180, 0.25);
          transition: all 0.3s ease;
        }
        
        .info-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(255, 105, 180, 0.35);
        }
        
        .photo-frame {
          background: linear-gradient(135deg, #FF69B4 0%, #FFB6D9 100%);
          border-radius: 50%;
          position: relative;
          animation: pulse 3s ease-in-out infinite;
        }
        
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.02);
          }
        }
        
        .flower-decoration {
          position: absolute;
          border-radius: 50%;
          background: #FFB6D9;
          animation: float 4s ease-in-out infinite;
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(5deg);
          }
        }
        
        .flower-petal {
          position: absolute;
          width: 100px;
          height: 100px;
          background: #FFB6D9;
          border-radius: 50%;
          border: 8px solid #FF69B4;
        }
        
        .flower-center {
          position: absolute;
          width: 50px;
          height: 50px;
          background: #FF69B4;
          border-radius: 50%;
          border: 6px solid #FFF;
        }

        /* Scroll Animation Classes */
        .fade-in-up {
          opacity: 0;
          transform: translateY(50px);
          transition: opacity 1s ease-out, transform 1s ease-out;
        }

        .fade-in-up.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .fade-in-left {
          opacity: 0;
          transform: translateX(-50px);
          transition: opacity 1s ease-out, transform 1s ease-out;
        }

        .fade-in-left.visible {
          opacity: 1;
          transform: translateX(0);
        }

        .fade-in-right {
          opacity: 0;
          transform: translateX(50px);
          transition: opacity 1s ease-out, transform 1s ease-out;
        }

        .fade-in-right.visible {
          opacity: 1;
          transform: translateX(0);
        }

        .scale-in {
          opacity: 0;
          transform: scale(0.85) translateY(30px);
          transition: opacity 1.2s ease-out, transform 1.2s ease-out;
        }

        .scale-in.visible {
          opacity: 1;
          transform: scale(1) translateY(0);
        }

        .delay-100 {
          transition-delay: 0.15s;
        }

        .delay-200 {
          transition-delay: 0.3s;
        }

        .delay-300 {
          transition-delay: 0.45s;
        }

        .delay-400 {
          transition-delay: 0.6s;
        }

        .delay-500 {
          transition-delay: 0.75s;
        }
      `}</style>

      <section id="about" className="about-section py-20 lg:py-32" ref={sectionRef}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          {/* Main Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* LEFT COLUMN - Text Content */}
            <div className="space-y-6">
              
              {/* About Me Badge */}
              <div className={`inline-block fade-in-left ${isVisible ? 'visible' : ''}`}>
                <div 
                  className="about-badge px-8 py-3 rounded-full"
                  style={{ fontFamily: "'Fredoka', sans-serif" }}
                >
                  <span className="text-white font-bold text-lg uppercase tracking-wide">
                    About Me
                  </span>
                </div>
              </div>
              
              {/* Name Title */}
              <h2 
                className={`text-3xl lg:text-4xl xl:text-5xl font-extrabold leading-tight fade-in-left delay-100 ${isVisible ? 'visible' : ''}`}
                style={{ 
                  fontFamily: "'Fredoka', sans-serif",
                  color: '#FF69B4',
                  lineHeight: '1.2'
                }}
              >
                PUTU DISA KALINDA<br />
                DHARMASAPUTRA
              </h2>
              
              {/* Description Text */}
              <div 
                className={`text-base lg:text-lg leading-relaxed space-y-4 fade-in-left delay-200 ${isVisible ? 'visible' : ''}`}
                style={{ 
                  fontFamily: "'Fredoka', sans-serif",
                  color: '#FF69B4',
                  lineHeight: '1.8'
                }}
              >
                <p>
                  Hello I’m Disa,  a Communication Science Undergraduate (IUP) at Gadjah Mada University with a strong interest in creative media, marketing communication, and UI/UX design. Experienced in national-level competitions, publication design, and event management.
                </p>
                <p>
                 A detail-oriented, collaborative individual who is always keen to learn and seek new opportunities to apply creative and strategic communication skills in professional settings.
                </p>
              </div>
              
              {/* Info Cards - Horizontal Layout */}
              <div className="flex flex-col lg:flex-row gap-4 pt-4">
                
                {/* University Card */}
                <div 
                  className={`rounded-3xl px-6 py-5 flex items-center gap-4 flex-1 fade-in-left delay-300 ${isVisible ? 'visible' : ''}`}
                  style={{
                    background: 'linear-gradient(135deg, #E75A8C 0%, #E86F9D 100%)',
                    boxShadow: '0 6px 20px rgba(255, 105, 180, 0.25)',
                    border: '3px solid rgba(255, 255, 255, 0.3)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-3px)';
                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(255, 105, 180, 0.35)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(255, 105, 180, 0.25)';
                  }}
                >
                  {/* Toga Icon */}
                  <div className="flex-shrink-0">
                    <img 
                      src="/AboutMe/icon.png" 
                      alt="Graduation Cap"
                      className="w-14 h-14 object-contain relative top-4"
                    />
                  </div>
                  
                  <div className="text-left flex-1">
                    {/* White rounded badge for university name */}
                    <div 
                      className="bg-white rounded-full px-4 py-1.5 mb-2 relative right-14 bottom-1"
                      style={{ fontFamily: "'Fredoka', sans-serif" }}
                    >
                      <span className="text-xs font-bold uppercase tracking-wide whitespace-nowrap"
                        style={{ color: '#E75A8C' }}
                      >
                        Gadjah Mada University 
                      </span>
                    </div>
                    
                    <div 
                      className="text-white text-sm font-bold uppercase leading-tight"
                      style={{ fontFamily: "'Fredoka', sans-serif" }}
                    >
                      IUP COMMUNICATIONS<br />UNDERGRADUATE
                    </div>
                  </div>
                </div>
                
                {/* IELTS Card */}
                <div 
                  className={`rounded-3xl px-6 py-5 flex items-center gap-5 flex-1 fade-in-left delay-400 ${isVisible ? 'visible' : ''}`}
                  style={{
                    background: 'linear-gradient(135deg, #E75A8C 0%, #E86F9D 100%)',
                    boxShadow: '0 6px 20px rgba(255, 105, 180, 0.25)',
                    border: '3px solid rgba(255, 255, 255, 0.3)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-3px)';
                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(255, 105, 180, 0.35)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(255, 105, 180, 0.25)';
                  }}
                >
                  {/* English Proficiency Section */}
                  <div 
                    className="bg-white rounded-2xl px-5 py-3.5 text-center flex-shrink-0"
                    style={{ fontFamily: "'Fredoka', sans-serif" }}
                  >
                    <div 
                      className="text-sm font-bold uppercase leading-tight"
                      style={{ color: '#E75A8C' }}
                    >
                      ENGLISH<br />PROFICIENCY
                    </div>
                  </div>
                  
                  {/* IELTS Score Section */}
                  <div 
                    className="text-white text-center flex-1"
                    style={{ fontFamily: "'Fredoka', sans-serif" }}
                  >
                    <div className="text-xl font-bold uppercase mb-0.5">
                      IELTS
                    </div>
                    <div className="text-5xl font-extrabold leading-none">
                      8.0
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
            
            {/* RIGHT COLUMN - Photo with Decorations */}
            <div className={`relative flex items-center justify-center lg:justify-end scale-in delay-400 ${isVisible ? 'visible' : ''}`}>
              
              {/* Main Photo Container */}
              <div className="relative">
                
                {/* Photo Frame */}
                <div 
                  className="w-full h-full"
                >
                  <img 
                    src="/AboutMe/about.png" 
                    alt="Putu Disa Kalinda Dharmasaputra"
                    className="w-full h-full object-cover"
                  />
                </div>
                
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
}