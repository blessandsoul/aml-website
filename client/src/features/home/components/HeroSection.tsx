'use client';

import type React from 'react';

import { useTranslation } from '@/lib/i18n';

export const HeroSection = (): React.ReactElement => {
  const { t } = useTranslation();

  return (
    <section className="relative h-[397px] w-full overflow-hidden bg-primary flex flex-col justify-end p-6">
      <div className="absolute inset-0 opacity-40">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="w-full h-full object-cover"
          alt="Industrial container port at dusk with cranes"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYdUttEzy4R7Zv4hqikCIqo5k2bWo8xCcwH3TIhruwuClsqApWQEY9u53Pk5q-FNDcoePzM-vtyt8tQHvmLSkfza_ScCyqXIftXZgiOyEO31ymPClJbF-meLRaa1sjXf5ZnWqQ6g-aBdB2Ar0LN-DQ2C7kPifFb5DE60L3zprXnpGupjGHLaXs-hIgClG1y011SfTFD_G04RvuGwVCGM5HWwqoVeoPBOX9vR33Tt3J9QdmEkbd9cgpTj1v1sQgwqHwn3lOtrNUmNda"
        />
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
