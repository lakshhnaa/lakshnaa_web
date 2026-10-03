import React from 'react';
import { BrandLogo } from './BrandLogo';
import { PROFILE, ARCHIVE_FOLDERS } from '../data/archiveData';
import { FolderMeta } from '../types/archive';
import { Github, Mail, Linkedin, Code2, ArrowUp } from 'lucide-react';

interface FooterProps {
  onSelectFolder: (folder: FolderMeta) => void;
  onScrollToTop: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onSelectFolder,
  onScrollToTop,
}) => {
  return (
    <footer className="border-t border-[#23212b] bg-[#07060a] pt-16 sm:pt-20 pb-12 relative overflow-hidden text-zinc-400 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Brand Identity (Cols 1-5) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <BrandLogo size="md" variant="mark-only" accentColor="#ff3366" />
            </div>

            <p className="text-sm text-zinc-300 font-fraunces leading-relaxed max-w-md">
              A personal digital library and notebook belonging to Lakshnaa B J —
              studying Electronics &amp; Computer Science Engineering at VIT Chennai.
            </p>

            <div className="font-script text-amber-300 text-xl">
              handmade with curiosity ❋
            </div>
          </div>

          {/* Collectible Folders (Cols 6-8) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-serif-vintage text-base text-[#f7f3eb] uppercase tracking-wider">
              Collections
            </h4>
            <ul className="space-y-2 font-serif-vintage text-sm">
              {ARCHIVE_FOLDERS.map((f) => (
                <li key={f.id}>
                  <button
                    onClick={() => onSelectFolder(f)}
                    className="hover:text-[#f7f3eb] transition-colors flex items-center gap-2 group text-left"
                  >
                    <span
                      className="w-2 h-2 rounded-full transition-transform group-hover:scale-125"
                      style={{ backgroundColor: f.accentColor }}
                    />
                    <span className="capitalize">{f.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social / Connect (Cols 9-12) */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-serif-vintage text-base text-[#f7f3eb] uppercase tracking-wider">
              Get in Touch
            </h4>

            <div className="flex flex-wrap items-center gap-2.5 font-serif-vintage text-sm">
              <a
                href={PROFILE.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#16141d] hover:bg-[#23202e] border border-[#2b2736] text-zinc-200 hover:text-white transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4 text-zinc-400" />
                <span>GitHub</span>
              </a>
              <a
                href={PROFILE.contact.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#16141d] hover:bg-[#23202e] border border-[#2b2736] text-zinc-200 hover:text-white transition-colors"
                aria-label="LeetCode Profile"
              >
                <Code2 className="w-4 h-4 text-amber-400" />
                <span>LeetCode</span>
              </a>
              <a
                href={`mailto:${PROFILE.contact.email}`}
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#16141d] hover:bg-[#23202e] border border-[#2b2736] text-zinc-200 hover:text-white transition-colors"
                aria-label="Direct Email"
              >
                <Mail className="w-4 h-4 text-rose-400" />
                <span>Email</span>
              </a>
              <a
                href={PROFILE.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#16141d] hover:bg-[#23202e] border border-[#2b2736] text-zinc-200 hover:text-white transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4 text-blue-400" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 border-t border-[#23212b] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-serif-vintage text-zinc-500">
          <div className="flex items-center gap-2">
            <span>© 2026</span>
            <span className="text-zinc-300 lowercase font-bold">
              lakshhnaa
            </span>
            <span>·</span>
            <span>All rights reserved</span>
          </div>

          <button
            onClick={onScrollToTop}
            className="flex items-center gap-1.5 hover:text-zinc-200 transition-colors py-1 px-3 rounded-full hover:bg-white/5 border border-transparent hover:border-[#2b2736]"
            aria-label="Scroll to top"
          >
            <span>Top of Page</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
