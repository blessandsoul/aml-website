'use client';

import type React from 'react';

import { useTranslation } from '@/lib/i18n';

export const DesktopHeroSection = (): React.ReactElement => {
  const { t } = useTranslation();

  return (
    <header className="relative h-[819px] w-full overflow-hidden bg-primary">
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          aria-hidden="true"
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent flex items-center">
        <div className="max-w-[1700px] mx-auto w-full px-12 md:px-24">
        <div className="max-w-3xl">
          <span className="text-primary-foreground text-sm tracking-[0.3em] uppercase mb-4 block font-bold">
            {t.desktopHero.subtitle}
          </span>
          <h1 className="text-primary-foreground text-5xl md:text-7xl font-black leading-tight tracking-tighter mb-8 uppercase">
            {t.desktopHero.title}
          </h1>
          <p className="text-primary-foreground/70 text-lg md:text-xl font-medium max-w-xl mb-10 leading-relaxed">
            {t.desktopHero.description}
          </p>
          <div className="flex gap-1">
            <button
              type="button"
              className="bg-background text-primary px-10 py-4 font-bold uppercase text-sm tracking-widest hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              {t.desktopHero.ctaPrimary}
            </button>
            <button
              type="button"
              className="border border-primary-foreground text-primary-foreground px-10 py-4 font-bold uppercase text-sm tracking-widest hover:bg-primary-foreground hover:text-primary transition-colors"
            >
              {t.desktopHero.ctaSecondary}
            </button>
          </div>
        </div>
        </div>
      </div>
    </header>
  );
};
