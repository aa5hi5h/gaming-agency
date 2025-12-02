import React from 'react';
import { Twitter, Linkedin, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-8">
        
        <div className="text-center md:text-left">
           <a href="#" className="text-xl font-black tracking-tighter text-white block mb-2">
            GAMING<span className="text-[#a855f7]">.AGENCY</span>
          </a>
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Gaming.Agency. All rights reserved.</p>
        </div>

        <div className="flex items-center space-x-6">
          <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter size={20} /></a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin size={20} /></a>
          <a href="mailto:info@gaming.agency" className="text-gray-400 hover:text-white transition-colors"><Mail size={20} /></a>
        </div>
      </div>
    </footer>
  );
}