"use client";

import { useState, useEffect } from "react";
import { kambaData } from "../data/kamba-content";
import { kambaPillars } from "../data/kamba-pillars";
import { kikuyuData, kikuyuPillars } from "../data/kikuyu-content";
import { kambaQuizQuestions, kikuyuQuizQuestions } from "../data/quiz-questions";
import { TribeSwitcher } from "../components/TribeSwitcher";
import { HeroSection } from "../components/HeroSection";
import { PillarsNavigation } from "../components/PillarsNavigation";
import { PillarSection } from "../components/PillarSection";
import { QuizSection } from "../components/QuizSection";
import { CallToActionSection } from "../components/CallToActionSection";

export default function Home() {
  const [currentTribe, setCurrentTribe] = useState<'kamba' | 'kikuyu'>('kamba');

  // Get current tribe data
  const tribeData = currentTribe === 'kamba' ? kambaData : kikuyuData;
  const tribePillars = currentTribe === 'kamba' ? kambaPillars : kikuyuPillars;
  const tribeQuizQuestions = currentTribe === 'kamba' ? kambaQuizQuestions : kikuyuQuizQuestions;

  // Convert pillars object to array for mapping
  const pillarsArray = Object.values(tribePillars).filter(Boolean);

  // Scroll to top when tribe changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentTribe]);

  return (
    <div className="min-h-screen bg-cream">
      {/* Tribe Switcher */}
      <TribeSwitcher currentTribe={currentTribe} onSwitch={setCurrentTribe} />

      {/* Hero Section */}
      <HeroSection
        name={tribeData.name!}
        tagline={tribeData.tagline!}
        description={tribeData.description!}
        heroImage={tribeData.heroImage!}
        location={tribeData.location!}
        population={tribeData.population!}
        language={tribeData.language!}
        languageNative={tribeData.languageNative!}
      />

      {/* Pillars Navigation */}
      <PillarsNavigation pillars={pillarsArray} />

      {/* Cultural Pillars */}
      <div className="bg-cream">
        {pillarsArray.map((pillar, index) => (
          <PillarSection key={pillar.id} pillar={pillar} index={index} />
        ))}
      </div>

      {/* Quiz Section */}
      <QuizSection 
        tribeName={tribeData.name!} 
        questions={tribeQuizQuestions}
      />

      {/* Call to Action */}
      <CallToActionSection />
    </div>
  );
}

/* OLD CODE REMOVED - All old sections have been replaced with new components */
