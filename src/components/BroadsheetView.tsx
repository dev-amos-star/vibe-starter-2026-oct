import React from 'react';
import { Article } from '../types';
import { LeadStory } from './LeadStory';
import { SecondaryNews } from './SecondaryNews';
import { GamesStrip } from './GamesStrip';
import { OpinionSection } from './OpinionSection';

interface BroadsheetViewProps {
  articles: Record<string, Article>;
  onSelectArticle: (id: string) => void;
  onOpenComments: (articleId: string) => void;
  onOpenLiveUpdates: (tag?: string) => void;
  onOpenPollTracker: () => void;
  onSelectGame: (game: any) => void;
}

export const BroadsheetView: React.FC<BroadsheetViewProps> = ({
  articles,
  onSelectArticle,
  onOpenComments,
  onOpenLiveUpdates,
  onOpenPollTracker,
  onSelectGame,
}) => {
  const dieselArticle = articles['diesel-deal-putin'];
  const intelArticle = articles['us-ukraine-intel'];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
      {/* 3-Column Broadsheet Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:divide-x lg:divide-[#e2e2e2]">
        {/* Left Column (5 cols): Dominant Lead Story & Guilfoyle follow-up */}
        <div className="lg:col-span-5 space-y-6">
          <LeadStory
            leadArticle={articles['lead-women-administration']}
            secondaryArticle={articles['kimberly-guilfoyle']}
            onSelectArticle={onSelectArticle}
            onOpenComments={onOpenComments}
          />

          {/* Additional Deep Analysis in Left Column */}
          {dieselArticle && (
            <div className="border border-[#e2e2e2] p-4 bg-neutral-50/50">
              <span className="text-[10px] font-sans-meta font-bold uppercase tracking-wider text-[#326891] block mb-1">
                Energy & Foreign Policy Analysis
              </span>
              <h3 className="nyt-headline text-xl font-bold leading-snug">
                <button
                  onClick={() => onSelectArticle(dieselArticle.id)}
                  className="text-left hover:underline cursor-pointer"
                >
                  {dieselArticle.title}
                </button>
              </h3>
              <p
                onClick={() => onSelectArticle(dieselArticle.id)}
                className="nyt-summary text-sm text-neutral-700 mt-1 cursor-pointer"
              >
                {dieselArticle.deck}
              </p>
              <span className="nyt-meta mt-2 block">{dieselArticle.readTime}</span>
            </div>
          )}
        </div>

        {/* Center Column (4 cols): Secondary Scoops, Ukraine Cluster, Games */}
        <div className="lg:col-span-4 lg:pl-6 space-y-6">
          {/* Press Secretary Scoop */}
          {articles['press-secretary-law'] && (
            <article className="pb-4 border-b border-[#e2e2e2]">
              <div className="text-[10px] font-sans-meta uppercase font-bold tracking-wider text-[#727272] mb-1">
                White House Credentials
              </div>
              <h2 className="nyt-headline text-2xl font-bold leading-tight">
                <button
                  onClick={() => onSelectArticle(articles['press-secretary-law'].id)}
                  className="text-left hover:underline cursor-pointer"
                >
                  {articles['press-secretary-law'].title}
                </button>
              </h2>
              <p
                onClick={() => onSelectArticle(articles['press-secretary-law'].id)}
                className="nyt-summary text-sm mt-1.5 text-neutral-800 cursor-pointer"
              >
                {articles['press-secretary-law'].deck}
              </p>
              <span className="nyt-meta mt-2 block">{articles['press-secretary-law'].readTime}</span>
            </article>
          )}

          {/* Ukraine War Cluster */}
          <div className="pb-4 border-b border-[#e2e2e2]">
            <div className="flex items-center space-x-2 mb-2">
              <h3 className="font-sans-meta font-bold text-xs uppercase tracking-wider text-[#121212]">
                Russia-Ukraine War
              </h3>
              <span className="text-xs text-[#727272] font-bold">•</span>
              <button
                onClick={() => onOpenLiveUpdates()}
                className="text-xs text-[#2f5979] font-semibold hover:underline cursor-pointer"
              >
                Live Updates
              </button>
            </div>

            <div className="flex items-center space-x-1.5 overflow-x-auto py-1 text-[11px] font-sans-meta font-medium scrollbar-none mb-3">
              <button
                onClick={() => onOpenLiveUpdates('Wins for Putin')}
                className="bg-neutral-100 hover:bg-neutral-200 text-[#121212] px-2 py-0.5 whitespace-nowrap border border-neutral-200 cursor-pointer"
              >
                Wins for Putin
              </button>
              <button
                onClick={() => onOpenLiveUpdates('Escalating Assaults')}
                className="bg-neutral-100 hover:bg-neutral-200 text-[#121212] px-2 py-0.5 whitespace-nowrap border border-neutral-200 cursor-pointer"
              >
                Escalating Assaults
              </button>
              <button
                onClick={() => onOpenLiveUpdates('Russian Oil Deal')}
                className="bg-neutral-100 hover:bg-neutral-200 text-[#121212] px-2 py-0.5 whitespace-nowrap border border-neutral-200 cursor-pointer"
              >
                Russian Oil Deal
              </button>
            </div>

            {articles['ukraine-satellite-escalation'] && (
              <article>
                <div className="overflow-hidden mb-2">
                  <img
                    src={articles['ukraine-satellite-escalation'].image}
                    alt="Kyiv blackout"
                    className="w-full h-36 object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
                    onClick={() => onSelectArticle(articles['ukraine-satellite-escalation'].id)}
                  />
                </div>
                <h3 className="nyt-headline text-lg font-bold">
                  <button
                    onClick={() => onSelectArticle(articles['ukraine-satellite-escalation'].id)}
                    className="text-left hover:underline cursor-pointer"
                  >
                    {articles['ukraine-satellite-escalation'].title}
                  </button>
                </h3>
                <p className="nyt-summary text-xs text-neutral-700 mt-1 line-clamp-2">
                  {articles['ukraine-satellite-escalation'].deck}
                </p>
                <span className="nyt-meta mt-1.5 block">{articles['ukraine-satellite-escalation'].readTime}</span>
              </article>
            )}

            {intelArticle && (
              <div className="mt-3 pt-2 border-t border-neutral-100">
                <h4 className="nyt-headline text-sm font-semibold hover:underline cursor-pointer">
                  <button onClick={() => onSelectArticle(intelArticle.id)} className="text-left">
                    {intelArticle.title}
                  </button>
                </h4>
                <span className="nyt-meta mt-0.5 block">{intelArticle.readTime}</span>
              </div>
            )}
          </div>

          {/* Games Strip */}
          <GamesStrip onSelectGame={onSelectGame} />
        </div>

        {/* Right Rail (3 cols): Midterm Polling Tracker & Opinion Columnists */}
        <div className="lg:col-span-3 lg:pl-6 space-y-6">
          {/* Midterm Briefing & Poll Tracker Box */}
          {articles['texas-senate-race'] && (
            <div className="border border-[#e2e2e2] p-4 bg-neutral-50/70">
              <span className="text-[#326891] text-[11px] font-bold tracking-widest uppercase mb-1 font-sans-meta block">
                Midterm Briefing
              </span>
              <h3 className="nyt-headline text-lg font-bold leading-tight">
                <button
                  onClick={() => onSelectArticle(articles['texas-senate-race'].id)}
                  className="text-left hover:underline cursor-pointer"
                >
                  {articles['texas-senate-race'].title}
                </button>
              </h3>

              {/* Poll Tracker Widget */}
              <div className="mt-3 bg-white p-3 border border-[#e2e2e2]">
                <div className="flex justify-between items-center text-[10px] font-sans-meta font-bold text-neutral-600 mb-1 border-b border-[#e2e2e2] pb-1">
                  <span>2026 POLL TRACKER</span>
                  <button
                    onClick={onOpenPollTracker}
                    className="text-[#326891] hover:underline cursor-pointer font-bold"
                  >
                    FULL DATA →
                  </button>
                </div>

                <div className="flex justify-between items-center text-xs py-1">
                  <span className="font-bold">James Talarico (D)</span>
                  <span className="font-mono font-bold text-[#326891]">48.6%</span>
                </div>
                <div className="w-full bg-neutral-200 h-1.5 rounded-full overflow-hidden mb-2">
                  <div className="bg-[#326891] h-1.5" style={{ width: '48.6%' }} />
                </div>

                <div className="flex justify-between items-center text-xs py-1">
                  <span className="font-bold">Ken Paxton (R)</span>
                  <span className="font-mono font-bold text-red-700">46.8%</span>
                </div>
                <div className="w-full bg-neutral-200 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-red-700 h-1.5" style={{ width: '46.8%' }} />
                </div>
              </div>

              <span className="nyt-meta mt-2 block">{articles['texas-senate-race'].readTime}</span>
            </div>
          )}

          {/* Opinion Columns */}
          <OpinionSection
            articles={articles}
            onSelectArticle={onSelectArticle}
          />

          {/* The Morning Newsletter Callout */}
          <div className="p-4 border-t-2 border-[#121212] bg-neutral-100 text-xs font-sans-meta">
            <span className="font-bold uppercase tracking-wider text-[#121212] block mb-1">
              The Morning Newsletter
            </span>
            <p className="text-neutral-700 text-[11px] leading-relaxed mb-3">
              Get David Leonhardt’s daily insights delivered to your inbox every morning.
            </p>
            <div className="flex gap-1">
              <input
                type="email"
                placeholder="emailamos@gmail.com"
                readOnly
                className="w-full bg-white border border-neutral-300 px-2 py-1 text-[11px] font-mono text-neutral-600"
              />
              <button className="bg-black text-white px-3 py-1 font-bold text-[10px] uppercase hover:bg-neutral-800 cursor-pointer">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
