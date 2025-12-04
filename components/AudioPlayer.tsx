"use client";

import { useState, useRef } from "react";

interface AudioPlayerProps {
  src: string;
  title: string;
  description?: string;
  autoPlay?: boolean;
}

export const AudioPlayer = ({ src, title, description, autoPlay = false }: AudioPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    if (!audioRef.current) return;
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    if (!audioRef.current) return;
    setDuration(audioRef.current.duration);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!audioRef.current) return;
    const newTime = parseFloat(e.target.value);
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="rounded-2xl border border-[#f0dccc] bg-white p-6 shadow-lg">
      <div className="flex items-start gap-4">
        <button
          onClick={togglePlay}
          className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-[#d86733] text-white shadow-lg transition hover:bg-[#a44518]"
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? (
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>

        <div className="flex-1">
          <h4 className="font-semibold text-[#2d1c12]">{title}</h4>
          {description && (
            <p className="mt-1 text-sm text-[#5c4435]">{description}</p>
          )}

          <div className="mt-4 flex items-center gap-3">
            <span className="text-xs text-[#a1785f]">{formatTime(currentTime)}</span>
            <input
              type="range"
              min="0"
              max={duration || 0}
              value={currentTime}
              onChange={handleSeek}
              className="flex-1 accent-[#d86733]"
              aria-label="Audio progress"
            />
            <span className="text-xs text-[#a1785f]">{formatTime(duration)}</span>
          </div>
        </div>
      </div>

      <audio
        ref={audioRef}
        src={src}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={() => setIsPlaying(false)}
        autoPlay={autoPlay}
      />
    </div>
  );
};
