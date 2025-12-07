"use client"
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ASSETS } from '../constants';

export const Hero: React.FC = () => {
  return (
   <section className="relative h-screen min-h-[800px] w-full overflow-hidden flex items-center justify-center bg-black">
      {/* 3D Object Background Layer */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover md:object-contain opacity-60 mix-blend-lighten"
        >
          <source src={ASSETS.heroBackground} type="video/mp4" />
        </video>
        {/* Stronger Vignette for better text visibility */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.7)_50%,#000000_90%)]"></div>
        
        {/* Additional dark overlay for text areas */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center mt-20">
        <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-[#a855f7]/50 bg-black/80 backdrop-blur-md shadow-lg">
          <span className="text-[#a855f7] text-xs font-bold tracking-wider uppercase animate-pulse">The Future of Gaming Marketing</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-black text-white tracking-tight mb-8 leading-[0.9] drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]">
          SHARP <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-300 to-gray-400 drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]">
            MARKETING
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-10 font-light leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
          Full-stack solutions for <span className="text-white font-semibold bg-black/30 px-2 py-1 rounded">iGaming</span> & <span className="text-white font-semibold bg-black/30 px-2 py-1 rounded">Blockchain Games</span>
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="#contact" 
            className="group relative px-8 py-4 bg-[#a855f7] hover:bg-[#9333ea] text-white font-bold text-lg rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(168,85,247,0.6)] hover:shadow-[0_0_40px_rgba(168,85,247,0.8)] flex items-center gap-2"
          >
            Get in Touch
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};
