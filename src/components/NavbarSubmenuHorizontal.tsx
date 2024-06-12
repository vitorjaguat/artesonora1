import Link from 'next/link';
import NavbarMobile from './NavbarMobile';
import { useAnimationControls, motion } from 'framer-motion';
import { useState } from 'react';

interface SubMenuData {
  name: string;
  link: string;
}

const subMenuDataManager = {
  sobre: [
    {
      name: 'Sobre o Arte Sonora',
      link: '/sobre',
    },
    {
      name: 'Quem somos',
      link: '/sobre#quem-somos',
    },
    {
      name: 'Uma breve história',
      link: '/sobre#breve-historia',
    },
    {
      name: 'Colaboradores',
      link: '/sobre#colaboradores',
    },
    {
      name: 'Links',
      link: '/sobre#links',
    },
  ],
  programas: [
    {
      name: 'Podcast',
      link: '/podcast',
    },
    {
      name: 'Mixtape',
      link: '/mixtape',
    },
    {
      name: 'Na História',
      link: '/na-historia',
    },
  ],
};

export default function Navbar() {
  const controls = useAnimationControls();
  const [subMenuData, setSubMenuData] = useState<SubMenuData[] | null>(null);

  const handleHover = (data: any) => {
    setSubMenuData(data);
    controls.start('on');
  };
  return (
    <>
      {/* DESKTOP NAV */}
      <div className='hidden md:inline fixed top-0 left-0 w-20 h-screen bg-black z-1'>
        <div
          className='md:flex  w-20 h-[calc(100vh-84px)] items-center justify-around gap-4 uppercase'
          style={{ writingMode: 'vertical-rl' }}
        >
          <Link
            className='w-full flex items-center'
            href='/'
            onMouseEnter={() => controls.start('off')}
          >
            <div className=' text-zinc-500 duration-300 hover:text-white rotate-180'>
              home
            </div>
          </Link>

          <div
            className='w-full flex items-center text-zinc-500 duration-300 hover:text-white rotate-180 cursor-pointer'
            onMouseEnter={() => handleHover(subMenuDataManager.sobre)}
            // onMouseLeave={() => controls.start('off')}
          >
            sobre
          </div>

          <div
            className='w-full flex items-center  text-zinc-500 duration-300 hover:text-white rotate-180 cursor-pointer'
            onMouseEnter={() => handleHover(subMenuDataManager.programas)}
            // onMouseLeave={() => controls.start('off')}
          >
            programas
          </div>
          <Link
            className='w-full flex items-center'
            href='/arquivos'
            onMouseEnter={() => controls.start('off')}
          >
            <div className='text-zinc-500 duration-300 hover:text-white rotate-180 cursor-pointer'>
              arquivos
            </div>
          </Link>
          <Link
            className='w-full flex items-center'
            href='/contato'
            onMouseEnter={() => controls.start('off')}
          >
            <div className='w-full flex items-center text-zinc-500 duration-300 hover:text-white rotate-180'>
              contato
            </div>
          </Link>
        </div>
      </div>
      {/* SUBMENU */}
      <motion.div
        className='hidden fixed top-0 left-20 bg-black/80 h-[calc(100vh-84px)] pt-4 flex-col justify-start items-end gap-4 uppercase'
        onMouseEnter={() => controls.start('on')}
        onMouseLeave={() => controls.start('off')}
        // style={{ writingMode: 'vertical-rl' }}
        initial='off'
        animate={controls}
        variants={{
          off: { width: 0, display: 'none' },
          on: {
            width: 150,
            display: 'flex',
          },
        }}
      >
        {subMenuData &&
          subMenuData.map((item, i) => (
            <Link className='w-full' href={item.link}>
              <div className='w-full text-right pr-3 text-zinc-300 duration-300 hover:text-white'>
                {item.name}
              </div>
            </Link>
          ))}
      </motion.div>

      {/* MOBILE NAV */}
      <NavbarMobile />
    </>
  );
}
