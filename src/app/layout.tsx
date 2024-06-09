import { absoluteUrl } from '@/lib/utils';
import { Metadata } from 'next';
import '../styles/index.css';
import PlayerBar from '../components/PlayerBar';
import Meta from '@/components/Meta';

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
  return (
    <html lang='en'>
      {/* <link
        href='https://fonts.googleapis.com/css2?family=Ubuntu:wght@200;400;700&display=swap'
        rel='stylesheet'
      /> */}
      <body>
        <div className=''>
          <div className='relative h-screen w-screen'>
            <div className='fixed bottom-0 left-0 bg-black w-screen h-fit'>
              <PlayerBar />
            </div>
            <div className=''>{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
