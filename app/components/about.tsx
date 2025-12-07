import React from 'react';
import { ASSETS } from '../constants';

export const About: React.FC = () => {
  return (
    <section id="about" className="relative py-24 bg-[#020202] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div className="order-2 lg:order-1 relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Our Vision
            </h2>
            <div className="space-y-6 text-lg text-gray-400 leading-relaxed">
              <p>
                Our vision is to empower the next generation of gaming — from <span className="text-white font-semibold">Web2 iGaming operators</span> to <span className="text-white font-semibold">Web3 blockchain game studios</span> — by delivering result-driven marketing, authentic community engagement, and sustainable brand growth.
              </p>
              <p>
                We believe in creating a transparent, performance-focused ecosystem where innovative games reach the global audience they deserve.
              </p>
              <p className="pt-4 border-l-4 border-[#a855f7] pl-6 italic text-gray-300">
                "We help gaming brands grow through high-impact influencer campaigns, community activation, media outreach, and full-stack digital marketing."
              </p>
            </div>
            
            <div className="mt-10 flex items-center gap-4">
               <div className="h-px bg-white/20 flex-1"></div>
               <span className="text-sm uppercase tracking-widest text-[#a855f7] font-bold">Gaming.Agency</span>
            </div>
          </div>

          {/* Visual Content - 3D Object Video */}
          <div className="order-1 lg:order-2 relative h-[500px] w-full rounded-2xl overflow-hidden  group">
             <video 
                autoPlay 
                muted 
                loop 
                playsInline
                className="w-full h-full object-cover"
              >
                <source src={ASSETS.aboutVisual} type="video/mp4" />
              </video>
          </div>

        </div>
      </div>
    </section>
  );
};