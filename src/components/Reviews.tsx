import React, { useEffect, useRef } from 'react';
import { Star } from 'lucide-react';

const Reviews = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const reviews = [
    {
      name: 'Michael K.',
      rating: 5,
      text: 'Absolut professionelle Arbeit! Mein BMW sieht aus wie neu. Vadim arbeitet sehr sorgfältig und pünktlich.',
      service: 'Lackaufbereitung'
    },
    {
      name: 'Sandra M.',
      rating: 5,
      text: 'Bin begeistert von der Innenraumreinigung. Jedes Detail wurde perfekt gemacht. Sehr empfehlenswert!',
      service: 'Innenraumreinigung'
    },
    {
      name: 'Thomas R.',
      rating: 5,
      text: 'Die Keramikversiegelung ist ihr Geld wert. Das Auto glänzt nach Monaten immer noch wie am ersten Tag.',
      service: 'Keramik Coating'
    },
    {
      name: 'Julia H.',
      rating: 5,
      text: 'Sehr freundlich und kompetent. Die Geruchsbeseitigung hat perfekt funktioniert. Vielen Dank!',
      service: 'Geruchsbeseitigung'
    },
    {
      name: 'Robert S.',
      rating: 5,
      text: 'Top Service für meinen Oldtimer. Vadim versteht sein Handwerk und behandelt jedes Auto wie sein eigenes.',
      service: 'Oldtimerpflege'
    },
    {
      name: 'Marina L.',
      rating: 5,
      text: 'Faire Preise und ausgezeichnete Qualität. Die Aufbereitung für die Leasingrückgabe war perfekt.',
      service: 'Leasingrückläufer'
    }
  ];

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
          <div
            ref={scrollRef}
            className="flex space-x-6 animate-scroll"
            style={{ width: 'calc(200% + 24px)' }}
          >
            {[...reviews, ...reviews].map((review, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-80 bg-white bg-opacity-10 backdrop-blur-sm border border-white border-opacity-20 rounded-xl p-6"
              >
                <div className="flex items-center mb-4">
                  <div className="flex space-x-1">
                    {[...Array(review.rating)].map((_, i) => (
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