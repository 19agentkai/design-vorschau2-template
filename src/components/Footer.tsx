import React from 'react';
import { Car, Phone, Mail, MapPin } from 'lucide-react';
import { Text, Tel, Mail as MailLink, getConfig } from '../lib/bind';

const Footer = () => {
  const config = getConfig();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Car className="h-8 w-8 text-blue-400" />
              <div className="text-xl font-bold">
                <div><Text k="BUSINESS_NAME" /></div>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              <strong>Inhaber: <Text k="CLIENT_NAME" /></strong>
            </p>
            <p className="text-gray-400 mb-6 max-w-md">
              <Text k="FOOTER_DESCRIPTION" />
            </p>
            <p className="text-sm text-gray-500">
              <Text k="FOOTER_TAX_NOTE" />
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Kontakt</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-blue-400 flex-shrink-0" />
                <div className="text-sm text-gray-300">
                  {config.ADDRESS?.STREET}<br />
                  {config.ADDRESS?.POSTAL_CODE} {config.ADDRESS?.CITY}
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-blue-400 flex-shrink-0" />
                <Tel k="PHONE" className="text-sm text-gray-300 hover:text-white" />
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-blue-400 flex-shrink-0" />
                <MailLink k="EMAIL" className="text-sm text-gray-300 hover:text-white" />
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
              © 2025 <Text k="BUSINESS_NAME" /> – <Text k="CLIENT_NAME" />. Alle Rechte vorbehalten.
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