import React, { useEffect, useRef } from 'react';
import { Phone, MessageCircle } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrolled = window.pageYOffset;
        heroRef.current.style.transform = `translateY(${scrolled * 0.2}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsApp = () => {
    window.open('https://wa.me/4917664056418?text=Hallo,%20ich%20interessiere%20mich%20f%C3%BCr%20Ihre%20Autopflege-Services.', '_blank');
  };

  return (
    <section id="hero" className="relative h-screen overflow-hidden">
      {/* Background Image with Parallax */}
      <div
        ref={heroRef}
        className="absolute inset-0 w-full h-[120%] transition-transform duration-75"
        style={{
          backgroundImage: 'url(https://i.postimg.cc/SKcn3kbD/Whats-App-Image-2025-08-12-at-13-52-31-1.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-70" />
      
      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full pt-48 lg:pt-56 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up opacity-0 animate-delay-300">
           
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-white mb-6 sm:mb-8 leading-tight sm:leading-none tracking-tight transform hover:scale-105 transition-transform duration-500">
              DEIN AUTO<br />
              <span className="text-blue-500 animate-pulse text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">IN BESTFORM</span>
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-gray-200 mb-10 sm:mb-16 font-light max-w-4xl mx-auto opacity-0 animate-fade-in-up animate-delay-600 px-4">
              Autopflege in Bremen – Präzision & Keramik
            </h2>
            
            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12 sm:mb-20 opacity-0 animate-fade-in-up animate-delay-900 px-4">
              <button
                onClick={handleWhatsApp}
                className="group bg-blue-600 hover:bg-blue-700 text-white px-8 sm:px-12 py-4 sm:py-5 font-bold text-lg sm:text-xl transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/25 flex items-center justify-center gap-4 animate-bounce-subtle rounded-lg"
              >
                <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12" />
                Jetzt Termin sichern
              </button>
            </div>

            
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 sm:bottom-12 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce opacity-0 animate-fade-in-up animate-delay-1500">
          <div className="w-6 h-10 sm:w-8 sm:h-12 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 sm:h-4 bg-white rounded-full animate-pulse mt-2 sm:mt-3"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;