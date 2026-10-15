import React, { useState } from 'react';
import { LIVE_WAR_UPDATES } from '../data/articles';

interface LiveBriefingViewProps {
  initialTag?: string;
  onBack: () => void;
  onReadLeadArticle: () => void;
}

export const LiveBriefingView: React.FC<LiveBriefingViewProps> = ({
  initialTag,
  onBack,
  onReadLeadArticle,
}) => {
  const [activeFilter, setActiveFilter] = useState<string>(initialTag || 'All');

  const tags = ['All', 'Escalating Assaults', 'Wins for Putin', 'Russian Oil Deal'];

  const filteredUpdates =
    activeFilter === 'All'
      ? LIVE_WAR_UPDATES
      : LIVE_WAR_UPDATES.filter((item) => item.tag === activeFilter);

  return (
    <div className="max-w-2xl mx-auto px-4 py-6 bg-white min-h-screen">
      {/* Top Bar */}
      <div className="sticky top-0 z-30 bg-white/95 backdrop-blur-xs py-2.5 border-b border-[#e2e2e2] flex items-center justify-between -mx-4 px-4 mb-6">
        <button
          onClick={onBack}
          className="flex items-center space-x-1.5 text-xs font-sans-meta font-bold uppercase tracking-wider text-[#121212] hover:text-[#326891] cursor-pointer"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span>Front Page</span>
        </button>
        <span className="text-[11px] font-sans-meta uppercase font-bold text-red-700 tracking-wider flex items-center">
          <span className="w-2 h-2 rounded-full bg-red-600 inline-block mr-1.5 animate-pulse" />
          Live Feed
        </span>
      </div>

      {/* Header */}
      <header className="mb-6">
        <span className="text-xs font-sans-meta font-bold uppercase tracking-widest text-[#326891]">
          Continuous Coverage
        </span>
        <h1 className="nyt-headline text-3xl sm:text-4xl font-bold text-[#121212] mt-1">
          Russia-Ukraine War: Live Dispatches
        </h1>
        <p className="nyt-summary text-base text-neutral-700 mt-2">
          Real-time reporting from correspondents in Kyiv, Brussels, Washington, and Kharkiv as aerial strikes pound energy infrastructure and satellite bandwidth remains contested.
        </p>

        {/* Lead story banner */}
        <div className="mt-4 p-3 bg-neutral-100 border border-[#e2e2e2] flex items-center justify-between">
          <div>
            <span className="text-[10px] font-sans-meta uppercase text-[#727272] font-bold block">
              Featured Analysis
            </span>
            <h4 className="nyt-headline text-sm font-bold text-[#121212]">
              Ukraine’s Exposure Grows as Satellite Use Is Restricted
            </h4>
          </div>
          <button
            onClick={onReadLeadArticle}
            className="px-3 py-1 bg-[#121212] text-white text-xs font-sans-meta font-semibold cursor-pointer hover:bg-neutral-800"
          >
            Read Story
          </button>
        </div>
      </header>

      {/* Filter Tabs */}
      <div className="flex items-center space-x-2 overflow-x-auto pb-3 mb-6 border-b border-[#e2e2e2] text-xs font-sans-meta">
        {tags.map((t) => (
          <button
            key={t}
            onClick={() => setActiveFilter(t)}
            className={`px-3 py-1.5 whitespace-nowrap border transition-colors cursor-pointer ${
              activeFilter === t
                ? 'bg-[#121212] text-white border-[#121212]'
                : 'bg-neutral-50 text-neutral-700 border-neutral-300 hover:bg-neutral-100'
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Timeline Stream */}
      <div className="relative pl-6 space-y-8 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-[#e2e2e2]">
        {filteredUpdates.map((item) => (
          <article key={item.id} className="relative group">
            {/* Timeline node */}
            <div className="absolute -left-[27px] top-1.5 w-3 h-3 rounded-full bg-white border-2 border-[#121212]" />

            <div className="flex items-center space-x-2 text-xs font-sans-meta mb-1">
              <span className="font-bold text-[#121212]">{item.timestamp}</span>
              <span className="text-neutral-400">·</span>
              <span className="text-[11px] text-[#326891] font-semibold">{item.tag}</span>
            </div>

            <h3 className="nyt-headline text-xl font-bold text-[#121212] leading-snug">
              {item.headline}
            </h3>

            <p className="nyt-summary text-sm text-neutral-800 mt-2 leading-relaxed">
              {item.content}
            </p>

            <div className="mt-2 text-xs font-sans-meta text-[#727272]">
              Dispatched by <span className="font-semibold text-neutral-800">{item.reporter}</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};
