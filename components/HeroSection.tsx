'use client';

import Image from 'next/image';

type HeroSectionProps = {
  name: string;
  tagline: string;
  description: string;
  heroImage: string;
  location: string;
  population: string;
  language: string;
  languageNative: string;
};

export function HeroSection({
  name,
  tagline,
  description,
  heroImage,
  location,
  population,
  language,
  languageNative
}: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImage}
          alt={`${name} cultural heritage`}
          fill
          className="object-cover animate-ken-burns"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-deep-loam/70 via-deep-loam/50 to-cream" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-20 md:py-32">
        <div className="text-center space-y-6 animate-fade-in-up">
          {/* Mizizi Branding */}
          <div className="inline-block">
            <p className="text-sand/80 text-sm uppercase tracking-[0.3em] font-heading mb-2">
              Mizizi - Digital Heritage
            </p>
            <div className="h-px w-32 mx-auto bg-gradient-to-r from-transparent via-sand to-transparent" />
          </div>

          {/* Tribe Name */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-white">
            {name}
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-3xl text-sand font-body max-w-3xl mx-auto">
            {tagline}
          </p>

          {/* Description */}
          <p className="text-base md:text-lg text-sand/90 font-body max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mt-12">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20">
              <p className="text-xs uppercase tracking-wider text-sand/70 mb-2 font-heading">
                Location
              </p>
              <p className="text-white font-body font-semibold">{location}</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20">
              <p className="text-xs uppercase tracking-wider text-sand/70 mb-2 font-heading">
                Population
              </p>
              <p className="text-white font-body font-semibold">{population}</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20">
              <p className="text-xs uppercase tracking-wider text-sand/70 mb-2 font-heading">
                Language
              </p>
              <p className="text-white font-body font-semibold">
                {language} <span className="text-sand/70">({languageNative})</span>
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <button className="px-8 py-4 bg-ochre hover:bg-warm-brown text-white font-heading font-semibold rounded-full shadow-2xl transition-all duration-300 hover:scale-105">
              Join the Waitlist
            </button>
            <button className="px-8 py-4 bg-white/20 backdrop-blur-md hover:bg-white/30 text-white font-heading font-semibold rounded-full border border-white/30 transition-all duration-300 hover:scale-105">
              Contribute a Story
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-pulse-slow">
          <div className="flex flex-col items-center gap-2">
            <p className="text-sand/70 text-xs uppercase tracking-wider font-heading">
              Explore Heritage
            </p>
            <svg
              className="w-6 h-6 text-sand/70"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
