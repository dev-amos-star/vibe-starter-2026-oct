import React from 'react';

interface FooterProps {
  onNavClick: (section: string) => void;
  onSubscribeClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavClick, onSubscribeClick }) => {
  return (
    <footer className="border-t-2 border-[#121212] bg-white pt-6 pb-12 mt-6">
      <div className="max-w-xl mx-auto px-4">
        {/* Footer Logo */}
        <div className="text-center mb-4">
          <span className="masthead-title text-2xl tracking-tight text-[#121212] select-none">
            The New York Times
          </span>
        </div>

        {/* Navigation Links */}
        <nav
          aria-label="Footer Navigation"
          className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-xs font-sans-meta text-neutral-600 mb-6"
        >
          {['News', 'Opinion', 'Arts', 'Living', 'Games', 'Cooking', 'Wirecutter', 'The Athletic'].map((item) => (
            <button
              key={item}
              onClick={() => onNavClick(item)}
              className="hover:underline cursor-pointer hover:text-[#121212] transition-colors"
            >
              {item}
            </button>
          ))}
        </nav>

        {/* Legal and Corporate Sublinks */}
        <div className="border-t border-[#e2e2e2] pt-4 text-center">
          <ul className="flex flex-wrap justify-center gap-x-3 gap-y-1 text-[11px] font-sans-meta text-[#727272] mb-3">
            <li>
              <span>© 2026 The New York Times Company</span>
            </li>
            <li>
              <button onClick={() => onNavClick('NYTCo')} className="hover:underline cursor-pointer">
                NYTCo
              </button>
            </li>
            <li>
              <button onClick={() => onNavClick('Contact Us')} className="hover:underline cursor-pointer">
                Contact Us
              </button>
            </li>
            <li>
              <button onClick={() => onNavClick('Accessibility')} className="hover:underline cursor-pointer">
                Accessibility
              </button>
            </li>
            <li>
              <button onClick={() => onNavClick('Privacy Policy')} className="hover:underline cursor-pointer">
                Privacy Policy
              </button>
            </li>
            <li>
              <button onClick={() => onNavClick('Terms of Service')} className="hover:underline cursor-pointer">
                Terms of Service
              </button>
            </li>
            <li>
              <button onClick={onSubscribeClick} className="hover:underline cursor-pointer text-[#326891] font-semibold">
                Subscriptions
              </button>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
