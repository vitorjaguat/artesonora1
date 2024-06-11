import Link from 'next/link';
import NavbarMobile from './NavbarMobile';

export default function Navbar() {
  return (
    <>
      {/* DESKTOP NAV */}
      <div
        className='hidden md:flex fixed top-0 left-0 w-20 h-[calc(100vh-84px)] bg-black z-1 p-2 items-center justify-around gap-4 uppercase'
        style={{ writingMode: 'sideways-rl' }}
      >
        <Link href='/'>
          <div className='text-zinc-500 duration-300 hover:text-white rotate-180'>
            home
          </div>
        </Link>
        <Link href='/sobre'>
          <div className=' text-zinc-500 duration-300 hover:text-white rotate-180'>
            sobre
          </div>
        </Link>
        <div className=' text-zinc-500 duration-300 hover:text-white rotate-180'>
          programas
        </div>
        <div className='text-zinc-500 duration-300 hover:text-white rotate-180'>
          arquivos
        </div>
        <div className='text-zinc-500 duration-300 hover:text-white rotate-180'>
          contato
        </div>
      </div>

      {/* MOBILE NAV */}
      <NavbarMobile />
    </>
  );
}
