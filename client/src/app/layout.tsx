import type { Metadata } from 'next';
import type React from 'react';
import { Inter, Noto_Sans_Georgian, JetBrains_Mono } from 'next/font/google';

import { Providers } from './providers';
import { APP_NAME } from '@/lib/constants/app.constants';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const notoSansGeorgian = Noto_Sans_Georgian({
  variable: '--font-noto-sans-georgian',
  subsets: ['georgian', 'latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: APP_NAME,
  description: `${APP_NAME} — Global Logistics Infrastructure`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): React.ReactElement {
  return (
    <html lang="ka" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${notoSansGeorgian.variable} ${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
