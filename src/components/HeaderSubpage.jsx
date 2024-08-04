'use client';

import useScreenSize from '@/util/useScreenSize';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function HeaderSubpage({
  title,
  bgImg,
  kind = '1',
  blur = false,
}) {
  const isMobile = useScreenSize() === 'mobile';
  // console.log('isMobile', isMobile);
  // console.log('blur', blur);

  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  return (
    <div className={'bg-g h-80 w-full relative'}>
      <div className='absolute inset-0 bg-black w-full h-full overflow-hidden z-0'>
        <div
          className={
            'absolute inset-0 w-full h-full overflow-hidden ' +
            (blur && !isMobile && hasMounted && 'blur-sm opacity-70')
          }
        >
          <Image
            src={bgImg}
            alt={title}
            fill
            className={
              'object-cover object-center '
              // +
              // (blur && !isMobile && 'blur-sm opacity-70')
            }
            // style={{
            //   filter: blur && !isMobile && 'blur(5px)',
            //   opacity: blur && !isMobile && '70%',
            // }}
          />
        </div>
      </div>
      <div
        className={
          'absolute inset-0 w-full h-full flex justify-center text-white/90 ' +
          (kind === '1' ? 'text-5xl md:text-8xl' : 'text-3xl md:text-5xl')
        }
      >
        <div className='h-full w-[90%] md:w-[700px] lg:w-[900px] flex items-end justify-end text-right font-chakra'>
          {title}
        </div>
      </div>
    </div>
  );
}
