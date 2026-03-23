'use client';

import { useContext } from 'react';

import { I18nContext } from './context';

import type { Language, Translations } from './types';

interface UseTranslationReturn {
  language: Language;
  t: Translations;
  setLanguage: (lang: Language) => void;
}

export const useTranslation = (): UseTranslationReturn => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useTranslation must be used within an I18nProvider');
  }
  return context;
};
