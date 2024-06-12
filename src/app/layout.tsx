'use client';

import '../styles/index.css';
import PlayerBar from '../components/PlayerBar';
import { usePathname } from 'next/navigation';
import Navbar from '@/components/Navbar';

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
  const pathname = usePathname();
  if (pathname.includes('outstatic') || pathname.includes('admin')) {
    return <>{children}</>;
  }

  return (
    <html lang='en' className='max-w-[100vw] overflow-x-hidden '>
      {/* <link
        href='https://fonts.googleapis.com/css2?family=Ubuntu:wght@200;400;700&display=swap'
        rel='stylesheet'
      /> */}
      <body className=''>
        <div className=''>
          <div className='relative h-screen w-screen'>
            <Navbar />
            <div className='fixed bottom-0 left-0 bg-black w-screen h-fit'>
              <PlayerBar />
            </div>

            <div className='md:pl-[52px]'>{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
