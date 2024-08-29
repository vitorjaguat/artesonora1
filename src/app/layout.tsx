import '../styles/index.css';
// import PlayerBar from '../components/PlayerBar';
// import { usePathname } from 'next/navigation';
// import Navbar from '@/components/Navbar';
import Layout from '@/components/Layout';
import { useEffect } from 'react';
import Lenis from 'lenis';

import { Metadata } from 'next';
import { absoluteUrl } from '@/lib/utils';

import { Lato, Chakra_Petch } from 'next/font/google';

const lato = Lato({
  subsets: ['latin'],
  weight: ['100', '300', '400', '700'],
  style: ['normal'],
  display: 'swap',
  variable: '--font-lato',
  adjustFontFallback: false,
});

const chakra = Chakra_Petch({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  style: ['normal'],
  display: 'swap',
  variable: '--font-chakra',
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  metadataBase: new URL('https://artesonora.net/'),
  title: {
    default: 'Arte Sonora',
    template: '%s | Arte Sonora',
  },
  description:
    'Arte Sonora é uma prática artística coletiva desenvolvida pelo duo de artistas Franz Manata e Saulo Laudares, através de cursos, residências, exposições, happenings, programas de rádio e publicações. Aqui você encontra materiais que documentam os 15 anos desta prática.',
  openGraph: {
    title: 'Arte Sonora',
    description:
      'Arte Sonora é uma prática artística coletiva desenvolvida pelo duo de artistas Franz Manata e Saulo Laudares, através de cursos, residências, exposições, happenings, programas de rádio e publicações. Aqui você encontra materiais que documentam os 15 anos desta prática.',
    url: 'https://artesonora.net/',
    siteName: 'Arte Sonora',
    images: [
      {
        url: 'https://artesonora.net/images/ogImage.png',
        width: 1157,
        height: 630,
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  icons: {
    icon: [{ url: '/favicon/play-favicon.png' }],
    apple: [{ url: '/images/play.png' }],
  },
  alternates: {
    canonical: 'https://www.artesonora.net/',
  },
  keywords: [
    'arte sonora',
    'artesonora',
    'franz manata',
    'saulo laudares',
    'franz manata',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // let pathname;
  // let shouldExcludeLayout;
  // if (typeof window !== 'undefined') {
  //   pathname = new URL(window.location.href).pathname;
  //   shouldExcludeLayout =
  //     pathname.includes('outstatic') ||
  //     pathname.includes('admin') ||
  //     pathname.includes('/cms');
  // }

  // if (shouldExcludeLayout) {
  //   return <>{children}</>;
  // }

  return (
    <html
      lang='pt'
      className={` ${lato.variable} ${lato.className} ${chakra.variable} font-lato max-w-[100vw] overflow-x-hidden `}
    >
      {/* <link
        href='https://fonts.googleapis.com/css2?family=Ubuntu:wght@200;400;700&display=swap'
        rel='stylesheet'
      /> */}
      <body className='bg-zinc-900'>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
