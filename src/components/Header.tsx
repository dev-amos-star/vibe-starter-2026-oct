import React from 'react';

interface HeaderProps {
  onOpenMenu: () => void;
  onOpenProfile: () => void;
  onOpenSubscribe: () => void;
  onHomeClick: () => void;
  savedCount: number;
  viewMode: 'mobile' | 'broadsheet';
  onToggleViewMode: () => void;
  readingTheme: 'light' | 'sepia' | 'dark';
  onToggleTheme: () => void;
  onSelectSection: (section: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenMenu,
  onOpenProfile,
  onOpenSubscribe,
  onHomeClick,
  savedCount,
  viewMode,
  onToggleViewMode,
  readingTheme,
  onToggleTheme,
  onSelectSection,
}) => {
  const sections = [
    'World',
    'U.S.',
    'Politics',
    'N.Y.',
    'Business',
    'Opinion',
    'Tech',
    'Science',
    'Health',
    'Sports',
    'Arts',
    'Books',
    'Style',
    'Food',
    'Games',
  ];

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-[#e2e2e2] shadow-xs">
      {/* Top Professional Ticker / Edition Bar (Visible on desktop & expandable) */}
      <div className="hidden md:flex items-center justify-between px-6 py-1.5 border-b border-[#e2e2e2] text-[11px] font-sans-meta text-[#727272] bg-neutral-50/80">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 font-bold text-[#121212]">
            <span className="text-black underline underline-offset-2">U.S.</span>
            <span className="hover:text-black cursor-pointer">INTERNATIONAL</span>
            <span className="hover:text-black cursor-pointer">CANADA</span>
            <span className="hover:text-black cursor-pointer">ESPAÑOL</span>
            <span className="hover:text-black cursor-pointer">中文</span>
          </div>
          <span className="text-neutral-300">|</span>
          <span className="text-[#121212]">New York 64°F · Partly Sunny</span>
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-3 text-[10px] font-mono">
            <span className="text-neutral-600">S&P 500 <span className="text-emerald-700 font-bold">+0.42%</span></span>
            <span className="text-neutral-600">NASDAQ <span className="text-emerald-700 font-bold">+0.68%</span></span>
            <span className="text-neutral-600">10-YR <span className="text-neutral-800 font-bold">4.02%</span></span>
          </div>
          <span className="text-neutral-300">|</span>
          <button
            onClick={onToggleViewMode}
            className="font-sans-meta font-semibold text-[11px] text-[#326891] hover:underline cursor-pointer flex items-center space-x-1"
          >
            <span>{viewMode === 'broadsheet' ? '📱 Mobile Frame View' : '📰 Desktop Broadsheet'}</span>
          </button>
          <button
            onClick={onToggleTheme}
            className="font-sans-meta text-[11px] hover:text-black cursor-pointer text-neutral-600"
            title="Toggle Reading Canvas Theme"
          >
            {readingTheme === 'light' ? '🎨 Paper' : readingTheme === 'sepia' ? '🌙 Night' : '☀️ Day'}
          </button>
        </div>
      </div>

      {/* Main Masthead Zone */}
      <div className="max-w-6xl mx-auto px-4 py-2.5">
        <div className="flex items-center justify-between relative">
          {/* Left: Menu & Quick Controls */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <button
              onClick={onOpenMenu}
              aria-label="Open menu"
              className="p-1 -ml-1 text-[#121212] hover:opacity-75 focus:outline-none transition-opacity cursor-pointer relative"
            >
              <svg className="w-6 h-6 stroke-[2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {savedCount > 0 && (
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#326891] rounded-full ring-2 ring-white" />
              )}
            </button>

            <span className="hidden lg:block text-[9px] uppercase tracking-wider font-serif text-[#727272] w-28 leading-tight italic">
              “All the News That’s Fit to Print”
            </span>
          </div>

          {/* Center: Iconic NYT Masthead */}
          <button
            onClick={onHomeClick}
            aria-label="The New York Times"
            className="block text-center flex-1 mx-2 focus:outline-none cursor-pointer group"
          >
            <span className="masthead-title text-[32px] sm:text-[42px] leading-none select-none tracking-tight block text-[#121212] group-hover:opacity-90 transition-opacity">
              The New York Times
            </span>
          </button>

          {/* Right: Account & Mobile View Switcher */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* View Mode quick button on mobile */}
            <button
              onClick={onToggleViewMode}
              className="md:hidden text-[10px] font-sans-meta uppercase font-bold px-2 py-0.5 border border-neutral-300 text-neutral-700 rounded-none cursor-pointer"
            >
              {viewMode === 'broadsheet' ? 'Mobile' : 'Full'}
            </button>

            {/* User Profile */}
            <button
              onClick={onOpenProfile}
              aria-label="Account profile"
              className="p-1 text-[#121212] hover:opacity-75 focus:outline-none transition-opacity cursor-pointer relative"
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path
                  clipRule="evenodd"
                  fillRule="evenodd"
                  d="M12 2.5a5.25 5.25 0 100 10.5 5.25 5.25 0 000-10.5zM3.75 20.25a8.25 8.25 0 0116.5 0 .75.75 0 01-.75.75H4.5a.75.75 0 01-.75-.75z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Date line & Subscription callout bar */}
      <div className="px-4 py-1.5 border-t border-[#e2e2e2] flex items-center justify-between max-w-6xl mx-auto text-xs bg-white">
        <div className="flex items-center space-x-3">
          <span className="font-sans-meta font-bold text-[#121212] text-[11px] tracking-wide uppercase">
            Wednesday, October 14, 2026
          </span>
          <span className="hidden sm:inline text-neutral-400">·</span>
          <span className="hidden sm:inline text-[11px] font-sans-meta text-[#727272]">
            Today’s Paper · Vol. CLXXVI No. 60,312
          </span>
        </div>

        <button
          onClick={onOpenSubscribe}
          className="inline-block px-3 py-1 border border-[#121212] text-[#121212] font-sans-meta font-semibold text-[11px] tracking-wider rounded-none hover:bg-neutral-100 transition-colors cursor-pointer"
        >
          Subscribe for $1/week
        </button>
      </div>

      {/* Desktop Horizontal Sections Bar */}
      <div className="hidden lg:block border-t border-[#e2e2e2] bg-white">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between overflow-x-auto py-1 text-[11px] font-sans-meta font-semibold text-neutral-700 scrollbar-none">
          {sections.map((sec) => (
            <button
              key={sec}
              onClick={() => onSelectSection(sec)}
              className="py-1 px-1.5 hover:text-black hover:border-b-2 hover:border-black transition-all cursor-pointer whitespace-nowrap"
            >
              {sec}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};
