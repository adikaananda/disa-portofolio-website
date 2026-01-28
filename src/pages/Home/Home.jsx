import React, { useState, useEffect } from 'react';

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    setTimeout(() => setIsLoaded(true), 100);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&display=swap');
        
        .hero-section {
          background: #FFFFFF;
          min-height: 100vh;
          padding-top: 80px;
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
        }
        
        .yellow-circle {
          position: absolute;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle at 30% 40%, #FFF9E6 0%, #FFE8C5 25%, #FFD9A8 50%, #FFF4E0 75%, transparent 100%);
          border-radius: 50%;
          top: 55%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 0;
          opacity: 0;
          animation: fadeInCircle 1.2s ease-out 0.3s forwards, pulseGlow 6s ease-in-out 1.5s infinite;
          filter: blur(40px);
        }
        
        .yellow-circle::before {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at 70% 60%, rgba(255, 235, 180, 0.4) 0%, transparent 60%);
          border-radius: 50%;
          animation: rotate 20s linear infinite;
        }
        
        @keyframes fadeInCircle {
          to {
            opacity: 0.7;
          }
        }
        
        @keyframes pulseGlow {
          0%, 100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.7;
          }
          50% {
            transform: translate(-50%, -50%) scale(1.05);
            opacity: 0.8;
          }
        }
        
        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        .content-wrapper {
          position: relative;
          z-index: 1;
          width: 100%;
        }
        
        /* Opening Animations */
        .fade-slide-left {
          opacity: 0;
          transform: translateX(-50px);
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .fade-slide-left.active {
          opacity: 1;
          transform: translateX(0);
        }
        
        .fade-scale-up {
          opacity: 0;
          transform: scale(0.8);
          transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .fade-scale-up.active {
          opacity: 1;
          transform: scale(1);
        }
        
        .fade-slide-right {
          opacity: 0;
          transform: translateX(50px);
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .fade-slide-right.active {
          opacity: 1;
          transform: translateX(0);
        }
        
        .stagger-fade-in > * {
          opacity: 0;
          transform: translateY(20px);
          animation: staggerIn 0.6s ease-out forwards;
        }
        
        .stagger-fade-in.active > *:nth-child(1) { animation-delay: 0.1s; }
        .stagger-fade-in.active > *:nth-child(2) { animation-delay: 0.2s; }
        .stagger-fade-in.active > *:nth-child(3) { animation-delay: 0.3s; }
        .stagger-fade-in.active > *:nth-child(4) { animation-delay: 0.4s; }
        .stagger-fade-in.active > *:nth-child(5) { animation-delay: 0.5s; }
        
        @keyframes staggerIn {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .interest-stagger > * {
          opacity: 0;
          transform: translateX(30px);
          animation: slideInRight 0.5s ease-out forwards;
        }
        
        .interest-stagger.active > *:nth-child(1) { animation-delay: 0.6s; }
        .interest-stagger.active > *:nth-child(2) { animation-delay: 0.75s; }
        .interest-stagger.active > *:nth-child(3) { animation-delay: 0.9s; }
        
        @keyframes slideInRight {
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .btn-explore {
          background: linear-gradient(135deg, #E85D8A 0%, #F06292 100%);
          box-shadow: 0 4px 15px rgba(232, 93, 138, 0.3);
          transition: all 0.3s ease;
          color: white;
        }
        
        .btn-explore:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(232, 93, 138, 0.4);
          color: white;
        }
        
        .btn-chat {
          background: #FFFFFF;
          border: 2px solid #E85D8A;
          color: #E85D8A;
          transition: all 0.3s ease;
        }
        
        .btn-chat:hover {
          background: #E85D8A;
          color: white !important;
          transform: translateY(-2px);
        }
        
        .btn-chat:hover span {
          filter: grayscale(1) brightness(2);
        }
        
        .interest-tag {
          background: #FFFFFF;
          border: 2px solid #E85D8A;
          transition: all 0.3s ease;
          display: block;
          width: fit-content;
          color: #E85D8A;
        }
        
        .interest-tag:hover {
          background: #E85D8A;
          color: white !important;
          transform: translateX(5px);
        }
        
        .character-image {
          animation: float 4s ease-in-out infinite;
          filter: drop-shadow(0 15px 40px rgba(232, 93, 138, 0.25));
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
      `}</style>

      <section id="home" className="hero-section">
        {/* Enhanced Yellow circle background with gradient */}
        <div className="yellow-circle"></div>
        
        <div className="content-wrapper max-w-7xl mx-auto px-6 lg:px-12 ">
          
          {/* 3 Column Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-3 items-center ">
            
            {/* LEFT COLUMN - Text Content with slide-in animation */}
            <div className={`text-left space-y-4 fade-slide-left ${isLoaded ? 'active' : ''}`}>
              <h1 
                className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
                style={{ 
                  fontFamily: "'Fredoka', sans-serif",
                  color: '#E85D8A'
                }}
              >
                HELLO, I'M DISA
              </h1>
              
              <div className={`space-y-1 stagger-fade-in ${isLoaded ? 'active' : ''}`}>
                <p 
                  className="text-base lg:text-lg font-semibold uppercase tracking-wide"
                  style={{ 
                    fontFamily: "'Fredoka', sans-serif",
                    color: '#E85D8A'
                  }}
                >
                  IUP COMMUNICATION SCIENCE
                </p>
                <p 
                  className="text-sm lg:text-base font-medium uppercase tracking-wide"
                  style={{ 
                    fontFamily: "'Fredoka', sans-serif",
                    color: '#E85D8A',
                    opacity: 0.8
                  }}
                >
                  UNDERGRADUATE
                </p>
              </div>
              
              <p 
                className="text-lg lg:text-xl font-semibold pt-1"
                style={{ 
                  fontFamily: "'Fredoka', sans-serif",
                  color: '#E85D8A'
                }}
              >
                Gadjah Mada University
              </p>
              
              {/* Buttons */}
              <div className="flex flex-wrap gap-3 pt-6">
                <a 
                  href="https://docs.google.com/document/d/18C2wiBPP1zip9G5E5Z8Yn0UxX3IJVb-ypmCSeW9sOfA/edit?usp=drivesdk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-explore px-7 py-3 rounded-full font-semibold text-sm uppercase tracking-wide inline-block"
                  style={{ fontFamily: "'Fredoka', sans-serif" }}
                >
                  Review CV
                </a>
                
                <a 
                  href="https://wa.me/6281283315546"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-chat px-7 py-3 rounded-full font-semibold text-sm uppercase tracking-wide flex items-center gap-2"
                  style={{ fontFamily: "'Fredoka', sans-serif" }}
                >
                  <span>💬</span> Let's Chat
                </a>
              </div>
            </div>
            
            {/* CENTER COLUMN - Character Image (BIGGER) with scale animation */}
            <div className={`flex items-center justify-center fade-scale-up ${isLoaded ? 'active' : ''}`}>
              <div className="character-image relative w-full max-w-md lg:max-w-lg xl:max-w-xl">
                <img 
                  src="/Hero/Bg.png" 
                  alt="Disa Character"
                  className="w-full h-auto scale-125 lg:scale-130"
                />
              </div>
            </div>
            
            {/* RIGHT COLUMN - Field of Interests with slide-in animation */}
            <div className={`text-left space-y-3 fade-slide-right ${isLoaded ? 'active' : ''}`}>
              <h3 
                className="text-sm lg:text-base font-semibold italic uppercase tracking-wider mb-4"
                style={{ 
                  fontFamily: "'Fredoka', sans-serif",
                  color: '#E85D8A'
                }}
              >
                FIELD OF INTERESTS
              </h3>
              
              <div className={`space-y-2 interest-stagger ${isLoaded ? 'active' : ''}`}>
                <div 
                  className="interest-tag px-5 py-2.5 rounded-full font-semibold text-xs uppercase tracking-wide cursor-pointer"
                  style={{ fontFamily: "'Fredoka', sans-serif" }}
                >
                  STRATEGIC COMMUNICATION
                </div>
                
                <div 
                  className="interest-tag px-5 py-2.5 rounded-full font-semibold text-xs uppercase tracking-wide cursor-pointer"
                  style={{ fontFamily: "'Fredoka', sans-serif" }}
                >
                  DIGITAL MARKETING
                </div>
                
                <div 
                  className="interest-tag px-5 py-2.5 rounded-full font-semibold text-xs uppercase tracking-wide cursor-pointer"
                  style={{ fontFamily: "'Fredoka', sans-serif" }}
                >
                  VISUAL DESIGN
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
}