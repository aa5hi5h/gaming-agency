"use client"
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import logo from "../../public/logo-Picsart-BackgroundRemover.jpg"

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Marketing', href: '#services' },
    { name: 'Cases', href: '#' },
    { name: 'Contacts', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center">
        <a href="#" className="flex items-center gap-2 relative group">
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

<style jsx>{`
  a:hover img {
    filter: brightness(1.3) saturate(2.5) hue-rotate(280deg) contrast(1.2) !important;
  }
`}</style>
        </div>
        
        {/* Desktop Menu */}
         <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#a855f7] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <a href="#contact" className="px-5 py-2 text-sm font-bold bg-white text-black hover:bg-[#a855f7] hover:text-white transition-all duration-300 rounded-full">
            Get in Touch
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white p-2">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu with Backdrop Blur */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full h-screen left-0 w-full bg-black/95 backdrop-blur-xl border-b border-white/10 p-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-medium text-white block py-2 border-b border-white/5"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}