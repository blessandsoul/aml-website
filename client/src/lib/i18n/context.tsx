'use client';

import type React from 'react';
import { createContext, useState, useCallback, useMemo, useEffect } from 'react';

import { translations } from './translations';

import type { Language, Translations } from './types';
import { DEFAULT_LANGUAGE } from './types';

const STORAGE_KEY = 'aml-language';

interface I18nContextValue {
  language: Language;
  t: Translations;
  setLanguage: (lang: Language) => void;
}

export const I18nContext = createContext<I18nContextValue | null>(null);

interface I18nProviderProps {
  children: React.ReactNode;
}

export const I18nProvider = ({ children }: I18nProviderProps): React.ReactElement => {
  const [language, setLanguageState] = useState<Language>(DEFAULT_LANGUAGE);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as Language | null;
    if (stored && (stored === 'EN' || stored === 'GEO' || stored === 'RUS')) {
      setLanguageState(stored);
    }
  }, []);

  const setLanguage = useCallback((lang: Language): void => {
    setLanguageState(lang);
    localStorage.setItem(STORAGE_KEY, lang);
  }, []);

  const value = useMemo<I18nContextValue>(
    () => ({
      language,
      t: translations[language],
      setLanguage,
    }),
    [language, setLanguage],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};
