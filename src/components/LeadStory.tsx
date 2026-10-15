import React, { useState } from 'react';
import { Article } from '../types';

interface LeadStoryProps {
  leadArticle: Article;
  secondaryArticle: Article;
  onSelectArticle: (id: string) => void;
  onOpenComments: (articleId: string) => void;
}

export const LeadStory: React.FC<LeadStoryProps> = ({
  leadArticle,
  secondaryArticle,
  onSelectArticle,
  onOpenComments,
}) => {
  const [usePhoto, setUsePhoto] = useState(false);

  return (
    <section
      className="mt-4 border border-[#e2e2e2] p-4 shadow-[0_1px_3px_rgba(0,0,0,0.02)] bg-white"
      data-purpose="lead-story-container"
    >
      {/* Section Banner Tag */}
      <div className="text-center pb-3">
        <p className="text-xs sm:text-sm text-[#121212]">
          These top stories are <span className="font-bold">free to read</span>.
        </p>
        <div className="w-16 h-0.5 bg-[#326891] mx-auto mt-2" />
      </div>

      {/* Lead Article */}
      <article className="pt-2">
        <h1
          onClick={() => onSelectArticle(leadArticle.id)}
          className="nyt-headline text-[29px] sm:text-[32px] font-bold text-[#121212] cursor-pointer hover:underline"
        >
          {leadArticle.title}
        </h1>

        <p
          onClick={() => onSelectArticle(leadArticle.id)}
          className="nyt-summary text-base sm:text-lg mt-2 font-normal cursor-pointer text-[#333333]"
        >
          {leadArticle.deck}
        </p>

        <div className="flex items-center justify-between mt-2 mb-3">
          <span className="nyt-meta">{leadArticle.readTime}</span>
          {/* Subtle switcher between snapshot placeholder graphic & high-res documentary photo */}
          <button
            onClick={() => setUsePhoto(!usePhoto)}
            className="text-[10px] font-sans-meta uppercase tracking-wider text-[#727272] hover:text-[#121212] px-2 py-0.5 border border-[#e2e2e2] bg-neutral-50 rounded-none cursor-pointer"
            title="Toggle between snapshot layout and high-res wire photo"
          >
            {usePhoto ? 'Show Snapshot Graphic' : 'View Wire Photo'}
          </button>
        </div>

        {/* Hero Image Module with Provided Exact Image / Photo */}
        <figure
          onClick={() => onSelectArticle(leadArticle.id)}
          className="mt-3 -mx-4 sm:mx-0 overflow-hidden cursor-pointer group"
        >
          <div className="relative w-full overflow-hidden bg-[#e8eaf6] flex items-center justify-center min-h-[220px]">
            {usePhoto ? (
              <img
                src={leadArticle.image}
                alt="Composite portrait photograph representing female government officials in the administration"
                className="w-full h-auto object-cover object-top select-none group-hover:opacity-95 transition-opacity"
                loading="eager"
              />
            ) : (
              <div className="w-full py-12 flex flex-col items-center justify-center bg-[#eaebfc]">
                <img
                  src="https://www.gstatic.com/labs-code/stitch/stitch-placeholder-300x300.svg"
                  alt="Snapshot placeholder illustration"
                  className="w-16 h-16 opacity-70 select-none pointer-events-none"
                  loading="eager"
                />
              </div>
            )}
          </div>
          <figcaption className="px-4 sm:px-0 text-right mt-1.5">
            <span className="text-[10px] text-[#727272] font-sans-meta tracking-tight">
              {leadArticle.imageCaption || 'Tierney L. Cross/The New York Times'}
            </span>
          </figcaption>
        </figure>

        {/* Secondary Follow-up in Lead Container */}
        <div className="mt-4 pt-3 border-t border-[#e2e2e2]">
          <h2 className="nyt-headline text-lg font-bold text-[#121212] leading-snug">
            <button
              onClick={() => onSelectArticle(secondaryArticle.id)}
              className="text-left hover:underline cursor-pointer"
            >
              {secondaryArticle.title}
            </button>
          </h2>

          <div className="flex items-center space-x-3 mt-1.5 text-[#727272]">
            <span className="nyt-meta">{secondaryArticle.readTime}</span>
            <button
              onClick={() => onOpenComments(secondaryArticle.id)}
              className="inline-flex items-center text-xs font-sans-meta space-x-1 hover:text-[#121212] cursor-pointer"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M4 2h16a2 2 0 012 2v12a2 2 0 01-2 2H6l-4 4V4a2 2 0 012-2z" />
              </svg>
              <span>{secondaryArticle.commentCount || 519}</span>
            </button>
          </div>
        </div>
      </article>
    </section>
  );
};
