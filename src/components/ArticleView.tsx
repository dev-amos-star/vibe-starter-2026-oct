import React, { useState, useEffect } from 'react';
import { Article } from '../types';

interface ArticleViewProps {
  article: Article;
  onBack: () => void;
  onSelectArticle: (id: string) => void;
  allArticles: Record<string, Article>;
  isSaved: boolean;
  onToggleSave: (article: Article) => void;
  onOpenComments: (articleId: string) => void;
  fontSize: 'standard' | 'large' | 'larger';
  readingTheme: 'light' | 'sepia' | 'dark';
  onToggleTheme: () => void;
}

export const ArticleView: React.FC<ArticleViewProps> = ({
  article,
  onBack,
  onSelectArticle,
  allArticles,
  isSaved,
  onToggleSave,
  onOpenComments,
  fontSize,
  readingTheme,
  onToggleTheme,
}) => {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [audioProgress, setAudioProgress] = useState(0);
  const [audioSpeed, setAudioSpeed] = useState<1 | 1.25 | 1.5>(1);
  const [showShareNotification, setShowShareNotification] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsPlayingAudio(false);
    setAudioProgress(0);

    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress(Math.min(100, Math.max(0, (window.scrollY / totalScroll) * 100)));
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [article.id]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlayingAudio) {
      interval = setInterval(() => {
        setAudioProgress((prev) => {
          if (prev >= 100) {
            setIsPlayingAudio(false);
            return 0;
          }
          return prev + 1 * audioSpeed;
        });
      }, 300);
    }
    return () => clearInterval(interval);
  }, [isPlayingAudio, audioSpeed]);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setShowShareNotification(true);
      setTimeout(() => setShowShareNotification(false), 2500);
    }
  };

  const bodyFontSizeClass =
    fontSize === 'larger'
      ? 'text-xl sm:text-2xl leading-relaxed sm:leading-[1.8]'
      : fontSize === 'large'
      ? 'text-lg sm:text-xl leading-relaxed sm:leading-[1.75]'
      : 'text-base sm:text-lg leading-relaxed sm:leading-[1.7]';

  const themeClasses =
    readingTheme === 'dark'
      ? 'bg-[#121212] text-[#e0e0e0] border-neutral-800'
      : readingTheme === 'sepia'
      ? 'bg-[#fbf9f5] text-[#292524] border-[#ebe6df]'
      : 'bg-white text-[#121212] border-[#e2e2e2]';

  const otherArticles = Object.values(allArticles)
    .filter((a) => a.id !== article.id)
    .slice(0, 3);

  return (
    <div className={`min-h-screen transition-colors duration-200 ${themeClasses}`}>
      {/* Reading Progress Bar at very top */}
      <div className="fixed top-0 left-0 w-full h-1 z-50 bg-neutral-200">
        <div
          className="h-full bg-[#121212] transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-6">
        {/* Top Reading Navigation */}
        <div className="sticky top-0 z-30 bg-inherit backdrop-blur-xs py-2.5 border-b border-[#e2e2e2] flex items-center justify-between -mx-4 sm:-mx-6 px-4 sm:px-6 mb-6">
          <button
            onClick={onBack}
            className="flex items-center space-x-1.5 text-xs font-sans-meta font-bold uppercase tracking-wider text-inherit hover:text-[#326891] cursor-pointer"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>Front Page</span>
          </button>

          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* Audio narration button */}
            <button
              onClick={() => setIsPlayingAudio(!isPlayingAudio)}
              className="flex items-center space-x-1 px-2.5 py-1 text-[11px] font-sans-meta font-semibold border border-neutral-300 hover:border-black cursor-pointer bg-neutral-50 dark:bg-neutral-800 transition-colors"
            >
              <span>{isPlayingAudio ? '⏸ Pause' : '▶ Listen'}</span>
              <span className="text-neutral-500 font-normal hidden sm:inline">({article.readTime})</span>
            </button>

            {/* Theme Toggle */}
            <button
              onClick={onToggleTheme}
              className="p-1.5 text-neutral-500 hover:text-black cursor-pointer text-xs font-sans-meta border border-neutral-200"
              title="Toggle reading theme"
            >
              {readingTheme === 'light' ? '🎨 Paper' : readingTheme === 'sepia' ? '🌙 Dark' : '☀️ Light'}
            </button>

            {/* Bookmark */}
            <button
              onClick={() => onToggleSave(article)}
              title={isSaved ? 'Remove bookmark' : 'Save for later'}
              className="p-1.5 text-neutral-600 hover:text-black cursor-pointer"
            >
              <svg
                className={`w-5 h-5 ${isSaved ? 'fill-[#326891] text-[#326891]' : 'fill-none'}`}
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                />
              </svg>
            </button>

            {/* Share */}
            <button
              onClick={handleShare}
              title="Share article link"
              className="p-1.5 text-neutral-600 hover:text-black cursor-pointer relative"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                />
              </svg>
              {showShareNotification && (
                <span className="absolute -bottom-8 right-0 bg-black text-white text-[10px] font-sans-meta py-1 px-2 whitespace-nowrap shadow-md">
                  Link copied!
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Audio Player Drawer */}
        {isPlayingAudio && (
          <div className="mb-6 p-4 bg-neutral-100 dark:bg-neutral-800 border border-[#e2e2e2] flex flex-col space-y-3">
            <div className="flex justify-between items-center text-xs font-sans-meta">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                <span className="font-bold">The New York Times Audio</span>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setAudioSpeed(audioSpeed === 1 ? 1.25 : audioSpeed === 1.25 ? 1.5 : 1)}
                  className="px-2 py-0.5 border border-neutral-300 text-[10px] font-mono font-bold cursor-pointer hover:bg-neutral-200"
                >
                  {audioSpeed}x
                </button>
                <span className="text-neutral-500 font-mono">
                  {Math.round((audioProgress / 100) * 5)}:00 / 5:00
                </span>
              </div>
            </div>

            {/* Scrubber */}
            <div
              onClick={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const pos = (e.clientX - rect.left) / rect.width;
                setAudioProgress(Math.round(pos * 100));
              }}
              className="w-full bg-neutral-200 dark:bg-neutral-700 h-2 cursor-pointer relative"
            >
              <div
                className="bg-[#121212] dark:bg-white h-full transition-all duration-150"
                style={{ width: `${audioProgress}%` }}
              />
            </div>

            <div className="flex justify-between items-center text-[11px] text-neutral-600 dark:text-neutral-400 font-sans-meta">
              <span>Voice: Times Editorial Narrator (US English)</span>
              <div className="flex space-x-2">
                <button
                  onClick={() => setAudioProgress((p) => Math.max(0, p - 10))}
                  className="hover:underline cursor-pointer"
                >
                  -15s
                </button>
                <button
                  onClick={() => setAudioProgress((p) => Math.min(100, p + 10))}
                  className="hover:underline cursor-pointer"
                >
                  +15s
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Article Header */}
        <header className="mb-6">
          {article.kicker && (
            <div className="text-[11px] font-sans-meta font-bold uppercase tracking-widest text-[#326891] mb-2">
              {article.kicker}
            </div>
          )}

          <h1 className="nyt-headline text-3xl sm:text-5xl font-bold leading-[1.12]">
            {article.title}
          </h1>

          <p className="nyt-summary text-lg sm:text-2xl mt-3 font-normal opacity-90">
            {article.deck}
          </p>

          {/* Byline and Dateline */}
          <div className="mt-4 pt-3 border-t border-[#e2e2e2] flex flex-col sm:flex-row sm:items-center sm:justify-between text-xs font-sans-meta text-[#727272] gap-1">
            <div>
              <span className="font-bold text-inherit">By {article.author}</span>
              {article.authorRole && <span> · {article.authorRole}</span>}
            </div>
            <div>
              <span>{article.date}</span>
              <span> · {article.readTime}</span>
            </div>
          </div>
        </header>

        {/* Hero Photo if available */}
        {article.image && (
          <figure className="mb-8">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-auto object-cover border border-[#e2e2e2]"
            />
            {article.imageCaption && (
              <figcaption className="mt-2 text-xs text-[#727272] font-sans-meta">
                {article.imageCaption}
              </figcaption>
            )}
          </figure>
        )}

        {/* Article Body */}
        <div className={`space-y-5 font-serif ${bodyFontSizeClass}`}>
          {article.body.map((paragraph, idx) => (
            <p key={idx} className={idx === 0 ? 'nyt-dropcap' : ''}>
              {paragraph}
            </p>
          ))}

          {/* Pull Quote */}
          {article.pullQuote && (
            <aside className="my-10 py-6 border-y border-[#e2e2e2] text-center px-4 max-w-xl mx-auto">
              <blockquote className="nyt-headline text-2xl sm:text-3xl italic">
                “{article.pullQuote}”
              </blockquote>
              {article.pullQuoteAuthor && (
                <cite className="block mt-2 text-xs font-sans-meta uppercase tracking-wider text-[#727272] not-italic">
                  — {article.pullQuoteAuthor}
                </cite>
              )}
            </aside>
          )}
        </div>

        {/* Reader Discussion / Comments Callout */}
        <div className="mt-10 pt-4 border-t-2 border-inherit flex items-center justify-between">
          <div>
            <h3 className="font-sans-meta font-bold text-sm">Reader Discussion</h3>
            <p className="text-xs text-neutral-500 font-sans-meta mt-0.5">
              Join the conversation with verified New York Times subscribers.
            </p>
          </div>
          <button
            onClick={() => onOpenComments(article.id)}
            className="px-4 py-2 bg-[#121212] text-white text-xs font-sans-meta font-semibold rounded-none hover:bg-neutral-800 cursor-pointer flex items-center space-x-1.5"
          >
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M4 2h16a2 2 0 012 2v12a2 2 0 01-2 2H6l-4 4V4a2 2 0 012-2z" />
            </svg>
            <span>{article.commentCount || 519} Comments</span>
          </button>
        </div>

        {/* Related Coverage */}
        <section className="mt-12 pt-6 border-t border-[#e2e2e2]">
          <h3 className="font-sans-meta font-bold text-xs uppercase tracking-wider mb-4">
            More in {article.section}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {otherArticles.map((item) => (
              <button
                key={item.id}
                onClick={() => onSelectArticle(item.id)}
                className="text-left group cursor-pointer border border-[#e2e2e2] p-3 hover:border-black transition-colors"
              >
                <span className="text-[10px] font-sans-meta uppercase tracking-wider text-[#326891] block mb-1">
                  {item.section}
                </span>
                <h4 className="nyt-headline text-sm font-bold group-hover:underline line-clamp-2">
                  {item.title}
                </h4>
                <span className="text-[10px] text-[#727272] font-sans-meta mt-2 block">
                  {item.readTime}
                </span>
              </button>
            ))}
          </div>
        </section>
      </article>
    </div>
  );
};
