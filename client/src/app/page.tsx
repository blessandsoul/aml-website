import type React from 'react';
import type { Metadata } from 'next';

import { MobileHome } from '@/features/home/components/MobileHome';
import { DesktopHome } from '@/features/home/components/DesktopHome';
import { APP_NAME } from '@/lib/constants/app.constants';

export const metadata: Metadata = {
  title: APP_NAME,
  description: `${APP_NAME} — Global Logistics Infrastructure`,
};

export default function HomePage(): React.ReactElement {
  return (
    <>
      <div className="lg:hidden">
        <MobileHome />
      </div>
      <div className="hidden lg:block">
        <DesktopHome />
      </div>
    </>
  );
}
