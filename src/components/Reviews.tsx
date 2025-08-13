import React, { useEffect, useRef } from 'react';
import { Star } from 'lucide-react';
import { Text, ReviewsSlider } from '../lib/bind';

const Reviews = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scroll = () => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += 1;
      }
    };

    const intervalId = setInterval(scroll, 50);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section id="reviews" className="py-20 lg:py-32 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6">
            Was unsere <span className="text-blue-400">Kunden</span> sagen
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Zufriedene Kunden sind unser bester Beweis für Qualität und Service.
          </p>
        </div>

        {/* Scrolling Reviews */}
        <div className="overflow-hidden">
          <div ref={scrollRef}>
            <ReviewsSlider />
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-300 mb-6">
            Werden Sie unser nächster zufriedener Kunde!
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            Jetzt Termin vereinbaren
          </button>
        </div>
      </div>
    </section>
  );
};

export default Reviews;