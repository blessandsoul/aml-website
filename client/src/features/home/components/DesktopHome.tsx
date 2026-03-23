'use client';

import type React from 'react';

import { DesktopNav } from '@/components/layout/DesktopNav';
import { DesktopFooter } from '@/components/layout/DesktopFooter';
import { DesktopHeroSection } from './desktop/DesktopHeroSection';
import { DesktopServicesGrid } from './desktop/DesktopServicesGrid';
import { DesktopImportChain } from './desktop/DesktopImportChain';
import { DesktopStats } from './desktop/DesktopStats';
import { DesktopCta } from './desktop/DesktopCta';

export const DesktopHome = (): React.ReactElement => {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <DesktopNav />
      <main>
        <DesktopHeroSection />
        <DesktopServicesGrid />
        <DesktopImportChain />
        <DesktopStats />
        <DesktopCta />
      </main>
      <DesktopFooter />
    </div>
  );
};
