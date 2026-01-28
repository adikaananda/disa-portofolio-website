import React, { useEffect, useRef, useState } from 'react';

export default function Skills() {
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

  const skills = [
    {
      name: 'FIGMA',
      icon: '/Skills/Figma.png',
      description: 'DESIGN PROJECTS',
      tags: 'UI/UX | POSTERS | SOCIAL MEDIA DESIGN',
      size: 'large'
    },
    {
      name: 'MyBib',
      icon: '/Skills/my bib.png',
      description: 'AI POWERED CITATION',
      tags: 'REFERENCE MANAGER',
      size: 'large'
    },
    {
      name: 'NOTION',
      icon: '/Skills/Notion.png',
      description: 'NOTETAKING AND',
      tags: 'COURSE ORGANIZATION',
      size: 'large'
    },
    {
      name: 'CANVA',
      icon: '/Skills/canva.png',
      description: 'DESIGN PROJECTS',
      tags: 'SOCIAL MEDIA DESIGN | PRESENTATIONS',
      size: 'large'
    },
    {
      name: 'GOOGLE DRIVE & SHEETS',
      icon: '/Skills/Sheets.png',
      description: 'EVENT ORGANIZATION AND FILE MANAGEMENT',
      tags: '',
      size: 'xlarge',
      multiIcon: true,
      secondIcon: '/Skills/drive.png'
    },
    {
      name: 'PROCREATE',
      icon: '/Skills/procreate.png',
      description: 'DIGITAL ILLUSTRATION TOOL',
      tags: '',
      size: 'medium'
    },
    {
      name: 'GOOGLE DOCS & MS WORD',
      icon: '/Skills/MS Word.png',
      description: 'UNIVERSITY WORK',
      tags: 'PROPOSALS | ESSAYS',
      size: 'large',
      multiIcon: true,
      secondIcon: '/Skills/Docs.png'
    },
    {
      name: 'Google Scholar',
      icon: '/Skills/Scholar.png',
      description: 'RESEARCHING TOOL',
      tags: '',
      size: 'small'
    }
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700;800&display=swap');
        
        .skills-section {
          background: linear-gradient(135deg, #FF69B4 0%, #FF85C1 50%, #FFB366 100%);
          position: relative;
          overflow: hidden;
          scroll-margin-top: 80px;
        }

        .flower-decoration {
          position: absolute;
          object-fit: contain;
          z-index: 1;
          pointer-events: none;
          background: transparent !important;
        }

        .flower-left-top {
          left: -190px;
          top: -190px;
          width: 550px;
          height: 550px;
        }

        .flower-left-middle {
          left: -90px;
          top: 50%;
          transform: translateY(-50%);
          width: 300px;
          height: 300px;
        }

        .flower-left-bottom {
          left: -140px;
          bottom: -210px;
          width: 440px;
          height: 440px;
        }

        .flower-right-top {
          right: -160px;
          top: -160px;
          width: 420px;
          height: 420px;
        }

        .flower-right-middle {
          right: -200px;
          top: 30%;
          transform: translateY(-50%) scaleX(-1);
          width: 420px;
          height: 420px;
        }

        .flower-right-bottom {
          right: -120px;
          bottom: -120px;
          width: 260px;
          height: 260px;
        }

        .skill-card {
          background: white;
          border-radius: 30px;
          border: 5px solid #FFB6D9;
          transition: all 0.3s ease;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
        }

        .skill-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
          border-color: #FF85C1;
        }

        /* Responsive dual-icon layout */
        @media (max-width: 768px) {
          .dual-icon-card {
            flex-direction: column;
            text-align: center;
          }
          
          .dual-icon-card .icon-group {
            justify-content: center;
            margin-bottom: 1rem;
          }
          
          .single-icon-card {
            flex-direction: column;
            text-align: center;
          }
          
          .single-icon-card .flex-shrink-0 {
            margin-bottom: 0.75rem;
          }
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

        .delay-100 { transition-delay: 0.1s; }
        .delay-200 { transition-delay: 0.2s; }
        .delay-300 { transition-delay: 0.3s; }
        .delay-400 { transition-delay: 0.4s; }
        .delay-500 { transition-delay: 0.5s; }
        .delay-600 { transition-delay: 0.6s; }
        .delay-700 { transition-delay: 0.7s; }
        .delay-800 { transition-delay: 0.8s; }
      `}</style>

      <section id="skills" className="skills-section py-20 lg:py-32" ref={sectionRef}>
        {/* Flower Decorations - matching original circle positions */}
        <img src="/Skills/Bunga Kiri.png" alt="" className="flower-decoration flower-left-top" />
        <img src="/Skills/Bunga Kiri.png" alt="" className="flower-decoration flower-left-middle" />
        <img src="/Skills/Bunga Kiri.png" alt="" className="flower-decoration flower-left-bottom" />
        <img src="/Skills/Bunga Kiri.png" alt="" className="flower-decoration flower-right-top" style={{ transform: 'scaleX(-1)' }} />
        <img src="/Skills/Bunga Kiri.png" alt="" className="flower-decoration flower-right-middle" />
        <img src="/Skills/Bunga Kiri.png" alt="" className="flower-decoration flower-right-bottom" style={{ transform: 'scaleX(-1)' }} />

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          
          {/* Header */}
          <div className={`text-center mb-12 fade-in-up ${isVisible ? 'visible' : ''}`}>
            <h2 
              className="text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white mb-4 uppercase"
              style={{ fontFamily: "'Fredoka', sans-serif" }}
            >
              SKILLS & TECHNOLOGY
            </h2>
            <p 
              className="text-white text-base lg:text-lg font-medium uppercase tracking-wide"
              style={{ fontFamily: "'Fredoka', sans-serif" }}
            >
              AN ARRAY OF TECHNOLOGIES USED FOR UNIVERSITY, PROJECTS, AND DESIGNS.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 gap-6">
            
            {/* Row 1 - Three equal cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Figma Card */}
              <div className={`skill-card p-6 flex items-center gap-5 fade-in-up delay-100 ${isVisible ? 'visible' : ''}`}>
                <div className="flex-shrink-0">
                  <img 
                    src={skills[0].icon} 
                    alt={skills[0].name}
                    className="w-16 h-16 object-contain"
                  />
                </div>
                <div className="flex-1">
                  <h3 
                    className="text-xl font-extrabold uppercase mb-1.5"
                    style={{ fontFamily: "'Fredoka', sans-serif", color: '#000' }}
                  >
                    {skills[0].name}
                  </h3>
                  <p 
                    className="text-xs font-bold uppercase mb-1"
                    style={{ fontFamily: "'Fredoka', sans-serif", color: '#E75A8C' }}
                  >
                    {skills[0].description}
                  </p>
                  <p 
                    className="text-[10px] font-medium uppercase leading-tight"
                    style={{ fontFamily: "'Fredoka', sans-serif", color: '#E75A8C' }}
                  >
                    {skills[0].tags}
                  </p>
                </div>
              </div>

              {/* MyBib Card */}
              <div className={`skill-card p-6 flex items-center gap-5 fade-in-up delay-200 ${isVisible ? 'visible' : ''}`}>
                <div className="flex-shrink-0">
                  <img 
                    src={skills[1].icon} 
                    alt={skills[1].name}
                    className="w-16 h-16 object-contain"
                  />
                </div>
                <div className="flex-1">
                  <h3 
                    className="text-xl font-extrabold uppercase mb-1.5"
                    style={{ fontFamily: "'Fredoka', sans-serif", color: '#000' }}
                  >
                    {skills[1].name}
                  </h3>
                  <p 
                    className="text-xs font-bold uppercase mb-1"
                    style={{ fontFamily: "'Fredoka', sans-serif", color: '#E75A8C' }}
                  >
                    {skills[1].description}
                  </p>
                  <p 
                    className="text-[10px] font-medium uppercase"
                    style={{ fontFamily: "'Fredoka', sans-serif", color: '#E75A8C' }}
                  >
                    {skills[1].tags}
                  </p>
                </div>
              </div>

              {/* Notion Card */}
              <div className={`skill-card p-6 flex items-center gap-5 fade-in-up delay-300 ${isVisible ? 'visible' : ''}`}>
                <div className="flex-shrink-0">
                  <img 
                    src={skills[2].icon} 
                    alt={skills[2].name}
                    className="w-16 h-16 object-contain"
                  />
                </div>
                <div className="flex-1">
                  <h3 
                    className="text-xl font-extrabold uppercase mb-1.5"
                    style={{ fontFamily: "'Fredoka', sans-serif", color: '#000'}}
                  >
                    {skills[2].name}
                  </h3>
                  <p 
                    className="text-xs font-bold uppercase mb-1 leading-tight"
                    style={{ fontFamily: "'Fredoka', sans-serif", color: '#E75A8C' }}
                  >
                    {skills[2].description}
                  </p>
                  <p 
                    className="text-[10px] font-medium uppercase"
                    style={{ fontFamily: "'Fredoka', sans-serif", color: '#E75A8C' }}
                  >
                    {skills[2].tags}
                  </p>
                </div>
              </div>
            </div>

            {/* Row 2 - Two cards (1/3 + 2/3) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Canva Card */}
              <div className={`skill-card p-6 flex items-center gap-5 fade-in-up delay-400 ${isVisible ? 'visible' : ''}`}>
                <div className="flex-shrink-0">
                  <img 
                    src={skills[3].icon} 
                    alt={skills[3].name}
                    className="w-16 h-16 object-contain rounded-full"
                  />
                </div>
                <div className="flex-1">
                  <h3 
                    className="text-xl font-extrabold uppercase mb-1.5"
                    style={{ fontFamily: "'Fredoka', sans-serif", color: '#000'}}
                  >
                    {skills[3].name}
                  </h3>
                  <p 
                    className="text-xs font-bold uppercase mb-1"
                    style={{ fontFamily: "'Fredoka', sans-serif", color: '#E75A8C' }}
                  >
                    {skills[3].description}
                  </p>
                  <p 
                    className="text-[10px] font-medium uppercase leading-tight"
                    style={{ fontFamily: "'Fredoka', sans-serif", color: '#E75A8C' }}
                  >
                    {skills[3].tags}
                  </p>
                </div>
              </div>

              {/* Google Drive & Sheets Card - 2/3 width */}
              <div className={`skill-card p-6 flex items-center gap-5 md:col-span-2 fade-in-up delay-500 dual-icon-card ${isVisible ? 'visible' : ''}`}>
                <div className="flex-shrink-0 flex gap-4 icon-group">
                  <img 
                    src={skills[4].secondIcon} 
                    alt="Google Drive"
                    className="w-16 h-16 object-contain"
                  />
                  <img 
                    src={skills[4].icon} 
                    alt="Google Sheets"
                    className="w-16 h-16 object-contain"
                  />
                </div>
                <div className="flex-1">
                  <h3 
                    className="text-xl font-extrabold uppercase mb-2"
                    style={{ fontFamily: "'Fredoka', sans-serif", color: '#000'}}
                  >
                    {skills[4].name}
                  </h3>
                  <p 
                    className="text-xs font-bold uppercase"
                    style={{ fontFamily: "'Fredoka', sans-serif", color: '#E75A8C' }}
                  >
                    {skills[4].description}
                  </p>
                </div>
              </div>
            </div>

            {/* Row 3 - Three cards (small + large + small) */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              
              {/* Procreate Card */}
              <div className={`skill-card p-6 flex flex-col items-center gap-4 md:col-span-3 fade-in-up delay-600 single-icon-card ${isVisible ? 'visible' : ''}`}>
                <div className="flex-shrink-0">
                  <img 
                    src={skills[5].icon} 
                    alt={skills[5].name}
                    className="w-40 h-40 object-contain"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 
                    className="text-lg font-extrabold uppercase mb-1.5 leading-tight"
                    style={{ fontFamily: "'Fredoka', sans-serif", color: '#000' }}
                  >
                    {skills[5].name}
                  </h3>
                  <p 
                    className="text-[10px] font-bold uppercase leading-tight"
                    style={{ fontFamily: "'Fredoka', sans-serif", color: '#E75A8C' }}
                  >
                    {skills[5].description}
                  </p>
                </div>
              </div>

              {/* Google Docs & MS Word Card */}
              <div className={`skill-card p-6 flex flex-col justify-center items-center gap-3 md:col-span-6 fade-in-up delay-700 dual-icon-card ${isVisible ? 'visible' : ''}`}>
                <div className="flex-shrink-0 flex gap-0 icon-group">
                  <img 
                    src={skills[6].secondIcon} 
                    alt="Google Docs"
                    className="w-40 h-40 object-contain"
                  />
                  <img 
                    src={skills[6].icon} 
                    alt="MS Word"
                    className="w-40 h-40 object-contain"
                  />
                </div>
                <div className="flex-1">
                  <h3 
                    className="text-xl font-extrabold uppercase mb-1.5"
                    style={{ fontFamily: "'Fredoka', sans-serif", color: '#000'}}
                  >
                    {skills[6].name}
                  </h3>
                  <p 
                    className="text-xs font-bold uppercase mb-1"
                    style={{ fontFamily: "'Fredoka', sans-serif", color: '#E75A8C' }}
                  >
                    {skills[6].description}
                  </p>
                  <p 
                    className="text-[10px] font-medium uppercase"
                    style={{ fontFamily: "'Fredoka', sans-serif", color: '#E75A8C' }}
                  >
                    {skills[6].tags}
                  </p>
                </div>
              </div>

              {/* Google Scholar Card */}
              <div className={`skill-card p-6 flex flex-col items-center justify-center text-center md:col-span-3 fade-in-up delay-800 ${isVisible ? 'visible' : ''}`}>
                <img 
                  src={skills[7].icon} 
                  alt={skills[7].name}
                  className="w-30 h-30 object-contain mb-3"
                />
                <h3 
                    className="text-xl font-extrabold uppercase mb-1.5"
                    style={{ fontFamily: "'Fredoka', sans-serif", color: '#000'}}
                  >
                    {skills[7].name}
                  </h3>
                <p 
                  className="text-xs font-bold uppercase"
                  style={{ fontFamily: "'Fredoka', sans-serif", color: '#E75A8C' }}
                >
                  {skills[7].description}
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}