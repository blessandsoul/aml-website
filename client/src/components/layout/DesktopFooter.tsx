'use client';

import type React from 'react';

import Link from 'next/link';

import { MaterialIcon } from '@/components/common/MaterialIcon';
import { useTranslation } from '@/lib/i18n';

export const DesktopFooter = (): React.ReactElement => {
  const { t } = useTranslation();

  return (
    <footer className="bg-secondary w-full py-16 text-xs leading-relaxed">
      <div className="max-w-[1700px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 px-12">
      <div className="col-span-2 md:col-span-1">
        <div className="text-lg font-bold text-primary mb-6 uppercase">{t.header.appName}</div>
        <p className="text-muted-foreground max-w-xs">
          {t.footer.description}
        </p>
      </div>
      <div>
        <h4 className="font-bold text-primary mb-4 uppercase">{t.footer.regionalHubs}</h4>
        <ul className="space-y-2">
          <li><Link className="text-muted-foreground hover:text-primary hover:underline decoration-2 underline-offset-4 transition-all" href="#">{t.footer.tbilisiOffice}</Link></li>
          <li><Link className="text-muted-foreground hover:text-primary hover:underline decoration-2 underline-offset-4 transition-all" href="#">{t.footer.batumiHub}</Link></li>
          <li><Link className="text-muted-foreground hover:text-primary hover:underline decoration-2 underline-offset-4 transition-all" href="#">{t.footer.potiPort}</Link></li>
          <li><Link className="text-muted-foreground hover:text-primary hover:underline decoration-2 underline-offset-4 transition-all" href="#">{t.footer.usTerminal}</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold text-primary mb-4 uppercase">{t.footer.information}</h4>
        <ul className="space-y-2">
          <li><Link className="text-muted-foreground hover:text-primary hover:underline decoration-2 underline-offset-4 transition-all" href="#">{t.footer.privacyPolicy}</Link></li>
          <li><Link className="text-muted-foreground hover:text-primary hover:underline decoration-2 underline-offset-4 transition-all" href="#">{t.footer.termsAndConditions}</Link></li>
          <li><Link className="text-muted-foreground hover:text-primary hover:underline decoration-2 underline-offset-4 transition-all" href="#">{t.footer.cargoInsurance}</Link></li>
          <li><Link className="text-muted-foreground hover:text-primary hover:underline decoration-2 underline-offset-4 transition-all" href="#">{t.footer.faq}</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold text-primary mb-4 uppercase">{t.footer.contact}</h4>
        <p className="text-muted-foreground mb-4">info@automarketlogistic.ge</p>
        <p className="text-muted-foreground">+995 322 00 00 00</p>
        <div className="flex gap-4 mt-6">
          <MaterialIcon name="public" className="text-muted-foreground/60 cursor-pointer hover:text-primary transition-colors" />
          <MaterialIcon name="mail" className="text-muted-foreground/60 cursor-pointer hover:text-primary transition-colors" />
          <MaterialIcon name="phone" className="text-muted-foreground/60 cursor-pointer hover:text-primary transition-colors" />
        </div>
      </div>
      <div className="col-span-full pt-12 border-t border-border mt-8">
        <p className="text-muted-foreground/60 text-center">
          {t.footer.copyright}
        </p>
      </div>
      </div>
    </footer>
  );
};
