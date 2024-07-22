'use client';

import Footer from './Footer';
import Navbar from './Navbar';
import PlayerBar from './PlayerBar';
import { usePathname } from 'next/navigation';
import { MainContextProvider } from '../context/mainContext';
import { useEffect } from 'react';
import Lenis from 'lenis';
import { motion, AnimatePresence } from 'framer-motion';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  const pathname = usePathname();
  if (pathname.includes('outstatic') || pathname.includes('admin')) {
    return <>{children}</>;
  }

  useEffect(() => {
    const lenis = new Lenis({
      smoothWheel: true,
      syncTouch: true,
      syncTouchLerp: 1,
    });

    function raf(time: number) {
      lenis.raf(time);

      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <MainContextProvider>
        <div className='relative w-screen  h-full bg-zinc-900'>
          <Navbar />
          {/* <div className='relative w-screen h-screen  '> */}
          <PlayerBar />
          {/* </div> */}
          <div className='md:pl-[52px]'>
            {/* <AnimatePresence>
              {children && ( */}
            <main
              // variants={{
              //   initial: { opacity: 0 },
              //   animate: { opacity: 1 },
              //   exit: { opacity: 0 },
              // }}
              // transition={{ duration: 1 }}
              // initial='initial'
              // animate='animate'
              // exit='exit'
              id='main'
              className=' z-[1] w-screen bg-zinc-900'
            >
              {children}
            </main>
            {/* )}
            </AnimatePresence> */}

            {/* <Footer /> */}
            {pathname === '/' && <Footer />}
          </div>
        </div>
      </MainContextProvider>
    </>
  );
};

export default Layout;
