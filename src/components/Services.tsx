import React from 'react';
import { Car, Sparkles, Shield, Droplets, Zap, Wind, Trash2, PawPrint, Circle, Eye, Flame, Star, Gem, Glasses as Glass, Phone } from 'lucide-react';
import { Text, Tel, Services as ServicesGrid, MainServices } from '../lib/bind';

const Services = () => {
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
              <Text k="SERVICES_HEADLINE" /><br />
              <span className="text-blue-400 animate-pulse text-4xl sm:text-5xl lg:text-6xl xl:text-7xl">
                <Text k="SERVICES_SUBHEADLINE" />
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed opacity-0 animate-fade-in-up animate-delay-300">
              <Text k="SERVICES_DESCRIPTION" />
            </p>
          </div>

          {/* Services Grid */}
          <ServicesGrid />

          {/* CTA */}
          <div className="text-center mt-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Phone className="h-6 w-6 text-blue-500 animate-pulse" />
              <span className="text-2xl font-bold text-white">
                <Tel k="PHONE" />
              </span>
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
      <MainServices />
    </section>
  );
};

export default Services;