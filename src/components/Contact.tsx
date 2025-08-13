import React, { useState } from 'react';
import { Phone, MessageCircle, Mail, Send, MapPin, Clock, Car, Shield, Gem, Sparkles, Eye, Star } from 'lucide-react';
import { Text, Tel, Mail as MailLink, WhatsApp, Img, getConfig } from '../lib/bind';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    vehicle: '',
    message: '',
    privacy: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const config = getConfig();
    const subject = `Terminanfrage von ${formData.name}`;
    const body = `Name: ${formData.name}\nTelefon: ${formData.phone}\nE-Mail: ${formData.email}\nFahrzeug: ${formData.vehicle}\n\nNachricht:\n${formData.message}`;
    window.location.href = `mailto:${config.FORM_ENDPOINT}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleWhatsApp = () => {
    const config = getConfig();
    if (config?.WHATSAPP) {
      window.open(`https://wa.me/${config.WHATSAPP}?text=Hallo,%20ich%20interessiere%20mich%20f%C3%BCr%20Ihre%20Autopflege-Services.`, '_blank');
    }
  };

  const handleCall = () => {
    const config = getConfig();
    if (config?.PHONE) {
      window.location.href = `tel:${config.PHONE}`;
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  return (
    <section id="contact" className="py-0">
      {/* Split Screen Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        
        {/* Left Side - CTA with Car Image */}
        <div className="relative overflow-hidden">
          <Img 
            k="CONTACT_LEFT_IMAGE" 
            alt="Contact Left Background"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40" />
          
          <div className="relative z-10 h-full flex flex-col justify-center p-12 lg:p-16 text-white">
            
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black mb-8 leading-tight transform hover:scale-105 transition-transform duration-500">
              <Text k="CONTACT_CTA_LEFT" />
            </h2>
            
            <div className="space-y-6 mb-12 opacity-0 animate-fade-in-up animate-delay-300">
              <div className="flex items-center space-x-3 transform hover:translate-x-2 transition-transform duration-300">
                <div className="bg-blue-500 p-3 rounded-full animate-pulse">
                  <Clock className="h-4 w-4 text-white" />
                </div>
                <span>Flexible Terminvereinbarung</span>
              </div>
              <div className="flex items-center space-x-3 transform hover:translate-x-2 transition-transform duration-300">
                <div className="bg-blue-500 p-3 rounded-full animate-pulse">
                  <MapPin className="h-4 w-4 text-white" />
                </div>
                <span>Zentrale Lage in Bremen</span>
              </div>
              <div className="flex items-center space-x-3 transform hover:translate-x-2 transition-transform duration-300">
                <div className="bg-blue-500 p-3 rounded-full animate-pulse">
                  <Send className="h-4 w-4 text-white" />
                </div>
                <span>Kostenvoranschlag innerhalb 24h</span>
              </div>
            </div>

            <button
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-black px-8 py-4 font-bold text-lg hover:bg-gray-100 transition-all duration-500 transform hover:scale-110 hover:shadow-2xl animate-bounce-subtle"
            >
              ANGEBOT ERHALTEN
            </button>
          </div>
        </div>

        {/* Right Side - Services Overview */}
        <div className="relative overflow-hidden">
          <Img 
            k="CONTACT_RIGHT_IMAGE" 
            alt="Contact Right Background"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-900 bg-opacity-50" />
          
          <div className="relative z-10 h-full flex flex-col justify-center p-12 lg:p-16 text-white">
            
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black mb-8 leading-tight transform hover:scale-105 transition-transform duration-500">
              <Text k="CONTACT_CTA_RIGHT" />
            </h2>
            
            <div className="space-y-4 mb-12 opacity-0 animate-fade-in-up animate-delay-300">
              <div className="flex items-center space-x-3 transform hover:translate-x-2 transition-transform duration-300">
                <div className="bg-blue-500 p-3 rounded-full animate-pulse">
                  <Car className="h-4 w-4 text-white" />
                </div>
                <span>Vollfolierung & Teilfolierung</span>
              </div>
              <div className="flex items-center space-x-3 transform hover:translate-x-2 transition-transform duration-300">
                <div className="bg-blue-500 p-3 rounded-full animate-pulse">
                  <Shield className="h-4 w-4 text-white" />
                </div>
                <span>Lackschutzfolierung</span>
              </div>
              <div className="flex items-center space-x-3 transform hover:translate-x-2 transition-transform duration-300">
                <div className="bg-blue-500 p-3 rounded-full animate-pulse">
                  <Gem className="h-4 w-4 text-white" />
                </div>
                <span>Keramikversiegelung</span>
              </div>
              <div className="flex items-center space-x-3 transform hover:translate-x-2 transition-transform duration-300">
                <div className="bg-blue-500 p-3 rounded-full animate-pulse">
                  <Sparkles className="h-4 w-4 text-white" />
                </div>
                <span>Innenraumaufbereitung</span>
              </div>
              <div className="flex items-center space-x-3 transform hover:translate-x-2 transition-transform duration-300">
                <div className="bg-blue-500 p-3 rounded-full animate-pulse">
                  <Eye className="h-4 w-4 text-white" />
                </div>
                <span>Scheinwerferaufbereitung</span>
              </div>
              <div className="flex items-center space-x-3 transform hover:translate-x-2 transition-transform duration-300">
                <div className="bg-blue-500 p-3 rounded-full animate-pulse">
                  <Star className="h-4 w-4 text-white" />
                </div>
                <span>Oldtimerpflege</span>
              </div>
            </div>

            <button
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-transparent border-2 border-white text-white px-8 py-4 font-bold text-lg hover:bg-white hover:text-gray-900 transition-all duration-500 transform hover:scale-110 hover:shadow-2xl animate-bounce-subtle"
            >
              ZU UNSEREN LEISTUNGEN
            </button>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div id="contact-form" className="py-20 bg-black relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=1920)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-br from-black/50 to-black/40" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 relative z-10">
            
            {/* Left Side - CTA Content */}
            <div className="text-white">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 transform hover:scale-105 transition-transform duration-500 leading-tight">
                <Text k="CONTACT_HEADLINE" /> <span className="text-blue-400 animate-pulse"><Text k="CONTACT_SUBHEADLINE" /></span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 opacity-0 animate-fade-in-up animate-delay-300 leading-relaxed">
                <Text k="CONTACT_DESCRIPTION" />
              </p>

              {/* Benefits */}
              <div className="space-y-4 mb-8 opacity-0 animate-fade-in-up animate-delay-600">
                <div className="flex items-center space-x-3 transform hover:translate-x-2 transition-transform duration-300">
                  <div className="bg-blue-500 p-3 rounded-full animate-pulse">
                    <Clock className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-gray-300">Flexible Terminvereinbarung</span>
                </div>
                <div className="flex items-center space-x-3 transform hover:translate-x-2 transition-transform duration-300">
                  <div className="bg-blue-500 p-3 rounded-full animate-pulse">
                    <MapPin className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-gray-300">Zentrale Lage in Bremen</span>
                </div>
                <div className="flex items-center space-x-3 transform hover:translate-x-2 transition-transform duration-300">
                  <div className="bg-blue-500 p-3 rounded-full animate-pulse">
                    <Send className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-gray-300">Kostenvoranschlag innerhalb 24h</span>
                </div>
              </div>

              {/* Contact Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in-up animate-delay-900">
                <button
                  onClick={handleWhatsApp}
                  className="group flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-bold transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:shadow-green-500/25"
                >
                  <MessageCircle className="h-5 w-5 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12" />
                  WhatsApp
                </button>
                <button
                  onClick={handleCall}
                  className="group flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/25"
                >
                  <Phone className="h-5 w-5 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12" />
                  <Tel k="PHONE" />
                </button>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 lg:p-10 shadow-2xl transform hover:scale-105 transition-transform duration-500 border border-white/20">
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8 text-center">Kontakt aufnehmen</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Ihr Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-lg"
                  />
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Telefonnummer"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="px-6 py-4 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-lg"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="E-Mail"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="px-6 py-4 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-lg"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    name="vehicle"
                    placeholder="Ihr Fahrzeug (z.B. BMW 3er, Baujahr 2020)"
                    value={formData.vehicle}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-lg"
                  />
                </div>

                <div>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Ihre Nachricht (welche Services benötigen Sie?)"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-all duration-300 text-lg"
                  />
                </div>

                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="privacy"
                    name="privacy"
                    checked={formData.privacy}
                    onChange={handleChange}
                    required
                    className="mt-1 h-5 w-5 text-blue-600 bg-gray-50 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label htmlFor="privacy" className="text-sm text-gray-700 leading-tight">
                    Ich habe die <a href="#" className="text-blue-600 hover:underline">Datenschutzerklärung</a> gelesen und akzeptiere sie.
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 flex items-center justify-center gap-3"
                >
                  <Send className="h-6 w-6 transition-transform duration-300 group-hover:scale-125" />
                  NACHRICHT SENDEN
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;