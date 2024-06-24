'use client';

import Footer from './Footer';
import Navbar from './Navbar';
import PlayerBar from './PlayerBar';
import { usePathname } from 'next/navigation';
import { MainContextProvider } from '../context/mainContext';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  const pathname = usePathname();
  if (pathname.includes('outstatic') || pathname.includes('admin')) {
    return <>{children}</>;
  }

  return (
    <>
      <MainContextProvider>
        <div className=''>
          <div className='relative h-screen w-screen z-[1000000000000000000000]'>
            <Navbar />
            <div className='relative bottom-0 left-0 bg-black w-screen h-fit'>
              <PlayerBar />
            </div>
            <div className='md:pl-[52px]'>
              <main className='min-h-screen z-[1]'>{children}</main>
              <Footer />
            </div>
          </div>
        </div>

        {/* <Footer /> */}
      </MainContextProvider>
    </>
  );
};

export default Layout;
