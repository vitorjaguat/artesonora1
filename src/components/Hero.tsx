'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  let vh = 1;
  useEffect(() => {
    if (typeof window !== 'undefined') {
      vh = window.innerHeight * 0.01;
    }
  });
  return (
    <div
      className={
        'relative bg-neutral-900 w-screen md:w-[calc(100vw-52px)] h-[calc(100vh-109px)] md:h-[calc(100vh-84px)]'
      }
    >
      <div className='absolute right-5 top-[4rem] md:top-5 tracking-widest text-5xl md:text-8xl text-neutral-500 text-right'>
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
      <motion.div
        className='absolute left-3 bottom-3 md:left-5 md:bottom-5 text-neutral-600 text-base md:text-lg tracking-wider'
        initial='off'
        animate='on'
        transition={{ delay: 0.3 }}
        variants={{ off: { opacity: 0, y: -20 }, on: { opacity: 1, y: 0 } }}
      >
        Realização EXST
      </motion.div>
    </div>
  );
}
