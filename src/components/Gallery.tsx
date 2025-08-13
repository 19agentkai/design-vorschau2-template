import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Text, getConfig } from '../lib/bind';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const config = getConfig();
  const images = config.GALLERY_IMAGES || [];

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const previousImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage > 0 ? selectedImage - 1 : images.length - 1);
    }
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage < images.length - 1 ? selectedImage + 1 : 0);
    }
  };

  return (
    <section id="gallery" className="py-20 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6">
            Unsere <span className="text-blue-700">Arbeit</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sehen Sie selbst, wie wir Ihr Fahrzeug zum Strahlen bringen. Jedes Detail zählt.
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
              onClick={() => openLightbox(index)}
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

        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            >
              <X className="h-8 w-8" />
            </button>
            
            <button
              onClick={previousImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
            >
              <ChevronLeft className="h-8 w-8" />
            </button>
            
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
            >
              <ChevronRight className="h-8 w-8" />
            </button>

            <div className="max-w-4xl max-h-full">
              <img
                src={images[selectedImage].src}
                alt={images[selectedImage].title}
                className="max-w-full max-h-full object-contain"
              />
              <div className="text-center mt-4 text-white">
                <span className="inline-block bg-blue-600 text-xs px-3 py-1 rounded-full mb-2">
                  {images[selectedImage].category}
                </span>
                <h3 className="text-xl font-semibold">{images[selectedImage].title}</h3>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;