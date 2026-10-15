import React, { useState } from 'react';
import { TEXAS_POLL_DATA } from '../data/articles';

interface PollTrackerViewProps {
  onBack: () => void;
  onReadRelatedArticle: (id: string) => void;
}

export const PollTrackerView: React.FC<PollTrackerViewProps> = ({ onBack, onReadRelatedArticle }) => {
  const [selectedTab, setSelectedTab] = useState<'overview' | 'counties' | 'simulator' | 'methodology'>('overview');
  const [suburbanShift, setSuburbanShift] = useState(0); // -3% to +3%
  const poll = TEXAS_POLL_DATA;

  // Turnout simulation calculations
  const simDem = (48.6 + suburbanShift * 0.45).toFixed(1);
  const simRep = (46.8 - suburbanShift * 0.4).toFixed(1);
  const simSpread = (parseFloat(simDem) - parseFloat(simRep)).toFixed(1);

  const demographics = [
    { group: 'Suburban College Educated', dem: 54, rep: 42, share: '32% of electorate' },
    { group: 'White Non-College Voters', dem: 36, rep: 61, share: '38% of electorate' },
    { group: 'Hispanic / Latino Voters', dem: 58, rep: 38, share: '24% of electorate' },
    { group: 'Young Voters (Ages 18–29)', dem: 64, rep: 31, share: '14% of electorate' },
    { group: 'Senior Voters (Ages 65+)', dem: 41, rep: 56, share: '22% of electorate' },
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 py-6 bg-white min-h-screen">
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
        <span className="text-[11px] font-sans-meta uppercase font-bold text-[#326891] tracking-wider flex items-center">
          <span className="w-2 h-2 rounded-full bg-[#326891] mr-1.5" />
          Times Election Analytics
        </span>
      </div>

      {/* Title */}
      <header className="mb-6">
        <span className="text-xs font-sans-meta font-bold uppercase tracking-widest text-[#727272]">
          Midterm Briefing · Statistical Forecasting
        </span>
        <h1 className="nyt-headline text-3xl sm:text-4xl font-bold text-[#121212] mt-1">
          {poll.race}
        </h1>
        <p className="nyt-summary text-base sm:text-lg text-neutral-700 mt-2">
          An ongoing statistical estimate combining 24 verified public surveys weighted for house effects, sample size, and historical accuracy.
        </p>
        <div className="text-[11px] font-sans-meta text-[#727272] mt-2 flex flex-wrap gap-x-3">
          <span>{poll.lastUpdated}</span>
          <span>·</span>
          <span>Margin of Error {poll.marginOfError}</span>
        </div>
      </header>

      {/* Tabs */}
      <div className="flex border-b border-[#e2e2e2] mb-6 gap-4 sm:gap-6 text-xs font-sans-meta font-semibold overflow-x-auto scrollbar-none">
        <button
          onClick={() => setSelectedTab('overview')}
          className={`pb-2 border-b-2 cursor-pointer transition-colors whitespace-nowrap ${
            selectedTab === 'overview'
              ? 'border-[#121212] text-[#121212]'
              : 'border-transparent text-[#727272] hover:text-black'
          }`}
        >
          Polling Average
        </button>
        <button
          onClick={() => setSelectedTab('counties')}
          className={`pb-2 border-b-2 cursor-pointer transition-colors whitespace-nowrap ${
            selectedTab === 'counties'
              ? 'border-[#121212] text-[#121212]'
              : 'border-transparent text-[#727272] hover:text-black'
          }`}
        >
          Collar Counties & Demographics
        </button>
        <button
          onClick={() => setSelectedTab('simulator')}
          className={`pb-2 border-b-2 cursor-pointer transition-colors whitespace-nowrap ${
            selectedTab === 'simulator'
              ? 'border-[#121212] text-[#121212]'
              : 'border-transparent text-[#727272] hover:text-black'
          }`}
        >
          Turnout Simulator 🧪
        </button>
        <button
          onClick={() => setSelectedTab('methodology')}
          className={`pb-2 border-b-2 cursor-pointer transition-colors whitespace-nowrap ${
            selectedTab === 'methodology'
              ? 'border-[#121212] text-[#121212]'
              : 'border-transparent text-[#727272] hover:text-black'
          }`}
        >
          Methodology
        </button>
      </div>

      {selectedTab === 'overview' && (
        <div className="space-y-6">
          {/* Main Candidates comparison */}
          <div className="p-5 bg-neutral-50 border border-[#e2e2e2]">
            <div className="flex items-center justify-between mb-4">
              <div>
                <span className="text-xs font-sans-meta text-[#727272] uppercase font-bold">Projected Share</span>
                <h3 className="text-xl font-bold font-sans-meta text-[#121212]">Times / Siena Model</h3>
              </div>
              <span className="text-xs font-sans-meta font-bold text-[#326891] bg-blue-50 px-2.5 py-1 border border-blue-200">
                Talarico +1.8%
              </span>
            </div>

            {/* Candidate 1 */}
            <div className="space-y-1.5 mb-5">
              <div className="flex justify-between items-baseline">
                <div>
                  <span className="font-bold text-base text-[#121212]">James Talarico</span>
                  <span className="text-xs text-neutral-500 font-sans-meta ml-1.5">Democrat</span>
                </div>
                <span className="font-mono text-2xl font-bold text-[#326891]">48.6%</span>
              </div>
              <div className="w-full bg-neutral-200 h-3 rounded-none overflow-hidden">
                <div className="bg-[#326891] h-full" style={{ width: '48.6%' }} />
              </div>
              <span className="text-[10px] text-neutral-500 font-sans-meta">+1.2% in last 30 days</span>
            </div>

            {/* Candidate 2 */}
            <div className="space-y-1.5">
              <div className="flex justify-between items-baseline">
                <div>
                  <span className="font-bold text-base text-[#121212]">Ken Paxton</span>
                  <span className="text-xs text-neutral-500 font-sans-meta ml-1.5">Republican · Incumbent</span>
                </div>
                <span className="font-mono text-2xl font-bold text-red-700">46.8%</span>
              </div>
              <div className="w-full bg-neutral-200 h-3 rounded-none overflow-hidden">
                <div className="bg-red-700 h-full" style={{ width: '46.8%' }} />
              </div>
              <span className="text-[10px] text-neutral-500 font-sans-meta">-0.8% in last 30 days</span>
            </div>
          </div>

          {/* Historical trendline chart */}
          <div className="border border-[#e2e2e2] p-5">
            <div className="flex justify-between items-center mb-4">
              <h4 className="font-sans-meta text-xs uppercase font-bold text-[#121212]">
                Polling Trajectory: August — October 2026
              </h4>
              <div className="flex items-center space-x-3 text-[11px] font-sans-meta">
                <span className="flex items-center"><span className="w-2.5 h-2.5 bg-[#326891] mr-1" /> Talarico</span>
                <span className="flex items-center"><span className="w-2.5 h-2.5 bg-red-700 mr-1" /> Paxton</span>
              </div>
            </div>
            <div className="space-y-3">
              {poll.history.map((pt) => (
                <div key={pt.date} className="flex items-center text-xs font-sans-meta">
                  <span className="w-16 text-neutral-500 font-medium">{pt.date}</span>
                  <div className="flex-1 flex items-center space-x-3">
                    <div className="flex-1 flex h-4 bg-neutral-100 border border-neutral-200 overflow-hidden">
                      <div className="bg-[#326891]" style={{ width: `${pt.dem}%` }} />
                      <div className="bg-red-700 ml-auto" style={{ width: `${pt.rep}%` }} />
                    </div>
                    <span className="w-28 text-[11px] font-mono text-right font-semibold">
                      <span className="text-[#326891]">{pt.dem}%</span> vs <span className="text-red-700">{pt.rep}%</span>
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
                Read the Campaign Dispatch
              </h4>
              <p className="text-xs text-neutral-600 font-sans-meta">
                “Texas Senate Race Tightens, Polls Show, Even as Talarico Keeps His Edge”
              </p>
            </div>
            <button
              onClick={() => onReadRelatedArticle('texas-senate-race')}
              className="px-3.5 py-1.5 bg-[#121212] text-white text-xs font-sans-meta font-semibold cursor-pointer hover:bg-neutral-800"
            >
              Read Article →
            </button>
          </div>
        </div>
      )}

      {selectedTab === 'counties' && (
        <div className="space-y-6">
          <div>
            <h4 className="font-sans-meta text-xs uppercase font-bold text-[#121212] mb-2">
              Key Battleground Counties
            </h4>
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

          <div>
            <h4 className="font-sans-meta text-xs uppercase font-bold text-[#121212] mb-2">
              Demographic Cross-Tab Estimations
            </h4>
            <div className="border border-[#e2e2e2] divide-y divide-[#e2e2e2] text-xs font-sans-meta">
              {demographics.map((d) => (
                <div key={d.group} className="p-3 flex items-center justify-between">
                  <div>
                    <span className="font-bold text-[#121212] block">{d.group}</span>
                    <span className="text-[10px] text-neutral-500">{d.share}</span>
                  </div>
                  <div className="flex items-center space-x-3 font-mono">
                    <span className="text-[#326891] font-bold">D: {d.dem}%</span>
                    <span className="text-neutral-300">/</span>
                    <span className="text-red-700 font-bold">R: {d.rep}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {selectedTab === 'simulator' && (
        <div className="p-5 border border-[#e2e2e2] bg-neutral-50/70 space-y-6">
          <div>
            <h3 className="font-sans-meta text-sm font-bold uppercase tracking-wider text-[#121212]">
              Suburban Swing Turnout Simulator
            </h3>
            <p className="nyt-summary text-sm text-neutral-700 mt-1">
              Adjust suburban voter mobilization around Dallas, Houston, and Austin to see how Texas’s statewide margin reacts.
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-xs font-sans-meta font-bold">
              <span>Suburban Shift: {suburbanShift > 0 ? `+${suburbanShift}% Dem` : suburbanShift < 0 ? `${suburbanShift}% Dem` : 'Neutral Baseline'}</span>
              <span className="text-neutral-500 font-mono">Simulated Margin: {parseFloat(simSpread) > 0 ? `Talarico +${simSpread}%` : `Paxton +${Math.abs(parseFloat(simSpread))}%`}</span>
            </div>
            <input
              type="range"
              min={-3}
              max={3}
              step={0.5}
              value={suburbanShift}
              onChange={(e) => setSuburbanShift(parseFloat(e.target.value))}
              className="w-full cursor-pointer accent-[#326891]"
            />
            <div className="flex justify-between text-[10px] text-neutral-500 font-sans-meta">
              <span>GOP Surge (-3%)</span>
              <span>Baseline (0%)</span>
              <span>Dem Surge (+3%)</span>
            </div>
          </div>

          <div className="p-4 bg-white border border-[#e2e2e2] space-y-3">
            <div className="flex justify-between items-center text-sm font-sans-meta font-bold">
              <span>Simulated Projection</span>
              <span className="text-xs px-2 py-0.5 bg-neutral-100 border">
                {parseFloat(simSpread) > 0 ? 'Lean Democratic' : 'Lean Republican'}
              </span>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-sans-meta">
                <span className="font-bold text-[#326891]">James Talarico (D)</span>
                <span className="font-mono font-bold text-[#326891]">{simDem}%</span>
              </div>
              <div className="w-full bg-neutral-200 h-2">
                <div className="bg-[#326891] h-full" style={{ width: `${simDem}%` }} />
              </div>

              <div className="flex justify-between text-xs font-sans-meta pt-1">
                <span className="font-bold text-red-700">Ken Paxton (R)</span>
                <span className="font-mono font-bold text-red-700">{simRep}%</span>
              </div>
              <div className="w-full bg-neutral-200 h-2">
                <div className="bg-red-700 h-full" style={{ width: `${simRep}%` }} />
              </div>
            </div>
          </div>
        </div>
      )}

      {selectedTab === 'methodology' && (
        <div className="space-y-4 text-sm font-serif text-neutral-800 leading-relaxed border border-[#e2e2e2] p-5">
          <h3 className="font-sans-meta text-xs uppercase font-bold tracking-wider text-[#121212]">
            Times / Siena Statistical Principles
          </h3>
          <p>
            The Times polling average combines probability and nonprobability samples meeting transparency standards registered with AAPOR.
          </p>
          <p>
            Surveys conducted using live interviewers over cellphones receive higher weights than automated interactive voice response (IVR) panels. Each poll is adjusted for historic house bias, sample composition, and candidate endorsements.
          </p>
          <p className="text-xs font-sans-meta text-[#727272] pt-2 border-t border-[#e2e2e2]">
            Data Model by Nate Cohn · NYT Graphics & Newsroom Engineers
          </p>
        </div>
      )}
    </div>
  );
};
