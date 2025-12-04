'use client';

import { useState, useEffect } from 'react';

type TribeSwitcherProps = {
  currentTribe: 'kamba' | 'kikuyu';
  onSwitch: (tribe: 'kamba' | 'kikuyu') => void;
};

export function TribeSwitcher({ currentTribe, onSwitch }: TribeSwitcherProps) {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleSwitch = () => {
    setIsAnimating(true);
    setTimeout(() => {
      onSwitch(currentTribe === 'kamba' ? 'kikuyu' : 'kamba');
      setIsAnimating(false);
    }, 300);
  };

  return (
    <div className="fixed top-20 right-4 z-50 md:top-24 md:right-8">
      <div className="rounded-full bg-white/95 backdrop-blur-sm p-1 shadow-2xl border border-light-beige">
        <div className="flex items-center gap-2 px-3 py-2">
          {/* Kamba Option */}
          <button
            onClick={() => currentTribe !== 'kamba' && handleSwitch()}
            className={`px-4 py-2 rounded-full text-sm font-heading font-semibold transition-all duration-300 ${
              currentTribe === 'kamba'
                ? 'bg-ochre text-white shadow-lg'
                : 'text-warm-brown hover:bg-sand'
            }`}
            aria-label="Switch to Kamba"
          >
            Kamba
          </button>

          {/* Switch Icon */}
          <div
            className={`text-warm-brown transition-transform duration-300 ${
              isAnimating ? 'rotate-180' : ''
            }`}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
              />
            </svg>
          </div>

          {/* Kikuyu Option */}
          <button
            onClick={() => currentTribe !== 'kikuyu' && handleSwitch()}
            className={`px-4 py-2 rounded-full text-sm font-heading font-semibold transition-all duration-300 ${
              currentTribe === 'kikuyu'
                ? 'bg-[#2D5016] text-white shadow-lg'
                : 'text-warm-brown hover:bg-sand'
            }`}
            aria-label="Switch to Kikuyu"
          >
            Kikuyu
          </button>
        </div>
      </div>

      {/* Current Tribe Indicator */}
      <div className="mt-2 text-center">
        <p className="text-xs font-body text-warm-brown uppercase tracking-wider">
          Exploring: <span className="font-semibold">{currentTribe === 'kamba' ? 'Akamba' : 'Gĩkũyũ'}</span>
        </p>
      </div>
    </div>
  );
}
