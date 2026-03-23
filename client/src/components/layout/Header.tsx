'use client';

import type React from 'react';
import { useState, useCallback, useRef } from 'react';

import Image from 'next/image';

import { useTranslation, LANGUAGES } from '@/lib/i18n';

import type { Language } from '@/lib/i18n';

export const Header = (): React.ReactElement => {
  const { language, t, setLanguage } = useTranslation();
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
    <header className="fixed top-0 w-full z-50 h-16 flex items-center justify-between px-6 bg-primary text-primary-foreground font-heading font-bold tracking-tighter">
      <Image
        src="/logo.png"
        alt="AML"
        width={32}
        height={32}
        className="h-8 w-8"
      />

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
    </header>
  );
};
