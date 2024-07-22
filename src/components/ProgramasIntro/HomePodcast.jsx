'use client';

import Image from 'next/image';
import { useState, useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import dummyPodcast from '../../../public/images/dummyPodcast2.jpg';
import dummyMixtape from '../../../public/images/dummyMixtape.jpg';
import dummyHistoria from '../../../public/images/dummyHistoria.jpg';
import dummyVaranda from '../../../public/images/dummyVaranda.jpg';
import FirstThreePrograms2 from './FirstThreePrograms2';
import RevealText from '../RevealText';
import Link from 'next/link';

export const data = {
  podcast: {
    title: 'Podcast',
    description:
      'Arte Sonora Podcast apresenta de forma monográfica os principais artistas e pensadores brasileiros que vêm investigando o mundo através do som e suas interfaces, apresentando seu pensamento, obras e interesses. O programa foi estruturado na forma de uma conversa informal, e algumas das vezes foi gravado no próprio espaço do entrevistado, exceto um depoimento e duas palestras que ocorreram na Escola de Artes Visuais do Parque Lage.',
    image: dummyPodcast,
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

  const podcast = firstThree;

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

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <section
      ref={containerRef}
      className='block relative text-white/50 max-w-[100vw] md:max-w-none md:w-[calc(100vw-52px)] h-[130vh] md:h-[200vh]'
    >
      <div className='sticky inset-0 w-screen md:w-[calc(100vw-52px)] h-[calc(100vh-109px)] md:h-[calc(100vh-92px)] overflow-x-hidden'>
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
                opacity: isLoading ? 0 : 0.4,
                transitionProperty: 'opacity',
                transitionDuration: '1000ms',
              }}
              priority={true}
            />
          </motion.div>

          {/* title */}
          <div
            className='absolute top-14 right-5 md:right-8 font-light z-10 text-5xl md:text-8xl text-right cursor-pointer max-w-none md:max-w-[calc(100vw-52px)] flex items-center justify-end'
            style={{
              opacity: isLoading ? 0 : 1,
              transitionProperty: 'opacity',
              transitionDuration: '500ms',
            }}
          >
            <Link
              href='/podcast'
              className='md:w-40 text-right flex justify-end text-white/70 hover:scale-[1.02] ease-in-out font-chakra '
            >
              {data.podcast.title}
            </Link>
          </div>

          {/* saiba mais */}
          <div className='hidden md:block absolute bottom-10 left-10 text-white/50 hover:text-white/80 hover:scale-[1.02] text-lg tracking-wider duration-300'>
            <Link href='/podcast'>+ acesse todos os episódios</Link>
          </div>
        </div>

        {/* description */}
        <Link
          href='/podcast'
          className='absolute right-5 md:right-8 bottom-4 md:bottom-8 w-[80%] md:w-1/3 text-right text-base text-white/90 flex flex-col gap-2 leading-snug '
          style={{
            opacity: isLoading ? 0 : 1,
            transitionProperty: 'opacity',
            transitionDuration: '500ms',
          }}
        >
          {data.podcast.description.split('.').map((sentence, i, arr) => (
            <RevealText width='100%' key={i}>
              <div className='w-full flex justify-end text-right'>
                {sentence}
                {i < arr.length - 1 ? '.' : ''}
              </div>
            </RevealText>
          ))}
        </Link>

        {/* progress */}
        {/* <div className='absolute bottom-5 left-5 flex flex-col gap-1'>
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
        </div> */}

        {/* cards */}
        {/* {open.title === data.podcast.title && ( */}
        <FirstThreePrograms2
          firstThree={firstThree}
          scrollYProgress={scrollYProgress}
        />
        {/* )} */}
      </div>

      {/* select program */}
      {/* <div className={'sticky top-0 left-0 flex'}> */}
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
      {/* </div> */}
    </section>
  );
}
