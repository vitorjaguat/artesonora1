import Link from 'next/link';
import NavbarMobile from './NavbarMobile';
import { useAnimationControls, motion } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';
import { ImHome } from 'react-icons/im';
import { PiBookOpenUserFill } from 'react-icons/pi';
import { AiFillAudio } from 'react-icons/ai';
import { BiSolidHourglass } from 'react-icons/bi';
import { GrContact } from 'react-icons/gr';
import { MdPeopleAlt } from 'react-icons/md';
import { FiActivity } from 'react-icons/fi';
import TransitionLink from './TransitionLink';
import RevealTextWhenMount from './RevealTextWhenMount';
import RevealText from './RevealText';

interface SubMenuData {
  name: string;
  link: string;
}

export default function Navbar() {
  const controlsContainer = useAnimationControls();
  const controls = useAnimationControls();
  const [subMenuData, setSubMenuData] = useState<SubMenuData[] | []>([]);
  const [isClicked, setIsClicked] = useState(false);
  const [isEntered, setIsEntered] = useState(false);
  const [isMoved, setIsMoved] = useState(false);
  // let isClicked = false;

  const subMenuDataManager = useMemo(
    () => ({
      sobre: [
        {
          name: 'Sobre o Arte Sonora',
          link: '/sobre',
        },
        {
          name: 'Quem somos',
          link: '/sobre?q=quem-somos',
        },
        {
          name: 'Uma breve história',
          link: '/sobre?q=breve-historia',
        },
        // {
        //   name: 'Colaboradores',
        //   link: '/colaboradores',
        // },
        // {
        //   name: 'Links',
        //   link: '/links',
        // },
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
        {
          name: 'Varanda Sonora',
          link: '/varanda-sonora',
        },
      ],
    }),
    []
  );

  const handleHover = (data: any) => {
    setSubMenuData(data);
    // console.log('submenudata from handleHover', subMenuData);
    // controls.start('on');
  };

  useEffect(() => {
    // console.log('submenudata from useEffect', subMenuData);
    if (subMenuData?.length > 0) {
      controls.start('on');
    } else {
      controls.start('off');
    }
  }, [subMenuData]);

  // const handleAnimationComplete = (data: any) => {
  //   setSubMenuData(data);
  // };

  const handleHoverContainer = () => {
    controlsContainer.start('on');
  };

  return (
    <>
      {/* DESKTOP NAV */}
      <div className='hidden md:inline fixed top-0 left-0 w-fit h-screen bg-neutral-800 z-[100] font-chakra tracking-wider'>
        <div
          className='md:flex flex-col w-fit h-[100vh] px-4 pt-6 items-center gap-6 uppercase border-r-[1px] border-neutral-700'
          // style={{ writingMode: 'vertical-rl' }}
          onMouseEnter={() => {
            setIsEntered(true);
            if (!isClicked) controlsContainer.start('on');
            setTimeout(() => {
              setIsEntered(false);
            }, 500);
          }}
          onMouseMove={() => {
            !isClicked &&
              !isEntered &&
              !isMoved &&
              controlsContainer.start('on');
            setIsMoved(true);
            setTimeout(() => {
              setIsMoved(false);
            }, 500);
          }}
          // onMouseMove={() => controlsContainer.start('on')}
          onMouseLeave={() => controlsContainer.start('off')}
          onClick={() => {
            setIsClicked(true);
            controlsContainer.start('off');
            controls.start('off');
            setTimeout(() => {
              setIsClicked(false);
            }, 100);
          }}
        >
          <TransitionLink
            className='w-full flex items-center text-neutral-500 duration-300 hover:text-white'
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
                on: { width: 150, marginLeft: 12 },
              }}
              className=' overflow-hidden'
            >
              home
            </motion.div>
          </TransitionLink>

          <TransitionLink
            href='/sobre'
            className='w-full flex items-center text-neutral-500 duration-300 hover:text-white cursor-pointer'
            onMouseEnter={() => handleHover([...subMenuDataManager.sobre])}

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
                on: { width: 150, marginLeft: 12 },
              }}
              className='overflow-hidden'
            >
              sobre
            </motion.div>
          </TransitionLink>

          <div
            className='w-full flex items-center text-neutral-500 duration-300 hover:text-white  cursor-pointer'
            onMouseEnter={() => handleHover([...subMenuDataManager.programas])}
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
                on: { width: 150, marginLeft: 12 },
              }}
              className=' overflow-hidden'
            >
              programas
            </motion.div>
          </div>

          <TransitionLink
            className='w-full flex items-center text-neutral-500 duration-300 hover:text-white overflow-hidden'
            href='/colaboradores'
            onMouseEnter={() => controls.start('off')}
          >
            <div className='flex justify-center w-full max-w-[20px]'>
              <MdPeopleAlt size={20} className='' />
            </div>
            <motion.div
              initial='off'
              animate={controlsContainer}
              variants={{
                off: {
                  width: 0,
                  marginLeft: 0,
                },
                on: { width: 150, marginLeft: 12 },
              }}
              className=' overflow-hidden'
            >
              colaboradores
            </motion.div>
          </TransitionLink>

          <TransitionLink
            className='w-full flex items-center text-neutral-500 duration-300 hover:text-white overflow-hidden'
            href='/ativacoes'
            onMouseEnter={() => controls.start('off')}
          >
            <div className='flex justify-center w-full max-w-[20px]'>
              <FiActivity size={20} className='' />
            </div>
            <motion.div
              initial='off'
              animate={controlsContainer}
              variants={{
                off: {
                  width: 0,
                  marginLeft: 0,
                },
                on: { width: 150, marginLeft: 12 },
              }}
              className=' '
            >
              ativações
            </motion.div>
          </TransitionLink>

          <TransitionLink
            className='w-full flex items-center text-neutral-500 duration-300 hover:text-white overflow-hidden'
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
                on: { width: 150, marginLeft: 12 },
              }}
              className=' overflow-hidden'
            >
              contato
            </motion.div>
          </TransitionLink>
        </div>
      </div>
      {/* SUBMENU */}
      <motion.div
        className='hidden fixed top-0 left-[190px] bg-neutral-800 h-[calc(100vh-92px)] pt-6 flex-col justify-start items-end gap-6 uppercase z-10 font-chakra tracking-wider border-r-[1px] border-neutral-700'
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
            width: 190,
            display: 'flex',
            opacity: 1,
          },
        }}
      >
        {subMenuData &&
          subMenuData.map((item, i) => (
            <TransitionLink key={i} className='w-full' href={item.link}>
              <motion.div
                // onAnimationComplete={() => handleAnimationComplete(subMenuData)}
                onClick={() => {
                  setSubMenuData([]);
                  controls.set('off');
                  controlsContainer.set('off');
                }}
                initial='off'
                animate={controls}
                // transition={{ delay: 0.3 }}
                variants={{
                  off: {
                    opacity: 0,
                    display: 'none',
                    transition: { delay: 0, duration: 0.1 },
                  },
                  on: {
                    opacity: 1,
                    display: 'flex',
                    transition: { delay: 0.2, duration: 0.1 },
                  },
                }}
                className='w-full text-right justify-end items-center pr-6 text-neutral-300 duration-300 hover:text-white'
              >
                {/* <RevealText duration={0.8}> */}
                <div className='max-w-[120px]'>{item.name}</div>
                {/* </RevealText> */}
              </motion.div>
            </TransitionLink>
          ))}
      </motion.div>

      {/* MOBILE NAV */}
      <NavbarMobile />
    </>
  );
}
