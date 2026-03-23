'use client';

import type React from 'react';
import { useState, useCallback, useRef } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { useTranslation, LANGUAGES } from '@/lib/i18n';
import { cn } from '@/lib/utils';

import type { Language } from '@/lib/i18n';

interface NavLink {
  labelKey: 'partners' | 'logistics' | 'fleet' | 'calculator' | 'contact';
  href: string;
}

const NAV_LINKS: NavLink[] = [
  { labelKey: 'partners', href: '#' },
  { labelKey: 'logistics', href: '#' },
  { labelKey: 'fleet', href: '#' },
  { labelKey: 'calculator', href: '#' },
  { labelKey: 'contact', href: '#' },
];

export const DesktopNav = (): React.ReactElement => {
  const { language, t, setLanguage } = useTranslation();
  const pathname = usePathname();
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const langMenuRef = useRef<HTMLDivElement>(null);

  const toggleLangMenu = useCallback((): void => {
    setIsLangMenuOpen((prev) => !prev);
  }, []);

  const handleLanguageSelect = useCallback(
    (lang: Language): void => {
      setLanguage(lang);
      setIsLangMenuOpen(false);
    },
    [setLanguage],
  );

  return (
    <nav className="bg-secondary flex justify-between items-center w-full px-8 py-4 max-w-full sticky top-0 z-50">
      <Link href="/" className="flex items-center">
        <Image
          src="/logo.png"
          alt="AML"
          width={40}
          height={40}
          className="h-10 w-10"
        />
      </Link>

      <div className="flex gap-8 items-center">
        {NAV_LINKS.map((link) => {
          const isActive = link.href !== '#' && pathname.startsWith(link.href);

          return (
            <Link
              key={link.labelKey}
              href={link.href}
              className={cn(
                'text-sm uppercase tracking-wider font-bold transition-colors duration-150',
                isActive
                  ? 'text-primary border-b-4 border-accent'
                  : 'text-muted-foreground hover:bg-primary hover:text-primary-foreground',
              )}
            >
              {t.desktopNav[link.labelKey]}
            </Link>
          );
        })}
      </div>

      <div className="flex gap-4 items-center">
        <div className="relative" ref={langMenuRef}>
          <button
            type="button"
            onClick={toggleLangMenu}
            className="flex items-center gap-2 px-3 py-1 bg-accent active:opacity-80 active:scale-95 transition-all cursor-pointer"
            aria-label="Change language"
            aria-expanded={isLangMenuOpen}
            aria-haspopup="listbox"
          >
            <span className="text-xs font-bold tracking-widest text-accent-foreground">
              {language}
            </span>
          </button>

          {isLangMenuOpen && (
            <>
              <div
                className="fixed inset-0 z-40"
                onClick={() => setIsLangMenuOpen(false)}
                aria-hidden="true"
              />
              <ul
                role="listbox"
                aria-label="Select language"
                className="absolute right-0 top-full mt-1 z-50 bg-card border border-border shadow-lg min-w-[120px]"
              >
                {LANGUAGES.map((lang) => (
                  <li key={lang.code} role="option" aria-selected={language === lang.code}>
                    <button
                      type="button"
                      onClick={() => handleLanguageSelect(lang.code)}
                      className={`w-full px-4 py-3 text-left text-sm font-bold tracking-wider transition-colors active:opacity-70 ${
                        language === lang.code
                          ? 'bg-primary text-primary-foreground'
                          : 'text-foreground active:bg-muted'
                      }`}
                    >
                      {lang.nativeLabel}
                    </button>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>

        <button
          type="button"
          className="px-6 py-2 text-sm font-bold uppercase tracking-widest bg-primary text-primary-foreground hover:bg-primary/80 transition-all"
        >
          {t.desktopNav.login}
        </button>
      </div>
    </nav>
  );
};
