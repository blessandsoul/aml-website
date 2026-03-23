'use client';

import type React from 'react';

import { MaterialIcon } from '@/components/common/MaterialIcon';
import { useTranslation } from '@/lib/i18n';

export const DesktopStats = (): React.ReactElement => {
  const { t } = useTranslation();

  return (
    <section className="py-24 px-12 md:px-24 bg-secondary">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[600px]">
        <div className="md:col-span-8 bg-background p-12 flex flex-col justify-center">
          <h2 className="text-5xl font-black uppercase tracking-tighter text-primary mb-8">
            {t.desktopStats.title}
          </h2>
          <p className="text-muted-foreground mb-12 max-w-lg">
            {t.desktopStats.description}
          </p>
          <div className="grid grid-cols-2 gap-12">
            <div>
              <span className="text-6xl font-black text-primary block mb-2">12k+</span>
              <span className="text-xs uppercase font-bold tracking-widest text-muted-foreground">
                {t.desktopStats.vehiclesLabel}
              </span>
            </div>
            <div>
              <span className="text-6xl font-black text-primary block mb-2">14</span>
              <span className="text-xs uppercase font-bold tracking-widest text-muted-foreground">
                {t.desktopStats.portsLabel}
              </span>
            </div>
          </div>
        </div>
        <div className="md:col-span-4 bg-primary text-primary-foreground p-12 flex flex-col justify-between overflow-hidden relative">
          <div className="z-10">
            <MaterialIcon name="monitoring" size={48} className="mb-6" />
            <h3 className="text-3xl font-black uppercase leading-none mb-4">
              {t.desktopStats.monitoringTitle}
            </h3>
            <p className="text-primary-foreground/70 text-sm">
              {t.desktopStats.monitoringDesc}
            </p>
          </div>
          <div className="mt-8 z-10">
            <button
              type="button"
              className="w-full py-4 border border-primary-foreground font-bold uppercase text-xs tracking-widest hover:bg-primary-foreground hover:text-primary transition-all"
            >
              {t.desktopStats.monitoringButton}
            </button>
          </div>
          <div className="absolute -bottom-10 -right-10 opacity-10">
            <MaterialIcon name="language" size={300} />
          </div>
        </div>
      </div>
    </section>
  );
};
