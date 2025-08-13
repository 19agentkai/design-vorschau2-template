import React from 'react';
import { Car, Sparkles, Shield, Droplets, Zap, Wind, Trash2, PawPrint, Circle, Eye, Flame, Star, Gem, Glasses as Glass, Phone } from 'lucide-react';

const Services = () => {
  const mainServices = [
    {
      title: 'DIE VOLLFOLIERUNG',
      subtitle: 'Fahrzeugfolierung mit über 300+ verschiedene Farben in matt & glanz.',
      image: 'https://i.postimg.cc/Ss7DyBCG/f72e7568-e366-4d39-bd91-7021ab2b55ce.avif',
      color: 'from-black/40 to-black/60'
    },
    {
      title: 'LACKSCHUTZFOLIERUNG',
      subtitle: 'Unsichtbar & selbstheilend – Effektiver Schutz gegen Steinschläge & Kratzer!',
      image: 'https://i.postimg.cc/6Q4PNbMH/a0ad6478-ef04-475f-bae8-8aa78512e8d8.avif',
      color: 'from-black/40 to-black/60'
    },
    {
      title: 'WERBEFOLIERUNG',
      subtitle: 'Mobile Werbung, die auffällt – Steigern Sie Ihre Markenpräsenz.',
      image: 'https://i.postimg.cc/m261FmSN/Whats-App-Image-2025-08-12-at-13-44-25.jpg',
      color: 'from-black/40 to-black/60'
    },
    {
      title: 'FAHRZEUGAUFBEREITUNG',
      subtitle: 'Premium Fahrzeugaufbereitung, Detailing und Keramikversiegelung.',
      image: 'https://i.postimg.cc/CLw9fNK1/09a70c1a-984d-4d8b-aa0d-9b24bb08272b.avif',
      color: 'from-black/40 to-black/60'
    }
  ];

  const detailedServices = [
    {
      icon: Car,
      title: 'Lackaufbereitung & Politur',
      description: 'Professionelle Lackpflege für perfekten Glanz'
    },
    {
      icon: Star,
      title: 'Oldtimerpflege',
      description: 'Spezialpflege für klassische Fahrzeuge'
    },
    {
      icon: Sparkles,
      title: 'Innenraumreinigung & Polsterreinigung',
      description: 'Tiefenreinigung für perfekte Sauberkeit'
    },
    {
      icon: Wind,
      title: 'Cabrio-Verdeckpflege',
      description: 'Spezialbehandlung für Stoffverdecke'
    },
    {
      icon: Zap,
      title: 'Geruchsbeseitigung (Ozon)',
      description: 'Effektive Ozonbehandlung gegen Gerüche'
    },
    {
      icon: Eye,
      title: 'Scheinwerfer-Aufbereitung',
      description: 'Kristallklare Sicht durch Politur'
    },
    {
      icon: Flame,
      title: 'Motorreinigung mit Trockendampf',
      description: 'Schonende Motorraumreinigung'
    },
    {
      icon: Gem,
      title: 'Keramik Coating',
      description: 'Premium Versiegelung für optimalen Schutz'
    },
    {
      icon: Glass,
      title: 'Nano- & Scheibenversiegelung',
      description: 'Innovative Versiegelung für beste Sicht'
    }
  ];

  return (
    <section id="services" className="py-0">
      {/* Detailed Services Section */}
      <div className="relative py-20 lg:py-32 overflow-hidden bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-lg text-gray-400 font-medium tracking-wider uppercase mb-4 block">
              Qualität, Erfahrung & Service
            </span>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl xl:text-7xl font-black text-white mb-6 leading-tight transform hover:scale-105 transition-transform duration-500">
              IHR SPEZIALIST RUND UM<br />
              <span className="text-blue-400 animate-pulse text-4xl sm:text-5xl lg:text-6xl xl:text-7xl">DIE FAHRZEUG - FOLIERUNG</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed opacity-0 animate-fade-in-up animate-delay-300">
              Seit über 10 Jahren bringen wir Fahrzeuge in Bestform – von der Lackaufbereitung über Leasingrückläufer bis zur Oldtimerpflege. Perfekter Glanz und langanhaltender Schutz sind unser Anspruch.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
            {detailedServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className="group bg-gray-900 bg-opacity-50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:bg-gray-800 hover:bg-opacity-70 transition-all duration-700 hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/25 hover:border-blue-500 transform"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-blue-600 bg-opacity-20 p-4 rounded-full mb-4 group-hover:bg-opacity-40 transition-all duration-500 group-hover:rotate-12 group-hover:scale-110">
                      <IconComponent className="h-8 w-8 text-blue-400 group-hover:text-blue-300 transition-all duration-300" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                      {service.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Phone className="h-6 w-6 text-blue-500 animate-pulse" />
              <span className="text-2xl font-bold text-white">0176 64056418</span>
            </div>
            <p className="text-gray-300 mb-8">Rufen Sie uns jetzt an!</p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 font-bold text-lg transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/25 animate-bounce-subtle"
            >
              KOSTENVORANSCHLAG ANFRAGEN
            </button>
          </div>
        </div>
      </div>

      {/* Main Service Categories - Moved after detailed services */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {mainServices.map((service, index) => (
          <div
            key={index}
            className="relative h-96 lg:h-[500px] overflow-hidden group cursor-pointer transform transition-all duration-700 hover:scale-105"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-125"
              style={{ backgroundImage: `url(${service.image})` }}
            />
            <div className={`absolute inset-0 bg-gradient-to-t ${service.color} transition-all duration-500`} />
            
            <div className="absolute inset-0 flex flex-col justify-center items-center p-8 text-white text-center transform transition-transform duration-500 group-hover:translate-y-[-10px]">
              <h3 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-black mb-4 leading-tight transform transition-transform duration-300 group-hover:scale-105 px-6 sm:px-8 md:px-10 lg:px-12">
                {service.title}
              </h3>
              <p className="text-xs sm:text-xs md:text-sm lg:text-base text-gray-200 leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 max-w-[90%] px-6 sm:px-8 md:px-10 lg:px-12">
                {service.subtitle}
              </p>
            </div>
            
            <div className="absolute inset-0 bg-blue-600 bg-opacity-0 group-hover:bg-opacity-5 transition-all duration-500" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;