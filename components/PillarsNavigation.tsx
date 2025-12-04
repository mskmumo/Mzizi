'use client';

import { CulturalPillar } from '@/data/content-types';

type PillarsNavigationProps = {
  pillars: CulturalPillar[];
};

export function PillarsNavigation({ pillars }: PillarsNavigationProps) {
  const scrollToPillar = (pillarId: string) => {
    const element = document.getElementById(pillarId);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="sticky top-16 z-40 bg-cream/95 backdrop-blur-md border-b border-light-beige shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-sm uppercase tracking-[0.3em] text-warm-brown font-heading">
            Cultural Pillars
          </h2>
        </div>
        <div className="flex gap-3 overflow-x-auto pb-2 custom-scrollbar">
          {pillars.map((pillar) => (
            <button
              key={pillar.id}
              onClick={() => scrollToPillar(pillar.id)}
              className="flex flex-col items-center gap-2 px-6 py-4 bg-white hover:bg-sand rounded-3xl border border-light-beige shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 min-w-[140px] group"
            >
              <span className="text-3xl group-hover:scale-110 transition-transform duration-300">
                {pillar.icon}
              </span>
              <span className="text-sm font-heading font-semibold text-deep-loam whitespace-nowrap">
                {pillar.title}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
