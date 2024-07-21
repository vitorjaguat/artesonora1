'use client';

import { motion, useInView, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface Props {
  children: JSX.Element;
  width?: 'fit-content' | '100%';
  duration?: number;
}

export default function RevealText({
  children,
  width = 'fit-content',
  duration = 1.2,
}: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    margin: '0px 0px -100px 0px',
  });

  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
      slideControls.start('visible');
    } else {
      mainControls.set('hidden');
      slideControls.set('hidden');
    }
  }, [isInView]);

  const getRandom = () => {
    return Math.floor(Math.random() * 70) + 20 + '%';
  }; // randômico entre 20 e 90}

  const r1 = getRandom();
  const r2 = getRandom();
  const r3 = getRandom();
  const r4 = getRandom();
  const r5 = getRandom();
  const r6 = getRandom();
  // console.log(r1, r2, r3, r4);

  return (
    <div ref={ref} style={{ position: 'relative', width, overflow: 'hidden' }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        initial='hidden'
        animate={mainControls}
        transition={{ duration: 0.25, delay: duration }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: [r1, r2, r3, r4, r5, r6, '100%'] },
        }}
        initial='hidden'
        animate={slideControls}
        style={{
          position: 'absolute',
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          background: '#ffffff50',
          zIndex: 20,
          // borderRadius: '30% 0% 0% 30%',
        }}
        transition={{ duration: duration, delay: 0 }}
      />
    </div>
  );
}
