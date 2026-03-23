'use client';

import type React from 'react';

import { useTranslation } from '@/lib/i18n';

export const DesktopCta = (): React.ReactElement => {
  const { t } = useTranslation();

  return (
    <section className="bg-primary py-24 px-12 md:px-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-black text-primary-foreground uppercase tracking-tighter mb-8">
          {t.desktopCta.title}
        </h2>
        <p className="text-primary-foreground/70 text-lg mb-12">
          {t.desktopCta.description}
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <input
            className="bg-muted border-none px-8 py-4 w-full md:w-96 font-bold uppercase text-xs tracking-widest text-foreground focus:ring-2 focus:ring-accent outline-none"
            placeholder={t.desktopCta.placeholder}
            type="text"
          />
          <button
            type="button"
            className="bg-primary-foreground text-primary px-12 py-4 font-black uppercase text-sm tracking-widest hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            {t.desktopCta.button}
          </button>
        </div>
      </div>
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }}
      />
    </section>
  );
};
