'use client';

import type React from 'react';

import { MaterialIcon } from '@/components/common/MaterialIcon';
import { useTranslation } from '@/lib/i18n';

export const CtaSection = (): React.ReactElement => {
  const { t } = useTranslation();

  return (
    <section className="p-6">
      <button
        type="button"
        className="w-full bg-accent text-white h-14 font-black uppercase tracking-widest flex items-center justify-center gap-3 active:opacity-80 active:scale-95 transition-all"
      >
        {t.cta.authorize}
        <MaterialIcon name="arrow_forward" />
      </button>
    </section>
  );
};
