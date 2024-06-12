import Link from 'next/link';
import NavbarMobile from './NavbarMobile';
import { useAnimationControls, motion } from 'framer-motion';
import { useState } from 'react';
import { ImHome } from 'react-icons/im';
import { PiBookOpenUserFill } from 'react-icons/pi';
import { AiFillAudio } from 'react-icons/ai';
import { BiSolidHourglass } from 'react-icons/bi';
import { GrContact } from 'react-icons/gr';

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
      link: '/colaboradores',
    },
    {
      name: 'Links',
      link: '/links',
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
  const controlsContainer = useAnimationControls();
  const controls = useAnimationControls();
  const [subMenuData, setSubMenuData] = useState<SubMenuData[] | null>(null);

  const handleHover = (data: any) => {
    setSubMenuData(data);
    controls.start('on');
  };
  const handleHoverContainer = () => {
    controlsContainer.start('on');
  };
  return (
    <>
      {/* DESKTOP NAV */}
      <div className='hidden md:inline fixed top-0 left-0 w-fit h-screen bg-black z-10'>
        <div
          className='md:flex flex-col w-fit h-[calc(100vh-84px)] px-4 pt-6 items-center gap-6 uppercase'
          // style={{ writingMode: 'vertical-rl' }}
          onMouseEnter={handleHoverContainer}
          onMouseLeave={() => controlsContainer.start('off')}
        >
          <Link
            className='w-full flex items-center text-zinc-500 duration-300 hover:text-white'
            href='/'
            onMouseEnter={() => controls.start('off')}
          >
            <div className='flex justify-center w-full max-w-[20px]'>
              <ImHome size={20} className='' />
            </div>
            <motion.div
              initial='off'
              animate={controlsContainer}
              variants={{
                off: {
                  width: 0,
                  marginLeft: 0,
                },
                on: { width: 130, marginLeft: 12 },
              }}
              className=' overflow-hidden'
            >
              home
            </motion.div>
          </Link>

          <div
            className='w-full flex items-center text-zinc-500 duration-300 hover:text-white cursor-pointer'
            onMouseEnter={() => handleHover(subMenuDataManager.sobre)}
            // onMouseLeave={() => controls.start('off')}
          >
            <div className='flex justify-center w-full max-w-[20px]'>
              <PiBookOpenUserFill size={20} className='' />
            </div>
            <motion.div
              initial='off'
              animate={controlsContainer}
              variants={{
                off: {
                  width: 0,
                  marginLeft: 0,
                },
                on: { width: 130, marginLeft: 12 },
              }}
              className='overflow-hidden'
            >
              sobre
            </motion.div>
          </div>

          <div
            className='w-full flex items-center text-zinc-500 duration-300 hover:text-white  cursor-pointer'
            onMouseEnter={() => handleHover(subMenuDataManager.programas)}
            // onMouseLeave={() => controls.start('off')}
          >
            <div className='flex justify-center w-full max-w-[20px]'>
              <AiFillAudio size={20} className='' />
            </div>
            <motion.div
              initial='off'
              animate={controlsContainer}
              variants={{
                off: {
                  width: 0,
                  marginLeft: 0,
                },
                on: { width: 130, marginLeft: 12 },
              }}
              className=' overflow-hidden'
            >
              programas
            </motion.div>
          </div>

          <Link
            className='w-full flex items-center text-zinc-500 duration-300 hover:text-white overflow-hidden'
            href='/arquivos'
            onMouseEnter={() => controls.start('off')}
          >
            <div className='flex justify-center w-full max-w-[20px]'>
              <BiSolidHourglass size={20} className='' />
            </div>
            <motion.div
              initial='off'
              animate={controlsContainer}
              variants={{
                off: {
                  width: 0,
                  marginLeft: 0,
                },
                on: { width: 130, marginLeft: 12 },
              }}
              className=' '
            >
              arquivos
            </motion.div>
          </Link>

          <Link
            className='w-full flex items-center text-zinc-500 duration-300 hover:text-white overflow-hidden'
            href='/contato'
            onMouseEnter={() => controls.start('off')}
          >
            <div className='flex justify-center w-full max-w-[20px]'>
              <GrContact size={20} className='' />
            </div>
            <motion.div
              initial='off'
              animate={controlsContainer}
              variants={{
                off: {
                  width: 0,
                  marginLeft: 0,
                },
                on: { width: 130, marginLeft: 12 },
              }}
              className=' overflow-hidden'
            >
              contato
            </motion.div>
          </Link>
        </div>
      </div>
      {/* SUBMENU */}
      <motion.div
        className='hidden fixed top-0 left-[190px] bg-neutral-800 h-[calc(100vh-84px)] pt-6 flex-col justify-start items-end gap-6 uppercase z-10'
        onMouseEnter={() => {
          controls.start('on');
          controlsContainer.start('on');
        }}
        onMouseLeave={() => {
          controls.start('off');
          controlsContainer.start('off');
        }}
        // style={{ writingMode: 'vertical-rl' }}
        initial='off'
        animate={controls}
        transition={{
          type: 'spring',
          stiffness: 260,
          damping: 20,
        }}
        variants={{
          off: { width: 0, display: 'none', opacity: 0 },
          on: {
            width: 170,
            display: 'flex',
            opacity: 1,
          },
        }}
      >
        {subMenuData &&
          subMenuData.map((item, i) => (
            <Link key={i} className='w-full' href={item.link}>
              <div className='w-full text-right pr-6 text-zinc-300 duration-300 hover:text-white'>
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
