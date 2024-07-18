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
    ? useTransform(scrollYProgress, [0, 1], ['0.5%', '-75%'])
    : useTransform(scrollYProgress, [0, 1], ['0.5%', '-95%']);

  return (
    <section
      ref={targetRef}
      className='relative md:w-[calc(100vw-52px)] h-[300vh] bg-neutral-900'
    >
      <div className='sticky top-0 flex w-full h-[calc(100vh)] md:h-[calc(100vh-92px)] items-center overflow-hidden'>
        <div className='absolute top-20 md:top-6 left-6 mb-6 text-5xl md:text-7xl pr-10 w-full text-right text-white/10'>
          EM DESTAQUE
        </div>
        <motion.div style={{ x }} className='flex mt-8 gap-4'>
          {newestPosts.map((post, i) => {
            return <CarouselCard post={post} key={i} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default HorizontalScrollCarousel;

const cards = [
  {
    url: '/images/cildo-Q4Mz.jpeg',
    title: 'Title 1',
    id: 1,
  },
  {
    url: '/images/batman-UyND.jpeg',
    title: 'Title 2',
    id: 2,
  },
  {
    url: '/images/paulo_nenflidio-Q2ND.jpeg',
    title: 'Title 3',
    id: 3,
  },
  {
    url: '/images/bernardo_oliveira-g0ND.jpeg',
    title: 'Title 4',
    id: 4,
  },
  {
    url: '/images/ioia-MzMD.jpeg',
    title: 'Title 5',
    id: 5,
  },
  {
    url: '/images/icaro_dos_santos-M3Nj.jpeg',
    title: 'Title 6',
    id: 6,
  },
  {
    url: '/images/lisias_paiva-QxMj.jpeg',
    title: 'Title 7',
    id: 7,
  },
];
