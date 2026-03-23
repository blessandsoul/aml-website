export type Language = 'EN' | 'GEO' | 'RUS';

export type LanguageLabel = {
  code: Language;
  label: string;
  nativeLabel: string;
};

export const LANGUAGES: LanguageLabel[] = [
  { code: 'EN', label: 'English', nativeLabel: 'ENG' },
  { code: 'GEO', label: 'Georgian', nativeLabel: 'GEO' },
  { code: 'RUS', label: 'Russian', nativeLabel: 'RUS' },
] as const;

export const DEFAULT_LANGUAGE: Language = 'GEO';

export interface Translations {
  header: {
    appName: string;
  };
  nav: {
    home: string;
    dashboard: string;
    inventory: string;
    calculator: string;
    services: string;
  };
  hero: {
    badge: string;
    title: string;
  };
  stats: {
    vehicles: string;
    globalPorts: string;
  };
  quickAccess: {
    title: string;
    transportCalculator: string;
    portServices: string;
    fleetManagement: string;
    partnerPortal: string;
  };
  importChain: {
    title: string;
    fullCycle: string;
    stage: string;
    step1: string;
    step2: string;
    step3: string;
    step4: string;
    step5: string;
  };
  cta: {
    authorize: string;
  };
  footer: {
    description: string;
    regionalHubs: string;
    tbilisiOffice: string;
    batumiHub: string;
    potiPort: string;
    usTerminal: string;
    information: string;
    privacyPolicy: string;
    termsAndConditions: string;
    cargoInsurance: string;
    faq: string;
    contact: string;
    copyright: string;
  };
  desktopPartners: {
    title: string;
  };
  desktopCta: {
    title: string;
    description: string;
    placeholder: string;
    button: string;
  };
  desktopStats: {
    title: string;
    description: string;
    vehiclesLabel: string;
    portsLabel: string;
    monitoringTitle: string;
    monitoringDesc: string;
    monitoringButton: string;
  };
  desktopImportChain: {
    title: string;
    step1Title: string;
    step1Desc: string;
    step2Title: string;
    step2Desc: string;
    step3Title: string;
    step3Desc: string;
    step4Title: string;
    step4Desc: string;
    step5Title: string;
    step5Desc: string;
  };
  desktopServices: {
    calculatorTitle: string;
    calculatorDesc: string;
    portTitle: string;
    portDesc: string;
    fleetTitle: string;
    fleetDesc: string;
    partnersTitle: string;
    partnersDesc: string;
  };
  desktopHero: {
    subtitle: string;
    title: string;
    description: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  desktopNav: {
    partners: string;
    logistics: string;
    fleet: string;
    calculator: string;
    contact: string;
    login: string;
  };
}
