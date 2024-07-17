'use client';

import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import {
  useScroll,
  useTransform,
  motion,
  useMotionValueEvent,
} from 'framer-motion';

const data = {
  podcast: {
    title: 'Podcast',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt voluptatibus odio fuga sint eaque ipsa, est maiores veniam aspernatur magnam eligendi quis aliquam, consectetur blanditiis voluptate nisi accusantium labore. Amet. Placeat aut iste unde explicabo dolor delectus quidem! A aspernatur eius molestias animi! Nulla accusamus est aliquid vero porro labore unde praesentium rerum sint quaerat, iure nisi assumenda? Est, placeat?',
    image: '/images/dummyPodcast.jpeg',
    id: 1,
  },
  mixtape: {
    title: 'Mixtape',
    description:
      'Aperiam expedita dolores unde doloribus repudiandae quia, earum voluptatum eius quisquam. Obcaecati laudantium vel, illo minima iste officiis maiores debitis reiciendis quasi aliquid qui officia, expedita delectus? A, tenetur cumque! Voluptates ex, sunt quibusdam reprehenderit sequi suscipit ad quidem, earum officia totam architecto velit quia. Mollitia, exercitationem aliquam impedit voluptatem adipisci, deleniti temporibus repudiandae iste magni laborum, recusandae sequi quae!',
    image: '/images/dummyMixtape.jpg',
    id: 2,
  },
  naHistória: {
    title: 'Na História',
    description:
      'Culpa repudiandae veritatis ipsam porro ea, debitis praesentium laudantium molestias. Labore non eaque quas eum explicabo, sint ea nemo nostrum minima odit iure culpa ipsa similique earum, sapiente, fuga aliquam! Reprehenderit, deleniti accusantium illum odio, molestiae sit vero modi, quis quisquam id earum suscipit at temporibus dicta consequatur possimus eum inventore. Porro similique officia voluptate, incidunt sed impedit nostrum iure?',
    image: '/images/dummyHistoria.jpg',
    id: 3,
  },
  varandaSonora: {
    title: 'Varanda Sonora',
    description:
      'Laboriosam neque debitis voluptatem maxime modi omnis adipisci vel voluptate cum dolore quas doloremque harum blanditiis, nulla animi molestias dolores odio amet fugit deserunt quidem quod error. Possimus, aliquam architecto. Qui id necessitatibus quia aliquid ipsam soluta est repellendus nostrum at sunt! Optio magnam dolore itaque natus libero numquam delectus fugiat nostrum doloribus! Ducimus sed illum eos sequi sit mollitia.',
    image: '/images/dummyVaranda.jpg',
    id: 4,
  },
};

export default function ProgramasIntro() {
  const containerRef = useRef(null);
  const [open, setOpen] = useState(data.podcast);
  const [isLoading, setIsLoading] = useState(true);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  const sleep = (duration) => {
    return new Promise((resolve) => setTimeout(resolve, duration));
  };

  useMotionValueEvent(scrollYProgress, 'change', async (latest) => {
    console.log('scrollYProgress', latest);
    if (latest < 0.25) {
      if (open.title !== data.podcast.title) {
        setIsLoading(true);
        await sleep(500);
        setOpen(data.podcast);
        setIsLoading(false);
      }
    } else if (latest > 0.25 && latest < 0.5) {
      if (open.title !== data.mixtape.title) {
        setIsLoading(true);
        await sleep(500);
        setOpen(data.mixtape);
        setIsLoading(false);
      }
    } else if (latest > 0.5 && latest < 0.75) {
      if (open.title !== data.naHistória.title) {
        setIsLoading(true);
        await sleep(500);
        setOpen(data.naHistória);
        setIsLoading(false);
      }
    } else {
      if (open.title !== data.varandaSonora.title) {
        setIsLoading(true);
        await sleep(500);
        setOpen(data.varandaSonora);
        setIsLoading(false);
      }
    }
  });

  //   useEffect(() => {
  //     console.log('open.image changed!');
  //     setIsLoading(true);
  //     setTimeout(() => {
  //       setIsLoading(false);
  //     }, 500);
  //   }, [open.image]);

  return (
    <section
      ref={containerRef}
      className='relative text-white/50 w-screen md:w-[calc(100vw-52px)] h-[300vh]  mb-40'
    >
      <div className='sticky inset-0 w-full h-[calc(100vh-109px)] md:h-[calc(100vh-84px)]'>
        <div className='relative w-full h-full'>
          <Image
            src={open.image}
            alt={open.title}
            fill
            style={{
              objectFit: 'cover',
              zIndex: 0,
              opacity: isLoading ? 0 : 1,
              transitionProperty: 'opacity',
              transitionDuration: '500ms',
            }}
            //   placeholder='blur'
            //   onLoadingComplete={() => setIsLoading(false)}
          />

          {/* title */}
          <div
            className='absolute top-5 right-5 z-10 font-thin text-8xl text-right cursor-pointer'
            style={{
              opacity: isLoading ? 0 : 1,
              transitionProperty: 'opacity',
              transitionDuration: '500ms',
            }}
            onClick={() => setOpen(data.podcast)}
          >
            {open.title}
          </div>
        </div>

        {/* description */}
        <div className='absolute right-5 bottom-5 w-2/3 md:w-1/3 text-right text-sm md:text-base text-white/90'>
          {open.description}
        </div>

        {/* progress */}
        <div className='absolute bottom-5 left-5 flex flex-col gap-1'>
          <div className='h-8 w-4 border-zinc-200 border-[1px] bg-zinc-200'></div>
          <div
            className={
              'h-8 w-4 border-zinc-200 border-[1px] ' +
              (open.id > 1 && 'bg-zinc-200')
            }
          ></div>
          <div
            className={
              'h-8 w-4 border-zinc-200 border-[1px] ' +
              (open.id > 2 && 'bg-zinc-200')
            }
          ></div>
          <div
            className={
              'h-8 w-4 border-zinc-200 border-[1px] ' +
              (open.id > 3 && 'bg-zinc-200')
            }
          ></div>
        </div>
      </div>

      {/* select program */}
      <div className={'sticky top-0 left-0 flex'}>
        {/* <div
          className='rounded-md bg-white/20 px-6 py-4 text-right cursor-pointer duration-300 hover:bg-white/40'
          onClick={() => setOpen(data.mixtape)}
        >
          Mixtape
        </div>
        <div
          className='rounded-md bg-white/20 px-6 py-4 text-right cursor-pointer duration-300 hover:bg-white/40'
          onClick={() => setOpen(data.naHistória)}
        >
          Na História
        </div>
        <div
          className='rounded-md bg-white/20 px-6 py-4 text-right cursor-pointer duration-300 hover:bg-white/40'
          onClick={() => setOpen(data.varandaSonora)}
        >
          Varanda Sonora
        </div> */}
      </div>
    </section>
  );
}
