import React from 'react';
import { Twitter, Linkedin, Mail } from 'lucide-react';
import Image from 'next/image';
import logo from "../../public/logo-Picsart-BackgroundRemover.jpg"

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-8">
        
        <div className="text-center  md:text-left">
        <a href="#" className="flex justify-center items-center gap-2 relative group">
  <div className="relative">
    <Image
      src={logo} 
      alt="Gaming Agency Logo" 
      className="h-14 w-auto md:h-16"
      width={200}
      height={56}
    />
    {/* Pink/Purple overlay - clipped to logo shape */}
    <div 
      className="absolute inset-0 bg-[#5b21b6] opacity-60 group-hover:opacity-80 transition-opacity pointer-events-none"
      style={{
        maskImage: `url(${logo.src})`,
        maskSize: 'contain',
        maskRepeat: 'no-repeat',
        maskPosition: 'center',
        WebkitMaskImage: `url(${logo.src})`,
        WebkitMaskSize: 'contain',
        WebkitMaskRepeat: 'no-repeat',
        WebkitMaskPosition: 'center'
      }}
    />
  </div>
</a>
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} All rights reserved.</p>
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