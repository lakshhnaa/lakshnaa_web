import React, { useEffect } from 'react';
import { FolderMeta } from '../types/archive';
import { ARCHIVE_FOLDERS } from '../data/archiveData';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface OpenedFolderModalProps {
  folder: FolderMeta | null;
  onClose: () => void;
  onSelectFolder: (folder: FolderMeta) => void;
}

export const OpenedFolderModal: React.FC<OpenedFolderModalProps> = ({
  folder,
  onClose,
  onSelectFolder,
}) => {
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (folder) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [folder]);

  if (!folder) return null;

  const currentIndex = ARCHIVE_FOLDERS.findIndex((f) => f.id === folder.id);
  const prevFolder =
    ARCHIVE_FOLDERS[(currentIndex - 1 + ARCHIVE_FOLDERS.length) % ARCHIVE_FOLDERS.length];
  const nextFolder =
    ARCHIVE_FOLDERS[(currentIndex + 1) % ARCHIVE_FOLDERS.length];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="opened-folder-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-300"
      onClick={onClose}
    >
      {/* Aged Paper Ticket Dossier Container */}
      <div
        className="relative w-full max-w-xl my-auto bg-[#131216] text-[#ede5d8] rounded-[32px] overflow-hidden border-2 border-[#2b2733] shadow-2xl transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Strip in ticket's aged printed ink color */}
        <div
          className="relative px-6 sm:px-8 py-8 flex flex-col justify-end min-h-[160px] overflow-hidden border-b-2 border-[#121118]"
          style={{ backgroundColor: folder.ticketConfig.bodyColor }}
        >
          {/* Halftone & Paper Fiber Texture */}
          <div className="absolute inset-0 bg-halftone-aged opacity-20 pointer-events-none" />
          <div className="absolute inset-0 worn-paper-texture opacity-30 pointer-events-none" />

          {/* Close Button in Aged Wax Seal style */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-[#141317]/85 hover:bg-[#141317] text-[#f4ede0] transition-all hover:scale-105 active:scale-95 border border-[#f4ede0]/20 focus:outline-none"
            aria-label="Close ticket"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Vintage Ticket Stub Kicker */}
          <div className="flex items-center gap-2 text-xs font-syne font-bold tracking-widest text-[#f4ede0]/90 mb-1 uppercase">
            <span>TICKET {folder.ticketConfig.ticketNum}</span>
            <span>·</span>
            <span>SERIES {folder.ticketConfig.yearStamp}</span>
          </div>

          {/* Folder name in chunky aged display typography */}
          <h2
            id="opened-folder-title"
            className="font-display font-black text-4xl sm:text-5xl text-[#f4ede0] lowercase tracking-tight select-none drop-shadow-md ink-printed"
          >
            {folder.name}
          </h2>
        </div>

        {/* Vintage Ticket Dossier Body in aged carbon paper */}
        <div className="p-6 sm:p-8 space-y-6 bg-aged-canvas">
          <p className="text-lg sm:text-xl text-[#ede5d8] font-fraunces leading-snug">
            {folder.headline}
          </p>

          <p className="text-sm sm:text-base text-zinc-300 font-sans leading-relaxed">
            {folder.description}
          </p>

          {/* Personal ticket readiness note */}
          <div className="p-5 rounded-2xl bg-[#1b1921] border border-[#2b2733] space-y-1.5 relative overflow-hidden">
            <div className="flex items-center justify-between">
              <span className="font-syne text-xs uppercase tracking-wider text-[#dca926] font-bold">
                ADMISSION STATUS
              </span>
              <span className="font-script text-base text-zinc-400">
                reserved for lakshhnaa
              </span>
            </div>
            <p className="text-xs sm:text-sm text-zinc-300 font-sans leading-relaxed">
              This space belongs to Lakshnaa's personal collection. Real records, build notes, reading marginalia, and experiments will be added section by section.
            </p>
          </div>

          {/* Bottom Switcher Controls */}
          <div className="pt-4 border-t border-[#2b2733] flex items-center justify-between">
            <button
              onClick={() => onSelectFolder(prevFolder)}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#201d26] hover:bg-[#2a2633] text-xs font-syne font-bold uppercase text-[#ede5d8] transition-colors border border-[#353040]"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>{prevFolder.name}</span>
            </button>

            <button
              onClick={onClose}
              className="px-5 py-2 rounded-xl bg-[#ede5d8] text-[#141317] text-xs font-display lowercase font-bold hover:bg-[#f4ede0] transition-colors"
            >
              close
            </button>

            <button
              onClick={() => onSelectFolder(nextFolder)}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#201d26] hover:bg-[#2a2633] text-xs font-syne font-bold uppercase text-[#ede5d8] transition-colors border border-[#353040]"
            >
              <span>{nextFolder.name}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
