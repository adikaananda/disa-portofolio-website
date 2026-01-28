import React, { useEffect, useRef, useState } from 'react';

export default function ProjectsGallery() {
  const [visibleSections, setVisibleSections] = useState(new Set());
  const [selectedImage, setSelectedImage] = useState(null);
  const sectionRefs = useRef({});

  useEffect(() => {
    const observers = {};

    // Create an intersection observer for each section
    Object.keys(sectionRefs.current).forEach(key => {
      const element = sectionRefs.current[key];
      if (!element) return;

      observers[key] = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => new Set([...prev, key]));
          }
        },
        {
          threshold: 0.1,
          rootMargin: '0px 0px -100px 0px'
        }
      );

      observers[key].observe(element);
    });

    return () => {
      Object.values(observers).forEach(observer => observer.disconnect());
    };
  }, []);

  const addToRefs = (key) => (el) => {
    if (el) sectionRefs.current[key] = el;
  };

  const isVisible = (key) => visibleSections.has(key);

  const openImagePopup = (imageSrc) => {
    setSelectedImage(imageSrc);
    document.body.style.overflow = 'hidden';
  };

  const closeImagePopup = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  // University projects data with images
  const universityProjects = [
    {
      image: "/ProjectsGallery/7.png",
      description: "A brand social media post with a youthful approach that reminds students to take care of themselves with Nivea."
    },
    {
      image: "/ProjectsGallery/11.jpg",
      description: "A summary, bright and approach that encourages viewers to use Nivea's new body serum on a hot summer day."
    },
    {
      image: "/ProjectsGallery/9.png",
      description: "Campaigning Nivea's new Super C+ Body Serum with teammates for our visual communications course."
    }
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700;800&display=swap');
        
        .projects-gallery-section {
          background: #FFF5F0;
          position: relative;
          overflow: hidden;
        }

        /* Image Popup Styles */
        .image-popup-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.9);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          padding: 20px;
          animation: fadeIn 0.3s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .image-popup-content {
          max-width: 90vw;
          max-height: 90vh;
          position: relative;
          animation: zoomIn 0.3s ease;
        }

        @keyframes zoomIn {
          from { transform: scale(0.8); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }

        .image-popup-content img {
          max-width: 100%;
          max-height: 90vh;
          object-fit: contain;
          border-radius: 12px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
        }

        .image-popup-close {
          position: absolute;
          top: -50px;
          right: 0;
          background: white;
          color: #FF69B4;
          border: none;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          font-size: 24px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          font-weight: bold;
        }

        .image-popup-close:hover {
          background: #FF69B4;
          color: white;
          transform: rotate(90deg);
        }

        /* Animated gradient waves */
        .wave-gradient {
          position: absolute;
          width: 100%;
          height: 100%;
          background: linear-gradient(180deg, 
            rgba(255, 182, 193, 0.3) 0%, 
            rgba(255, 192, 203, 0.2) 25%,
            rgba(255, 218, 185, 0.2) 50%,
            rgba(255, 192, 203, 0.2) 75%,
            rgba(255, 182, 193, 0.3) 100%
          );
          animation: waveMove 15s ease-in-out infinite;
        }

        @keyframes waveMove {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }

        /* Hero wave background */
        .hero-wave-bg {
          background: linear-gradient(180deg, #FFB5D9 0%, #FFC0D9 50%, #FFD0E5 100%);
          position: relative;
          overflow: hidden;
        }

        .hero-wave-bg::before {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 100%;
          height: 150px;
          background: #FFF5F0;
          clip-path: ellipse(100% 100% at 50% 100%);
        }

        /* Enhanced scroll animations */
        .fade-in-up {
          opacity: 0;
          transform: translateY(60px);
          transition: opacity 1s cubic-bezier(0.4, 0, 0.2, 1), 
                      transform 1s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .fade-in-up.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .fade-in-down {
          opacity: 0;
          transform: translateY(-60px);
          transition: opacity 1s cubic-bezier(0.4, 0, 0.2, 1), 
                      transform 1s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .fade-in-down.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .scale-in {
          opacity: 0;
          transform: scale(0.8) rotate(-5deg);
          transition: opacity 0.8s cubic-bezier(0.34, 1.56, 0.64, 1), 
                      transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .scale-in.visible {
          opacity: 1;
          transform: scale(1) rotate(0deg);
        }

        .slide-in-left {
          opacity: 0;
          transform: translateX(-100px);
          transition: opacity 1s cubic-bezier(0.4, 0, 0.2, 1), 
                      transform 1s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .slide-in-left.visible {
          opacity: 1;
          transform: translateX(0);
        }

        .slide-in-right {
          opacity: 0;
          transform: translateX(100px);
          transition: opacity 1s cubic-bezier(0.4, 0, 0.2, 1), 
                      transform 1s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .slide-in-right.visible {
          opacity: 1;
          transform: translateX(0);
        }

        .zoom-in {
          opacity: 0;
          transform: scale(0.5);
          transition: opacity 0.8s cubic-bezier(0.34, 1.56, 0.64, 1), 
                      transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .zoom-in.visible {
          opacity: 1;
          transform: scale(1);
        }

        .rotate-in {
          opacity: 0;
          transform: rotate(-180deg) scale(0.5);
          transition: opacity 1s cubic-bezier(0.34, 1.56, 0.64, 1), 
                      transform 1s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .rotate-in.visible {
          opacity: 1;
          transform: rotate(0deg) scale(1);
        }

        .flip-in {
          opacity: 0;
          transform: perspective(1000px) rotateY(-90deg);
          transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), 
                      transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .flip-in.visible {
          opacity: 1;
          transform: perspective(1000px) rotateY(0deg);
        }

        /* Stagger delays */
        .delay-100 { transition-delay: 0.1s; }
        .delay-200 { transition-delay: 0.2s; }
        .delay-300 { transition-delay: 0.3s; }
        .delay-400 { transition-delay: 0.4s; }
        .delay-500 { transition-delay: 0.5s; }
        .delay-600 { transition-delay: 0.6s; }
        .delay-700 { transition-delay: 0.7s; }
        .delay-800 { transition-delay: 0.8s; }
        .delay-900 { transition-delay: 0.9s; }
        .delay-1000 { transition-delay: 1s; }
        .delay-1100 { transition-delay: 1.1s; }
        .delay-1200 { transition-delay: 1.2s; }

        /* Project card hover effects */
        .project-card {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
          cursor: pointer;
        }

        .project-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(255, 105, 180, 0.1) 0%, rgba(255, 192, 203, 0.1) 100%);
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .project-card:hover::before {
          opacity: 1;
        }

        .project-card:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 20px 40px rgba(255, 105, 180, 0.3);
        }

        .project-card img {
          transition: transform 0.4s ease;
        }

        .project-card:hover img {
          transform: scale(1.05);
        }

        /* Text box hover effects */
        .text-box-overlay {
          transition: opacity 0.4s ease;
        }

        .project-card:hover .text-box-overlay {
          opacity: 0 !important;
        }

        .text-box-text {
          transition: opacity 0.4s ease, transform 0.4s ease;
        }

        .project-card:hover .text-box-text {
          opacity: 0;
          transform: translateY(20px);
        }

        /* View More button */
        .view-more-btn {
          background: linear-gradient(135deg, #FF69B4 0%, #FF85C1 100%);
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(255, 105, 180, 0.4);
          position: relative;
          overflow: hidden;
          cursor: pointer;
        }

        .view-more-btn::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.3);
          transform: translate(-50%, -50%);
          transition: width 0.6s, height 0.6s;
        }

        .view-more-btn:hover::before {
          width: 300px;
          height: 300px;
        }

        .view-more-btn:hover {
          box-shadow: 0 6px 25px rgba(255, 105, 180, 0.5);
          transform: translateY(-3px);
        }

        /* Section header styling */
        .section-header {
          position: relative;
          display: inline-block;
        }

        .section-header::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 0;
          width: 0%;
          height: 6px;
          background: linear-gradient(90deg, #FF69B4 0%, #FFB5D9 100%);
          border-radius: 3px;
          transition: width 1s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .section-header.visible::after {
          width: 100%;
        }

        /* Masonry-like grid for personal projects */
        .masonry-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 16px;
          grid-auto-flow: dense;
        }

        .masonry-item-large {
          grid-column: span 2;
          grid-row: span 2;
        }

        .masonry-item-wide {
          grid-column: span 2;
        }

        .masonry-item-tall {
          grid-row: span 2;
        }

        @media (max-width: 768px) {
          .masonry-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          
          .masonry-item-large,
          .masonry-item-wide {
            grid-column: span 1;
          }

          .image-popup-close {
            top: -40px;
            width: 35px;
            height: 35px;
            font-size: 20px;
          }
        }
      `}</style>

      <section id="projects" className="projects-gallery-section py-0">
        <div className="wave-gradient"></div>

        {/* Image Popup Modal */}
        {selectedImage && (
          <div className="image-popup-overlay" onClick={closeImagePopup}>
            <div className="image-popup-content" onClick={(e) => e.stopPropagation()}>
              <button className="image-popup-close" onClick={closeImagePopup}>
                ×
              </button>
              <img src={selectedImage} alt="Enlarged view" />
            </div>
          </div>
        )}

        {/* HERO SECTION */}
        <div className="hero-wave-bg py-24 lg:py-32 relative" ref={addToRefs('hero')}>
          <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center relative z-10">
            <h1 
              className={`text-5xl lg:text-7xl font-extrabold text-white mb-6 zoom-in ${isVisible('hero') ? 'visible' : ''}`}
              style={{ 
                fontFamily: "'Fredoka', sans-serif",
                textShadow: '0 4px 20px rgba(0,0,0,0.1)'
              }}
            >
              PROJECTS GALLERY
            </h1>
            <p 
              className={`text-lg lg:text-xl font-medium text-white max-w-3xl mx-auto fade-in-up delay-300 ${isVisible('hero') ? 'visible' : ''}`}
              style={{ 
                fontFamily: "'Fredoka', sans-serif",
                textShadow: '0 2px 10px rgba(0,0,0,0.1)'
              }}
            >
              THIS PAGE IS DEDICATED TO AN ARRAY OF PROJECTS I HAVE CREATED FOR<br />
              UNIVERSITY, COMPETITIONS, COMMISSIONS, AND PERSONAL PROJECTS.
            </p>

            {/* Featured Projects Grid */}
            <div className={`grid grid-cols-2 lg:grid-cols-3 gap-6 mt-16 fade-in-up delay-500 ${isVisible('hero') ? 'visible' : ''}`}>
              <div 
                className={`project-card rounded-3xl overflow-hidden shadow-xl bg-white scale-in delay-600 ${isVisible('hero') ? 'visible' : ''}`}
                onClick={() => openImagePopup('/ProjectsGallery/1.jpg')}
              >
                <div className="aspect-square">
                  <img 
                    src="/ProjectsGallery/1.jpg" 
                    alt="Crochet Project"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div 
                className={`project-card rounded-3xl overflow-hidden shadow-xl bg-white scale-in delay-700 ${isVisible('hero') ? 'visible' : ''}`}
                onClick={() => openImagePopup('/ProjectsGallery/2.jpg')}
              >
                <div className="aspect-square">
                  <img 
                    src="/ProjectsGallery/2.jpg" 
                    alt="Nivea Product"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div 
                className={`project-card rounded-3xl overflow-hidden shadow-xl bg-white col-span-2 lg:col-span-1 lg:row-span-2 scale-in delay-800 ${isVisible('hero') ? 'visible' : ''}`}
                onClick={() => openImagePopup('/ProjectsGallery/3.jpeg')}
              >
                <div className="h-full">
                  <img 
                    src="/ProjectsGallery/3.jpeg" 
                    alt="Butterfly Illustration"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div 
                className={`project-card rounded-3xl overflow-hidden shadow-xl bg-white col-span-2 scale-in delay-900 ${isVisible('hero') ? 'visible' : ''}`}
                onClick={() => openImagePopup('/ProjectsGallery/5.jpeg')}
              >
                <div className="aspect-[2/1]">
                  <img 
                    src="/ProjectsGallery/5.jpeg" 
                    alt="Board Game Design"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div 
                className={`project-card rounded-3xl overflow-hidden shadow-xl bg-white scale-in delay-1000 ${isVisible('hero') ? 'visible' : ''}`}
                onClick={() => openImagePopup('/ProjectsGallery/6.jpg')}
              >
                <div className="aspect-square">
                  <img 
                    src="/ProjectsGallery/6.jpg" 
                    alt="Bulletin Design"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div 
                className={`project-card rounded-3xl overflow-hidden shadow-xl bg-white scale-in delay-1100 ${isVisible('hero') ? 'visible' : ''}`}
                onClick={() => openImagePopup('/ProjectsGallery/4.jpeg')}
              >
                <div className="aspect-square">
                  <img 
                    src="/ProjectsGallery/4.jpeg" 
                    alt="Magazine Cover"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div 
                className={`project-card rounded-3xl overflow-hidden shadow-xl bg-white scale-in delay-1200 ${isVisible('hero') ? 'visible' : ''}`}
                onClick={() => openImagePopup('/ProjectsGallery/26.jpeg')}
              >
                <div className="aspect-square">
                  <img 
                    src="/ProjectsGallery/26.jpeg" 
                    alt="Magazine Cover"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* More Projects Button - Changed arrow direction to down */}
            <a 
              href="#university-projects"
              className={`view-more-btn inline-flex items-center gap-3 px-10 py-4 rounded-full text-white text-lg font-extrabold uppercase mt-12 zoom-in delay-1200 ${isVisible('hero') ? 'visible' : ''}`}
              style={{ fontFamily: "'Fredoka', sans-serif" }}
            >
              MORE PROJECTS RIGHT HERE 
    
            </a>
          </div>
        </div>

        {/* UNIVERSITY PROJECTS SECTION */}
        <div id="university-projects" className="py-24 relative z-10" ref={addToRefs('university')}>
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 
                  className={`section-header text-4xl lg:text-5xl font-extrabold mb-4 slide-in-left ${isVisible('university') ? 'visible' : ''}`}
                  style={{ 
                    fontFamily: "'Fredoka', sans-serif",
                    color: '#FF8C00'
                  }}
                >
                  UNIVERSITY PROJECTS
                </h2>
              </div>
              <p 
                className={`text-sm lg:text-base font-medium max-w-md text-right slide-in-right ${isVisible('university') ? 'visible' : ''}`}
                style={{ 
                  fontFamily: "'Fredoka', sans-serif",
                  color: '#FF8C00',
                  opacity: 0.8
                }}
              >
                THIS PAGE IS DEDICATED TO AN ARRAY OF PROJECTS I
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {universityProjects.map((project, index) => (
                <div key={index} className={`flip-in delay-${(index + 2) * 100} ${isVisible('university') ? 'visible' : ''}`}>
                  <div 
                    className="project-card rounded-3xl overflow-hidden shadow-xl bg-white"
                    onClick={() => openImagePopup(project.image)}
                  >
                    <img 
                      src={project.image} 
                      alt={`University Project ${index + 1}`}
                      className="w-full aspect-square object-cover"
                    />
                  </div>
                  <p 
                    className="text-xs lg:text-sm font-medium mt-4 leading-relaxed"
                    style={{ 
                      fontFamily: "'Fredoka', sans-serif",
                      color: '#FF69B4'
                    }}
                  >
                    {project.description}
                  </p>
                  <button 
                    onClick={() => openImagePopup(project.image)}
                    className="view-more-btn px-6 py-2 rounded-full text-white text-xs font-bold uppercase mt-4"
                    style={{ fontFamily: "'Fredoka', sans-serif" }}
                  >
                    VIEW MORE
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* BRANDING PROJECTS SECTION */}
        <div className="py-24 relative z-10" ref={addToRefs('branding')}>
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="flex justify-between items-start mb-12">
              <h2 
                className={`section-header text-4xl lg:text-5xl font-extrabold slide-in-left ${isVisible('branding') ? 'visible' : ''}`}
                style={{ 
                  fontFamily: "'Fredoka', sans-serif",
                  color: '#FF69B4'
                }}
              >
                BRANDING PROJECTS
              </h2>
              <p 
                className={`text-sm lg:text-base font-medium max-w-md text-right slide-in-right ${isVisible('branding') ? 'visible' : ''}`}
                style={{ 
                  fontFamily: "'Fredoka', sans-serif",
                  color: '#FF69B4',
                  opacity: 0.8
                }}
              >
                LOGOS AND DESIGN SYSTEMS FOR PERSONAL AND<br />
                OCCASSIONAL CUSTOMIZED PROJECTS FOR PEERS.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { src: "/ProjectsGallery/13.png", delay: "delay-200" },
                { src: "/ProjectsGallery/17.png", delay: "delay-300" },
                { src: "/ProjectsGallery/15.png", delay: "delay-400" },
                { src: "/ProjectsGallery/16.PNG", delay: "delay-500" }
              ].map((project, index) => (
                <div 
                  key={index} 
                  className={`project-card rounded-3xl overflow-hidden shadow-xl bg-white rotate-in ${project.delay} ${isVisible('branding') ? 'visible' : ''}`}
                  onClick={() => openImagePopup(project.src)}
                >
                  <div className="aspect-square flex items-center justify-center p-8">
                    <img 
                      src={project.src} 
                      alt={`Brand Logo ${index + 1}`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* KAMADHIS UGM Section */}
            <div className="mt-16" ref={addToRefs('kamadhis')}>
              <h3 
                className={`text-2xl lg:text-3xl font-extrabold mb-6 fade-in-down ${isVisible('kamadhis') ? 'visible' : ''}`}
                style={{ 
                  fontFamily: "'Fredoka', sans-serif",
                  color: '#FF69B4'
                }}
              >
                • KAMADHIS UGM
              </h3>

              <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                {[
                  { src: "ProjectsGallery/18.png", text: "A design celebrating global access to information.", delay: "delay-100" },
                  { src: "ProjectsGallery/19.png", text: "Celebrating World Telecommunication Day through communication.", delay: "delay-200" },
                  { src: "ProjectsGallery/21.png", text: "Celebrating linguistic and cultural diversity on Mother Language Day.", delay: "delay-300" },
                  { src: "ProjectsGallery/20.png", hasDouble: true, src2: "ProjectsGallery/23.PNG", delay: "delay-400" },
                  { src: "ProjectsGallery/22.PNG", hasDouble: true, src2: "ProjectsGallery/24.PNG", delay: "delay-500" }
                ].map((item, index) => (
                  <div 
                    key={index}
                    className={`project-card rounded-3xl overflow-hidden shadow-xl bg-gradient-to-b from-blue-100 to-green-100 scale-in ${item.delay} ${isVisible('kamadhis') ? 'visible' : ''}`}
                    onClick={() => openImagePopup(item.src)}
                  >
                    <div className="aspect-square">
                      <img src={item.src} alt="" />
                      {item.hasDouble && (
                        <div className="aspect-square">
                          <img src={item.src2} alt="" />
                        </div>
                      )}
                      {item.text && (
                        <div 
                          className="p-7"
                          style={{ 
                            fontFamily: "'Fredoka', sans-serif",
                            color: '#FF69B4',
                            lineHeight: '1.8'
                          }}
                        >
                          <p>{item.text}</p>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* KOMAKO Section */}
            <div className="mt-16" ref={addToRefs('komako')}>
              <h3 
                className={`text-2xl lg:text-3xl font-extrabold mb-6 fade-in-down ${isVisible('komako') ? 'visible' : ''}`}
                style={{ 
                  fontFamily: "'Fredoka', sans-serif",
                  color: '#FF69B4'
                }}
              >
                • KOMAKO
              </h3>

              <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                {[25, 26, 27, 28, 29, 30, 31].map((num, index) => (
                  <div 
                    key={num}
                    className={`project-card rounded-3xl overflow-hidden shadow-xl bg-gradient-to-b from-blue-100 to-green-100 zoom-in delay-${(index + 1) * 100} ${isVisible('komako') ? 'visible' : ''}`}
                    onClick={() => openImagePopup(`ProjectsGallery/${num}.jpeg`)}
                  >
                    <div className="aspect-square">
                      <img src={`ProjectsGallery/${num}.jpeg`} alt="" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* PERSONAL PROJECTS SECTION */}
        <div className="py-24 relative z-10" ref={addToRefs('personal')}>
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <h2 
              className={`section-header text-4xl lg:text-5xl font-extrabold mb-12 text-center fade-in-down ${isVisible('personal') ? 'visible' : ''}`}
              style={{ 
                fontFamily: "'Fredoka', sans-serif",
                color: '#FF69B4'
              }}
            >
              PERSONAL PROJECTS | ILLUSTRATIONS | PAINTING
            </h2>

            {/* Masonry Grid */}
            <div className="masonry-grid">
              <div 
                className={`masonry-item-large project-card rounded-3xl overflow-hidden shadow-xl bg-gradient-to-b from-white to-white slide-in-left delay-200 ${isVisible('personal') ? 'visible' : ''}`}
                onClick={() => openImagePopup('ProjectsGallery/32.jpeg')}
              >
                <div className="w-full h-full">
                  <img src="ProjectsGallery/32.jpeg" alt="" />
                  <div 
                    className="p-7"
                    style={{ 
                      fontFamily: "'Fredoka', sans-serif",
                      color: '#FF69B4',
                      lineHeight: '1.8'
                    }}
                  >
                    <p>
                      A hand-drawn pencil sketch portraying a woman in side profile, emphasizing delicate facial features, expressive shading, and flowing hair. This illustration reflects attention to detail, patience, and sensitivity.
                    </p>
                  </div>
                </div>
              </div>

              <div 
                className={`project-card rounded-3xl overflow-hidden shadow-xl bg-gradient-to-b from-white to-white slide-in-right delay-300 ${isVisible('personal') ? 'visible' : ''}`}
                onClick={() => openImagePopup('ProjectsGallery/37.jpeg')}
              >
                <div className="aspect-square">
                  <img src="ProjectsGallery/37.jpeg" alt="" />
                  <img src="ProjectsGallery/38.jpeg" alt="" />
                </div>
              </div>

              <div 
                className={`masonry-item-wide project-card rounded-3xl overflow-hidden shadow-xl bg-gradient-to-b from-white to-white zoom-in delay-400 ${isVisible('personal') ? 'visible' : ''}`}
                onClick={() => openImagePopup('ProjectsGallery/33.jpeg')}
              >
                <div className="aspect-[2/1]">
                  <img src="ProjectsGallery/33.jpeg" alt="" />
                  <div 
                    className="p-7"
                    style={{ 
                      fontFamily: "'Fredoka', sans-serif",
                      color: '#FF69B4',
                      lineHeight: '1.8'
                    }}
                  >
                    <p>
                      An expressive illustration of a rib cage entwined.
                    </p>
                  </div>
                </div>
              </div>

              <div 
                className={`masonry-item-tall project-card rounded-3xl overflow-hidden shadow-xl bg-gradient-to-b from-white to-white rotate-in delay-500 ${isVisible('personal') ? 'visible' : ''}`}
                onClick={() => openImagePopup('ProjectsGallery/36.jpeg')}
              >
                <div className="aspect-[1/2]">
                  <img src="ProjectsGallery/36.jpeg" alt="" />
                  <img src="ProjectsGallery/34.jpeg" alt="" />
                </div>
              </div>

              <div 
                className={`project-card rounded-3xl overflow-hidden shadow-xl bg-gradient-to-b from-blue-100 to-green-100 flip-in delay-600 ${isVisible('personal') ? 'visible' : ''}`}
                onClick={() => openImagePopup('ProjectsGallery/35.jpeg')}
              >
                <div className="aspect-square">
                  <img src="ProjectsGallery/35.jpeg" alt="" />
                </div>
              </div>

              <div 
                className={`masonry-item-wide project-card rounded-3xl overflow-hidden shadow-xl bg-gradient-to-b from-blue-100 to-green-100 scale-in delay-700 h-fit ${isVisible('personal') ? 'visible' : ''}`}
                onClick={() => openImagePopup('ProjectsGallery/5.jpeg')}
              >
                <div className="aspect-[2/1]">
                  <img src="ProjectsGallery/5.jpeg" alt="" />
                </div>
              </div>
            </div>

            {/* Bottom Text Boxes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
              <div 
                className={`project-card rounded-3xl overflow-hidden shadow-xl bg-gradient-to-b from-blue-100 to-green-100 slide-in-left delay-200 ${isVisible('personal') ? 'visible' : ''}`}
                onClick={() => openImagePopup('ProjectsGallery/10.png')}
              >
                <div className="aspect-[3/2] relative">
                  <img 
                    src="ProjectsGallery/10.png" 
                    alt="" 
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="text-box-overlay absolute inset-0 bg-black opacity-50"></div>
                  
                  <div className="absolute inset-0 flex items-end p-8">
                    <p 
                      className="text-box-text text-xs lg:text-sm font-medium leading-relaxed relative z-10"
                      style={{ 
                        fontFamily: "'Fredoka', sans-serif",
                        color: '#FFB5D9'
                      }}
                    >
                    MY TAKE ON CONTENT<br/>
                    MARKETING AND DESIGNING<br/>
                    THE FRONT PAGE OF THE<br/>
                    CONVERSE RUN STAR TRAINER.<br/>
                    THE IDEA? SHOES THAT MAKE<br/>
                    YOU FEEL CONFIDENT, BRAVE,<br/>
                    AND UPLIFTED ALL THE TIME.
                    </p>
                  </div>
                </div>
              </div>

              <div 
                className={`project-card rounded-3xl overflow-hidden shadow-xl bg-gradient-to-b from-blue-100 to-green-100 slide-in-right delay-400 ${isVisible('personal') ? 'visible' : ''}`}
                onClick={() => openImagePopup('ProjectsGallery/8.jpg')}
              >
                <div className="aspect-[3/2] relative">
                  <img 
                    src="ProjectsGallery/8.jpg" 
                    alt="" 
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="text-box-overlay absolute inset-0 bg-black opacity-30"></div>
                  
                  <div className="absolute inset-0 flex items-end p-8">
                    <p 
                      className="text-box-text text-xs lg:text-sm font-medium leading-relaxed relative z-10"
                      style={{ 
                        fontFamily: "'Fredoka', sans-serif",
                        color: '#FFB5D9'
                      }}
                    >
                    A PHOTOGRAPHED IMAGE OF<br/>
                    MY FAVORITE PERFUME,<br/>
                    THE ELEA SERIES BY HMNS,<br/>
                    CREATED TO EXEMPLIFY<br/>
                    OBJECT AND BRAND<br/>
                    PHOTOGRAPHY FOR MY<br/>
                    VISUAL COMMUNICATIONS<br/>
                    COURSE. FLOWERS AND SOFT<br/>
                    COLOR NUANCES REFLECT<br/>
                    ITS SWEET, FLOWERY,<br/>
                    DREAMY, AND FEMININE<br/>
                    AROMA.
                    </p>
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