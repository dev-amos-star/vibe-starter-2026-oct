import React, { useState } from 'react';
import { TEXAS_POLL_DATA } from '../data/articles';

interface PollTrackerViewProps {
  onBack: () => void;
  onReadRelatedArticle: (id: string) => void;
}

export const PollTrackerView: React.FC<PollTrackerViewProps> = ({ onBack, onReadRelatedArticle }) => {
  const [selectedTab, setSelectedTab] = useState<'overview' | 'counties' | 'methodology'>('overview');
  const poll = TEXAS_POLL_DATA;

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
        <span className="text-[11px] font-sans-meta uppercase font-bold text-[#326891] tracking-wider">
          Times Election Lab
        </span>
      </div>

      {/* Title */}
      <header className="mb-6">
        <span className="text-xs font-sans-meta font-bold uppercase tracking-widest text-[#727272]">
          Midterm Briefing · Live Polling Model
        </span>
        <h1 className="nyt-headline text-3xl sm:text-4xl font-bold text-[#121212] mt-1">
          {poll.race}
        </h1>
        <p className="nyt-summary text-base text-neutral-700 mt-2">
          An ongoing statistical estimate of where the Senate race stands, combining independent state and national surveys weighted by sample quality and track record.
        </p>
        <div className="text-[11px] font-sans-meta text-[#727272] mt-2">
          {poll.lastUpdated} · Margin of Error {poll.marginOfError}
        </div>
      </header>

      {/* Tabs */}
      <div className="flex border-b border-[#e2e2e2] mb-6 gap-6 text-xs font-sans-meta font-semibold">
        <button
          onClick={() => setSelectedTab('overview')}
          className={`pb-2 border-b-2 cursor-pointer transition-colors ${
            selectedTab === 'overview'
              ? 'border-[#121212] text-[#121212]'
              : 'border-transparent text-[#727272] hover:text-black'
          }`}
        >
          Polling Average
        </button>
        <button
          onClick={() => setSelectedTab('counties')}
          className={`pb-2 border-b-2 cursor-pointer transition-colors ${
            selectedTab === 'counties'
              ? 'border-[#121212] text-[#121212]'
              : 'border-transparent text-[#727272] hover:text-black'
          }`}
        >
          Key Suburban Counties
        </button>
        <button
          onClick={() => setSelectedTab('methodology')}
          className={`pb-2 border-b-2 cursor-pointer transition-colors ${
            selectedTab === 'methodology'
              ? 'border-[#121212] text-[#121212]'
              : 'border-transparent text-[#727272] hover:text-black'
          }`}
        >
          Methodology & Model
        </button>
      </div>

      {selectedTab === 'overview' && (
        <div className="space-y-6">
          {/* Main Candidates comparison */}
          <div className="p-4 bg-neutral-50 border border-[#e2e2e2]">
            <div className="flex items-center justify-between mb-4">
              <div>
                <span className="text-xs font-sans-meta text-[#727272] uppercase font-bold">Projected Share</span>
                <h3 className="text-xl font-bold font-sans-meta text-[#121212]">Times / Siena Model</h3>
              </div>
              <span className="text-xs font-sans-meta font-semibold text-[#326891] bg-blue-50 px-2 py-1 border border-blue-200">
                Talarico +1.8%
              </span>
            </div>

            {/* Candidate 1 */}
            <div className="space-y-1 mb-4">
              <div className="flex justify-between items-baseline">
                <span className="font-bold text-sm text-[#121212]">James Talarico (D)</span>
                <span className="font-mono text-lg font-bold text-[#326891]">48.6%</span>
              </div>
              <div className="w-full bg-neutral-200 h-3 rounded-none overflow-hidden">
                <div className="bg-[#326891] h-full" style={{ width: '48.6%' }} />
              </div>
              <span className="text-[10px] text-neutral-500 font-sans-meta">+1.2% in last 30 days</span>
            </div>

            {/* Candidate 2 */}
            <div className="space-y-1">
              <div className="flex justify-between items-baseline">
                <span className="font-bold text-sm text-[#121212]">Ken Paxton (R)</span>
                <span className="font-mono text-lg font-bold text-red-700">46.8%</span>
              </div>
              <div className="w-full bg-neutral-200 h-3 rounded-none overflow-hidden">
                <div className="bg-red-700 h-full" style={{ width: '46.8%' }} />
              </div>
              <span className="text-[10px] text-neutral-500 font-sans-meta">-0.8% in last 30 days</span>
            </div>
          </div>

          {/* Historical trendline chart */}
          <div className="border border-[#e2e2e2] p-4">
            <h4 className="font-sans-meta text-xs uppercase font-bold text-[#121212] mb-3">
              Trendline: August — October 2026
            </h4>
            <div className="space-y-3">
              {poll.history.map((pt) => (
                <div key={pt.date} className="flex items-center text-xs font-sans-meta">
                  <span className="w-16 text-neutral-500 font-medium">{pt.date}</span>
                  <div className="flex-1 flex items-center space-x-2">
                    <div className="flex-1 flex h-4 bg-neutral-100 border border-neutral-200 overflow-hidden">
                      <div className="bg-[#326891]" style={{ width: `${pt.dem}%` }} />
                      <div className="bg-red-700 ml-auto" style={{ width: `${pt.rep}%` }} />
                    </div>
                    <span className="w-24 text-[11px] font-mono text-right font-semibold">
                      <span className="text-[#326891]">{pt.dem}%</span> / <span className="text-red-700">{pt.rep}%</span>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Read full article link */}
          <div className="p-4 border border-[#e2e2e2] bg-neutral-50 flex items-center justify-between">
            <div>
              <h4 className="nyt-headline text-base font-bold text-[#121212]">
                Read the Complete Deep Dive
              </h4>
              <p className="text-xs text-neutral-600 font-sans-meta">
                “Texas Senate Race Tightens, Polls Show, Even as Talarico Keeps His Edge”
              </p>
            </div>
            <button
              onClick={() => onReadRelatedArticle('texas-senate-race')}
              className="px-3 py-1.5 bg-[#121212] text-white text-xs font-sans-meta font-semibold cursor-pointer hover:bg-neutral-800"
            >
              Read Article →
            </button>
          </div>
        </div>
      )}

      {selectedTab === 'counties' && (
        <div className="space-y-4">
          <p className="nyt-summary text-sm text-neutral-700">
            Texas statewide outcomes hinge on voter turnout across rapidly diversifying suburban counties bordering the major metropolitan corridors.
          </p>
          <div className="border border-[#e2e2e2] divide-y divide-[#e2e2e2]">
            {poll.keyCounties.map((c) => (
              <div key={c.county} className="p-3.5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div>
                  <h4 className="font-bold text-sm font-sans-meta text-[#121212]">{c.county}</h4>
                  <span className="text-xs font-sans-meta text-[#326891] font-semibold">{c.status}</span>
                </div>
                <div className="flex items-center space-x-4 text-xs font-mono">
                  <span className="text-[#326891] font-bold">Dem: {c.talarico}%</span>
                  <span className="text-neutral-300">|</span>
                  <span className="text-red-700 font-bold">GOP: {c.paxton}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {selectedTab === 'methodology' && (
        <div className="space-y-4 text-sm font-serif text-neutral-800 leading-relaxed border border-[#e2e2e2] p-5">
          <h3 className="font-sans-meta text-xs uppercase font-bold tracking-wider text-[#121212]">
            Statistical Rigor & Weighting Standards
          </h3>
          <p>
            The Times polling average combines probability and nonprobability samples that meet stringent transparency standards registered with the American Association for Public Opinion Research (AAPOR).
          </p>
          <p>
            Surveys conducted using live interviewers over cellphones and landlines receive higher weights than automated interactive voice response (IVR) or nonprobability web panels. Each poll is adjusted for historic house effects and candidate endorsements.
          </p>
          <p className="text-xs font-sans-meta text-[#727272] pt-2 border-t border-[#e2e2e2]">
            Lead Analyst: Nate Cohn · Data Architecture by NYT Graphics & Newsroom Engineers
          </p>
        </div>
      )}
    </div>
  );
};
