'use client';

import useScreenSize from '@/util/useScreenSize';
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

  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (latest < 60) {
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
    <motion.div
      variants={titleVariants}
      animate={controls}
      initial='hidden'
      className=''
    >
      {title}
    </motion.div>
  );
}
