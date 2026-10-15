import React from 'react';
import { GameKey } from '../types';

interface GamesStripProps {
  onSelectGame: (game: GameKey) => void;
}

export const GamesStrip: React.FC<GamesStripProps> = ({ onSelectGame }) => {
  return (
    <section className="mt-6 py-4 border-b border-t border-[#e2e2e2]" data-purpose="nyt-games-strip">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-sans-meta font-bold text-xs uppercase tracking-wider text-[#121212] flex items-center">
          <span className="w-2.5 h-2.5 bg-[#121212] inline-block mr-1.5" />
          NYT Games
        </h3>
        <button
          onClick={() => onSelectGame('wordle')}
          className="text-[11px] font-sans-meta font-semibold text-[#727272] hover:text-[#121212] cursor-pointer"
        >
          Play All →
        </button>
      </div>

      {/* Games Horizontal Grid */}
      <div className="grid grid-cols-4 gap-2 text-center">
        {/* Wordle */}
        <button
          onClick={() => onSelectGame('wordle')}
          className="p-2 border border-[#e2e2e2] rounded-sm hover:border-black cursor-pointer bg-white hover:shadow-xs transition-all text-left flex flex-col items-center justify-center"
        >
          <div className="w-7 h-7 mx-auto bg-[#6aaa64] text-white flex items-center justify-center font-bold text-xs rounded-sm select-none">
            W
          </div>
          <div className="font-sans-meta font-bold text-[11px] mt-1.5 text-[#121212]">Wordle</div>
          <div className="text-[9px] text-[#727272] font-sans-meta">No. 1,211</div>
        </button>

        {/* Connections */}
        <button
          onClick={() => onSelectGame('connections')}
          className="p-2 border border-[#e2e2e2] rounded-sm hover:border-black cursor-pointer bg-white hover:shadow-xs transition-all text-left flex flex-col items-center justify-center"
        >
          <div className="w-7 h-7 mx-auto bg-[#bfa8de] text-white flex items-center justify-center font-bold text-xs rounded-sm select-none">
            C
          </div>
          <div className="font-sans-meta font-bold text-[11px] mt-1.5 text-[#121212]">Connections</div>
          <div className="text-[9px] text-[#727272] font-sans-meta">Group words</div>
        </button>

        {/* Spelling Bee */}
        <button
          onClick={() => onSelectGame('spelling-bee')}
          className="p-2 border border-[#e2e2e2] rounded-sm hover:border-black cursor-pointer bg-white hover:shadow-xs transition-all text-left flex flex-col items-center justify-center"
        >
          <div className="w-7 h-7 mx-auto bg-[#f7da21] text-black flex items-center justify-center font-bold text-xs rounded-sm select-none">
            🐝
          </div>
          <div className="font-sans-meta font-bold text-[11px] mt-1.5 text-[#121212]">Spelling Bee</div>
          <div className="text-[9px] text-[#727272] font-sans-meta">7 letters</div>
        </button>

        {/* The Mini */}
        <button
          onClick={() => onSelectGame('mini')}
          className="p-2 border border-[#e2e2e2] rounded-sm hover:border-black cursor-pointer bg-white hover:shadow-xs transition-all text-left flex flex-col items-center justify-center"
        >
          <div className="w-7 h-7 mx-auto bg-[#4e86cf] text-white flex items-center justify-center font-bold text-xs rounded-sm select-none">
            M
          </div>
          <div className="font-sans-meta font-bold text-[11px] mt-1.5 text-[#121212]">The Mini</div>
          <div className="text-[9px] text-[#727272] font-sans-meta">Quick puzzle</div>
        </button>
      </div>
    </section>
  );
};
