import React from 'react';
import { Article } from '../types';

interface OpinionSectionProps {
  articles: Record<string, Article>;
  onSelectArticle: (id: string) => void;
}

export const OpinionSection: React.FC<OpinionSectionProps> = ({ articles, onSelectArticle }) => {
  const dwwArticle = articles['opinion-david-wallace-wells'];
  const clArticle = articles['opinion-carlos-lozada'];

  return (
    <section className="mt-6 pt-2" data-purpose="opinion-section">
      <div className="flex items-center space-x-2 border-b border-[#e2e2e2] pb-1.5 mb-3">
        <h3 className="font-sans-meta font-bold text-xs uppercase tracking-wider text-[#121212]">
          Opinion
        </h3>
      </div>

      <div className="space-y-4">
        {/* Opinion Column 1 */}
        {dwwArticle && (
          <article className="flex justify-between items-start space-x-3">
            <div className="flex-1">
              <span className="text-xs font-sans-meta font-bold text-neutral-800">
                {dwwArticle.author}
              </span>
              <h4 className="nyt-headline text-base font-bold mt-0.5 leading-snug">
                <button
                  onClick={() => onSelectArticle(dwwArticle.id)}
                  className="text-left hover:underline cursor-pointer"
                >
                  {dwwArticle.title}
                </button>
              </h4>
              <span className="nyt-meta mt-1 block">{dwwArticle.readTime}</span>
            </div>
            <div className="w-12 h-12 rounded-full bg-neutral-200 overflow-hidden shrink-0 border border-[#e2e2e2]">
              <div className="w-full h-full flex items-center justify-center text-xs font-bold text-neutral-600">
                {dwwArticle.authorInitials || 'DWW'}
              </div>
            </div>
          </article>
        )}

        {/* Opinion Column 2 */}
        {clArticle && (
          <article className="flex justify-between items-start space-x-3 pt-3 border-t border-[#e2e2e2]">
            <div className="flex-1">
              <span className="text-xs font-sans-meta font-bold text-neutral-800">
                {clArticle.author}
              </span>
              <h4 className="nyt-headline text-base font-bold mt-0.5 leading-snug">
                <button
                  onClick={() => onSelectArticle(clArticle.id)}
                  className="text-left hover:underline cursor-pointer"
                >
                  {clArticle.title}
                </button>
              </h4>
              <span className="nyt-meta mt-1 block">{clArticle.readTime}</span>
            </div>
            <div className="w-12 h-12 rounded-full bg-neutral-200 overflow-hidden shrink-0 border border-[#e2e2e2]">
              <div className="w-full h-full flex items-center justify-center text-xs font-bold text-neutral-600">
                {clArticle.authorInitials || 'CL'}
              </div>
            </div>
          </article>
        )}
      </div>
    </section>
  );
};
