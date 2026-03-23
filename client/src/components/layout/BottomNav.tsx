'use client';

import type React from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { MaterialIcon } from '@/components/common/MaterialIcon';
import { useTranslation } from '@/lib/i18n';
import { cn } from '@/lib/utils';

interface NavItem {
  icon: string;
  labelKey: 'home' | 'inventory' | 'calculator' | 'services';
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { icon: 'dashboard', labelKey: 'home', href: '/' },
  { icon: 'inventory_2', labelKey: 'inventory', href: '#' },
  { icon: 'calculate', labelKey: 'calculator', href: '#' },
  { icon: 'local_shipping', labelKey: 'services', href: '#' },
];

export const BottomNav = (): React.ReactElement => {
  const { t } = useTranslation();
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 w-full flex justify-around items-stretch h-20 bg-background border-t border-muted-foreground/20 z-50">
      {NAV_ITEMS.map((item) => {
        const isActive = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href) && item.href !== '#';

        return (
          <Link
            key={item.labelKey}
            href={item.href}
            className={cn(
              'flex flex-col items-center justify-center h-full w-full',
              isActive
                ? 'text-primary border-t-4 border-accent bg-secondary'
                : 'text-primary/40 hover:bg-secondary',
            )}
          >
            <MaterialIcon
              name={item.icon}
              filled={isActive}
            />
            <span className="text-[10px] font-bold uppercase tracking-tight mt-1">
              {t.nav[item.labelKey]}
            </span>
          </Link>
        );
      })}
    </nav>
  );
};
