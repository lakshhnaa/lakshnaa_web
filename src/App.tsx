/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect } from 'react';
import { ARCHIVE_FOLDERS } from './data/archiveData';
import { FolderMeta } from './types/archive';
import { HeroSection } from './components/HeroSection';
import { FolderGridSection } from './components/FolderGridSection';
import { OpenedFolderModal } from './components/OpenedFolderModal';

export default function App() {
  const [openedFolder, setOpenedFolder] = useState<FolderMeta | null>(null);
  const foldersSectionRef = useRef<HTMLDivElement>(null);

  const handleSelectFolder = (folder: FolderMeta) => {
    setOpenedFolder(folder);
  };

  const handleCloseFolder = () => {
    setOpenedFolder(null);
  };

  // Keyboard shortcut support: numbers 1-7 open respective folder
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        document.activeElement?.tagName === 'INPUT' ||
        document.activeElement?.tagName === 'TEXTAREA'
      ) {
        return;
      }

      const num = parseInt(e.key, 10);
      if (num >= 1 && num <= ARCHIVE_FOLDERS.length) {
        setOpenedFolder(ARCHIVE_FOLDERS[num - 1]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="relative min-h-screen bg-aged-canvas text-[#ede5d8] flex flex-col font-sans selection:bg-[#be2626] selection:text-[#f4ede0] overflow-x-hidden">
      {/* 
        Subtle Fine-Grained Scanned Paper & Aged Print SVG Noise Filter
        - Monochromatic paper tooth (no RGB noise speckles)
        - Fine grain (high frequency 0.9) to mimic scanned newsprint & cardstock
        - Zero blur or text distortion: typography stays crisp and readable
        - Low opacity (3.8%) overlay across background and ticket surfaces
      */}
      <svg
        className="pointer-events-none fixed inset-0 z-30 w-full h-full opacity-[0.038] mix-blend-overlay select-none"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="scanned-paper-grain" x="0%" y="0%" width="100%" height="100%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.9"
            numOctaves="3"
            stitchTiles="stitch"
            result="rawNoise"
          />
          {/* Convert to pure monochromatic paper fiber luminance to avoid digital color noise */}
          <feColorMatrix
            type="matrix"
            values="0.33 0.33 0.33 0 0  0.33 0.33 0.33 0 0  0.33 0.33 0.33 0 0  0 0 0 1 0"
            in="rawNoise"
            result="monoGrain"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#scanned-paper-grain)" />
      </svg>

      <main className="relative z-10 flex-1 flex flex-col justify-start py-4 sm:py-8">
        {/* Header: logo and lakshhnaa */}
        <HeroSection />

        {/* Floating Collectible Vintage Theatre Tickets */}
        <FolderGridSection
          sectionRef={foldersSectionRef}
          onSelectFolder={handleSelectFolder}
        />
      </main>

      {/* Opened Folder Modal on Click */}
      <OpenedFolderModal
        folder={openedFolder}
        onClose={handleCloseFolder}
        onSelectFolder={handleSelectFolder}
      />
    </div>
  );
}
