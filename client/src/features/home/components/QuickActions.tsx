'use client';

import type React from 'react';

import { MaterialIcon } from '@/components/common/MaterialIcon';
import { useTranslation } from '@/lib/i18n';

export const QuickActions = (): React.ReactElement => {
  const { t } = useTranslation();

  return (
    <section className="p-6 space-y-4">
      <h3 className="text-xs font-black uppercase tracking-widest text-muted-foreground">
        {t.quickAccess.title}
      </h3>
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-primary p-5 h-32 flex flex-col justify-between hover:bg-opacity-95 transition-all">
          <MaterialIcon name="calculate" className="text-accent text-3xl" />
          <span className="text-white text-sm font-bold leading-tight">
            {t.quickAccess.transportCalculator}
          </span>
        </div>
        <div className="bg-background border border-muted-foreground p-5 h-32 flex flex-col justify-between border-l-4 border-l-accent">
          <MaterialIcon name="anchor" className="text-primary text-3xl" />
          <span className="text-primary text-sm font-bold leading-tight">
            {t.quickAccess.portServices}
          </span>
        </div>
        <div className="bg-background border border-muted-foreground p-5 h-32 flex flex-col justify-between">
          <MaterialIcon name="directions_car" className="text-primary text-3xl" />
          <span className="text-primary text-sm font-bold leading-tight">
            {t.quickAccess.fleetManagement}
          </span>
        </div>
        <div className="bg-accent p-5 h-32 flex flex-col justify-between hover:opacity-90 transition-all">
          <MaterialIcon name="hub" className="text-white text-3xl" />
          <span className="text-white text-sm font-bold leading-tight">
            {t.quickAccess.partnerPortal}
          </span>
        </div>
      </div>
    </section>
  );
};
