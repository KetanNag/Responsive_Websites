import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-blue-500/20 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2">
            © 2025 Ketan Nag. Made with 
            <Heart className="text-red-500" size={16} fill="currentColor" />
            and lots of coffee.
          </p>
          
          <div className="mt-4 pt-4 border-t border-blue-500/10">
            <p className="text-gray-500 text-sm">
              Designed and developed with modern web technologies
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
