import { Analytics } from '@vercel/analytics/react';
import { Metadata } from 'next';
import Script from 'next/script';
import React from 'react';

import '@/styles/globals.css';

import { PERSONAL_INFO } from '@/data/info';

import BackToTopButton from '@/components/BackToTopButton';
import Footer from '@/containers/Footer';
import Header from '@/containers/Header';

import {
  ACKEE_ANALYTICS_SCRIPT_URL,
  ACKEE_ANALYTICS_URL,
  ACKEE_DOMAIN_ID,
  ENABLE_ANALYTICS,
} from '@/utils/env';

export const siteConfig = {
  title: `${PERSONAL_INFO.firstName} ${PERSONAL_INFO.lastName} | ${PERSONAL_INFO.mainTitle}`,
  description: 'My notable work and resume',
  url: 'https://younes-megaache.com',
};

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  robots: { index: true, follow: true },
  icons: {},
  authors: [
    {
      name: `${PERSONAL_INFO.firstName} ${PERSONAL_INFO.lastName}`,
      url: siteConfig.url,
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      {ENABLE_ANALYTICS && (
        <Script
          async
          src={ACKEE_ANALYTICS_SCRIPT_URL}
          data-ackee-server={ACKEE_ANALYTICS_URL}
          data-ackee-domain-id={ACKEE_DOMAIN_ID}
        ></Script>
      )}

      <body className="bg-dark text-gray-light">
        <BackToTopButton />
        <Header />
        <main className="relative z-10 mx-auto min-h-screen max-w-screen-lg px-4 sm:px-6 lg:px-8">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
