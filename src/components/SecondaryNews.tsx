import React from 'react';
import { Article } from '../types';

interface SecondaryNewsProps {
  articles: Record<string, Article>;
  onSelectArticle: (id: string) => void;
  onOpenLiveUpdates: (tag?: string) => void;
  onOpenPollTracker: () => void;
}

export const SecondaryNews: React.FC<SecondaryNewsProps> = ({
  articles,
  onSelectArticle,
  onOpenLiveUpdates,
  onOpenPollTracker,
}) => {
  const pressSecretaryArticle = articles['press-secretary-law'];
  const ukraineLeadArticle = articles['ukraine-satellite-escalation'];
  const dieselArticle = articles['diesel-deal-putin'];
  const intelArticle = articles['us-ukraine-intel'];
  const texasArticle = articles['texas-senate-race'];

  return (
    <section className="mt-6 pt-2 border-t-2 border-[#121212]" data-purpose="top-news-list">
      {/* Article 1: Press Secretary */}
      {pressSecretaryArticle && (
        <article className="py-4 border-b border-[#e2e2e2]">
          <h2 className="nyt-headline text-xl sm:text-2xl font-bold leading-tight">
            <button
              onClick={() => onSelectArticle(pressSecretaryArticle.id)}
              className="text-left hover:underline cursor-pointer"
            >
              {pressSecretaryArticle.title}
            </button>
          </h2>
          <p
            onClick={() => onSelectArticle(pressSecretaryArticle.id)}
            className="nyt-summary text-sm sm:text-base mt-1.5 text-neutral-800 leading-relaxed cursor-pointer"
          >
            {pressSecretaryArticle.deck}
          </p>
          <div className="flex items-center space-x-2 mt-2">
            <span className="nyt-meta">{pressSecretaryArticle.readTime}</span>
          </div>
        </article>
      )}

      {/* Topic Cluster: Russia-Ukraine War */}
      <div className="py-4 border-b border-[#e2e2e2]" data-purpose="news-cluster">
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

        {/* Topic Tags Pill Strip */}
        <div className="flex items-center space-x-2 overflow-x-auto py-1 text-[11px] font-sans-meta font-medium scrollbar-none">
          <button
            onClick={() => onOpenLiveUpdates('Wins for Putin')}
            className="bg-neutral-100 hover:bg-neutral-200 text-[#121212] px-2.5 py-1 whitespace-nowrap border border-neutral-200 rounded-sm cursor-pointer transition-colors"
          >
            Wins for Putin
          </button>
          <button
            onClick={() => onOpenLiveUpdates('Escalating Assaults')}
            className="bg-neutral-100 hover:bg-neutral-200 text-[#121212] px-2.5 py-1 whitespace-nowrap border border-neutral-200 rounded-sm cursor-pointer transition-colors"
          >
            Escalating Assaults
          </button>
          <button
            onClick={() => onOpenLiveUpdates('Russian Oil Deal')}
            className="bg-neutral-100 hover:bg-neutral-200 text-[#121212] px-2.5 py-1 whitespace-nowrap border border-neutral-200 rounded-sm cursor-pointer transition-colors"
          >
            Russian Oil Deal
          </button>
        </div>

        {/* Cluster Main Article */}
        {ukraineLeadArticle && (
          <article className="mt-3">
            <h2 className="nyt-headline text-lg sm:text-xl font-bold">
              <button
                onClick={() => onSelectArticle(ukraineLeadArticle.id)}
                className="text-left hover:underline cursor-pointer"
              >
                {ukraineLeadArticle.title}
              </button>
            </h2>
            <p
              onClick={() => onSelectArticle(ukraineLeadArticle.id)}
              className="nyt-summary text-sm text-neutral-700 mt-1 cursor-pointer"
            >
              {ukraineLeadArticle.deck}
            </p>
            <div className="flex items-center space-x-2 mt-1.5">
              <span className="nyt-meta">{ukraineLeadArticle.readTime}</span>
            </div>
          </article>
        )}

        {/* Brief sub-links */}
        <div className="mt-3 space-y-2.5 pl-3 border-l-2 border-[#e2e2e2]">
          {dieselArticle && (
            <div>
              <h4 className="nyt-headline text-sm font-semibold hover:underline cursor-pointer leading-snug">
                <button
                  onClick={() => onSelectArticle(dieselArticle.id)}
                  className="text-left hover:underline cursor-pointer"
                >
                  {dieselArticle.title}
                </button>
              </h4>
              <span className="nyt-meta mt-0.5 block">{dieselArticle.readTime}</span>
            </div>
          )}

          {intelArticle && (
            <div>
              <h4 className="nyt-headline text-sm font-semibold hover:underline cursor-pointer leading-snug">
                <button
                  onClick={() => onSelectArticle(intelArticle.id)}
                  className="text-left hover:underline cursor-pointer"
                >
                  {intelArticle.title}
                </button>
              </h4>
              <span className="nyt-meta mt-0.5 block">{intelArticle.readTime}</span>
            </div>
          )}
        </div>
      </div>

      {/* Midterm Elections Module */}
      {texasArticle && (
        <article className="py-4 border-b border-[#e2e2e2]">
          <div className="text-[#326891] text-[11px] font-bold tracking-widest uppercase mb-1 font-sans-meta">
            Midterm Briefing
          </div>
          <h2 className="nyt-headline text-xl font-bold leading-tight">
            <button
              onClick={() => onSelectArticle(texasArticle.id)}
              className="text-left hover:underline cursor-pointer"
            >
              {texasArticle.title}
            </button>
          </h2>
          <p
            onClick={() => onSelectArticle(texasArticle.id)}
            className="nyt-summary text-sm mt-1 text-neutral-800 cursor-pointer"
          >
            {texasArticle.deck}
          </p>

          {/* Quick poll tracker mini box */}
          <div className="mt-3 bg-neutral-50 p-2.5 border border-[#e2e2e2] rounded-none">
            <div className="flex justify-between items-center text-[11px] font-sans-meta font-bold text-neutral-600 mb-1 border-b border-[#e2e2e2] pb-1">
              <span>2026 POLL TRACKER</span>
              <button
                onClick={onOpenPollTracker}
                className="text-[#326891] hover:underline cursor-pointer uppercase font-bold"
              >
                FULL DATA →
              </button>
            </div>
            <div className="flex justify-between items-center text-xs py-1">
              <span className="font-bold">James Talarico (D)</span>
              <span className="font-mono font-bold text-[#326891]">48.6%</span>
            </div>
            <div className="w-full bg-neutral-200 h-1.5 rounded-full overflow-hidden">
              <div className="bg-[#326891] h-1.5 transition-all duration-500" style={{ width: '48.6%' }} />
            </div>

            <div className="flex justify-between items-center text-xs py-1 mt-1">
              <span className="font-bold">Ken Paxton (R)</span>
              <span className="font-mono font-bold text-red-700">46.8%</span>
            </div>
            <div className="w-full bg-neutral-200 h-1.5 rounded-full overflow-hidden">
              <div className="bg-red-700 h-1.5 transition-all duration-500" style={{ width: '46.8%' }} />
            </div>
          </div>

          <div className="flex items-center space-x-2 mt-2">
            <span className="nyt-meta">{texasArticle.readTime}</span>
          </div>
        </article>
      )}
    </section>
  );
};
