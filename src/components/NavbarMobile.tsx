import { RxHamburgerMenu } from 'react-icons/rx';
import { useState } from 'react';
import { GrClose } from 'react-icons/gr';
import { motion } from 'framer-motion';
import { ImHome } from 'react-icons/im';
import { PiBookOpenUserFill } from 'react-icons/pi';
import { AiFillAudio } from 'react-icons/ai';
import { BiSolidHourglass } from 'react-icons/bi';
import { GrContact } from 'react-icons/gr';
import Link from 'next/link';
import { set } from 'date-fns';

export default function NavbarMobile() {
  const [isOpen, setIsOpen] = useState(false);
  const [sobreSubMenu, setSobreSubMenu] = useState(false);
  const [programasSubMenu, setProgramasSubMenu] = useState(false);
  return (
    <>
      <div
        className='md:hidden fixed top-0 right-0 pr-5 pt-5 cursor-pointer select-none z-10'
        onClick={() => setIsOpen(true)}
      >
        <RxHamburgerMenu size={30} className='text-zinc-500' />
      </div>
      {isOpen && (
        <div className='fixed top-0 left-0 right-0 bottom-0 bg-black text-zinc-500 z-10 select-none'>
          <div className='relative w-full h-full flex flex-col gap-3 items-center justify-center uppercase'>
            <div className='absolute top-5 right-5'>
              <GrClose
                size={30}
                className='text-zinc-500 cursor-pointer'
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
              <Link href='/' className='flex items-center gap-3'>
                <ImHome size={25} />
                <div className='text-2xl'>home</div>
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
                <div className='text-2xl'>sobre</div>
              </div>
              <div
                className={
                  'flex flex-col items-end w-full text-lg overflow-hidden duration-300 ' +
                  (sobreSubMenu ? 'h-40 opacity-100' : 'h-0 opacity-0')
                }
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
                <Link href='/colaboradores' className=''>
                  colaboradores
                </Link>
                <Link href='/links' className=''>
                  links
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
              transition={{ delay: 0.5 }}
              initial='off'
              animate='on'
              onClick={() => setProgramasSubMenu(!programasSubMenu)}
              className='flex flex-col items-center'
            >
              <div className='flex items-center gap-3'>
                <AiFillAudio size={25} />
                <div className='text-2xl'>programas</div>
              </div>
              <div
                className={
                  'flex flex-col items-end w-full text-lg overflow-hidden duration-300 ' +
                  (programasSubMenu ? 'h-24 opacity-100' : 'h-0 opacity-0')
                }
              >
                <Link href='/podcast' className=''>
                  podcast
                </Link>
                <Link href='/mixtape' className=''>
                  mixtape
                </Link>
                <Link href='/na-historia' className=''>
                  na história
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
              <Link href='/arquivo' className='flex items-center gap-3'>
                <BiSolidHourglass size={25} />
                <div className='text-2xl'>arquivo</div>
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
              <Link href='/contato' className='flex items-center gap-3'>
                <GrContact size={25} />
                <div className='text-2xl'>contato</div>
              </Link>
            </motion.div>
          </div>
        </div>
      )}
    </>
  );
}
