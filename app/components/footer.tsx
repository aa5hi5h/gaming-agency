import React from 'react';
import { Linkedin, Mail } from 'lucide-react';
import Image from 'next/image';
import logo from "../../public/logo-Picsart-BackgroundRemover.jpg"

const TelegramIcon = ({ size = 20 }: { size?: number }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor"
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
  </svg>
);

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
          <a href="https://t.me/Gaming_agencyy" className="text-gray-400 hover:text-white transition-colors"><TelegramIcon size={22} /></a>
          <a href="https://www.linkedin.com/company/gamingagency" className="text-gray-400 hover:text-white transition-colors"><Linkedin size={20} /></a>
          <a href="mailto:hello@gaming.agency" className="text-gray-400 hover:text-white transition-colors"><Mail size={20} /></a>
        </div>
      </div>
    </footer>
  );
}