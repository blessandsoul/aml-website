'use client';

import type React from 'react';

import { useTranslation } from '@/lib/i18n';

export const HeroSection = (): React.ReactElement => {
  const { t } = useTranslation();

  return (
    <section className="relative h-[397px] w-full overflow-hidden bg-primary flex flex-col justify-end p-6">
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
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent" />
      </div>
      <div className="relative z-10 space-y-2">
        <div className="inline-block bg-accent px-2 py-1">
          <span className="text-[10px] font-black text-white uppercase tracking-widest">
            {t.hero.badge}
          </span>
        </div>
        <h2 className="text-4xl font-extrabold text-white leading-none tracking-tighter">
          {t.hero.title}
        </h2>
      </div>
    </section>
  );
};
