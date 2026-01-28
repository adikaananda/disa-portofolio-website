import React from 'react';
import { Linkedin, Mail, Instagram, Phone } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Instagram, href: 'https://instagram.com/disadhsp', label: 'Instagram' },
    { icon: Linkedin, href: 'https://linkedin.com/in/putudisakdh', label: 'LinkedIn' },
    { 
      icon: ({ size, className }) => (
        <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" fill="currentColor"/>
        </svg>
      ), 
      href: 'https://wa.me/6281283315546', 
      label: 'WhatsApp' 
    },
    { icon: Mail, href: 'mailto:disadharmasaputra@gmail.com', label: 'Email' },
  ];

  const footerLinks = [
    {
      title: 'Navigation',
      links: [
        { label: 'Home', id: 'home' },
        { label: 'About Me', id: 'about' },
        { label: 'Skills', id: 'skills' },
        { label: 'Achievements', id: 'achievements' },
        { label: 'Organizations', id: 'organizations' },
        { label: 'Projects Gallery', id: 'projects' },
       
      ]
    },
    {
      title: 'Social',
      links: [
        { label: 'Instagram', href: 'https://instagram.com/disadhsp' },
        { label: 'LinkedIn', href: 'https://linkedin.com/in/putudisakdh' },
        { label: 'WhatsApp', href: 'https://wa.me/6281283315546' },
      ]
    }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700;800&display=swap');
        
        .footer-bg {
          background: linear-gradient(135deg, #FF69B4 0%, #FF85C8 50%, #FFB6D9 100%);
          font-family: 'Fredoka', sans-serif;
        }
        
        .footer-border {
          border-color: rgba(255, 255, 255, 0.2);
        }
        
        .social-icon-card {
          background: rgba(255, 255, 255, 0.15);
          border: 2px solid rgba(255, 255, 255, 0.3);
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
        }
        
        .social-icon-card:hover {
          background: rgba(255, 255, 255, 0.25);
          border-color: rgba(255, 255, 255, 0.5);
          transform: translateY(-3px);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
        }
        
        .footer-link {
          transition: all 0.3s ease;
        }
        
        .footer-link:hover {
          transform: translateX(3px);
        }
        
        .availability-badge {
          background: rgba(255, 255, 255, 0.2);
          border: 2px solid rgba(255, 255, 255, 0.4);
        }
        
        .pulse-dot {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
      `}</style>

      <footer className="relative footer-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Main Footer */}
          <div className="py-16 grid grid-cols-1 md:grid-cols-12 gap-12">
            {/* Brand Column */}
            <div className="md:col-span-5 space-y-6">
              <div>
                <h3 className="text-3xl font-bold tracking-tight mb-3">
                  <span className="text-white">DISA</span>
                  <span className="text-white opacity-80">.</span>
                </h3>
                <p className="text-white text-[15px] leading-relaxed max-w-sm font-medium opacity-90">
                  Communication Science Student crafting creative solutions in media, marketing, and UI/UX design.
                </p>
              </div>
              
              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="group relative w-12 h-12 flex items-center justify-center rounded-xl social-icon-card text-white"
                    >
                      <Icon size={20} className="relative z-10" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Links Columns */}
            {footerLinks.map((column, idx) => (
              <div key={idx} className="md:col-span-3">
                <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-6">
                  {column.title}
                </h4>
                <ul className="space-y-3">
                  {column.links.map((link, index) => (
                    <li key={index}>
                      {link.id ? (
                        <button
                          onClick={() => scrollToSection(link.id)}
                          className="text-white opacity-90 hover:opacity-100 transition-all duration-300 text-[15px] font-medium footer-link"
                        >
                          {link.label}
                        </button>
                      ) : (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-white opacity-90 hover:opacity-100 transition-all duration-300 text-[15px] font-medium footer-link group"
                        >
                          {link.label}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Contact Column */}
            <div className="md:col-span-4">
              <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-6">
                Get in Touch
              </h4>
              <div className="space-y-4">
                <div className="space-y-2">
                  <a 
                    href="mailto:disadharmasaputra@gmail.com"
                    className="block text-white opacity-90 hover:opacity-100 transition-all duration-300 text-[15px] font-medium"
                  >
                    disadharmasaputra@gmail.com
                  </a>
                  <a 
                    href="mailto:putudisakalindadharmasaputra@mail.ugm.ac.id"
                    className="block text-white opacity-90 hover:opacity-100 transition-all duration-300 text-[15px] font-medium"
                  >
                    putudisakalindadharmasaputra@mail.ugm.ac.id
                  </a>
                </div>
                
                <a 
                  href="tel:+6281283315546"
                  className="flex items-center gap-2 text-white opacity-90 hover:opacity-100 transition-all duration-300 text-[15px] font-medium"
                >
                  <Phone size={16} />
                  +62 812-8331-5546
                </a>
                
                <div className="text-white opacity-90 text-[15px] font-medium space-y-1">
                  <p>Tanggerang Selatan, Banten</p>
                  <p>Indonesia</p>
                </div>
                
                <div className="inline-flex items-center gap-2 px-4 py-2 availability-badge rounded-full">
                  <div className="w-2 h-2 bg-white rounded-full pulse-dot"></div>
                  <span className="text-white text-xs font-bold tracking-wide uppercase">Available for opportunities</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="footer-border border-t py-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-white opacity-80 text-sm font-medium">
                © {currentYear} Putu Disa Kalinda Dharmasaputra. All rights reserved.
              </p>
              <div className="flex items-center gap-6 text-sm">
                <button className="text-white opacity-80 hover:opacity-100 transition-all duration-300 font-medium">
                  Privacy Policy
                </button>
                <button className="text-white opacity-80 hover:opacity-100 transition-all duration-300 font-medium">
                  Terms of Service
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}