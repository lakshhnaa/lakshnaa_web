import React from 'react';
import { BrandLogo } from './BrandLogo';
import { ARCHIVE_FOLDERS } from '../data/archiveData';
import { FolderMeta } from '../types/archive';

interface NavigationProps {
  onSelectFolder: (folder: FolderMeta) => void;
  onScrollToFolders: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  onSelectFolder,
  onScrollToFolders,
}) => {
  return (
    <header className="sticky top-0 z-40 w-full bg-[#09080c]/90 backdrop-blur-md border-b border-[#23212b] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-4">
        {/* Left: Brand Logo Mark */}
        <div className="flex items-center gap-3">
          <a
            href="#"
            className="flex items-center outline-none focus-visible:ring-2 focus-visible:ring-rose-400 rounded-lg p-0.5"
            aria-label="lakshhnaa home"
          >
            <BrandLogo size="sm" variant="mark-only" accentColor="#ff3366" />
          </a>
        </div>

        {/* Center: Folder Directory (Desktop) */}
        <nav
          className="hidden md:flex items-center gap-1.5 font-serif-vintage text-base tracking-wide"
          aria-label="Collection Folders"
        >
          {ARCHIVE_FOLDERS.map((f) => (
            <button
              key={f.id}
              onClick={() => onSelectFolder(f)}
              className="px-3 py-1.5 rounded-full text-zinc-400 hover:text-[#f7f3eb] transition-all flex items-center gap-2 group hover:bg-[#1a1822]"
            >
              <span
                className="w-2 h-2 rounded-full transition-transform group-hover:scale-125"
                style={{ backgroundColor: f.accentColor }}
              />
              <span className="capitalize">{f.name}</span>
            </button>
          ))}
        </nav>

        {/* Right: Browse button */}
        <div className="flex items-center gap-3">
          <button
            onClick={onScrollToFolders}
            className="px-4 py-1.5 rounded-full bg-[#1e1c26] hover:bg-[#2b2736] border border-[#363244] text-[#f7f3eb] font-serif-vintage text-sm transition-all hover:scale-105 active:scale-95"
          >
            ✦ Explore
          </button>
        </div>
      </div>
    </header>
  );
};
