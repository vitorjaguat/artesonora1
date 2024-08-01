'use client';

import { motion, useTransform, useScroll } from 'framer-motion';
import { useRef } from 'react';
import CarouselCard from './CarouselCard';
import { useMediaQuery } from '../util/useMediaQuery';

const HorizontalScrollCarousel = ({ newestPosts }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const isDesktop = useMediaQuery('md');

  const x = isDesktop
    ? useTransform(scrollYProgress, [0, 1], ['0.5%', '-65%'])
    : useTransform(scrollYProgress, [0, 1], ['0.5%', '-80%']);

  return (
    <section
      ref={targetRef}
      className='relative md:w-[calc(100vw-52px)] h-[350vh] md:h-[300vh] bg-neutral-900'
    >
      <div className='sticky top-0 flex w-full h-[calc(100vh)] md:h-[calc(100vh-92px)] items-center overflow-hidden'>
        <div className='absolute top-20 md:top-6 left-6 mb-6 text-5xl md:text-7xl pr-10 w-full text-right text-white/20 font-chakra'>
          EM DESTAQUE
        </div>
        <motion.div style={{ x }} className='flex mt-8 gap-4'>
          {newestPosts.map((post, i) => {
            if (!isDesktop && i > 2) return null;
            return <CarouselCard post={post} key={i} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default HorizontalScrollCarousel;
