"use client"
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

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
          <a href="#" className="text-2xl font-black tracking-tighter text-white">
            GAMING<span className="text-[#a855f7]">.AGENCY</span>
          </a>
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