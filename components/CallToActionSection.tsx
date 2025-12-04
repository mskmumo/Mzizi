'use client';

import { useState } from 'react';

export function CallToActionSection() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send to a backend
    console.log('Waitlist email:', email);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setEmail('');
    }, 3000);
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-deep-loam to-warm-brown text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Join Waitlist */}
          <div className="bg-white/10 backdrop-blur-md rounded-[32px] p-8 md:p-12 border border-white/20">
            <div className="text-5xl mb-6">🌿</div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Join the Waitlist
            </h2>
            <p className="text-white/90 mb-6 leading-relaxed">
              Be among the first to experience the full Mizizi platform when we launch. 
              Get early access to immersive cultural journeys, exclusive content, and 
              special community features.
            </p>
            
            {!submitted ? (
              <form onSubmit={handleWaitlistSubmit} className="space-y-4" suppressHydrationWarning>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full px-6 py-4 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                  suppressHydrationWarning
                />
                <button
                  type="submit"
                  className="w-full py-4 bg-white hover:bg-sand text-deep-loam font-heading font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
                  suppressHydrationWarning
                >
                  Join Waitlist
                </button>
              </form>
            ) : (
              <div className="py-4 px-6 bg-green-500/20 border border-green-400/50 rounded-2xl text-center animate-fade-in-up">
                <p className="text-white font-semibold">✓ Thank you! You're on the list!</p>
              </div>
            )}
            
            <p className="text-xs text-white/60 mt-4">
              We respect your privacy. Unsubscribe anytime.
            </p>
          </div>

          {/* Contribute Story */}
          <div className="bg-white/10 backdrop-blur-md rounded-[32px] p-8 md:p-12 border border-white/20">
            <div className="text-5xl mb-6">📖</div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Contribute a Story
            </h2>
            <p className="text-white/90 mb-6 leading-relaxed">
              Do you have cultural knowledge, family stories, or traditions to share? 
              Help us preserve and celebrate Kenya's rich heritage by contributing your 
              voice to the Mizizi archive.
            </p>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <span className="text-ochre text-xl">✦</span>
                <p className="text-white/90 text-sm">Share oral histories and folktales</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-ochre text-xl">✦</span>
                <p className="text-white/90 text-sm">Submit photos and videos of cultural practices</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-ochre text-xl">✦</span>
                <p className="text-white/90 text-sm">Document traditional recipes and crafts</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-ochre text-xl">✦</span>
                <p className="text-white/90 text-sm">Connect with community elders and custodians</p>
              </div>
            </div>
            
            <button className="w-full py-4 bg-ochre hover:bg-sand hover:text-deep-loam text-white font-heading font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-lg">
              Start Contributing
            </button>
            
            <p className="text-xs text-white/60 mt-4">
              All submissions are reviewed with respect for cultural authenticity.
            </p>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-16 text-center max-w-4xl mx-auto">
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-body italic">
            "Mizizi bridges tradition and technology, preserving Kenya's cultural heritage 
            for future generations through immersive digital experiences co-created with 
            community custodians."
          </p>
        </div>
      </div>
    </section>
  );
}
