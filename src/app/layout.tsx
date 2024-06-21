import '../styles/index.css';
// import PlayerBar from '../components/PlayerBar';
// import { usePathname } from 'next/navigation';
// import Navbar from '@/components/Navbar';
import Layout from '@/components/Layout';

import { Metadata } from 'next';
import { absoluteUrl } from '@/lib/utils';

export const metadata: Metadata = {
  metadataBase: new URL('https://artesonora1.vercel.app/'),
  title: {
    default: 'Arte Sonora',
    template: '%s | Arte Sonora',
  },
  description: 'Um projeto de Franz Manata e Saulo Laudares',
  openGraph: {
    title: 'Arte Sonora',
    description: 'Um projeto de Franz Manata e Saulo Laudares',
    url: absoluteUrl('/'),
    siteName: 'Arte Sonora',
    images: [
      {
        url: absoluteUrl('/images/og-image.png'),
        width: 1800,
        height: 1600,
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  icons: {
    icon: [{ url: '/favicon/favicon-32x32.png' }],
    apple: [{ url: '/favicon/apple-touch-icon.png' }],
  },
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
    <html lang='en' className='max-w-[100vw] overflow-x-hidden '>
      {/* <link
        href='https://fonts.googleapis.com/css2?family=Ubuntu:wght@200;400;700&display=swap'
        rel='stylesheet'
      /> */}
      <body className=''>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
