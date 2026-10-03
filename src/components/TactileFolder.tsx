import React, { useState } from 'react';
import { FolderMeta } from '../types/archive';

interface TactileFolderProps {
  folder: FolderMeta;
  onClick: (folder: FolderMeta) => void;
  index: number;
}

export const TactileFolder: React.FC<TactileFolderProps> = ({
  folder,
  onClick,
  index,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const { ticketConfig } = folder;

  // Custom vintage illustration and layout with aged ink & paper textures
  const renderTicketContent = () => {
    switch (folder.id) {
      case 'builds':
        // AGED VERMILION // Suzuka Grand Prix / Pioneer Racing Ticket (Ref 2)
        return (
          <div className="relative w-full h-full flex flex-col justify-between p-5 text-[#f4ede0] overflow-hidden select-none">
            {/* Top Row: Year & Denomination in aged newsprint ink */}
            <div className="flex justify-between items-start z-10">
              <div className="font-display font-black text-xs tracking-wider uppercase opacity-85 text-[#f4ede0]">
                SUZUKA GRAND PRIX
              </div>
              <div className="font-syne font-extrabold text-2xl tracking-tighter leading-none text-[#f4ede0]">
                {ticketConfig.yearStamp}
              </div>
            </div>

            {/* Center Artwork: Prancing Stallion in aged printed paper cream */}
            <div className="my-auto py-1 flex items-center justify-center relative z-10">
              <svg
                width="140"
                height="110"
                viewBox="0 0 140 110"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transition-transform duration-500 group-hover:scale-105 opacity-95"
              >
                {/* Stallion silhouette with woodcut incisions */}
                <path
                  d="M72 14C68 14 62 16 58 20C54 24 50 25 45 28C41 31 38 30 38 33C38 36 43 38 48 38C48 40 43 45 36 48C31 50 27 49 26 53C25 57 32 60 38 58C42 57 45 52 49 53C53 54 55 60 55 66C55 72 52 79 49 84C46 89 42 92 41 97C40 102 46 104 50 99C54 94 56 87 60 83C64 79 70 82 74 88C78 94 82 101 88 103C92 104 94 99 92 94C90 89 84 83 83 77C82 71 85 64 87 58C89 52 94 48 97 43C100 38 102 32 99 26C96 20 89 16 83 15C79 14 75 14 72 14Z"
                  fill="#f4ede0"
                />
                {/* Incised mane lines in aged vermilion */}
                <path d="M68 18C64 24 60 30 52 35" stroke="#be2626" strokeWidth="2" strokeLinecap="round" />
                <path d="M72 24C68 30 63 36 57 40" stroke="#be2626" strokeWidth="2" strokeLinecap="round" />
                <path d="M76 30C72 36 67 42 61 46" stroke="#be2626" strokeWidth="2" strokeLinecap="round" />
                {/* Tail flourish */}
                <path d="M86 46C92 49 96 55 98 62C100 69 98 76 95 81" stroke="#f4ede0" strokeWidth="4.5" strokeLinecap="round" />
                <path d="M89 54C94 58 97 64 97 71" stroke="#f4ede0" strokeWidth="3" strokeLinecap="round" />
                {/* Kanji stamp in corner */}
                <text x="100" y="96" fill="#f4ede0" fontSize="28" fontWeight="bold" fontFamily="serif" opacity="0.95">
                  馬
                </text>
              </svg>
            </div>

            {/* Bottom Row: Ticket Name & Vintage Denomination */}
            <div className="z-10 pt-2 border-t border-[#f4ede0]/25 flex items-end justify-between">
              <div>
                <h3 className="font-display font-black text-3xl sm:text-4xl text-[#f4ede0] lowercase tracking-tight leading-none ink-printed">
                  builds
                </h3>
              </div>
              <div className="text-right font-syne font-bold text-xs uppercase leading-tight text-[#f4ede0]/80">
                <div>¥44</div>
                <div>¥16</div>
              </div>
            </div>
          </div>
        );

      case 'leetcode':
        // AGED PRUSSIAN BLUE // Japan Bloom Season 1974 (Ref 1 Top Stamp)
        return (
          <div className="relative w-full h-full flex flex-col justify-between p-5 text-[#f4ede0] overflow-hidden select-none">
            {/* Top Row: Country / Kanji & 50c */}
            <div className="flex justify-between items-start z-10">
              <div className="font-sans font-bold text-xs tracking-wider">
                <span className="block text-sm font-serif">英国</span>
                <span className="tracking-widest opacity-85">NIPPON</span>
              </div>
              <div className="font-syne font-extrabold text-3xl tracking-tighter leading-none text-[#dca926]">
                50c
              </div>
            </div>

            {/* Center: Engraved Horizontal Lines with Geometric Japanese Blossom */}
            <div className="my-auto py-1 flex items-center justify-center relative z-10 w-full">
              {/* Fine engraved background lines in aged ink */}
              <div className="absolute inset-0 flex flex-col justify-between py-2 pointer-events-none opacity-30">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div key={i} className="w-full h-[1px] bg-[#f4ede0]" />
                ))}
              </div>

              {/* Geometric Blossom Woodcut with Aged Cream Linework */}
              <svg
                width="120"
                height="100"
                viewBox="0 0 120 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="relative z-10 transition-transform duration-500 group-hover:scale-105"
              >
                <g stroke="#f4ede0" strokeWidth="2.5" fill="#1b3491">
                  <circle cx="60" cy="50" r="10" fill="#dca926" stroke="#f4ede0" strokeWidth="2.5" />
                  <path d="M60 40C56 25 64 25 60 12C56 25 64 25 60 40Z" />
                  <path d="M60 60C56 75 64 75 60 88C56 75 64 75 60 60Z" />
                  <path d="M50 45C36 38 40 46 26 40C38 46 36 54 50 45Z" />
                  <path d="M70 55C84 62 80 54 94 60C82 54 84 46 70 55Z" />
                  <path d="M50 55C36 62 40 54 26 60C38 54 36 46 50 55Z" />
                  <path d="M70 45C84 38 80 46 94 40C82 46 84 54 70 45Z" />
                  <circle cx="60" cy="12" r="3.5" fill="#f4ede0" />
                  <circle cx="26" cy="40" r="3.5" fill="#f4ede0" />
                  <circle cx="94" cy="40" r="3.5" fill="#f4ede0" />
                  <circle cx="26" cy="60" r="3.5" fill="#f4ede0" />
                  <circle cx="94" cy="60" r="3.5" fill="#f4ede0" />
                  <circle cx="60" cy="88" r="3.5" fill="#f4ede0" />
                </g>
              </svg>
            </div>

            {/* Bottom Row: Large Retro Neo-Grotesk Title & 1974 */}
            <div className="z-10 pt-2 border-t border-[#f4ede0]/25 flex items-baseline justify-between gap-2">
              <h3 className="font-display font-black text-3xl sm:text-4xl text-[#f4ede0] lowercase tracking-tight leading-none ink-printed">
                leetcode
              </h3>
              <span className="font-syne font-bold text-xs tracking-wider uppercase text-[#dca926] shrink-0">
                1974
              </span>
            </div>
          </div>
        );

      case 'learning':
        // AGED OCHRE / MUSTARD // Japan Bloom Season 1974 (Ref 1 Bottom Stamp)
        return (
          <div className="relative w-full h-full flex flex-col justify-between p-5 text-[#141317] overflow-hidden select-none">
            {/* Top Row: Country / Kanji & 50c */}
            <div className="flex justify-between items-start z-10">
              <div className="font-sans font-bold text-xs tracking-wider">
                <span className="block text-sm font-serif">英国</span>
                <span className="tracking-widest opacity-80">NIPPON</span>
              </div>
              <div className="font-syne font-extrabold text-3xl tracking-tighter leading-none text-[#141317]">
                50c
              </div>
            </div>

            {/* Center: Engraved Horizontal Lines with Dark Ink Blossom */}
            <div className="my-auto py-1 flex items-center justify-center relative z-10 w-full">
              {/* Fine engraved background lines in carbon ink */}
              <div className="absolute inset-0 flex flex-col justify-between py-2 pointer-events-none opacity-25">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div key={i} className="w-full h-[1px] bg-[#141317]" />
                ))}
              </div>

              {/* Japanese Ochre Botanical Blossom with Dark Ink Linework */}
              <svg
                width="120"
                height="100"
                viewBox="0 0 120 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="relative z-10 transition-transform duration-500 group-hover:scale-105"
              >
                <g stroke="#141317" strokeWidth="2.5" fill="#d4941c">
                  <circle cx="60" cy="50" r="10" fill="#141317" stroke="#141317" strokeWidth="2" />
                  <path d="M60 40C56 25 64 25 60 12C56 25 64 25 60 40Z" />
                  <path d="M60 60C56 75 64 75 60 88C56 75 64 75 60 60Z" />
                  <path d="M50 45C36 38 40 46 26 40C38 46 36 54 50 45Z" />
                  <path d="M70 55C84 62 80 54 94 60C82 54 84 46 70 55Z" />
                  <path d="M50 55C36 62 40 54 26 60C38 54 36 46 50 55Z" />
                  <path d="M70 45C84 38 80 46 94 40C82 46 84 54 70 45Z" />
                  <circle cx="60" cy="12" r="3.5" fill="#141317" />
                  <circle cx="26" cy="40" r="3.5" fill="#141317" />
                  <circle cx="94" cy="40" r="3.5" fill="#141317" />
                  <circle cx="26" cy="60" r="3.5" fill="#141317" />
                  <circle cx="94" cy="60" r="3.5" fill="#141317" />
                  <circle cx="60" cy="88" r="3.5" fill="#141317" />
                </g>
              </svg>
            </div>

            {/* Bottom Row: Bold Typography & 1974 */}
            <div className="z-10 pt-2 border-t border-[#141317]/25 flex items-baseline justify-between gap-2">
              <h3 className="font-display font-black text-3xl sm:text-4xl text-[#141317] lowercase tracking-tight leading-none ink-printed">
                learning
              </h3>
              <span className="font-syne font-bold text-xs tracking-wider uppercase text-[#141317]/75 shrink-0">
                1974
              </span>
            </div>
          </div>
        );

      case 'books':
        // AGED TERRACOTTA // Star Field in Kyoto 1997 (Ref 3)
        return (
          <div className="relative w-full h-full flex flex-col justify-between p-5 text-[#f4ede0] overflow-hidden select-none">
            {/* Top Row: Pioneer Pulsar Map Header in aged cream */}
            <div className="flex justify-between items-start z-10 text-xs font-serif-vintage tracking-wider text-[#f4ede0]/80">
              <span>VOYAGER // KYOTO</span>
              <span>1997</span>
            </div>

            {/* Center Artwork: Pioneer Plaque Pulsar Map & Astronomical Linework */}
            <div className="my-auto py-1 flex items-center justify-center relative z-10">
              <svg
                width="140"
                height="105"
                viewBox="0 0 140 105"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transition-transform duration-500 group-hover:scale-105"
              >
                {/* Hydrogen Spin Transition Symbol */}
                <circle cx="30" cy="18" r="6" stroke="#f4ede0" strokeWidth="1.5" />
                <line x1="30" y1="12" x2="30" y2="24" stroke="#f4ede0" strokeWidth="1.5" />
                <line x1="36" y1="18" x2="48" y2="18" stroke="#f4ede0" strokeWidth="1.5" />
                <circle cx="54" cy="18" r="6" stroke="#f4ede0" strokeWidth="1.5" />
                <line x1="54" y1="12" x2="54" y2="24" stroke="#f4ede0" strokeWidth="1.5" />

                {/* Radiating Pulsar Lines */}
                <g stroke="#f4ede0" strokeWidth="1.5" strokeLinecap="round">
                  <circle cx="55" cy="55" r="2.5" fill="#f4ede0" />
                  <line x1="55" y1="55" x2="15" y2="70" />
                  <line x1="55" y1="55" x2="25" y2="40" />
                  <line x1="55" y1="55" x2="35" y2="28" />
                  <line x1="55" y1="55" x2="65" y2="22" />
                  <line x1="55" y1="55" x2="85" y2="35" />
                  <line x1="55" y1="55" x2="95" y2="60" />
                  <line x1="55" y1="55" x2="80" y2="80" />
                  <line x1="55" y1="55" x2="45" y2="85" />
                  <line x1="55" y1="55" x2="10" y2="52" />
                </g>

                {/* Spacecraft outline */}
                <g stroke="#f4ede0" strokeWidth="1.75" strokeLinecap="round">
                  <path d="M102 32C102 26 108 26 108 32C108 38 102 38 102 32Z" />
                  <path d="M105 38V68M105 50H116M105 50H94M105 68L98 90M105 68L112 90" />
                  <path d="M90 20C96 40 96 70 90 90" stroke="#f4ede0" strokeWidth="2" strokeDasharray="3 3" />
                </g>
              </svg>
            </div>

            {/* Bottom Row: Star Field Style Chunky Typography */}
            <div className="z-10 pt-2 border-t border-[#f4ede0]/25 flex items-baseline justify-between gap-2">
              <h3 className="font-display font-black text-3xl sm:text-4xl text-[#f4ede0] lowercase tracking-tight leading-none ink-printed">
                books
              </h3>
              <div className="text-right text-[10px] font-sans font-bold leading-tight uppercase opacity-85">
                <div>NIPPON 星場</div>
                <div>IN KYOTO</div>
              </div>
            </div>
          </div>
        );

      case 'blogs':
        // AGED RISOGRAPH MAGENTA // Tokyo Airmail Ticket
        return (
          <div className="relative w-full h-full flex flex-col justify-between p-5 text-[#f4ede0] overflow-hidden select-none">
            {/* Top Row: Air Mail & 25c */}
            <div className="flex justify-between items-start z-10">
              <div className="font-serif-vintage tracking-widest text-sm uppercase opacity-90">
                PAR AVION ✈
              </div>
              <div className="font-syne font-extrabold text-2xl tracking-tighter leading-none text-[#dca926]">
                25¢
              </div>
            </div>

            {/* Center: Wavy Postal Postmark & Sacred Heart */}
            <div className="my-auto py-1 flex items-center justify-center relative z-10">
              <div className="absolute w-24 h-24 rounded-full border-2 border-dashed border-[#dca926]/50 rotate-12 flex items-center justify-center pointer-events-none text-[8px] font-mono text-[#dca926]">
                POSTAL // 1982
              </div>

              <svg
                width="120"
                height="90"
                viewBox="0 0 120 90"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="relative z-10 transition-transform duration-500 group-hover:scale-105"
              >
                <path d="M10 20Q30 10 50 20T90 20M10 32Q30 22 50 32T90 32" stroke="#f4ede0" strokeWidth="1.5" opacity="0.5" />
                <path
                  d="M60 80C60 80 32 60 32 38C32 24 44 20 54 28C57 31 60 36 60 36C60 36 63 31 66 28C76 20 88 24 88 38C88 60 60 80 60 80Z"
                  fill="#dca926"
                  stroke="#141317"
                  strokeWidth="3"
                />
                <circle cx="60" cy="42" r="7" fill="#141317" />
                <circle cx="58" cy="40" r="2.5" fill="#f4ede0" />
                <path d="M56 18C58 10 64 6 64 6C64 6 66 12 63 18" stroke="#f4ede0" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M48 22C50 14 54 10 54 10" stroke="#f4ede0" strokeWidth="2" strokeLinecap="round" />
                <path d="M72 22C70 14 66 10 66 10" stroke="#f4ede0" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>

            {/* Bottom Row: Typography & Date */}
            <div className="z-10 pt-2 border-t border-[#f4ede0]/25 flex items-baseline justify-between gap-2">
              <h3 className="font-display font-black text-3xl sm:text-4xl text-[#f4ede0] lowercase tracking-tight leading-none ink-printed">
                blogs
              </h3>
              <span className="font-syne font-bold text-xs uppercase tracking-wider text-[#dca926] shrink-0">
                DISPATCH
              </span>
            </div>
          </div>
        );

      case 'toolbox':
        // AGED ARCHIVAL PURPLE // Celestial Workshop Pass
        return (
          <div className="relative w-full h-full flex flex-col justify-between p-5 text-[#f4ede0] overflow-hidden select-none">
            {/* Top Row: Theater Box Seat & Act */}
            <div className="flex justify-between items-start z-10 text-xs font-serif-vintage tracking-wider text-[#dca926]">
              <span>BALCONY // ROW C</span>
              <span>1988</span>
            </div>

            {/* Center: Crossed Calipers & Orbiting Celestial Star */}
            <div className="my-auto py-1 flex items-center justify-center relative z-10">
              <svg
                width="120"
                height="95"
                viewBox="0 0 120 95"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transition-transform duration-500 group-hover:rotate-6"
              >
                <ellipse cx="60" cy="48" rx="46" ry="18" stroke="#dca926" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.8" />
                <g transform="translate(30, 16)">
                  <g transform="rotate(-32, 30, 30)">
                    <rect x="26" y="2" width="8" height="52" rx="2" fill="#dca926" stroke="#141317" strokeWidth="2" />
                    <circle cx="30" cy="8" r="6" fill="#f4ede0" stroke="#141317" strokeWidth="2" />
                  </g>
                  <g transform="rotate(32, 30, 30)">
                    <rect x="27" y="6" width="6" height="48" rx="2" fill="#bf2460" stroke="#141317" strokeWidth="2" />
                    <path d="M30 0L33 6L39 8L33 10L30 16L27 10L21 8L27 6Z" fill="#dca926" stroke="#141317" strokeWidth="1.5" />
                  </g>
                </g>
                <circle cx="98" cy="28" r="3.5" fill="#dca926" />
                <circle cx="20" cy="72" r="2.5" fill="#f4ede0" />
              </svg>
            </div>

            {/* Bottom Row: Typography & Gear Tag */}
            <div className="z-10 pt-2 border-t border-[#f4ede0]/25 flex items-baseline justify-between gap-2">
              <h3 className="font-display font-black text-3xl sm:text-4xl text-[#f4ede0] lowercase tracking-tight leading-none ink-printed">
                toolbox
              </h3>
              <span className="font-syne font-bold text-xs uppercase tracking-wider text-[#dca926] shrink-0">
                BENCH
              </span>
            </div>
          </div>
        );

      case 'achievements':
      default:
        // ANTIQUE WARM BOOK PAGE // 1st Prize Rosette & Sun Festival
        return (
          <div className="relative w-full h-full flex flex-col justify-between p-5 text-[#141317] overflow-hidden select-none">
            {/* Top Row: Honor & Rosette stamp */}
            <div className="flex justify-between items-start z-10 text-xs font-serif-vintage tracking-wider">
              <span className="text-[#be2626] font-bold">1ST PRIZE ❋</span>
              <span className="font-syne font-extrabold text-sm bg-[#be2626] text-[#f4ede0] px-2 py-0.5 rounded">
                1991
              </span>
            </div>

            {/* Center: Vintage Radiant Winking Sun Face in aged vermilion */}
            <div className="my-auto py-1 flex items-center justify-center relative z-10">
              <svg
                width="120"
                height="95"
                viewBox="0 0 120 95"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transition-transform duration-500 group-hover:scale-105"
              >
                <g fill="#dca926" stroke="#141317" strokeWidth="2">
                  <path d="M60 4L64 18L72 8L72 22L82 14L78 28L90 24L82 34L94 36L83 44L94 50L82 54L89 64L76 60L80 74L68 68L66 82L60 70L54 82L52 68L40 74L44 60L31 64L38 54L26 50L37 44L26 36L38 34L30 24L42 28L38 14L48 22L48 8L56 18Z" />
                </g>
                <circle cx="60" cy="44" r="20" fill="#be2626" stroke="#141317" strokeWidth="2.5" />
                <path d="M51 40C52 38 55 38 56 40" stroke="#f4ede0" strokeWidth="2.5" strokeLinecap="round" />
                <circle cx="68" cy="40" r="2.5" fill="#f4ede0" />
                <path d="M52 50C56 55 64 55 68 50" stroke="#f4ede0" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </div>

            {/* Bottom Row: Typography & Medal */}
            <div className="z-10 pt-2 border-t border-[#141317]/25 flex items-baseline justify-between gap-2">
              <h3 className="font-display font-black text-3xl sm:text-4xl text-[#141317] lowercase tracking-tight leading-none ink-printed">
                achievements
              </h3>
              <span className="font-syne font-bold text-xs uppercase tracking-wider text-[#be2626] shrink-0">
                MEDAL
              </span>
            </div>
          </div>
        );
    }
  };

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => onClick(folder)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick(folder);
        }
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative cursor-pointer outline-none select-none transition-all duration-500 ease-out"
      style={{
        transform: isHovered
          ? `translateY(-14px) scale(1.04) rotate(${ticketConfig.rotation * 0.3}deg)`
          : `translateY(0px) scale(1) rotate(${ticketConfig.rotation}deg)`,
      }}
      aria-label={`Open folder ${folder.name}`}
    >
      {/* ==================================================== */}
      {/* AGED VINTAGE TICKET WITH REAL PAPER GRAIN & FIBERS   */}
      {/* ==================================================== */}
      <div
        className="relative w-full aspect-[1/1.28] max-w-[300px] sm:max-w-[320px] mx-auto transition-all duration-500"
        style={{
          filter: isHovered
            ? `drop-shadow(0 22px 30px rgba(0,0,0,0.9)) drop-shadow(0 0 15px ${folder.accentColor}35)`
            : 'drop-shadow(0 14px 22px rgba(0,0,0,0.8))',
        }}
      >
        {/* Scalloped Perforated Edge Container in Aged Manila Paper */}
        <div
          className="relative w-full h-full p-2.5 sm:p-3 overflow-hidden shadow-inner"
          style={{
            backgroundColor: ticketConfig.paperColor,
            clipPath: `polygon(
              /* Top edge with scalloped notches */
              0% 0%, 5% 0%, 5% 2%, 7% 2%, 7% 0%, 12% 0%, 12% 2%, 14% 2%, 14% 0%, 19% 0%, 19% 2%, 21% 2%, 21% 0%, 26% 0%, 26% 2%, 28% 2%, 28% 0%, 33% 0%, 33% 2%, 35% 2%, 35% 0%, 40% 0%, 40% 2%, 42% 2%, 42% 0%, 47% 0%, 47% 2%, 49% 2%, 49% 0%, 54% 0%, 54% 2%, 56% 2%, 56% 0%, 61% 0%, 61% 2%, 63% 2%, 63% 0%, 68% 0%, 68% 2%, 70% 2%, 70% 0%, 75% 0%, 75% 2%, 77% 2%, 77% 0%, 82% 0%, 82% 2%, 84% 2%, 84% 0%, 89% 0%, 89% 2%, 91% 2%, 91% 0%, 96% 0%, 96% 2%, 98% 2%, 98% 0%, 100% 0%,
              /* Right edge with scalloped notches */
              100% 5%, 98% 5%, 98% 7%, 100% 7%, 100% 12%, 98% 12%, 98% 14%, 100% 14%, 100% 19%, 98% 19%, 98% 21%, 100% 21%, 100% 26%, 98% 26%, 98% 28%, 100% 28%, 100% 33%, 98% 33%, 98% 35%, 100% 35%, 100% 40%, 98% 40%, 98% 42%, 100% 42%, 100% 47%, 98% 47%, 98% 49%, 100% 49%, 100% 54%, 98% 54%, 98% 56%, 100% 56%, 100% 61%, 98% 61%, 98% 63%, 100% 63%, 100% 68%, 98% 68%, 98% 70%, 100% 70%, 100% 75%, 98% 75%, 98% 77%, 100% 77%, 100% 82%, 98% 82%, 98% 84%, 100% 84%, 100% 89%, 98% 89%, 98% 91%, 100% 91%, 100% 96%, 98% 96%, 98% 98%, 100% 98%, 100% 100%,
              /* Bottom edge with scalloped notches */
              98% 100%, 98% 98%, 96% 98%, 96% 100%, 91% 100%, 91% 98%, 89% 98%, 89% 100%, 84% 100%, 84% 98%, 82% 98%, 82% 100%, 77% 100%, 77% 98%, 75% 98%, 75% 100%, 70% 100%, 70% 98%, 68% 98%, 68% 100%, 63% 100%, 63% 98%, 61% 98%, 61% 100%, 56% 100%, 56% 98%, 54% 98%, 54% 100%, 49% 100%, 49% 98%, 47% 98%, 47% 100%, 42% 100%, 42% 98%, 40% 98%, 40% 100%, 35% 100%, 35% 98%, 33% 98%, 33% 100%, 28% 100%, 28% 98%, 26% 98%, 26% 100%, 21% 100%, 21% 98%, 19% 98%, 19% 100%, 14% 100%, 14% 98%, 12% 98%, 12% 100%, 7% 100%, 7% 98%, 5% 98%, 5% 100%, 0% 100%,
              /* Left edge with scalloped notches */
              0% 96%, 2% 96%, 2% 94%, 0% 94%, 0% 89%, 2% 89%, 2% 87%, 0% 87%, 0% 82%, 2% 82%, 2% 80%, 0% 80%, 0% 75%, 2% 75%, 2% 73%, 0% 73%, 0% 68%, 2% 68%, 2% 66%, 0% 66%, 0% 61%, 2% 61%, 2% 59%, 0% 59%, 0% 54%, 2% 54%, 2% 52%, 0% 52%, 0% 47%, 2% 47%, 2% 45%, 0% 45%, 0% 40%, 2% 40%, 2% 38%, 0% 38%, 0% 33%, 2% 33%, 2% 31%, 0% 31%, 0% 26%, 2% 26%, 2% 24%, 0% 24%, 0% 19%, 2% 19%, 2% 17%, 0% 17%, 0% 12%, 2% 12%, 2% 10%, 0% 10%, 0% 5%, 2% 5%, 2% 3%, 0% 3%
            )`,
          }}
        >
          {/* Subtle paper tooth on perforated border */}
          <div className="absolute inset-0 bg-halftone-aged pointer-events-none opacity-20" />

          {/* Inner Ticket Colored Body */}
          <div
            className="relative w-full h-full rounded-[14px] overflow-hidden border border-black/30"
            style={{
              backgroundColor: ticketConfig.bodyColor,
              boxShadow: 'inset 0 0 16px rgba(0,0,0,0.18)',
            }}
          >
            {/* Paper Fiber Texture Layer */}
            <div className="absolute inset-0 worn-paper-texture pointer-events-none opacity-40 mix-blend-multiply" />
            <div className="absolute inset-0 bg-halftone-aged pointer-events-none opacity-25" />

            {/* Ticket Tear Perforation Line with notches in aged paper color */}
            <div
              className="absolute top-1/2 left-0 w-2.5 h-5 -translate-y-1/2 -translate-x-1/2 rounded-r-full pointer-events-none z-20 shadow-xs"
              style={{ backgroundColor: ticketConfig.paperColor }}
            />
            <div
              className="absolute top-1/2 right-0 w-2.5 h-5 -translate-y-1/2 translate-x-1/2 rounded-l-full pointer-events-none z-20 shadow-xs"
              style={{ backgroundColor: ticketConfig.paperColor }}
            />

            {/* Individual Authentic Artwork & Typography */}
            {renderTicketContent()}

            {/* Faint corner wear/patina */}
            <div className="absolute inset-0 rounded-[14px] pointer-events-none border border-black/10 opacity-60" />
          </div>
        </div>
      </div>
    </div>
  );
};
