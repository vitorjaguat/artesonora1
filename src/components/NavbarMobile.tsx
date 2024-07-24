import { RxHamburgerMenu } from 'react-icons/rx';
import { useState } from 'react';
import { GrClose } from 'react-icons/gr';
import { motion, AnimatePresence } from 'framer-motion';
import { ImHome } from 'react-icons/im';
import { PiBookOpenUserFill } from 'react-icons/pi';
import { AiFillAudio } from 'react-icons/ai';
import { BiSolidHourglass } from 'react-icons/bi';
import { FiActivity } from 'react-icons/fi';
import { GrContact } from 'react-icons/gr';
import { MdPeopleAlt } from 'react-icons/md';
import Link from 'next/link';

export default function NavbarMobile() {
  const [isOpen, setIsOpen] = useState(false);
  const [sobreSubMenu, setSobreSubMenu] = useState(false);
  const [programasSubMenu, setProgramasSubMenu] = useState(false);
  return (
    <>
      <div
        className='md:hidden fixed top-5 right-5 cursor-pointer select-none z-10'
        onClick={() => setIsOpen(true)}
      >
        <RxHamburgerMenu size={30} className='text-neutral-400' />
      </div>
      <AnimatePresence>
        {isOpen && (
          // <motion.div
          //   variants={{ on: { opacity: 1 }, off: { opacity: 0 } }}
          //   initial='off'
          //   animate='on'
          //   exit='off'
          //   className='bg-black h-screen w-screen'
          // >
          <motion.div
            variants={{
              on: { opacity: 1, y: 0 },
              off: { opacity: 0, y: -100 },
            }}
            transition={{ type: 'tween' }}
            initial='off'
            animate='on'
            exit='off'
            className='fixed top-0 left-0 right-0 bottom-[90px] bg-neutral-800 text-white/70 z-10 select-none font-chakra'
          >
            <div className='relative w-full h-full flex flex-col gap-3 items-center justify-center uppercase select-none'>
              <div className='absolute top-5 right-5 select-none'>
                <GrClose
                  size={30}
                  className='text-neutral-500 cursor-pointer select-none'
                  onClick={() => {
                    setIsOpen(false);
                    setSobreSubMenu(false);
                    setProgramasSubMenu(false);
                  }}
                />
              </div>
              {/* links: */}
              <motion.div
                variants={{
                  off: {
                    opacity: 0,
                  },
                  on: {
                    opacity: 1,
                  },
                }}
                transition={{ delay: 0.1 }}
                initial='off'
                animate='on'
                onClick={() => setIsOpen(false)}
              >
                <Link href='/' className='flex items-center gap-3 select-none'>
                  <ImHome size={25} />
                  <div className='text-3xl'>home</div>
                </Link>
              </motion.div>
              <motion.div
                variants={{
                  off: {
                    opacity: 0,
                  },
                  on: {
                    opacity: 1,
                  },
                }}
                transition={{ delay: 0.3 }}
                initial='off'
                animate='on'
                onClick={() => setSobreSubMenu(!sobreSubMenu)}
                className='flex flex-col items-center'
              >
                <div className='flex items-center gap-3'>
                  <PiBookOpenUserFill size={25} />
                  <div className='text-3xl'>sobre</div>
                </div>
                <div
                  className={
                    'flex flex-col items-end w-[80vw] text-2xl text-neutral-500 tracking-widest whitespace-nowrap  duration-300 ' +
                    (sobreSubMenu
                      ? 'h-auto w-auto pb-4 opacity-100'
                      : 'h-0 w-0 overflow-hidden pb-0 opacity-0')
                  }
                  onClick={() => setIsOpen(false)}
                >
                  <Link href='/sobre' className=''>
                    sobre o Arte Sonora
                  </Link>
                  <Link href='/sobre#quem-somos' className=''>
                    quem somos
                  </Link>
                  <Link href='/sobre#breve-historia' className=''>
                    breve história
                  </Link>
                  {/* <Link href='/colaboradores' className=''>
                  colaboradores
                </Link> */}
                  {/* <Link href='/links' className=''>
                    links
                  </Link> */}
                </div>
              </motion.div>
              <motion.div
                variants={{
                  off: {
                    opacity: 0,
                  },
                  on: {
                    opacity: 1,
                  },
                }}
                transition={{ delay: 0.5 }}
                initial='off'
                animate='on'
                className='flex flex-col items-center'
              >
                <div
                  className='flex items-center gap-3'
                  onClick={() => setProgramasSubMenu(!programasSubMenu)}
                >
                  <AiFillAudio size={25} />
                  <div className='text-3xl'>programas</div>
                </div>
                <div
                  className={
                    'flex flex-col items-end w-[80vw] text-2xl tracking-widest text-neutral-500 overflow-hidden duration-300 ' +
                    (programasSubMenu
                      ? 'h-fit pb-4 opacity-100'
                      : 'h-0 w-0 overflow-hidden pb-0 opacity-0')
                  }
                >
                  <Link href='/podcast' onClick={() => setIsOpen(false)}>
                    podcast
                  </Link>
                  <Link href='/mixtape' onClick={() => setIsOpen(false)}>
                    mixtape
                  </Link>
                  <Link href='/na-historia' onClick={() => setIsOpen(false)}>
                    na história
                  </Link>
                  <Link href='/varanda-sonora' onClick={() => setIsOpen(false)}>
                    varanda sonora
                  </Link>
                </div>
              </motion.div>

              <motion.div
                variants={{
                  off: {
                    opacity: 0,
                  },
                  on: {
                    opacity: 1,
                  },
                }}
                transition={{ delay: 0.7 }}
                initial='off'
                animate='on'
                onClick={() => setIsOpen(false)}
              >
                <Link href='/colaboradores' className='flex items-center gap-3'>
                  <MdPeopleAlt size={25} />
                  <div className='text-3xl'>colaboradores</div>
                </Link>
              </motion.div>

              <motion.div
                variants={{
                  off: {
                    opacity: 0,
                  },
                  on: {
                    opacity: 1,
                  },
                }}
                transition={{ delay: 0.9 }}
                initial='off'
                animate='on'
                onClick={() => setIsOpen(false)}
              >
                <Link href='/ativacoes' className='flex items-center gap-3'>
                  <FiActivity size={25} />
                  <div className='text-3xl'>ativações</div>
                </Link>
              </motion.div>

              <motion.div
                variants={{
                  off: {
                    opacity: 0,
                  },
                  on: {
                    opacity: 1,
                  },
                }}
                transition={{ delay: 1.1 }}
                initial='off'
                animate='on'
                onClick={() => setIsOpen(false)}
              >
                <Link href='/contato' className='flex items-center gap-3'>
                  <GrContact size={23} />
                  <div className='text-3xl'>contato</div>
                </Link>
              </motion.div>
            </div>
          </motion.div>
          // </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
