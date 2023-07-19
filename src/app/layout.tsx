import { Metadata } from 'next';
import React from 'react';

import '@/styles/globals.css';

import Footer from '@/container/Footer';
import Header from '@/container/Header';

import { siteConfig } from '@/constant/config';

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  robots: { index: true, follow: true },
  //  https://realfavicongenerator.net/

  icons: {
    icon: '/favicon/favicon.ico',
    // shortcut: '/favicon/favicon-16x16.png',
    // apple: '/favicon/apple-touch-icon.png',
  },
  // manifest: `/favicon/site.webmanifest`,
  // openGraph: {
  //   url: siteConfig.url,
  //   title: siteConfig.title,
  //   description: siteConfig.description,
  //   siteName: siteConfig.title,
  //   images: [`${siteConfig.url}/images/og.jpg`],
  //   type: 'website',
  //   locale: 'en_US',
  // },
  authors: [
    {
      name: 'Younes Megaache',
      url: 'https://younes-megaache.com',
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
      <body className='bg-dark pb-5 '>
        <div className='layout min-h-screen'>
          <Header />
          <div className='  text-white'>{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
