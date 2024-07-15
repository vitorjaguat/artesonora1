'use client';

import Footer from './Footer';
import Navbar from './Navbar';
import PlayerBar from './PlayerBar';
import { usePathname } from 'next/navigation';
import { MainContextProvider } from '../context/mainContext';
import { useEffect } from 'react';
import Lenis from 'lenis';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  const pathname = usePathname();
  if (pathname.includes('outstatic') || pathname.includes('admin')) {
    return <>{children}</>;
  }

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);

      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <MainContextProvider>
        <div className='relative w-screen bg-black'>
          <Navbar />
          <div className='relative bottom-0 left-0 bg-black w-screen h-fit'>
            <PlayerBar />
          </div>
          <div className='md:pl-[52px]'>
            <main id='main' className='min-h-screen z-[1]'>
              {children}
            </main>
            <Footer />
          </div>
        </div>

        {/* <Footer /> */}
      </MainContextProvider>
    </>
  );
};

export default Layout;
