"use client"
import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SERVICES_LIST } from '../constants';

export const Services: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" className="py-24 bg-[#0a0a0a] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Marketing Services</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            High-impact campaigns powered by next-gen assets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_LIST.map((service, index) => (
            <div 
              key={service.id}
              className="group relative h-[400px] rounded-3xl overflow-hidden border border-white/5 bg-[#020202] transition-all duration-500 hover:border-[#a855f7]/50 hover:shadow-[0_0_40px_rgba(168,85,247,0.1)]"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Background Video (3D Object) */}
              <div className={`absolute inset-0 z-0 transition-all duration-700 transform ${hoveredIndex === index ? 'opacity-100 scale-110' : 'opacity-30 scale-100 grayscale'}`}>
                <video 
                  muted 
                  loop 
                  playsInline
                  ref={el => {
                    if (el) {
                      hoveredIndex === index ? el.play().catch(() => {}) : el.pause();
                    }
                  }}
                  className="w-full h-full object-cover mix-blend-screen" 
                  src={service.video}
                />
                {/* Gradient to ensure text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-[#020202]/80 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 h-full p-8 flex flex-col justify-end">
                <div className="transform transition-all duration-300 group-hover:-translate-y-2">
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-xs font-bold text-[#a855f7] uppercase tracking-wider bg-[#a855f7]/10 px-2 py-1 rounded">
                      0{index + 1}
                    </span>
                    <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center bg-black/50 backdrop-blur-sm group-hover:bg-[#a855f7] group-hover:border-[#a855f7] transition-all">
                       <ArrowUpRight size={18} className="text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#a855f7] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-200 transition-colors">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
