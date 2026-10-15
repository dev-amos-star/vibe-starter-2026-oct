import React, { useState } from 'react';

interface CommentItem {
  id: string;
  author: string;
  location: string;
  timeAgo: string;
  text: string;
  upvotes: number;
  isNYTPick?: boolean;
}

interface CommentsModalProps {
  isOpen: boolean;
  onClose: () => void;
  articleTitle: string;
}

export const CommentsModal: React.FC<CommentsModalProps> = ({
  isOpen,
  onClose,
  articleTitle,
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'picks'>('picks');
  const [comments, setComments] = useState<CommentItem[]>([
    {
      id: 'c1',
      author: 'Eleanor Vance',
      location: 'Washington, D.C.',
      timeAgo: '2h ago',
      text: 'Having worked inside several transition offices over twenty-five years, operational turnover at the deputy level is customary. What is unusual here is the speed with which specialized advisory desks were dissolved without designated acting successors.',
      upvotes: 184,
      isNYTPick: true,
    },
    {
      id: 'c2',
      author: 'Marcus Lindqvist',
      location: 'Austin, TX',
      timeAgo: '3h ago',
      text: 'The reporting rightly highlights that leadership continuity matters immensely when congressional committees begin annual appropriations hearings.',
      upvotes: 92,
      isNYTPick: true,
    },
    {
      id: 'c3',
      author: 'Sarah Jenkins',
      location: 'Denver, CO',
      timeAgo: '4h ago',
      text: 'Insightful piece. The dynamics between campaign advisors and career civil service deputies always produce these tectonic shifts as midterms approach.',
      upvotes: 45,
    },
  ]);
  const [newCommentText, setNewCommentText] = useState('');
  const [newAuthor, setNewAuthor] = useState('');
  const [newCity, setNewCity] = useState('');

  if (!isOpen) return null;

  const handleUpvote = (id: string) => {
    setComments((prev) =>
      prev.map((c) => (c.id === id ? { ...c, upvotes: c.upvotes + 1 } : c))
    );
  };

  const handlePost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCommentText.trim()) return;

    const item: CommentItem = {
      id: `c-${Date.now()}`,
      author: newAuthor.trim() || 'Reader in New York',
      location: newCity.trim() || 'New York, NY',
      timeAgo: 'Just now',
      text: newCommentText.trim(),
      upvotes: 1,
    };

    setComments([item, ...comments]);
    setNewCommentText('');
    setNewAuthor('');
    setNewCity('');
  };

  const displayed =
    activeTab === 'picks'
      ? comments.filter((c) => c.isNYTPick || c.upvotes > 100)
      : comments;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="relative w-full max-w-lg bg-white h-full shadow-2xl flex flex-col z-10 overflow-hidden border-l border-[#e2e2e2]">
        {/* Header */}
        <div className="p-4 border-b border-[#e2e2e2] flex items-center justify-between bg-neutral-50">
          <div>
            <h3 className="font-sans-meta font-bold text-sm text-[#121212]">
              Comments ({comments.length + 516})
            </h3>
            <p className="text-xs text-neutral-500 font-sans-meta truncate max-w-xs">
              {articleTitle}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-neutral-600 hover:text-black cursor-pointer rounded-sm hover:bg-neutral-200"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M6 18L18 6M6 6l12 12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {/* Filter Tabs */}
        <div className="flex border-b border-[#e2e2e2] px-4 gap-6 text-xs font-sans-meta font-semibold bg-white">
          <button
            onClick={() => setActiveTab('picks')}
            className={`py-2.5 border-b-2 cursor-pointer transition-colors ${
              activeTab === 'picks'
                ? 'border-[#121212] text-[#121212]'
                : 'border-transparent text-neutral-500 hover:text-black'
            }`}
          >
            NYT Picks ({comments.filter((c) => c.isNYTPick).length})
          </button>
          <button
            onClick={() => setActiveTab('all')}
            className={`py-2.5 border-b-2 cursor-pointer transition-colors ${
              activeTab === 'all'
                ? 'border-[#121212] text-[#121212]'
                : 'border-transparent text-neutral-500 hover:text-black'
            }`}
          >
            All Comments ({comments.length + 516})
          </button>
        </div>

        {/* Comments Feed */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {displayed.map((c) => (
            <div key={c.id} className="p-3.5 border border-[#e2e2e2] bg-white">
              <div className="flex items-center justify-between text-xs font-sans-meta mb-1.5">
                <div>
                  <span className="font-bold text-[#121212]">{c.author}</span>
                  <span className="text-neutral-500 ml-1.5">· {c.location}</span>
                </div>
                <span className="text-[11px] text-neutral-400">{c.timeAgo}</span>
              </div>

              {c.isNYTPick && (
                <span className="inline-block px-1.5 py-0.5 bg-neutral-100 text-[#326891] border border-neutral-200 text-[10px] font-sans-meta font-bold uppercase tracking-wider mb-1.5">
                  NYT Pick
                </span>
              )}

              <p className="nyt-summary text-sm text-neutral-800 leading-relaxed">
                {c.text}
              </p>

              <div className="mt-2.5 flex items-center justify-between text-xs font-sans-meta text-neutral-500 pt-2 border-t border-neutral-100">
                <button
                  onClick={() => handleUpvote(c.id)}
                  className="flex items-center space-x-1 hover:text-black cursor-pointer"
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M5 15l7-7 7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span>Recommend ({c.upvotes})</span>
                </button>
                <span className="hover:underline cursor-pointer">Reply</span>
              </div>
            </div>
          ))}
        </div>

        {/* Add Comment Input */}
        <form onSubmit={handlePost} className="p-3 border-t border-[#e2e2e2] bg-neutral-50 space-y-2">
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Your name"
              value={newAuthor}
              onChange={(e) => setNewAuthor(e.target.value)}
              className="flex-1 text-xs font-sans-meta px-2.5 py-1.5 bg-white border border-neutral-300 rounded-none focus:outline-none focus:border-black"
            />
            <input
              type="text"
              placeholder="Your city / state"
              value={newCity}
              onChange={(e) => setNewCity(e.target.value)}
              className="flex-1 text-xs font-sans-meta px-2.5 py-1.5 bg-white border border-neutral-300 rounded-none focus:outline-none focus:border-black"
            />
          </div>
          <textarea
            rows={2}
            placeholder="Share your thoughts respectfully..."
            value={newCommentText}
            onChange={(e) => setNewCommentText(e.target.value)}
            className="w-full text-xs font-sans-meta p-2 bg-white border border-neutral-300 rounded-none focus:outline-none focus:border-black resize-none"
          />
          <div className="flex justify-between items-center">
            <span className="text-[10px] text-neutral-500 font-sans-meta">
              Moderated per NYT Comment Guidelines
            </span>
            <button
              type="submit"
              disabled={!newCommentText.trim()}
              className="px-4 py-1.5 bg-[#121212] text-white text-xs font-sans-meta font-bold cursor-pointer hover:bg-neutral-800 disabled:opacity-40"
            >
              Post Comment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
