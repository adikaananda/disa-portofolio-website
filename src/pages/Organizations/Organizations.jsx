import React, { useEffect, useRef, useState } from 'react';

export default function Organizations() {
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
        
        .organization-section {
          background: linear-gradient(180deg, #F5F5F0 0%, #FFF5F8 100%);
          position: relative;
          overflow: hidden;
        }
        
        /* Improved pink wave decoration at top */
        .wave-top {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 200px;
          background: #FFB5D9;
          clip-path: ellipse(100% 100% at 50% 0%);
          transform: translateY(-100px);
          z-index: 0;
        }

        /* Scroll animations */
        .fade-in-up {
          opacity: 0;
          transform: translateY(50px);
          transition: opacity 1s ease-out, transform 1s ease-out;
        }

        .fade-in-up.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .scale-in {
          opacity: 0;
          transform: scale(0.9);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }

        .scale-in.visible {
          opacity: 1;
          transform: scale(1);
        }

        .delay-100 { transition-delay: 0.1s; }
        .delay-200 { transition-delay: 0.2s; }
        .delay-300 { transition-delay: 0.3s; }
        .delay-400 { transition-delay: 0.4s; }
        .delay-500 { transition-delay: 0.5s; }
        .delay-600 { transition-delay: 0.6s; }

        /* Card hover effects */
        .org-card {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .org-card:hover {
          transform: translateY(-8px);
        }

        /* View More button */
        .view-more-btn {
          background: linear-gradient(135deg, #FF69B4 0%, #FF85C1 100%);
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(255, 105, 180, 0.3);
          text-decoration: none;
          display: inline-block;
        }

        .view-more-btn:hover {
          box-shadow: 0 6px 25px rgba(255, 105, 180, 0.4);
          transform: translateY(-2px);
        }
      `}</style>

      <section id="organizations" className="organization-section py-24 lg:py-32 relative" ref={sectionRef}>
        {/* Improved decorative wave at top */}
        <div className="wave-top"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          
          {/* Main Organizations */}
          <div className="space-y-20">
            
            {/* EKA-CITTA KAMADHIS UGM */}
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center fade-in-up ${isVisible ? 'visible' : ''}`}>
              {/* Left - Image */}
              <div className="relative">
                <div className="w-full aspect-[4/3] rounded-[60px] overflow-hidden">
                  <img 
                    src="/Organizational experience/Eka citta/Eka-citta.png" 
                    alt="Eka-citta Team"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Right - Content */}
              <div className="space-y-6">
                <h3 
                  className="text-3xl lg:text-4xl font-extrabold"
                  style={{ 
                    fontFamily: "'Fredoka', sans-serif",
                    color: '#FF69B4',
                    lineHeight: '1.2'
                  }}
                >
                  EKA-CITTA KAMADHIS UGM
                </h3>
                
                <p 
                  className="text-base lg:text-lg font-medium"
                  style={{ 
                    fontFamily: "'Fredoka', sans-serif",
                    color: '#FF69B4',
                    opacity: 0.8
                  }}
                >
                  BUDDHIST COMMUNITY ORGANIZATION<br />
                  [CREATIVE & PUBLICATION]
                </p>

                <div className="space-y-3 pt-4">
                  {/* Role 1 */}
                  <div className="flex items-center gap-4">
                    <div 
                      className="flex-1 text-sm lg:text-base font-bold"
                      style={{ 
                        fontFamily: "'Fredoka', sans-serif",
                        color: '#FF69B4'
                      }}
                    >
                      DESIGN & LAYOUT STAFF
                    </div>
                    <a 
                      href="https://drive.google.com/file/d/1g5-FaYwgjqvzG6w6NVmsfSawY39JVI-F/view?usp=drivesdk"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="view-more-btn px-6 py-2 rounded-full text-white text-xs font-bold uppercase"
                      style={{ fontFamily: "'Fredoka', sans-serif" }}
                    >
                      VIEW MORE
                    </a>
                  </div>

                  {/* Role 2 */}
                  <div className="flex items-center gap-4">
                    <div 
                      className="flex-1 text-sm lg:text-base font-bold"
                      style={{ 
                        fontFamily: "'Fredoka', sans-serif",
                        color: '#FF69B4'
                      }}
                    >
                      BULLETIN PUBLICATION DESIGN
                    </div>
                    <a 
                      href="https://drive.google.com/file/d/1zT7bp08tI0XqpYVMsTfiQox6yks_Y6nR/view?usp=drivesdk"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="view-more-btn px-6 py-2 rounded-full text-white text-xs font-bold uppercase"
                      style={{ fontFamily: "'Fredoka', sans-serif" }}
                    >
                      VIEW MORE
                    </a>
                  </div>

                  {/* Role 3 */}
                  <div className="flex items-center gap-4">
                    <div 
                      className="flex-1 text-sm lg:text-base font-bold"
                      style={{ 
                        fontFamily: "'Fredoka', sans-serif",
                        color: '#FF69B4'
                      }}
                    >
                      SECRETARY FOR<br />REAKSITHA WRITING WORKSHOP
                    </div>
                    <a 
                      href="https://drive.google.com/file/d/1wdW8DlmCi4Obouh8lsIeY3ONOOntKms3/view?usp=drivesdk"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="view-more-btn px-6 py-2 rounded-full text-white text-xs font-bold uppercase"
                      style={{ fontFamily: "'Fredoka', sans-serif" }}
                    >
                      VIEW MORE
                    </a>
                  </div>
                </div>

                {/* Info Box */}
                <div 
                  className="mt-8 p-6 rounded-3xl"
                  style={{
                    background: 'linear-gradient(135deg, #FFE5F0 0%, #FFF0F5 100%)',
                    border: '3px solid #FFB6D9'
                  }}
                >
                  <h4 
                    className="text-lg font-extrabold mb-3"
                    style={{ 
                      fontFamily: "'Fredoka', sans-serif",
                      color: '#FF69B4'
                    }}
                  >
                    WHAT I DID IN THIS ORGANIZATION!
                  </h4>
                  <p 
                    className="text-sm leading-relaxed"
                    style={{ 
                      fontFamily: "'Fredoka', sans-serif",
                      color: '#FF69B4',
                      opacity: 0.85
                    }}
                  >
                    IN THIS ORGANIZATION, I LEARNED THE ART OF BLENDING CREATIVITY WITH REAL ORGANIZATIONAL PRACTICES. HERE, I DEVELOPED CONCEPTS AND GRAPHICS FOR DAILY SOCIAL MEDIA CONTENT AND WORKED ALONGSIDE PEERS TO PRODUCE A PUBLISHED DESIGN.
                  </p>
                </div>
              </div>
            </div>

            {/* KOMAKO - FIXED LAYOUT */}
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center fade-in-up delay-200 ${isVisible ? 'visible' : ''}`}>
              {/* Left - Content with header */}
              <div className="space-y-6">
                <h3 
                  className="text-3xl lg:text-4xl font-extrabold"
                  style={{ 
                    fontFamily: "'Fredoka', sans-serif",
                    color: '#FF69B4',
                    lineHeight: '1.2'
                  }}
                >
                  KOMAKO (COMMUNICATION<br />STUDENT CORPORATION)
                </h3>
                
                <p 
                  className="text-base lg:text-lg font-medium"
                  style={{ 
                    fontFamily: "'Fredoka', sans-serif",
                    color: '#FF69B4',
                    opacity: 0.8
                  }}
                >
                  STAFF FOR THE MEDIA COMMUNICATION
                </p>

                <div className="space-y-3">
                  {/* Role */}
                  <div className="flex items-center gap-4">
                    <div 
                      className="flex-1 text-sm lg:text-base font-bold"
                      style={{ 
                        fontFamily: "'Fredoka', sans-serif",
                        color: '#FF69B4'
                      }}
                    >
                      DESIGN STAFF FOR SOCIAL MEDIA
                    </div>
                    <a 
                      href="https://drive.google.com/drive/folders/1hA4ZHhY7No6ro2TnGLzbnG8DaY7u43bW"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="view-more-btn px-6 py-2 rounded-full text-white text-xs font-bold uppercase"
                      style={{ fontFamily: "'Fredoka', sans-serif" }}
                    >
                      VIEW MORE
                    </a>
                  </div>
                </div>

                <p 
                  className="text-base lg:text-lg font-medium pt-4"
                  style={{ 
                    fontFamily: "'Fredoka', sans-serif",
                    color: '#FF69B4',
                    opacity: 0.8
                  }}
                >
                  BEING A PART OF KOMAKO ALLOWED ME TO ENHANCE MY PROFESSIONAL SKILLS AND BALANCING SIKEM SCHEDULES ON A PROFESSIONAL LEVEL WHILE KEEPING UP WITH STANDARDS.
                </p>

                {/* Info Box */}
                <div 
                  className="p-6 rounded-3xl"
                  style={{
                    background: 'linear-gradient(135deg, #FFE5F0 0%, #FFF0F5 100%)',
                    border: '3px solid #FFB6D9'
                  }}
                >
                  <h4 
                    className="text-lg font-extrabold mb-3"
                    style={{ 
                      fontFamily: "'Fredoka', sans-serif",
                      color: '#FF69B4'
                    }}
                  >
                    WHAT I DID IN THIS ORGANIZATION!
                  </h4>
                </div>
              </div>

              {/* Right - Image only */}
              <div className="relative">
                <div className="w-full aspect-[4/3] rounded-[60px] overflow-hidden">
                  <img 
                    src="/Organizational experience/Komako/komako.png" 
                    alt="Komako Team"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Short-term Organizational Experience - SIDE BY SIDE GRID */}
            <div className={`space-y-12 pt-12 fade-in-up delay-300 ${isVisible ? 'visible' : ''}`}>
              <h3 
                className="text-3xl lg:text-4xl font-extrabold text-center"
                style={{ 
                  fontFamily: "'Fredoka', sans-serif",
                  color: '#FF69B4'
                }}
              >
                SHORT-TERM ORGANIZATIONAL EXPERIENCE
              </h3>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* COMPARE Card */}
                <div className={`org-card rounded-[50px] overflow-hidden shadow-xl scale-in delay-400 ${isVisible ? 'visible' : ''}`}
                  style={{ background: 'linear-gradient(135deg, #FFE5F0 0%, #FFF0F5 100%)' }}
                >
                  <div className="p-8 space-y-6">
                    {/* Image */}
                    <div className="aspect-[4/3] rounded-[40px] overflow-hidden">
                      <img 
                        src="/Short term Organization/compare.png" 
                        alt="Communication Party and Recreation"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* Content */}
                    <div className="space-y-4">
                      <h4 
                        className="text-xl lg:text-2xl font-extrabold"
                        style={{ 
                          fontFamily: "'Fredoka', sans-serif",
                          color: '#FF69B4'
                        }}
                      >
                        COMMUNICATION PARTY AND RECREATION<br />(COMPARE)
                      </h4>
                      <p 
                        className="text-sm lg:text-base font-bold"
                        style={{ 
                          fontFamily: "'Fredoka', sans-serif",
                          color: '#FF69B4',
                          opacity: 0.85
                        }}
                      >
                        PROGRAM & CONCEPT DIVISION
                      </p>
                      <p 
                        className="text-xs lg:text-sm leading-relaxed"
                        style={{ 
                          fontFamily: "'Fredoka', sans-serif",
                          color: '#FF69B4',
                          opacity: 0.75
                        }}
                      >
                        LEARNED THE DYNAMICS OF EVENT PLANNING FROM START TO FINISH, TEAMWORK AND TIME MANAGEMENT FOR COMMS STUDENT ORIENTATION DAY
                      </p>
                      
                      {/* Pink box with details */}
                      <div 
                        className="rounded-2xl p-4"
                        style={{ 
                          background: '#FFB5D9',
                        }}
                      >
                        <ul 
                          className="space-y-1 text-xs font-bold"
                          style={{ 
                            fontFamily: "'Fredoka', sans-serif",
                            color: '#FFFFFF'
                          }}
                        >
                          <li>• CONCEPTUALIZED PROGRAM IDEAS</li>
                          <li>• LED PREPARATION OF CAMPUS EXHIBITION</li>
                          <li>• HANDLED PERM OF REFERENCE & CROWD MANAGEMENT</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* KULA NUWUN Card */}
                <div className={`org-card rounded-[50px] overflow-hidden shadow-xl scale-in delay-500 ${isVisible ? 'visible' : ''}`}
                  style={{ background: 'linear-gradient(135dx, #FFE5F0 0%, #FFF0F5 100%)' }}
                >
                  <div className="p-8 space-y-6">
                    {/* Image */}
                    <div className="aspect-[4/3] rounded-[40px] overflow-hidden">
                      <img 
                        src="/Short term Organization/KNP.png" 
                        alt="Kula Nuwun Party 2024"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* Content */}
                    <div className="space-y-4">
                      <h4 
                        className="text-xl lg:text-2xl font-extrabold"
                        style={{ 
                          fontFamily: "'Fredoka', sans-serif",
                          color: '#FF69B4'
                        }}
                      >
                        KULA NUWUN PARTY 2024
                      </h4>
                      <p 
                        className="text-sm lg:text-base font-bold"
                        style={{ 
                          fontFamily: "'Fredoka', sans-serif",
                          color: '#FF69B4',
                          opacity: 0.85
                        }}
                      >
                        SPONSORSHIP TEAM
                      </p>
                      <p 
                        className="text-xs lg:text-sm leading-relaxed"
                        style={{ 
                          fontFamily: "'Fredoka', sans-serif",
                          color: '#FF69B4',
                          opacity: 0.75
                        }}
                      >
                        FIRST-YEAR STUDENT-LED WELCOMING EVENT WHICH TAUGHT ME FUNDING DEALINGS AND MONEY-MANAGEMENT AND EVENT PROPOSITION WITH SPONSORS.
                      </p>
                      
                      {/* Pink box with details */}
                      <div 
                        className="rounded-2xl p-4"
                        style={{ 
                          background: '#FFB5D9',
                        }}
                      >
                        <ul 
                          className="space-y-1 text-xs font-bold"
                          style={{ 
                            fontFamily: "'Fredoka', sans-serif",
                            color: '#FFFFFF'
                          }}
                        >
                          <li>• SUCCESSFULLY CLOSED THE DEAL WITH 3/7 MAJOR SPONSORS</li>
                          <li>• EXPERTLY NEGOTIATED WITH BUS SPONSORS</li>
                          <li>• MANAGED LETTERS & DEALS WITH SPONSORS</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Experience */}
            <div className={`space-y-8 pt-8 fade-in-up delay-400 ${isVisible ? 'visible' : ''}`}>
              <h3 
                className="text-3xl lg:text-4xl font-extrabold"
                style={{ 
                  fontFamily: "'Fredoka', sans-serif",
                  color: '#FF69B4'
                }}
              >
                SOCIAL<br />EXPERIENCE
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Master of Ceremony */}
                <div className={`org-card scale-in delay-500 ${isVisible ? 'visible' : ''}`}>
                  <h4 
                    className="text-lg lg:text-xl font-extrabold mb-4 leading-tight"
                    style={{ 
                      fontFamily: "'Fredoka', sans-serif",
                      color: '#FF69B4'
                    }}
                  >
                    MASTER OF CEREMONY<br />VESAK DAY CELEBRATION<br />2025
                  </h4>
                  <div className="rounded-[40px] overflow-hidden shadow-xl">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img 
                        src="/Social Experience/MC Waisak 2.jpeg" 
                        alt="Master of Ceremony"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Social Service Program */}
                <div className={`org-card scale-in delay-600 ${isVisible ? 'visible' : ''}`}>
                  <h4 
                    className="text-lg lg:text-xl font-extrabold mb-4 leading-tight"
                    style={{ 
                      fontFamily: "'Fredoka', sans-serif",
                      color: '#FF69B4'
                    }}
                  >
                    SOCIAL SERVICE PROGRAM<br />DESIGN TEAM, VOLUNTEER<br />KAMADHIS UGM 2025
                  </h4>
                  <div className="rounded-[40px] overflow-hidden shadow-xl">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img 
                        src="/Social Experience/Social Service.jpeg" 
                        alt="Social Service Program"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Selasar Theatre */}
                <div className={`org-card scale-in delay-600 ${isVisible ? 'visible' : ''}`}>
                  <h4 
                    className="text-lg lg:text-xl font-extrabold mb-4 leading-tight"
                    style={{ 
                      fontFamily: "'Fredoka', sans-serif",
                      color: '#FF69B4'
                    }}
                  >
                    SELASAR THEATRE<br />COMMUNITY AND PROPERTY<br />TEAM 2024
                  </h4>
                  <div className="rounded-[40px] overflow-hidden shadow-xl">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img 
                        src="/Social Experience/Teater Selasar.jpeg" 
                        alt="Selasar Theatre"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}