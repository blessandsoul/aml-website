'use client';

import type React from 'react';

import { useTranslation } from '@/lib/i18n';

export const StatsGrid = (): React.ReactElement => {
  const { t } = useTranslation();

  return (
    <section className="bg-secondary p-6">
      <div className="grid grid-cols-2 gap-[1px] bg-muted-foreground/20">
        <div className="bg-background p-6 flex flex-col items-center justify-center text-center">
          <span className="text-3xl font-black text-primary leading-none tracking-tighter">
            12K+
          </span>
          <span className="text-[10px] font-bold text-muted-foreground uppercase mt-2">
            {t.stats.vehicles}
          </span>
        </div>
        <div className="bg-background p-6 flex flex-col items-center justify-center text-center border-l border-muted-foreground/10">
          <span className="text-3xl font-black text-primary leading-none tracking-tighter">
            14
          </span>
          <span className="text-[10px] font-bold text-muted-foreground uppercase mt-2">
            {t.stats.globalPorts}
          </span>
        </div>
      </div>
    </section>
  );
};
