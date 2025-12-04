"use client";

import Link from "next/link";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-light-beige/50 bg-cream/95 backdrop-blur-md shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="text-3xl transition-transform duration-300 group-hover:scale-110">🌿</div>
          <div>
            <span className="text-2xl font-heading font-bold tracking-tight text-deep-loam">
              Mizizi
            </span>
            <p className="text-xs text-warm-brown uppercase tracking-wider">Digital Heritage</p>
          </div>
        </Link>

        <div className="flex items-center gap-4">
          <a 
            href="#quiz" 
            className="hidden md:block px-6 py-2 rounded-full text-sm font-heading font-semibold text-warm-brown hover:bg-sand transition-all duration-300"
          >
            Take Quiz
          </a>
          <a 
            href="#rhythms" 
            className="px-6 py-2 rounded-full text-sm font-heading font-semibold bg-ochre hover:bg-warm-brown text-white transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Explore Heritage
          </a>
        </div>
      </div>
    </header>
  );
};


