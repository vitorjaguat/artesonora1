'use client';

import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import {
  useScroll,
  useTransform,
  motion,
  useMotionValueEvent,
} from 'framer-motion';
import dummyPodcast from '../../../public/images/dummyPodcast.jpg';
import dummyMixtape from '../../../public/images/dummyMixtape.jpg';
import dummyHistoria from '../../../public/images/dummyHistoria.jpg';
import dummyVaranda from '../../../public/images/dummyVaranda.jpg';
import PodcastIntro from './FirstThreePrograms';
import getProgramasIntroData from './getProgramasIntroData';
import { set } from 'date-fns';
import FirstThreePrograms from './FirstThreePrograms';
import RevealText from '../RevealText';

const data = {
  podcast: {
    title: 'Podcast',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt voluptatibus odio fuga sint eaque ipsa, est maiores veniam aspernatur magnam eligendi quis aliquam, consectetur blanditiis voluptate nisi accusantium labore. Amet. Placeat aut iste unde explicabo dolor delectus quidem! A aspernatur eius molestias animi! Nulla accusamus est aliquid vero porro labore unde praesentium rerum sint quaerat, iure nisi assumenda? Est, placeat?',
    image: '/images/dummyPodcast.jpg',
    //   image: dummyPodcast,
    id: 1,
    link: '/podcast',
  },
  mixtape: {
    title: 'Mixtape',
    description:
      'Aperiam expedita dolores unde doloribus repudiandae quia, earum voluptatum eius quisquam. Obcaecati laudantium vel, illo minima iste officiis maiores debitis reiciendis quasi aliquid qui officia, expedita delectus? A, tenetur cumque! Voluptates ex, sunt quibusdam reprehenderit sequi suscipit ad quidem, earum officia totam architecto velit quia. Mollitia, exercitationem aliquam impedit voluptatem adipisci, deleniti temporibus repudiandae iste magni laborum, recusandae sequi quae!',
    // image: '/images/dummyMixtape.jpg',
    image: dummyMixtape,
    id: 2,
    link: '/mixtape',
  },
  naHistória: {
    title: 'Na História',
    description:
      'Culpa repudiandae veritatis ipsam porro ea, debitis praesentium laudantium molestias. Labore non eaque quas eum explicabo, sint ea nemo nostrum minima odit iure culpa ipsa similique earum, sapiente, fuga aliquam! Reprehenderit, deleniti accusantium illum odio, molestiae sit vero modi, quis quisquam id earum suscipit at temporibus dicta consequatur possimus eum inventore. Porro similique officia voluptate, incidunt sed impedit nostrum iure?',
    // image: '/images/dummyHistoria.jpg',
    image: dummyHistoria,
    id: 3,
    link: '/na-historia',
  },
  varandaSonora: {
    title: 'Varanda Sonora',
    description:
      'Laboriosam neque debitis voluptatem maxime modi omnis adipisci vel voluptate cum dolore quas doloremque harum blanditiis, nulla animi molestias dolores odio amet fugit deserunt quidem quod error. Possimus, aliquam architecto. Qui id necessitatibus quia aliquid ipsam soluta est repellendus nostrum at sunt! Optio magnam dolore itaque natus libero numquam delectus fugiat nostrum doloribus! Ducimus sed illum eos sequi sit mollitia.',
    // image: '/images/dummyVaranda.jpg',
    image: dummyVaranda,
    id: 4,
    link: '/varanda-sonora',
  },
};

export default function ProgramasIntro({ firstThree }) {
  // const [firstThree, setFirstThree] = useState([]);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const {
  //       filteredPodcasts,
  //       filteredMixtapes,
  //       filteredHistoria,
  //       filteredVaranda,
  //     } = await getProgramasIntroData();
  //     return {
  //       filteredPodcasts,
  //       filteredMixtapes,
  //       filteredHistoria,
  //       filteredVaranda,
  //     };
  //   };
  //   const firstThreeData = fetchData();
  //   console.log('firstThreeData', firstThreeData);
  //   setFirstThree(firstThreeData);
  // }, []);

  const {
    filteredPodcasts: podcast,
    filteredMixtapes: mixtape,
    filteredHistoria: naHistória,
    filteredVaranda: varandaSonora,
  } = firstThree;

  const [open, setOpen] = useState(data.podcast);
  const containerRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  //   useEffect(() => {
  //     setOpen(data.podcast);
  //   }, []);

  const sleep = (duration) => {
    return new Promise((resolve) => setTimeout(resolve, duration));
  };

  useMotionValueEvent(scrollYProgress, 'change', async (latest) => {
    // console.log('scrollYProgress', latest);
    if (latest < 0.25) {
      if (open.title !== data.podcast.title) {
        setIsLoading(true);
        await sleep(1000);
        setOpen(data.podcast);
        setIsLoading(false);
      }
    } else if (latest > 0.25 && latest < 0.5) {
      if (open.title !== data.mixtape.title) {
        setIsLoading(true);
        await sleep(1000);
        setOpen(data.mixtape);
        setIsLoading(false);
      }
    } else if (latest > 0.5 && latest < 0.75) {
      if (open.title !== data.naHistória.title) {
        setIsLoading(true);
        await sleep(1000);
        setOpen(data.naHistória);
        setIsLoading(false);
      }
    } else if (latest > 0.75) {
      if (open.title !== data.varandaSonora.title) {
        setIsLoading(true);
        await sleep(1000);
        setOpen(data.varandaSonora);
        setIsLoading(false);
      }
    }
  });

  useEffect(() => {
    console.log('open.image changed!');
    console.log(open);
  }, [open.image]);

  const scale =
    open.id === 1
      ? useTransform(scrollYProgress, [0, 0.25], [1, 1.2])
      : open.id === 2
      ? useTransform(scrollYProgress, [0.25, 0.5], [1, 1.2])
      : open.id === 3
      ? useTransform(scrollYProgress, [0.5, 0.75], [1, 1.2])
      : useTransform(scrollYProgress, [0.75, 1], [1, 1.2]);

  return (
    <section
      ref={containerRef}
      className='hidden md:block relative text-white/50 w-screen md:w-[calc(100vw-52px)] h-[600vh]  mb-40'
    >
      <div className='sticky inset-0 w-screen md:w-[calc(100vw-52px)] h-[calc(100vh-109px)] md:h-[calc(100vh-84px)]'>
        <div className='relative w-full h-full overflow-hidden'>
          <motion.div
            className='absolute inset-0 w-full h-full '
            style={{ scale }}
          >
            <Image
              src={data.podcast.image}
              alt={data.podcast.title}
              fill
              style={{
                objectFit: 'cover',
                zIndex: 0,
                opacity: isLoading || open.image !== data.podcast.image ? 0 : 1,
                transitionProperty: 'opacity',
                transitionDuration: '1000ms',
              }}
              priority={true}
            />
            <Image
              src={data.mixtape.image}
              alt={data.mixtape.title}
              fill
              style={{
                objectFit: 'cover',
                zIndex: 0,
                opacity: isLoading || open.image !== data.mixtape.image ? 0 : 1,
                transitionProperty: 'opacity',
                transitionDuration: '1000ms',
              }}
              priority={true}
            />
            <Image
              src={data.naHistória.image}
              alt={data.naHistória.title}
              fill
              style={{
                objectFit: 'cover',
                zIndex: 0,
                opacity:
                  isLoading || open.image !== data.naHistória.image ? 0 : 1,
                transitionProperty: 'opacity',
                transitionDuration: '1000ms',
              }}
              priority={true}
            />
            <Image
              src={data.varandaSonora.image}
              alt={data.varandaSonora.title}
              fill
              style={{
                objectFit: 'cover',
                zIndex: 0,
                opacity:
                  isLoading || open.image !== data.varandaSonora.image ? 0 : 1,
                transitionProperty: 'opacity',
                transitionDuration: '1000ms',
              }}
              priority={true}
            />
          </motion.div>

          {/* title */}
          <div
            className='absolute top-14 right-5 font-light z-10 text-8xl text-right cursor-pointer max-w-[calc(100vw-52px)] flex items-center justify-end'
            style={{
              opacity: isLoading ? 0 : 1,
              transitionProperty: 'opacity',
              transitionDuration: '500ms',
            }}
          >
            <div className='w-40 text-right flex justify-end text-white/70'>
              {open.title}
            </div>
          </div>
        </div>

        {/* description */}
        <div
          className='absolute right-5 bottom-10 w-2/3 md:w-1/3 text-right text-sm md:text-base text-white/90'
          style={{
            opacity: isLoading ? 0 : 1,
            transitionProperty: 'opacity',
            transitionDuration: '500ms',
          }}
        >
          {open.description.split('.').map((sentence, i) => (
            <RevealText width='100%' key={i}>
              <div className='w-full flex justify-end text-right'>
                {sentence}
              </div>
            </RevealText>
          ))}
        </div>

        {/* progress */}
        {/* <div className="absolute bottom-5 left-5">
            <motion.div></motion.div>
        </div> */}
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

        {/* cards */}
        {/* {open.title === data.podcast.title && ( */}
        <FirstThreePrograms
          firstThree={
            open.id === 1
              ? podcast
              : open.id === 2
              ? mixtape
              : open.id === 3
              ? naHistória
              : varandaSonora
          }
        />
        {/* )} */}
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
