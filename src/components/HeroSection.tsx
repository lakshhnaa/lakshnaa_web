import React from 'react';
import { BrandLogo } from './BrandLogo';

export const HeroSection: React.FC = () => {
  return (
    <section className="pt-16 sm:pt-24 md:pt-32 pb-14 sm:pb-20 text-center flex flex-col items-center justify-center px-4 relative z-10 select-none">
      {/* Background ambient sparkles */}
      <div className="absolute top-10 left-12 sm:left-24 text-amber-300/30 pointer-events-none text-2xl select-none font-serif-vintage">
        ✦
      </div>
      <div className="absolute top-20 right-16 sm:right-32 text-rose-400/30 pointer-events-none text-xl select-none">
        ✳
      </div>

      {/* Official Logo */}
      <div className="mb-8 sm:mb-12 transition-transform duration-300 hover:scale-105">
        <BrandLogo size="lg" variant="mark-only" glow={false} accentColor="#ff3366" />
      </div>

      {/* Official lakshhnaa wordmark image */}
      <div className="w-full max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-4xl flex items-center justify-center px-2">
        <img
          src="/image.png"
          alt="lakshhnaa"
          className="w-full h-auto object-contain select-none max-h-[120px] sm:max-h-[160px] md:max-h-[200px]"
          referrerPolicy="no-referrer"
          loading="eager"
        />
      </div>
    </section>
  );
};
