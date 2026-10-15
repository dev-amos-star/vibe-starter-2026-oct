import React, { useState } from 'react';
import { Article } from '../types';

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  savedArticles: Article[];
  onSelectArticle: (id: string) => void;
  isSubscribed: boolean;
  onOpenSubscribe: () => void;
}

export const ProfileModal: React.FC<ProfileModalProps> = ({
  isOpen,
  onClose,
  savedArticles,
  onSelectArticle,
  isSubscribed,
  onOpenSubscribe,
}) => {
  const [morningNewsletter, setMorningNewsletter] = useState(true);
  const [breakingNews, setBreakingNews] = useState(true);
  const [eveningBriefing, setEveningBriefing] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-md bg-white border border-[#121212] p-6 shadow-2xl z-10 max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 text-neutral-500 hover:text-black cursor-pointer"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M6 18L18 6M6 6l12 12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {/* Profile Card Header */}
        <div className="flex items-center space-x-3 pb-4 border-b border-[#e2e2e2]">
          <div className="w-12 h-12 rounded-full bg-[#121212] text-white flex items-center justify-center font-bold text-lg font-sans-meta">
            EA
          </div>
          <div>
            <h3 className="font-sans-meta font-bold text-base text-[#121212]">
              emailamos@gmail.com
            </h3>
            <span className="text-xs font-sans-meta text-[#326891] font-semibold">
              {isSubscribed ? 'All Access Subscriber' : 'Free Standard Account'}
            </span>
          </div>
        </div>

        {/* Subscription Banner */}
        {!isSubscribed && (
          <div className="my-4 p-3 bg-neutral-50 border border-[#e2e2e2] flex items-center justify-between">
            <div>
              <span className="text-[10px] font-sans-meta font-bold uppercase tracking-wider text-[#326891] block">
                Upgrade Account
              </span>
              <p className="text-xs text-neutral-700 font-sans-meta">
                Subscribe for $1/week for full access.
              </p>
            </div>
            <button
              onClick={() => {
                onClose();
                onOpenSubscribe();
              }}
              className="px-3 py-1 bg-[#121212] text-white text-xs font-sans-meta font-semibold cursor-pointer hover:bg-neutral-800"
            >
              Subscribe
            </button>
          </div>
        )}

        {/* Saved Reading List */}
        <div className="my-5">
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-sans-meta font-bold text-xs uppercase tracking-wider text-[#121212]">
              Reading List ({savedArticles.length})
            </h4>
          </div>
          {savedArticles.length === 0 ? (
            <p className="text-xs text-neutral-500 font-sans-meta italic py-2">
              No saved articles yet. Tap the bookmark icon on any story to save it here.
            </p>
          ) : (
            <div className="space-y-2 border-l-2 border-[#121212] pl-3">
              {savedArticles.map((art) => (
                <button
                  key={art.id}
                  onClick={() => {
                    onSelectArticle(art.id);
                    onClose();
                  }}
                  className="block text-left w-full group cursor-pointer"
                >
                  <p className="nyt-headline text-xs font-semibold text-[#121212] group-hover:underline line-clamp-1">
                    {art.title}
                  </p>
                  <span className="text-[10px] text-[#727272] font-sans-meta">
                    {art.readTime} · {art.section}
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Newsletter Preferences */}
        <div className="my-5 pt-4 border-t border-[#e2e2e2]">
          <h4 className="font-sans-meta font-bold text-xs uppercase tracking-wider text-[#121212] mb-3">
            Email Briefings & Alerts
          </h4>
          <div className="space-y-3 text-xs font-sans-meta">
            <label className="flex items-center justify-between cursor-pointer">
              <div>
                <span className="font-bold text-[#121212] block">The Morning</span>
                <span className="text-neutral-500 text-[11px]">Make sense of the day’s news with David Leonhardt.</span>
              </div>
              <input
                type="checkbox"
                checked={morningNewsletter}
                onChange={(e) => setMorningNewsletter(e.target.checked)}
                className="w-4 h-4 text-[#121212] focus:ring-0 rounded-none cursor-pointer"
              />
            </label>

            <label className="flex items-center justify-between cursor-pointer">
              <div>
                <span className="font-bold text-[#121212] block">Breaking News Alerts</span>
                <span className="text-neutral-500 text-[11px]">Direct dispatches on major developing stories.</span>
              </div>
              <input
                type="checkbox"
                checked={breakingNews}
                onChange={(e) => setBreakingNews(e.target.checked)}
                className="w-4 h-4 text-[#121212] focus:ring-0 rounded-none cursor-pointer"
              />
            </label>

            <label className="flex items-center justify-between cursor-pointer">
              <div>
                <span className="font-bold text-[#121212] block">The Evening Briefing</span>
                <span className="text-neutral-500 text-[11px]">A recap of the day’s biggest stories every weeknight.</span>
              </div>
              <input
                type="checkbox"
                checked={eveningBriefing}
                onChange={(e) => setEveningBriefing(e.target.checked)}
                className="w-4 h-4 text-[#121212] focus:ring-0 rounded-none cursor-pointer"
              />
            </label>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-[#e2e2e2] flex justify-between items-center text-xs font-sans-meta">
          <span className="text-neutral-500">NYT Digital Member</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 border border-neutral-300 font-bold hover:bg-neutral-100 cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
