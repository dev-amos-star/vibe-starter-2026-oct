import React, { useState } from 'react';
import { Article } from '../types';

interface SectionsMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectSection: (section: string) => void;
  savedArticles: Article[];
  onSelectArticle: (id: string) => void;
  fontSize: 'standard' | 'large' | 'larger';
  setFontSize: (size: 'standard' | 'large' | 'larger') => void;
}

export const SectionsMenu: React.FC<SectionsMenuProps> = ({
  isOpen,
  onClose,
  onSelectSection,
  savedArticles,
  onSelectArticle,
  fontSize,
  setFontSize,
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  if (!isOpen) return null;

  const sections = [
    'Home Page',
    'World',
    'U.S. News',
    'Politics',
    'New York',
    'Business',
    'Tech',
    'Science',
    'Health',
    'Opinion',
    'Arts',
    'Books',
    'Style',
    'Food',
    'Travel',
    'Magazine',
    'Games',
    'Cooking',
    'The Athletic',
    'Wirecutter'
  ];

  const filteredSections = sections.filter((s) =>
    s.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="relative w-full max-w-sm bg-white h-full shadow-2xl flex flex-col z-10 overflow-hidden border-r border-[#e2e2e2]">
        {/* Drawer Header */}
        <div className="p-4 border-b border-[#e2e2e2] flex items-center justify-between bg-neutral-50">
          <span className="masthead-title text-2xl text-[#121212]">The New York Times</span>
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="p-1.5 text-neutral-600 hover:text-black cursor-pointer rounded-sm hover:bg-neutral-200"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M6 18L18 6M6 6l12 12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {/* Search */}
        <div className="p-3 border-b border-[#e2e2e2]">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search sections or topics..."
              className="w-full text-xs font-sans-meta pl-8 pr-3 py-1.5 bg-neutral-100 border border-neutral-300 rounded-none focus:outline-none focus:border-black"
            />
            <svg
              className="w-4 h-4 text-neutral-400 absolute left-2.5 top-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
        </div>

        {/* Content list */}
        <div className="flex-1 overflow-y-auto p-4 space-y-6">
          {/* Saved Reading List */}
          {savedArticles.length > 0 && (
            <div>
              <div className="text-[11px] font-sans-meta font-bold uppercase tracking-wider text-[#326891] mb-2 flex items-center justify-between">
                <span>Reading List ({savedArticles.length})</span>
                <span className="text-[10px] bg-neutral-100 text-neutral-600 px-1.5 py-0.5">Saved</span>
              </div>
              <div className="space-y-2 border-l-2 border-[#326891] pl-2.5">
                {savedArticles.map((art) => (
                  <button
                    key={art.id}
                    onClick={() => {
                      onSelectArticle(art.id);
                      onClose();
                    }}
                    className="block text-left group w-full cursor-pointer"
                  >
                    <p className="nyt-headline text-xs font-semibold text-[#121212] group-hover:underline line-clamp-1">
                      {art.title}
                    </p>
                    <span className="text-[10px] text-[#727272] font-sans-meta">{art.readTime}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Reading Preferences */}
          <div className="bg-neutral-50 p-3 border border-[#e2e2e2]">
            <span className="text-[10px] font-sans-meta uppercase font-bold tracking-wider text-[#727272] block mb-2">
              Text Size Preferences
            </span>
            <div className="flex items-center gap-2">
              {(['standard', 'large', 'larger'] as const).map((sz) => (
                <button
                  key={sz}
                  onClick={() => setFontSize(sz)}
                  className={`flex-1 py-1 text-xs font-sans-meta border transition-colors cursor-pointer ${
                    fontSize === sz
                      ? 'bg-[#121212] text-white border-[#121212]'
                      : 'bg-white text-[#121212] border-[#e2e2e2] hover:bg-neutral-100'
                  }`}
                >
                  {sz === 'standard' ? 'Standard' : sz === 'large' ? 'Large' : 'Largest'}
                </button>
              ))}
            </div>
          </div>

          {/* Sections List */}
          <div>
            <span className="text-[11px] font-sans-meta font-bold uppercase tracking-wider text-[#121212] block mb-2 border-b border-[#e2e2e2] pb-1">
              Sections
            </span>
            <ul className="space-y-1.5">
              {filteredSections.map((sec) => (
                <li key={sec}>
                  <button
                    onClick={() => {
                      onSelectSection(sec);
                      onClose();
                    }}
                    className="w-full text-left py-1 text-sm font-sans-meta font-medium text-neutral-800 hover:text-black hover:translate-x-1 transition-all cursor-pointer flex items-center justify-between"
                  >
                    <span>{sec}</span>
                    <span className="text-neutral-400 text-xs">→</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Drawer Footer */}
        <div className="p-3 bg-neutral-100 border-t border-[#e2e2e2] text-[11px] text-[#727272] font-sans-meta text-center">
          The New York Times · 2026 Edition
        </div>
      </div>
    </div>
  );
};
