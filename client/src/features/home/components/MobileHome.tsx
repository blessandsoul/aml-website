'use client';

import type React from 'react';

import { Header } from '@/components/layout/Header';
import { BottomNav } from '@/components/layout/BottomNav';
import { HeroSection } from './HeroSection';
import { StatsGrid } from './StatsGrid';
import { QuickActions } from './QuickActions';
import { ImportChain } from './ImportChain';
import { CtaSection } from './CtaSection';

export const MobileHome = (): React.ReactElement => {
  return (
    <div className="min-h-dvh bg-background text-foreground pb-20">
      <Header />
      <main className="mt-16">
        <HeroSection />
        <StatsGrid />
        <QuickActions />
        <ImportChain />
        <CtaSection />
      </main>
      <BottomNav />
    </div>
  );
};
