import React from 'react';
import { ARCHIVE_FOLDERS } from '../data/archiveData';
import { FolderMeta } from '../types/archive';
import { TactileFolder } from './TactileFolder';

interface FolderGridSectionProps {
  onSelectFolder: (folder: FolderMeta) => void;
  sectionRef: React.RefObject<HTMLDivElement | null>;
}

export const FolderGridSection: React.FC<FolderGridSectionProps> = ({
  onSelectFolder,
  sectionRef,
}) => {
  return (
    <section
      ref={sectionRef}
      id="archive-folders"
      className="relative py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-visible select-none"
    >
      {/* Decorative vintage collector's atmosphere */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-red-600/5 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-1/4 w-[450px] h-[450px] bg-blue-600/5 rounded-full blur-[160px] pointer-events-none -z-10" />

      {/* ==================================================== */}
      {/* VINTAGE THEATRE TICKETS TABLE LAYOUT                 */}
      {/* Laid out like collected stamps & tickets on a table  */}
      {/* ==================================================== */}
      <div className="relative">
        {/* Row 1: 3 tickets (builds [red], leetcode [cobalt blue], learning [mustard yellow]) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12 lg:gap-16 items-center justify-items-center mb-12 sm:mb-20">
          <div className="w-full max-w-[300px] sm:max-w-[320px] md:translate-y-4">
            <TactileFolder
              folder={ARCHIVE_FOLDERS[0]}
              onClick={onSelectFolder}
              index={0}
            />
          </div>

          <div className="w-full max-w-[300px] sm:max-w-[320px] md:-translate-y-6">
            <TactileFolder
              folder={ARCHIVE_FOLDERS[1]}
              onClick={onSelectFolder}
              index={1}
            />
          </div>

          <div className="w-full max-w-[300px] sm:max-w-[320px] md:translate-y-6">
            <TactileFolder
              folder={ARCHIVE_FOLDERS[2]}
              onClick={onSelectFolder}
              index={2}
            />
          </div>
        </div>

        {/* Row 2: 2 tickets (books [burnt orange], blogs [hot pink]) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-14 lg:gap-24 max-w-4xl mx-auto items-center justify-items-center mb-12 sm:mb-20">
          <div className="w-full max-w-[300px] sm:max-w-[320px] md:-translate-y-4">
            <TactileFolder
              folder={ARCHIVE_FOLDERS[3]}
              onClick={onSelectFolder}
              index={3}
            />
          </div>

          <div className="w-full max-w-[300px] sm:max-w-[320px] md:translate-y-6">
            <TactileFolder
              folder={ARCHIVE_FOLDERS[4]}
              onClick={onSelectFolder}
              index={4}
            />
          </div>
        </div>

        {/* Row 3: 2 tickets (toolbox [deep purple], achievements [antique cream]) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-14 lg:gap-24 max-w-4xl mx-auto items-center justify-items-center">
          <div className="w-full max-w-[300px] sm:max-w-[320px] md:translate-y-3">
            <TactileFolder
              folder={ARCHIVE_FOLDERS[5]}
              onClick={onSelectFolder}
              index={5}
            />
          </div>

          <div className="w-full max-w-[300px] sm:max-w-[320px] md:-translate-y-5">
            <TactileFolder
              folder={ARCHIVE_FOLDERS[6]}
              onClick={onSelectFolder}
              index={6}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
