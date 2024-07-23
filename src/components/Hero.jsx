'use client';

import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import WaterDropGrid from './WaterDropGridBG';

export default function Hero() {
  // let vh = 1;
  // useEffect(() => {
  //   if (typeof window !== 'undefined') {
  //     vh = window.innerHeight * 0.01;
  //   }
  // });
  const bgContainer = useRef(null);
  const { scrollYProgress } = useScroll({
    target: bgContainer,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0vh', '80vh']);

  return (
    <section
      className={
        'relative bg-neutral-900 w-screen md:w-[calc(100vw-52px)] h-[calc(100vh-109px)] md:h-[calc(100vh-92px)] mb-40 md:mb-0'
      }
    >
      {/* background image */}
      <div ref={bgContainer} className='h-full overflow-hidden'>
        <motion.div style={{ y }} className='relative h-full'>
          {/* <Image
            src='/images/dummyHero.jpg'
            alt='Arte Sonora'
            fill
            style={{ objectFit: 'cover' }}
          /> */}

          {/* grid */}
          <div className='absolute top-0 left-0 opacity-60'>
            <WaterDropGrid />
          </div>
        </motion.div>
      </div>

      {/* title */}
      <div className='absolute right-auto top-1/2 left-1/2 -translate-x-1/2 md:translate-x-0 -translate-y-1/2 md:translate-y-0 md:left-auto md:top-5 md:right-5 tracking-widest text-7xl md:text-8xl text-neutral-700 text-center md:text-right font-chakra font-semibold'>
        <motion.div
          initial='off'
          animate='on'
          transition={{ delay: 0.1 }}
          variants={{ off: { opacity: 0, x: 20 }, on: { opacity: 1, x: 0 } }}
          className=''
        >
          <div className=''>ARTE</div>
          <div className=''>SONORA</div>
        </motion.div>
      </div>

      {/* text */}
      <div className='absolute top-5 md:top-auto bottom-auto md:bottom-5 md:left-5 text-white/80 w-3/4 text-left md:text-left md:pb-0 px-5 md:px-0 md:w-1/3 text-base'>
        Arte Sonora é uma prática artística coletiva desenvolvida pelo duo de
        artistas <span className='font-bold'>Franz Manata</span> e{' '}
        <span className='font-bold'>Saulo Laudares</span>, com formatos, como
        cursos, residências, exposições, happenings, programas de rádio,
        publicações etc. Neste site você encontrará materiais que documentam os
        15 anos desta prática.
      </div>

      {/* realização */}
      <motion.div
        className='absolute right-5 bottom-5 text-white/80 text-base md:text-lg tracking-wider font-chakra -translate-y-[55px] md:translate-y-0'
        initial='off'
        animate='on'
        transition={{ delay: 0.3 }}
        variants={{ off: { opacity: 0 }, on: { opacity: 1 } }}
      >
        Realização EXST
      </motion.div>
    </section>
  );
}
