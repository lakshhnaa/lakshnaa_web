import React from 'react';

interface BrandLogoProps {
  variant?: 'full' | 'mark-only' | 'wordmark-only' | 'stacked';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'hero';
  className?: string;
  glow?: boolean;
  accentColor?: string;
}

/**
 * Official Visual Mark & Wordmark for `lakshhnaa`
 * Printed / Aged Ink Aesthetics.
 * NO GREEN. Uses warm aged vermilion, ochre, Prussian blue, and newsprint cream.
 */
export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'full',
  size = 'md',
  className = '',
  glow = false,
  accentColor = '#be2626', // Aged Vermilion Print Ink
}) => {
  const markSizeMap = {
    xs: 18,
    sm: 24,
    md: 32,
    lg: 44,
    xl: 60,
    hero: 84,
  };

  const textClassMap = {
    xs: 'text-xs tracking-tight',
    sm: 'text-sm tracking-tight',
    md: 'text-lg tracking-tight',
    lg: 'text-2xl tracking-tighter',
    xl: 'text-4xl tracking-tighter',
    hero: 'text-6xl sm:text-7xl md:text-8xl tracking-tighter',
  };

  const px = markSizeMap[size];

  // Official Visual Mark SVG with Aged Print Treatment
  const MarkIcon = (
    <svg
      width={px}
      height={px}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 transition-transform duration-300 drop-shadow-sm`}
      aria-label="lakshhnaa official mark"
    >
      {/* Outer rounded squircle container in aged carbon ink paper */}
      <rect
        x="2"
        y="2"
        width="44"
        height="44"
        rx="11"
        fill="#141318"
        stroke="#332f3c"
        strokeWidth="1.5"
      />

      {/* Subtle registration crosshair dots */}
      <circle cx="8" cy="8" r="1" fill="#585264" />
      <circle cx="40" cy="8" r="1" fill="#585264" />
      <circle cx="8" cy="40" r="1" fill="#585264" />
      <circle cx="40" cy="40" r="1" fill="#585264" />

      {/* Electronics & Systems glyph in aged vermilion ink */}
      <path
        d="M14 34V16C14 14.8954 14.8954 14 16 14H20C21.1046 14 22 14.8954 22 16V26C22 27.1046 22.8954 28 24 28C25.1046 28 26 27.1046 26 26V16C26 14.8954 26.8954 14 28 14H32C33.1046 14 34 14.8954 34 16V34"
        stroke={accentColor}
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Horizontal bridge in aged Prussian blue ink */}
      <path
        d="M14 24H34"
        stroke="#294cb3"
        strokeWidth="1.75"
        strokeDasharray="2 3"
      />

      {/* Silicon pulse core */}
      <circle cx="24" cy="28" r="3.2" fill={accentColor} />
      <circle cx="24" cy="28" r="1.2" fill="#ede5d8" />

      {/* Lower ground pin connection in aged ochre ink */}
      <line x1="20" y1="36" x2="28" y2="36" stroke="#d4941c" strokeWidth="2" strokeLinecap="round" />
      <line x1="22" y1="39" x2="26" y2="39" stroke="#d4941c" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );

  if (variant === 'mark-only') {
    return (
      <div className={`inline-flex items-center ${className}`}>
        {MarkIcon}
      </div>
    );
  }

  if (variant === 'wordmark-only') {
    return (
      <span
        className={`font-display font-black text-[#ede5d8] lowercase select-none ${textClassMap[size]} ${className}`}
      >
        lakshhnaa
      </span>
    );
  }

  if (variant === 'stacked') {
    return (
      <div className={`inline-flex flex-col items-center gap-3 ${className}`}>
        {MarkIcon}
        <span
          className={`font-display font-black text-[#ede5d8] lowercase select-none ${textClassMap[size]}`}
        >
          lakshhnaa
        </span>
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center gap-2.5 sm:gap-3 group ${className}`}>
      {MarkIcon}
      <span
        className={`font-display font-black text-[#ede5d8] lowercase tracking-tight select-none transition-colors group-hover:text-amber-100 ${textClassMap[size]}`}
      >
        lakshhnaa
      </span>
    </div>
  );
};
