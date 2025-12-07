"use client"
import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SERVICES_LIST } from '../constants';

export const Services: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" className="relative z-20">
      {/* Dots Background - FULL WIDTH - SAME AS STATS */}
      <div className="absolute inset-0 left-0 right-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 w-screen" style={{
          backgroundImage: `radial-gradient(circle, rgba(255, 255, 255, 0.15) 2px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}></div>
      </div>

      {/* Content Container with max-w-7xl - SAME AS STATS */}
      <div className="px-4 py-16 md:py-24 max-w-7xl mx-auto">
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
              className="group relative h-[400px] rounded-3xl overflow-hidden border border-white/10 transition-all duration-300 hover:scale-[1.02] hover:border-[#a855f7]/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Video Background */}
              <div className="absolute inset-0 z-0">
                <video 
                  muted 
                  loop 
                  playsInline
                  autoPlay
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  src={service.video}
                />
              </div>

              {/* Purple Overlay - EXACT SAME AS STATS */}
               <div className="absolute inset-0 bg-[#a855f7] mix-blend-multiply opacity-70 z-10"></div>
              
              {/* Additional Purple Background Layer */}
              <div className="absolute inset-0 bg-[#7c3aed] opacity-50 z-5"></div>
              
              {/* Darker Gradient for Better Contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-10 opacity-60"></div>
              {/* Content */}
              <div className="relative z-10 h-full p-8 flex flex-col justify-end">
                <div className="transform transition-all duration-300 group-hover:-translate-y-2">
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-100 leading-relaxed  transition-colors">
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