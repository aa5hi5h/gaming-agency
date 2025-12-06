import React from 'react';
import { STATS_DATA } from '../constants';

export const Stats: React.FC = () => {
  return (
    <section className="relative z-20">
      {/* Animated Dots Background - FULL WIDTH */}
      <div className="absolute inset-0 left-0 right-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 w-screen" style={{
          backgroundImage: `radial-gradient(circle, rgba(255, 255, 255, 0.15) 2px, transparent 1px)`,
          backgroundSize: '30px 30px',
        }}></div>
      </div>

     

      {/* Content Container with max-w-7xl */}
      <div className="px-4 py-16 md:py-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS_DATA.map((stat) => (
            <div 
              key={stat.id}
              className="group relative h-64 overflow-hidden rounded-2xl border border-white/10 transition-all duration-300 hover:scale-[1.02] hover:border-[#a855f7]/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]"
            >
              {/* Video Background */}
              <div className="absolute inset-0 z-0">
                <video 
                  src={stat.background} 
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Purple Overlay */}
              <div className="absolute inset-0 bg-[#a855f7] mix-blend-multiply opacity-80 z-10"></div>
              
              {/* Dark Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10 opacity-60"></div>

              {/* Content */}
              <div className="relative z-20 h-full flex flex-col justify-center items-center text-center p-6">
                <h3 className="text-5xl font-black text-white mb-2 drop-shadow-lg tracking-tighter">
                  {stat.value}
                </h3>
                <p className="text-lg font-semibold text-white/90 uppercase tracking-widest border-t border-white/20 pt-4 w-full max-w-[120px]">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}