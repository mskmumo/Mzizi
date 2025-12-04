'use client';

import { useState } from 'react';
import { CulturalPillar } from '@/data/content-types';
import { AudioPlayer } from './AudioPlayer';
import { VideoPlayer } from './VideoPlayer';
import Image from 'next/image';

type PillarSectionProps = {
  pillar: CulturalPillar;
  index: number;
};

export function PillarSection({ pillar, index }: PillarSectionProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeMediaTab, setActiveMediaTab] = useState<'audio' | 'video' | 'images'>('images');

  const hasAudio = pillar.media?.audio && pillar.media.audio.length > 0;
  const hasVideo = pillar.media?.video && pillar.media.video.length > 0;
  const hasImages = pillar.media?.images && pillar.media.images.length > 0;

  return (
    <section 
      className={`py-16 md:py-24 animate-fade-in-up stagger-${index + 1}`}
      id={pillar.id}
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="text-5xl md:text-6xl">{pillar.icon}</span>
          </div>
          <p className="text-sm uppercase tracking-[0.3em] text-warm-brown font-heading mb-3">
            Cultural Pillar {index + 1}
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-deep-loam mb-4">
            {pillar.title}
          </h2>
          <p className="text-xl md:text-2xl text-ochre font-body mb-6">
            {pillar.subtitle}
          </p>
          <p className="text-lg text-warm-brown font-body max-w-3xl mx-auto">
            {pillar.description}
          </p>
        </div>

        {/* Main Content Card */}
        <div className="bg-white rounded-[32px] shadow-2xl overflow-hidden border border-light-beige">
          {/* Content */}
          <div className="p-8 md:p-12">
            {/* Long Description */}
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-deep-loam/90 leading-relaxed whitespace-pre-line">
                {pillar.longDescription}
              </p>
            </div>

            {/* Key Points */}
            {pillar.keyPoints && pillar.keyPoints.length > 0 && (
              <div className="mb-8">
                <h3 className="text-2xl font-heading font-semibold text-deep-loam mb-4">
                  Key Elements
                </h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {pillar.keyPoints.map((point, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-4 bg-sand/50 rounded-2xl"
                    >
                      <span className="text-ochre text-xl mt-1">✦</span>
                      <p className="text-deep-loam font-body">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Symbolism */}
            {pillar.symbolism && (
              <div className="mb-8 p-6 bg-gradient-to-br from-off-white to-sand rounded-3xl border border-light-beige">
                <h3 className="text-xl font-heading font-semibold text-deep-loam mb-3 flex items-center gap-2">
                  <span>🔮</span> Cultural Symbolism
                </h3>
                <p className="text-deep-loam/90 leading-relaxed">{pillar.symbolism}</p>
              </div>
            )}

            {/* Practices */}
            {pillar.practices && pillar.practices.length > 0 && (
              <div className="mb-8">
                <h3 className="text-2xl font-heading font-semibold text-deep-loam mb-4">
                  Traditional Practices
                </h3>
                <div className="flex flex-wrap gap-2">
                  {pillar.practices.map((practice, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-ochre/10 text-ochre rounded-full text-sm font-body border border-ochre/20"
                    >
                      {practice}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Expand/Collapse for multimedia */}
            {(hasAudio || hasVideo || hasImages) && (
              <div className="mt-8">
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="w-full py-4 bg-ochre hover:bg-warm-brown text-white font-heading font-semibold rounded-full transition-all duration-300 flex items-center justify-center gap-2"
                >
                  {isExpanded ? 'Hide' : 'Explore'} Multimedia Content
                  <svg
                    className={`w-5 h-5 transition-transform duration-300 ${
                      isExpanded ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
              </div>
            )}
          </div>

          {/* Multimedia Section */}
          {isExpanded && (hasAudio || hasVideo || hasImages) && (
            <div className="border-t border-light-beige p-8 md:p-12 bg-gradient-to-b from-sand/30 to-transparent">
              {/* Media Tabs */}
              <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
                {hasImages && (
                  <button
                    onClick={() => setActiveMediaTab('images')}
                    className={`px-6 py-3 rounded-full font-heading font-semibold transition-all duration-300 whitespace-nowrap ${
                      activeMediaTab === 'images'
                        ? 'bg-ochre text-white shadow-lg'
                        : 'bg-white text-warm-brown hover:bg-sand border border-light-beige'
                    }`}
                  >
                    📸 Images
                  </button>
                )}
                {hasAudio && (
                  <button
                    onClick={() => setActiveMediaTab('audio')}
                    className={`px-6 py-3 rounded-full font-heading font-semibold transition-all duration-300 whitespace-nowrap ${
                      activeMediaTab === 'audio'
                        ? 'bg-ochre text-white shadow-lg'
                        : 'bg-white text-warm-brown hover:bg-sand border border-light-beige'
                    }`}
                  >
                    🎵 Audio
                  </button>
                )}
                {hasVideo && (
                  <button
                    onClick={() => setActiveMediaTab('video')}
                    className={`px-6 py-3 rounded-full font-heading font-semibold transition-all duration-300 whitespace-nowrap ${
                      activeMediaTab === 'video'
                        ? 'bg-ochre text-white shadow-lg'
                        : 'bg-white text-warm-brown hover:bg-sand border border-light-beige'
                    }`}
                  >
                    🎬 Video
                  </button>
                )}
              </div>

              {/* Media Content */}
              <div className="space-y-6">
                {/* Images */}
                {activeMediaTab === 'images' && hasImages && (
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {pillar.media!.images!.map((image, idx) => (
                      <div
                        key={idx}
                        className={`group relative aspect-square rounded-3xl overflow-hidden shadow-2xl image-3d float-animation float-delay-${(idx % 6) + 1}`}
                      >
                        <Image
                          src={image}
                          alt={`${pillar.title} - Image ${idx + 1}`}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        {/* Overlay gradient on hover */}
                        <div className="absolute inset-0 bg-gradient-to-t from-deep-loam/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end p-6">
                          <p className="text-white font-heading text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-400">
                            {pillar.title} Heritage
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Audio */}
                {activeMediaTab === 'audio' && hasAudio && (
                  <div className="space-y-4">
                    {pillar.media!.audio!.map((audio, idx) => (
                      <div
                        key={idx}
                        className="bg-white rounded-3xl p-6 shadow-lg border border-light-beige"
                      >
                        <h4 className="font-heading font-semibold text-deep-loam mb-2">
                          {audio.title}
                        </h4>
                        {audio.description && (
                          <p className="text-sm text-warm-brown mb-4">{audio.description}</p>
                        )}
                        <AudioPlayer src={audio.src} title={audio.title} />
                      </div>
                    ))}
                  </div>
                )}

                {/* Video */}
                {activeMediaTab === 'video' && hasVideo && (
                  <div className="space-y-6">
                    {pillar.media!.video!.map((video, idx) => (
                      <div
                        key={idx}
                        className="bg-white rounded-3xl p-6 shadow-lg border border-light-beige"
                      >
                        <h4 className="font-heading font-semibold text-deep-loam mb-2">
                          {video.title}
                        </h4>
                        {video.description && (
                          <p className="text-sm text-warm-brown mb-4">{video.description}</p>
                        )}
                        <VideoPlayer
                          src={video.src}
                          poster={video.poster || ''}
                          title={video.title}
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
