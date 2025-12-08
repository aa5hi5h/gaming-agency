import React from 'react';

export const VideoBanner: React.FC = () => {
  return (
    <section className="relative bg-[#020202] py-12 md:py-16">
      {/* Dots Background */}
      <div className="absolute inset-0 left-0 right-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 w-screen" style={{
          backgroundImage: `radial-gradient(circle, rgba(255, 255, 255, 0.15) 2px, transparent 1px)`,
          backgroundSize: '30px 30px',
        }}></div>
      </div>
      
      {/* Video Container */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-center">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full max-w-[800px] h-[200px] md:h-[220px] object-cover rounded-2xl border border-white/10 shadow-[0_0_30px_rgba(168,85,247,0.2)]"
            style={{ objectPosition: '10% center' }}
            src="/video/video-1.mp4"
          />
        </div>
      </div>
    </section>
  );
};

export default VideoBanner;