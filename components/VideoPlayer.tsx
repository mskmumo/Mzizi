"use client";

type VideoPlayerProps = {
  src: string;
  poster?: string;
  title: string;
  className?: string;
};

export const VideoPlayer = ({
  src,
  poster,
  title,
  className,
}: VideoPlayerProps) => (
  <video
    controls
    preload="metadata"
    poster={poster}
    className={`w-full rounded-2xl border border-black/10 bg-black/80 shadow-lg ${className ?? ""}`}
  >
    <source src={src} type="video/mp4" />
    <track kind="captions" />
    {title}
  </video>
);


