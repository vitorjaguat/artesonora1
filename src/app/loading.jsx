// export default function loading() {
//   return (
//     <div className='bg-black/20 w-[calc(100vw-52px)] min-h-screen text-8xl text-white flex justify-center items-center'>
//       loading...
//     </div>
//   );
// }

'use client';

import { motion } from 'framer-motion';

const Loading = () => {
  return (
    <div className='w-screen md:w-[calc(100vw-52px)] h-[calc(100vh-110px)] md:h-[calc(100vh-94px)] grid place-content-center bg-neutral-800 px-4 py-24'>
      <BarLoader />
    </div>
  );
};

const variants = {
  initial: {
    scaleY: 0.5,
    opacity: 0,
  },
  animate: {
    scaleY: 1,
    opacity: 1,
    transition: {
      repeat: Infinity,
      repeatType: 'mirror',
      duration: 1,
      ease: 'circIn',
    },
  },
};

const BarLoader = () => {
  return (
    <motion.div
      transition={{
        staggerChildren: 0.25,
      }}
      initial='initial'
      animate='animate'
      className='flex gap-1'
    >
      <motion.div
        variants={variants}
        className='h-12 w-2 bg-white rounded-md'
      />
      <motion.div
        variants={variants}
        className='h-12 w-2 bg-white rounded-md'
      />
      <motion.div
        variants={variants}
        className='h-12 w-2 bg-white rounded-md'
      />
      <motion.div
        variants={variants}
        className='h-12 w-2 bg-white rounded-md'
      />
      <motion.div
        variants={variants}
        className='h-12 w-2 bg-white rounded-md'
      />
    </motion.div>
  );
};

export default Loading;
