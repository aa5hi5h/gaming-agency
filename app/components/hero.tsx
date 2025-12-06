"use client"
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ASSETS } from '../constants';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen min-h-[800px] w-full overflow-hidden flex items-center justify-center bg-gaming-black">
      {/* 3D Object Background Layer */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover md:object-contain opacity-80 mix-blend-lighten"
        >
          <source src={ASSETS.heroBackground} type="video/mp4" />
        </video>
        {/* Vignette to blend edges if video is not full screen */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#020202_70%)]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center mt-20">
        <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-[#a855f7]/30 bg-black/50 backdrop-blur-md">
          <span className="text-[#a855f7] text-xs font-bold tracking-wider uppercase animate-pulse">The Future of Gaming Marketing</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-black text-white tracking-tight mb-8 leading-[0.9]">
          SHARP <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500">
            MARKETING
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
          Full-stack solutions for <span className="text-white font-semibold">iGaming</span> & <span className="text-white font-semibold">Blockchain Games</span>.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="#contact" 
            className="group relative px-8 py-4 bg-[#a855f7] hover:bg-[#9333ea] text-white font-bold text-lg rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] flex items-center gap-2"
          >
            Get in Touch
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};
