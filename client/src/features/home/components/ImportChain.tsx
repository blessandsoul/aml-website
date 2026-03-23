'use client';

import type React from 'react';

import { useTranslation } from '@/lib/i18n';

export const ImportChain = (): React.ReactElement => {
  const { t } = useTranslation();

  const steps = [
    { number: '01', label: t.importChain.step1 },
    { number: '02', label: t.importChain.step2 },
    { number: '03', label: t.importChain.step3 },
    { number: '04', label: t.importChain.step4 },
    { number: '05', label: t.importChain.step5 },
  ];

  return (
    <section className="bg-primary p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-xs font-black uppercase tracking-widest text-white/60">
          {t.importChain.title}
        </h3>
        <span className="text-[10px] font-bold text-accent uppercase tracking-tighter">
          {t.importChain.fullCycle}
        </span>
      </div>
      <div className="space-y-3">
        {steps.map((step, index) => (
          <div
            key={step.number}
            className="flex items-center gap-4 bg-white/5 border border-white/10 p-4"
          >
            <div
              className={`w-8 h-8 flex items-center justify-center font-black text-xs ${
                index === 0
                  ? 'bg-accent text-white'
                  : index === 1
                    ? 'border border-accent text-accent'
                    : 'border border-white/20 text-white/40'
              }`}
            >
              {step.number}
            </div>
            <div>
              <p className="text-[10px] text-white/40 font-bold uppercase tracking-widest">
                {t.importChain.stage}
              </p>
              <p className="text-white font-bold">{step.label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
