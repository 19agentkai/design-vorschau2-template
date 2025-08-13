// Binding components for config-driven content
import React from 'react';
import { getConfig } from './config';
import { Car, Sparkles, Shield, Droplets, Zap, Wind, Trash2, PawPrint, Circle, Eye, Flame, Star, Gem, Glasses as Glass } from 'lucide-react';

// Icon mapping
const iconMap = {
  Car,
  Sparkles,
  Shield,
  Droplets,
  Zap,
  Wind,
  Trash2,
  PawPrint,
  Circle,
  Eye,
  Flame,
  Star,
  Gem,
  Glass
};

interface TextProps {
  k: string;
  className?: string;
  fallback?: string;
}

interface ImgProps {
  k: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
}

interface LinkProps {
  k: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

interface ContactProps {
  k: string;
  className?: string;
}

// Text binding component
export const Text: React.FC<TextProps> = ({ k, className, fallback = '' }) => {
  const config = getConfig();
  const value = config[k] || fallback;
  
  return <span className={className}>{value}</span>;
};

// Image binding component
export const Img: React.FC<ImgProps> = ({ k, alt, className, style }) => {
  const config = getConfig();
  const src = config[k];
  
  if (!src) return null;
  
  return <img src={src} alt={alt} className={className} style={style} />;
};

// Link binding component
export const Link: React.FC<LinkProps> = ({ k, children, className, onClick }) => {
  const config = getConfig();
  const href = config[k];
  
  if (!href) return <span className={className}>{children}</span>;
  
  return (
    <a href={href} className={className} onClick={onClick}>
      {children}
    </a>
  );
};

// Phone link component
export const Tel: React.FC<ContactProps> = ({ k, className }) => {
  const config = getConfig();
  const phone = config[k];
  
  if (!phone) return null;
  
  return (
    <a href={`tel:${phone}`} className={className}>
      {phone}
    </a>
  );
};

// Email link component
export const Mail: React.FC<ContactProps> = ({ k, className }) => {
  const config = getConfig();
  const email = config[k];
  
  if (!email) return null;
  
  return (
    <a href={`mailto:${email}`} className={className}>
      {email}
    </a>
  );
};

// WhatsApp link component
export const WhatsApp: React.FC<{ className?: string; text?: string }> = ({ className, text }) => {
  const config = getConfig();
  const whatsapp = config.WHATSAPP;
  
  if (!whatsapp) return null;
  
  const message = text || 'Hallo,%20ich%20interessiere%20mich%20f%C3%BCr%20Ihre%20Autopflege-Services.';
  
  return (
    <a 
      href={`https://wa.me/${whatsapp}?text=${message}`} 
      target="_blank" 
      rel="noopener noreferrer"
      className={className}
    >
      WhatsApp
    </a>
  );
};

// Services grid component
export const Services: React.FC = () => {
  const config = getConfig();
  const services = config.SERVICES || [];
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
      {services.map((service: any, index: number) => {
        const IconComponent = iconMap[service.icon as keyof typeof iconMap] || Car;
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
  );
};

// Main services grid component
export const MainServices: React.FC = () => {
  const config = getConfig();
  const mainServices = config.MAIN_SERVICES || [];
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {mainServices.map((service: any, index: number) => (
        <div
          key={index}
          className="relative h-96 lg:h-[500px] overflow-hidden group cursor-pointer transform transition-all duration-700 hover:scale-105"
        >
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-125"
            style={{ backgroundImage: `url(${service.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-black/60 transition-all duration-500" />
          
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
  );
};

// Gallery component
export const Gallery: React.FC = () => {
  const config = getConfig();
  const images = config.GALLERY_IMAGES || [];
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {images.map((image: any, index: number) => (
        <div
          key={index}
          className="group relative overflow-hidden rounded-xl cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
        >
          <div className="aspect-w-4 aspect-h-3">
            <img
              src={image.src}
              alt={image.title}
              className="w-full h-64 lg:h-80 object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <span className="inline-block bg-blue-600 text-xs px-3 py-1 rounded-full mb-2">
                {image.category}
              </span>
              <h3 className="text-lg font-semibold">{image.title}</h3>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

// Reviews component
export const ReviewsSlider: React.FC = () => {
  const config = getConfig();
  const reviews = config.REVIEWS || [];
  
  return (
    <div className="flex space-x-6 animate-scroll" style={{ width: 'calc(200% + 24px)' }}>
      {[...reviews, ...reviews].map((review: any, index: number) => (
        <div
          key={index}
          className="flex-shrink-0 w-80 bg-white bg-opacity-10 backdrop-blur-sm border border-white border-opacity-20 rounded-xl p-6"
        >
          <div className="flex items-center mb-4">
            <div className="flex space-x-1">
              {[...Array(review.rating)].map((_: any, i: number) => (
                <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <span className="ml-2 text-blue-400 text-sm font-medium">
              {review.service}
            </span>
          </div>
          <p className="text-gray-200 mb-4 leading-relaxed">
            "{review.text}"
          </p>
          <div className="font-semibold text-white">
            {review.name}
          </div>
        </div>
      ))}
    </div>
  );
};