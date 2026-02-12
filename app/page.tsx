'use client';

import { useState } from 'react';

export default function Home() {
  const [answer, setAnswer] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [hasAsked, setHasAsked] = useState(false);

  const askOracle = async () => {
    setIsLoading(true);
    setHasAsked(true);
    
    try {
      // Simulate searching/thinking time (2 seconds)
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const response = await fetch('/api/answer');
      const data = await response.json();
      setAnswer(data.answer);
    } catch (error) {
      console.error('Error fetching answer:', error);
      setAnswer('The oracle is silent...');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 relative overflow-hidden">
      {/* Cosmic nebula background - ancient, mysterious, star patterns */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1758220824544-08877c5a774b?w=1920&q=80)' }}
        />
        <div className="absolute inset-0 bg-black/25"></div>
        {/* Mystical gradient overlay */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-900/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-900/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-2xl w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
            The Oracle's Answer Book
          </h1>
          <p className="text-lg text-purple-300/80 italic">
            Ask your question silently, then seek the oracle's wisdom
          </p>
        </div>

        {/* Oracle card */}
        <div className="oracle-card mystical-glow rounded-2xl p-8 md:p-12 mb-8 min-h-[300px] flex items-center justify-center">
          {!hasAsked && (
            <div className="text-center">
              <div className="text-6xl mb-4">🔮</div>
              <p className="text-xl text-purple-300/60 italic">
                The oracle awaits your question...
              </p>
            </div>
          )}

          {isLoading && (
            <div className="text-center">
              <div className="inline-block">
                {/* Searching icon */}
                <svg 
                  className="w-16 h-16 text-purple-400 animate-spin-slow" 
                  fill="none" 
                  viewBox="0 0 24 24"
                >
                  <circle 
                    className="opacity-25" 
                    cx="12" 
                    cy="12" 
                    r="10" 
                    stroke="currentColor" 
                    strokeWidth="4"
                  />
                  <path 
                    className="opacity-75" 
                    fill="currentColor" 
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
              </div>
              <p className="text-purple-300/80 italic mt-4 text-lg">
                Consulting the ancient wisdom...
              </p>
            </div>
          )}

          {!isLoading && answer && (
            <div className="text-center animate-fade-in">
              <div className="text-2xl md:text-3xl font-serif leading-relaxed text-purple-100 mb-6">
                "{answer}"
              </div>
              <div className="text-sm text-purple-400/60 italic">
                — The Oracle has spoken
              </div>
            </div>
          )}
        </div>

        {/* Ask button */}
        <div className="text-center">
          <button
            onClick={askOracle}
            disabled={isLoading}
            className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 
                       text-white font-semibold rounded-full text-lg transition-all duration-300 
                       disabled:opacity-50 disabled:cursor-not-allowed
                       shadow-lg hover:shadow-purple-500/50 hover:scale-105"
          >
            <span className="flex items-center gap-2">
              <span>✨</span>
              <span>Ask Me A Question</span>
              <span>✨</span>
            </span>
          </button>
          
          {hasAsked && !isLoading && (
            <p className="mt-4 text-sm text-purple-400/60 italic">
              Ask again for new wisdom
            </p>
          )}
        </div>

        {/* Footer */}
        <div className="mt-16 text-center text-purple-400/40 text-sm">
          <p>The answers you seek lie within the cosmic tapestry</p>
        </div>
      </div>
    </div>
  );
}
