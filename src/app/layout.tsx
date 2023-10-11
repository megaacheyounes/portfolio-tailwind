import { Metadata } from 'next';
import React from 'react';

import '@/styles/globals.css';

import Footer from '@/container/Footer';
import Header from '@/container/Header';
import { Analytics } from '@vercel/analytics/react';

import Socials from '@/components/SocialLinks';
import { siteConfig } from '@/constant/config';
import Script from 'next/script';

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  robots: { index: true, follow: true },
  //  https://realfavicongenerator.net/

  icons: {
    icon: '/favicon.ico',
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
  const getBg = () => {
    return (
      <svg
        height={1000}
        xmlns='http://www.w3.org/2000/svg'
        version='1.1'
        xmlnsXlink='http://www.w3.org/1999/xlink'
        viewBox='0 0 800 800'
        opacity='0.5'
      >
        <defs>
          <filter
            id='blurry-filter'
            x='-100%'
            y='-100%'
            width='300%'
            height='600%'
            filterUnits='objectBoundingBox'
            primitiveUnits='userSpaceOnUse'
            colorInterpolationFilters='sRGB'
          >
            <feGaussianBlur
              stdDeviation='40'
              x='0%'
              y='0%'
              width='100%'
              height='100%'
              in='SourceGraphic'
              edgeMode='none'
              result='blur'
            ></feGaussianBlur>
          </filter>
        </defs>
        <g className=' ' filter='url(#blurry-filter)'>
          <ellipse
            transform='rotate(-40)'
            opacity={0.3}
            rx='84.5'
            ry='577.5'
            cx='70.5037638878946'
            cy='85.13481004325507'
            fill='hsla(89, 73%, 48%, 1.00)'
          ></ellipse>
        </g>
      </svg>
    );
  };

  return (
    <html>
      <Script
        async
        src='https://portfolio-ackee-analytics.vercel.app/auth.js'
        data-ackee-server='https://portfolio-ackee-analytics.vercel.app'
        data-ackee-domain-id='da0db0a3-1855-4a95-ac17-8938db1a6c1e'
      ></Script>
      <body className='bg-b-light     '>
        <div className='   relative min-h-screen'>
          <span className='fixed bottom-2  left-2  z-50 opacity-0 transition-opacity duration-500 sm:opacity-100    '>
            <Socials static={true} />
          </span>

          <div className='pointer-events-none  absolute    h-full w-full overflow-clip '>
            {getBg()}
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
