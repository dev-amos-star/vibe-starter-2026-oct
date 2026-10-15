import React from 'react';

interface HeaderProps {
  onOpenMenu: () => void;
  onOpenProfile: () => void;
  onOpenSubscribe: () => void;
  onHomeClick: () => void;
  savedCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenMenu,
  onOpenProfile,
  onOpenSubscribe,
  onHomeClick,
  savedCount,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white border-b border-[#e2e2e2]">
      {/* Top action bar with Menu, Masthead, Profile */}
      <div className="flex items-center justify-between px-4 py-2.5 max-w-xl mx-auto">
        {/* Menu Button */}
        <button
          onClick={onOpenMenu}
          aria-label="Open menu"
          className="p-1 -ml-1 text-[#121212] hover:opacity-75 focus:outline-none transition-opacity cursor-pointer relative"
        >
          <svg className="w-6 h-6 stroke-[2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          {savedCount > 0 && (
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#326891] rounded-full" />
          )}
        </button>

        {/* Iconic NYT Blackletter Logo */}
        <button
          onClick={onHomeClick}
          aria-label="The New York Times"
          className="block text-center flex-1 mx-2 focus:outline-none cursor-pointer"
        >
          <span className="masthead-title text-[32px] sm:text-[36px] leading-none select-none tracking-tight block text-[#121212]">
            The New York Times
          </span>
        </button>

        {/* User Profile Account Icon */}
        <button
          onClick={onOpenProfile}
          aria-label="Account profile"
          className="p-1 -mr-1 text-[#121212] hover:opacity-75 focus:outline-none transition-opacity cursor-pointer"
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

      {/* Date line & Subscription callout bar */}
      <div className="px-4 py-2 border-t border-[#e2e2e2] flex items-center justify-between max-w-xl mx-auto text-xs bg-white">
        <span className="font-sans-meta font-bold text-[#121212] text-[11px] tracking-wide uppercase">
          Wednesday, October 14, 2026
        </span>
        <button
          onClick={onOpenSubscribe}
          className="inline-block px-3 py-1 border border-[#121212] text-[#121212] font-sans-meta font-semibold text-[11px] tracking-wider rounded-none hover:bg-neutral-100 transition-colors cursor-pointer"
        >
          Subscribe for $1/week
        </button>
      </div>
    </header>
  );
};
