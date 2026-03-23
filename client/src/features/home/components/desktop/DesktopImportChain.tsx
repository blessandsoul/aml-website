'use client';

import type React from 'react';

import { useTranslation } from '@/lib/i18n';

interface ImportStep {
  number: string;
  titleKey: 'step1Title' | 'step2Title' | 'step3Title' | 'step4Title' | 'step5Title';
  descKey: 'step1Desc' | 'step2Desc' | 'step3Desc' | 'step4Desc' | 'step5Desc';
  variant: 'light' | 'medium' | 'primary';
}

const STEPS: ImportStep[] = [
  { number: '01', titleKey: 'step1Title', descKey: 'step1Desc', variant: 'medium' },
  { number: '02', titleKey: 'step2Title', descKey: 'step2Desc', variant: 'light' },
  { number: '03', titleKey: 'step3Title', descKey: 'step3Desc', variant: 'medium' },
  { number: '04', titleKey: 'step4Title', descKey: 'step4Desc', variant: 'light' },
  { number: '05', titleKey: 'step5Title', descKey: 'step5Desc', variant: 'primary' },
];

export const DesktopImportChain = (): React.ReactElement => {
  const { t } = useTranslation();

  return (
    <section className="py-16 px-12 md:px-24 bg-background">
      <div className="mb-10">
        <h2 className="text-4xl font-black uppercase tracking-tighter text-primary">
          {t.desktopImportChain.title}
        </h2>
        <div className="h-1 w-24 bg-accent mt-4" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-1">
        {STEPS.map((step) => {
          const isPrimary = step.variant === 'primary';

          return (
            <div
              key={step.number}
              className={`p-6 ${
                isPrimary
                  ? 'bg-primary text-primary-foreground'
                  : step.variant === 'medium'
                    ? 'bg-muted'
                    : 'bg-secondary'
              }`}
            >
              <span
                className={`text-4xl font-black mb-3 block ${
                  isPrimary ? 'text-white/20' : 'text-muted-foreground/30'
                }`}
              >
                {step.number}
              </span>
              <h4 className="font-bold uppercase text-lg mb-2">
                {t.desktopImportChain[step.titleKey]}
              </h4>
              <p
                className={`text-xs leading-relaxed ${
                  isPrimary ? 'text-primary-foreground/70 font-medium' : 'text-muted-foreground'
                }`}
              >
                {t.desktopImportChain[step.descKey]}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
