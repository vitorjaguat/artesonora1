'use client';

import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

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
        'relative bg-neutral-900 w-screen md:w-[calc(100vw-52px)] h-[calc(100vh-109px)] md:h-[calc(100vh-84px)] mb-40 md:mb-96'
      }
    >
      {/* background image */}
      <div ref={bgContainer} className='h-full overflow-hidden'>
        <motion.div style={{ y }} className='relative h-full'>
          <Image
            src='/images/dummyHero.jpg'
            alt='Arte Sonora'
            fill
            style={{ objectFit: 'cover' }}
          />
        </motion.div>
      </div>

      {/* title */}
      <div className='absolute right-auto top-1/4 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-auto md:top-5 md:right-5 tracking-widest text-7xl md:text-8xl text-neutral-500 text-center md:text-right'>
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
      <div className='block absolute bottom-5 left-5 text-white/80 w-1/2 md:w-1/3 text-sm'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod eveniet
        totam natus fugit dolore itaque adipisci laudantium beatae neque officia
        veritatis alias, reprehenderit culpa enim, aspernatur sed consequuntur!
        Fugit, impedit!
      </div>

      {/* realização */}
      <motion.div
        className='absolute right-5 bottom-5 text-neutral-600 text-base md:text-lg tracking-wider'
        initial='off'
        animate='on'
        transition={{ delay: 0.3 }}
        variants={{ off: { opacity: 0, y: -20 }, on: { opacity: 1, y: 0 } }}
      >
        Realização EXST
      </motion.div>
    </section>
  );
}
