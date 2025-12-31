import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-slate-600 py-12 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Datacare Softech</h3>
            <p className="text-sm leading-6 text-slate-500">
              Empowering the jewellery industry with state-of-the-art accounting and inventory solutions. 
              Designed for precision, built for growth.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#/" className="hover:text-amber-500 transition-colors">Home</a></li>
              <li><a href="#/products" className="hover:text-amber-500 transition-colors">Products</a></li>
              <li><a href="#/sectors" className="hover:text-amber-500 transition-colors">Sectors</a></li>
              <li><a href="#/contact" className="hover:text-amber-500 transition-colors">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Contact Info</h3>
            <div className="space-y-4 text-sm">
              <div className="flex items-center group">
                <MapPin className="h-5 w-5 mr-2 text-amber-500 group-hover:scale-110 transition-transform" />
                <span>123 Jewel Tech Park, Mumbai, India</span>
              </div>
              <div className="flex items-center group">
                <Phone className="h-5 w-5 mr-2 text-amber-500 group-hover:scale-110 transition-transform" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center group">
                <Mail className="h-5 w-5 mr-2 text-amber-500 group-hover:scale-110 transition-transform" />
                <span>support@datacaresoftech.com</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-slate-100 text-center text-sm text-slate-400">
          &copy; {new Date().getFullYear()} Datacare Softech. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;