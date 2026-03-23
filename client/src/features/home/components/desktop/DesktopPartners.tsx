'use client';

import type React from 'react';

import { useTranslation } from '@/lib/i18n';

const PARTNERS = ['COPART', 'IAAI', 'MANHEIM', 'MAERSK', 'MSC'];

export const DesktopPartners = (): React.ReactElement => {
  const { t } = useTranslation();

  return (
    <section className="py-20 px-12 md:px-24 bg-background">
      <div className="text-center mb-16">
        <h3 className="text-xs font-bold uppercase tracking-[0.4em] text-muted-foreground mb-4">
          {t.desktopPartners.title}
        </h3>
        <div className="h-[1px] w-full bg-border/30" />
      </div>
      <div className="flex flex-wrap justify-center items-center gap-16 md:gap-32 grayscale opacity-50 hover:grayscale-0 transition-all">
        {PARTNERS.map((partner) => (
          <div
            key={partner}
            className="text-2xl font-black tracking-tighter text-muted-foreground"
          >
            {partner}
          </div>
        ))}
      </div>
    </section>
  );
};
