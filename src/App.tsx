/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ActiveScreen, GameKey, Article } from './types';
import { ARTICLES } from './data/articles';
import { Header } from './components/Header';
import { LeadStory } from './components/LeadStory';
import { SecondaryNews } from './components/SecondaryNews';
import { GamesStrip } from './components/GamesStrip';
import { OpinionSection } from './components/OpinionSection';
import { Footer } from './components/Footer';
import { ArticleView } from './components/ArticleView';
import { PollTrackerView } from './components/PollTrackerView';
import { LiveBriefingView } from './components/LiveBriefingView';
import { GamesView } from './components/GamesView';
import { SectionsMenu } from './components/SectionsMenu';
import { CommentsModal } from './components/CommentsModal';
import { SubscribeModal } from './components/SubscribeModal';
import { ProfileModal } from './components/ProfileModal';

export default function App() {
  const [activeScreen, setActiveScreen] = useState<ActiveScreen>('home');
  const [selectedArticleId, setSelectedArticleId] = useState<string>('lead-women-administration');
  const [selectedGame, setSelectedGame] = useState<GameKey>('wordle');
  const [liveWarFilterTag, setLiveWarFilterTag] = useState<string | undefined>(undefined);

  // Modals & Drawers
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isSubscribeOpen, setIsSubscribeOpen] = useState(false);
  const [isCommentsOpen, setIsCommentsOpen] = useState(false);
  const [commentsArticleId, setCommentsArticleId] = useState<string>('lead-women-administration');

  // User preferences & storage
  const [fontSize, setFontSize] = useState<'standard' | 'large' | 'larger'>('standard');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [savedArticleIds, setSavedArticleIds] = useState<string[]>(['lead-women-administration']);

  // Load / Save persistent bookmarks
  useEffect(() => {
    try {
      const saved = localStorage.getItem('nyt_saved_articles');
      if (saved) setSavedArticleIds(JSON.parse(saved));
      const sub = localStorage.getItem('nyt_is_subscribed');
      if (sub === 'true') setIsSubscribed(true);
    } catch {
      // Local storage fallback
    }
  }, []);

  const handleToggleSave = (article: Article) => {
    setSavedArticleIds((prev) => {
      const exists = prev.includes(article.id);
      const next = exists ? prev.filter((id) => id !== article.id) : [...prev, article.id];
      try {
        localStorage.setItem('nyt_saved_articles', JSON.stringify(next));
      } catch {
        // Ignored
      }
      return next;
    });
  };

  const handleSubscribe = () => {
    setIsSubscribed(true);
    try {
      localStorage.setItem('nyt_is_subscribed', 'true');
    } catch {
      // Ignored
    }
  };

  const handleSelectArticle = (id: string) => {
    setSelectedArticleId(id);
    setActiveScreen('article');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenLiveUpdates = (tag?: string) => {
    setLiveWarFilterTag(tag);
    setActiveScreen('live-war');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenPollTracker = () => {
    setActiveScreen('polls');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectGame = (game: GameKey) => {
    setSelectedGame(game);
    setActiveScreen('games');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenComments = (articleId: string) => {
    setCommentsArticleId(articleId);
    setIsCommentsOpen(true);
  };

  const handleSectionSelect = (section: string) => {
    if (section === 'Games') {
      setActiveScreen('games');
    } else if (section === 'Home Page') {
      setActiveScreen('home');
    } else {
      // Find first article in this section or default to lead
      const matched = Object.values(ARTICLES).find(
        (a) => a.section.toLowerCase().includes(section.toLowerCase())
      );
      if (matched) {
        handleSelectArticle(matched.id);
      } else {
        setActiveScreen('home');
      }
    }
  };

  const savedArticlesList = savedArticleIds
    .map((id) => ARTICLES[id])
    .filter(Boolean);

  const activeArticle = ARTICLES[selectedArticleId] || ARTICLES['lead-women-administration'];
  const commentArticle = ARTICLES[commentsArticleId] || activeArticle;

  return (
    <div className="min-h-screen bg-white text-[#121212] flex flex-col font-sans-meta selection:bg-neutral-200">
      {/* Header is always visible on Home; and provides persistent branding */}
      <Header
        onOpenMenu={() => setIsMenuOpen(true)}
        onOpenProfile={() => setIsProfileOpen(true)}
        onOpenSubscribe={() => setIsSubscribeOpen(true)}
        onHomeClick={() => {
          setActiveScreen('home');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        savedCount={savedArticleIds.length}
      />

      {/* Screen Router */}
      <div className="flex-1">
        {activeScreen === 'home' && (
          <main className="max-w-xl mx-auto px-4 pb-12">
            {/* Lead Story */}
            <LeadStory
              leadArticle={ARTICLES['lead-women-administration']}
              secondaryArticle={ARTICLES['kimberly-guilfoyle']}
              onSelectArticle={handleSelectArticle}
              onOpenComments={handleOpenComments}
            />

            {/* Secondary News List & Topic Clusters */}
            <SecondaryNews
              articles={ARTICLES}
              onSelectArticle={handleSelectArticle}
              onOpenLiveUpdates={handleOpenLiveUpdates}
              onOpenPollTracker={handleOpenPollTracker}
            />

            {/* NYT Games Interactive Strip */}
            <GamesStrip onSelectGame={handleSelectGame} />

            {/* Opinion Section */}
            <OpinionSection
              articles={ARTICLES}
              onSelectArticle={handleSelectArticle}
            />
          </main>
        )}

        {activeScreen === 'article' && (
          <ArticleView
            article={activeArticle}
            onBack={() => setActiveScreen('home')}
            onSelectArticle={handleSelectArticle}
            allArticles={ARTICLES}
            isSaved={savedArticleIds.includes(activeArticle.id)}
            onToggleSave={handleToggleSave}
            onOpenComments={handleOpenComments}
            fontSize={fontSize}
          />
        )}

        {activeScreen === 'polls' && (
          <PollTrackerView
            onBack={() => setActiveScreen('home')}
            onReadRelatedArticle={handleSelectArticle}
          />
        )}

        {activeScreen === 'live-war' && (
          <LiveBriefingView
            initialTag={liveWarFilterTag}
            onBack={() => setActiveScreen('home')}
            onReadLeadArticle={() => handleSelectArticle('ukraine-satellite-escalation')}
          />
        )}

        {activeScreen === 'games' && (
          <GamesView
            initialGame={selectedGame}
            onBack={() => setActiveScreen('home')}
          />
        )}
      </div>

      {/* Standard NYT Broadsheet Footer */}
      <Footer
        onNavClick={handleSectionSelect}
        onSubscribeClick={() => setIsSubscribeOpen(true)}
      />

      {/* Sections Drawer */}
      <SectionsMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onSelectSection={handleSectionSelect}
        savedArticles={savedArticlesList}
        onSelectArticle={handleSelectArticle}
        fontSize={fontSize}
        setFontSize={setFontSize}
      />

      {/* Reader Discussion / Comments Drawer */}
      <CommentsModal
        isOpen={isCommentsOpen}
        onClose={() => setIsCommentsOpen(false)}
        articleTitle={commentArticle.title}
      />

      {/* Subscription Modal */}
      <SubscribeModal
        isOpen={isSubscribeOpen}
        onClose={() => setIsSubscribeOpen(false)}
        isSubscribed={isSubscribed}
        onSubscribe={handleSubscribe}
      />

      {/* Profile & Settings Modal */}
      <ProfileModal
        isOpen={isProfileOpen}
        onClose={() => setIsProfileOpen(false)}
        savedArticles={savedArticlesList}
        onSelectArticle={handleSelectArticle}
        isSubscribed={isSubscribed}
        onOpenSubscribe={() => setIsSubscribeOpen(true)}
      />
    </div>
  );
}
