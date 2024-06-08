import { absoluteUrl } from '@/lib/utils';
import { Metadata } from 'next';
import '../styles/index.css';

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
      <body>{children}</body>
    </html>
  );
}
