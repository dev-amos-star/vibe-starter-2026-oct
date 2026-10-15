import React, { useState } from 'react';

interface SubscribeModalProps {
  isOpen: boolean;
  onClose: () => void;
  isSubscribed: boolean;
  onSubscribe: () => void;
}

export const SubscribeModal: React.FC<SubscribeModalProps> = ({
  isOpen,
  onClose,
  isSubscribed,
  onSubscribe,
}) => {
  const [selectedPlan, setSelectedPlan] = useState<'weekly' | 'annual'>('weekly');
  const [subscribedSuccess, setSubscribedSuccess] = useState(false);

  if (!isOpen) return null;

  const handleConfirm = () => {
    onSubscribe();
    setSubscribedSuccess(true);
    setTimeout(() => {
      setSubscribedSuccess(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-md bg-white border border-[#121212] p-6 shadow-2xl z-10">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 text-neutral-500 hover:text-black cursor-pointer"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M6 18L18 6M6 6l12 12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <div className="text-center mb-5">
          <span className="masthead-title text-2xl sm:text-3xl text-[#121212] block">
            The New York Times
          </span>
          <span className="text-[11px] font-sans-meta font-bold uppercase tracking-widest text-[#326891] mt-1 block">
            All Access Digital
          </span>
        </div>

        {subscribedSuccess ? (
          <div className="text-center py-8 space-y-3">
            <div className="w-12 h-12 bg-green-100 text-green-700 rounded-full flex items-center justify-center mx-auto text-xl font-bold">
              ✓
            </div>
            <h3 className="nyt-headline text-xl font-bold text-[#121212]">
              Welcome to The New York Times
            </h3>
            <p className="text-xs text-neutral-600 font-sans-meta">
              Your All Access subscription is active. Enjoy unlimited access across all devices.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="text-center">
              <h2 className="nyt-headline text-2xl font-bold text-[#121212]">
                Independent journalism worth supporting.
              </h2>
              <p className="nyt-summary text-sm text-neutral-700 mt-1">
                Subscribe today for just <span className="font-bold text-[#121212]">$1/week</span> for your first year.
              </p>
            </div>

            {/* Plans */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <button
                onClick={() => setSelectedPlan('weekly')}
                className={`p-3 border text-left cursor-pointer transition-all ${
                  selectedPlan === 'weekly'
                    ? 'border-[#121212] bg-neutral-50 ring-1 ring-[#121212]'
                    : 'border-[#e2e2e2] hover:bg-neutral-50'
                }`}
              >
                <span className="text-[10px] font-sans-meta uppercase font-bold text-[#326891] block">
                  Intro Offer
                </span>
                <div className="font-bold text-lg font-sans-meta text-[#121212]">$1 / week</div>
                <div className="text-[11px] text-neutral-500 font-sans-meta">Billed $4 every 4 weeks</div>
              </button>

              <button
                onClick={() => setSelectedPlan('annual')}
                className={`p-3 border text-left cursor-pointer transition-all ${
                  selectedPlan === 'annual'
                    ? 'border-[#121212] bg-neutral-50 ring-1 ring-[#121212]'
                    : 'border-[#e2e2e2] hover:bg-neutral-50'
                }`}
              >
                <span className="text-[10px] font-sans-meta uppercase font-bold text-[#727272] block">
                  Annual Pass
                </span>
                <div className="font-bold text-lg font-sans-meta text-[#121212]">$50 / year</div>
                <div className="text-[11px] text-neutral-500 font-sans-meta">Best overall value</div>
              </button>
            </div>

            {/* Perks list */}
            <div className="pt-2 border-t border-[#e2e2e2] space-y-2 text-xs font-sans-meta text-neutral-700">
              <div className="flex items-center space-x-2">
                <span className="text-[#326891] font-bold">✓</span>
                <span>Unlimited News, Investigations & Global Briefings</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-[#326891] font-bold">✓</span>
                <span>NYT Games: Wordle, Spelling Bee & The Mini Crossword</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-[#326891] font-bold">✓</span>
                <span>NYT Cooking: 21,000+ tested recipes</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-[#326891] font-bold">✓</span>
                <span>Wirecutter product reviews & The Athletic coverage</span>
              </div>
            </div>

            {/* CTA */}
            <button
              onClick={handleConfirm}
              className="w-full py-3 bg-[#121212] text-white font-sans-meta font-bold text-sm tracking-wider uppercase rounded-none hover:bg-neutral-800 transition-colors cursor-pointer"
            >
              {isSubscribed ? 'Subscription Active — Renew' : 'Get All Access — $1/Week'}
            </button>

            <p className="text-[10px] text-neutral-400 font-sans-meta text-center">
              Cancel anytime. Subject to The New York Times Terms of Service.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
