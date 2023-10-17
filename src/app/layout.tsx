import { Metadata } from 'next';
import React from 'react';

import '@/styles/globals.css';

import Footer from '@/containers/Footer';
import Header from '@/containers/Header';
import { Analytics } from '@vercel/analytics/react';

import BackToTopButton from '@/components/BackToTopButton';
import GradientBackgroundGodrayThingy from '@/components/GradientBackgroundGodrayThingy';
import Socials from '@/components/SocialLinks';
import {
  ACKEE_ANALYTICS_SCRIPT_URL,
  ACKEE_ANALYTICS_URL,
  ACKEE_DOMAIN_ID,
} from '@/utils/env';
import Script from 'next/script';

export const siteConfig = {
  title: 'Younes Megaache Portfolio',
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
      name: 'Younes Megaache',
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
      <Script
        async
        src={ACKEE_ANALYTICS_SCRIPT_URL}
        data-ackee-server={ACKEE_ANALYTICS_URL}
        data-ackee-domain-id={ACKEE_DOMAIN_ID}
      ></Script>
      <body className='bg-b-light     '>
        <BackToTopButton />
        <div className='   relative min-h-screen'>
          <span className='fixed bottom-2  left-2  z-50 opacity-0 transition-opacity duration-500 sm:opacity-100    '>
            <Socials static={true} />
          </span>

          <div className='pointer-events-none  absolute    h-full w-full overflow-clip '>
            <GradientBackgroundGodrayThingy />
          </div>

          <Header />

          <div className='relative z-30  mx-auto h-full max-w-screen-lg  place-items-center transition-all  '>
            {children}
          </div>

          <div className=' z-10 mx-auto mt-5  px-1 lg:px-20 '>
            <Footer />
          </div>
        </div>
        <Analytics />
      </body>
    </html>
  );
}
