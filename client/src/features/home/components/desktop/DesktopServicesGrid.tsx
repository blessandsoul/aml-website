'use client';

import type React from 'react';

import { MaterialIcon } from '@/components/common/MaterialIcon';
import { useTranslation } from '@/lib/i18n';

export const DesktopServicesGrid = (): React.ReactElement => {
  const { t } = useTranslation();

  const services = [
    {
      icon: 'calculate',
      title: t.desktopServices.calculatorTitle,
      description: t.desktopServices.calculatorDesc,
      variant: 'light' as const,
    },
    {
      icon: 'dock',
      title: t.desktopServices.portTitle,
      description: t.desktopServices.portDesc,
      variant: 'dark' as const,
    },
    {
      icon: 'local_shipping',
      title: t.desktopServices.fleetTitle,
      description: t.desktopServices.fleetDesc,
      variant: 'light' as const,
    },
    {
      icon: 'corporate_fare',
      title: t.desktopServices.partnersTitle,
      description: t.desktopServices.partnersDesc,
      variant: 'dark' as const,
    },
  ];

  return (
    <section className="w-full border-b border-border/10">
      <div className="max-w-[1700px] mx-auto grid grid-cols-1 md:grid-cols-4">
      {services.map((service) => (
        <div
          key={service.icon}
          className={`p-12 transition-colors group cursor-pointer text-center ${
            service.variant === 'light'
              ? 'bg-background hover:bg-secondary'
              : 'bg-secondary hover:bg-muted'
          }`}
        >
          <MaterialIcon name={service.icon} size={60} className="text-primary mb-6 block mx-auto" />
          <h3 className="text-xl font-bold uppercase mb-4 tracking-tight">
            {service.title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {service.description}
          </p>
        </div>
      ))}
      </div>
    </section>
  );
};
