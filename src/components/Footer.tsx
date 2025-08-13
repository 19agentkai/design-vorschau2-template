import React from 'react';
import { Car, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Car className="h-8 w-8 text-blue-400" />
              <div className="text-xl font-bold">
                <div>Autopflege &</div>
                <div className="text-sm font-medium">Fahrzeugaufbereitung</div>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              <strong>Inhaber: Vadim Hergert</strong>
            </p>
            <p className="text-gray-400 mb-6 max-w-md">
              Professionelle Autopflege und Fahrzeugaufbereitung in Bremen. 
              Von der Grundreinigung bis zur Premium-Keramikversiegelung.
            </p>
            <p className="text-sm text-gray-500">
              Hinweis: Gemäß § 19 Abs. 1 UStG wird keine Umsatzsteuer ausgewiesen.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Kontakt</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-blue-400 flex-shrink-0" />
                <div className="text-sm text-gray-300">
                  Pennigbütteler Str. 34<br />
                  28239 Bremen
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-blue-400 flex-shrink-0" />
                <a href="tel:017664056418" className="text-sm text-gray-300 hover:text-white">
                  0176 64056418
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-blue-400 flex-shrink-0" />
                <a href="mailto:vad-lit@web.de" className="text-sm text-gray-300 hover:text-white">
                  vad-lit@web.de
                </a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <div className="space-y-2 text-sm text-gray-300">
              <div>Lackaufbereitung</div>
              <div>Innenraumreinigung</div>
              <div>Keramikversiegelung</div>
              <div>Scheinwerferaufbereitung</div>
              <div>Oldtimerpflege</div>
              <div>Leasingrückläufer</div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400 mb-4 md:mb-0">
              © 2025 Autopflege & Fahrzeugaufbereitung – Vadim Hergert. Alle Rechte vorbehalten.
            </div>
            <div className="flex space-x-6 text-sm">
              <button className="text-gray-400 hover:text-white transition-colors">
                Impressum
              </button>
              <button className="text-gray-400 hover:text-white transition-colors">
                Datenschutz
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;