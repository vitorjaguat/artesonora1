'use client';

import useScreenSize from '@/util/useScreenSize';
import { useEffect } from 'react';
import {
  useScroll,
  motion,
  useAnimationControls,
  useMotionValueEvent,
} from 'framer-motion';

export default function Title({ title }) {
  const isMobile = useScreenSize() === 'mobile';
  const { scrollY } = useScroll();
  const controls = useAnimationControls();

  useEffect(() => {
    controls.start('visible');
  }, []);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (!latest || latest < 60) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  });

  const titleVariants = {
    hidden: { opacity: 0, scale: 1.4 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <motion.div variants={titleVariants} animate={controls} initial='hidden'>
      {title}
    </motion.div>
  );
}
