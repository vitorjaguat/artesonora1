'use client';

import { useContext, useState } from 'react';
import { MainContext } from '@/context/mainContext';
import { useMotionValueEvent, motion, useTransform } from 'framer-motion';
import FTPCard from './FTPCard';
import { useMediaQuery } from '@/util/useMediaQuery';

export default function FirstThreePrograms2({
  firstThree,
  scrollYProgress,
  sideRight = false,
  isNaHistoria = false,
}) {
  // console.log('firstThree', firstThree);
  const [description, setDescription] = useState(null);
  const [show, setShow] = useState(0);
  const isDesktop = useMediaQuery('md');

  const {
    changePlaySrc,
    playSrc,
    changePlayImg,
    changePlayTitle,
    changePlayArtist,
  } = useContext(MainContext);

  const handleClickPlay = (e, post) => {
    // console.log('collaborators', post.collaborators);
    e.preventDefault();
    e.stopPropagation();
    changePlaySrc(post.fileLink);
    changePlayImg(post.collaborators[0].coverImage);
    changePlayTitle(post.title);
    changePlayArtist(
      post.collaborators.map((colObj) => colObj.title).join(', ')
    );
  };

  useMotionValueEvent(scrollYProgress, 'change', async (latest) => {
    // console.log('scrollYProgress', latest);
    if (latest < 0.05) {
      if (show !== 0) {
        setShow(0);
        if (isDesktop) setDescription(null);
      }
    }
    if (latest > 0.05 && latest < 0.35) {
      if (show !== 1) {
        setShow(1);
        if (isDesktop) setDescription(firstThree[0].content);
      }
    } else if (latest > 0.35 && latest < 0.65) {
      if (show !== 2) {
        setShow(2);
        if (isDesktop) setDescription(firstThree[1].content);
      }
    } else if (latest > 0.65 && latest < 1) {
      if (show !== 3) {
        setShow(3);
        if (isDesktop) setDescription(firstThree[2].content);
      }
    }
    // console.log(show);
  });

  // useEffect(() => {
  //   if (show === 1) {
  //     controls.start('visible1');
  //   } else if (show === 2) {
  //     controls.
  //     controls.start('visible2');
  //   } else if (show === 3) {
  //     controls.start('visible3');
  //   }
  // }, [show])

  const cardVariants = {
    hidden: { opacity: 0 },
    visible1: { opacity: 1 },
    visible2: { opacity: 1 },
    visible3: { opacity: 1 },
  };

  const width = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <div
      className={
        'absolute flex md:block w-[calc(100vw-80px)] md:w-1/2 top-32 md:top-10 ' +
        (sideRight
          ? 'left-1/2 -translate-x-1/2 right-auto md:left-auto md:translate-x-0 md:right-10'
          : 'left-1/2 -translate-x-1/2 right-auto md:left-10 md:translate-x-0 md:right-auto')
      }
    >
      <div className='w-full  flex flex-col gap-4'>
        <div className='-mb-2 w-full text-center tracking-[3px] md:tracking-[4px]'>
          {isNaHistoria ? 'primeiros episódios:' : 'episódios mais recentes:'}
        </div>
        <div className='flex  gap-2 text-white/90 justify-center md:justify-start'>
          <div
            className={
              'flex-1 duration-300' + (show > 0 ? ' opacity-100' : ' opacity-0')
            }
          >
            {/* <div className={show > 0 ? 'block h-full w-full' : 'hidden'}> */}
            <FTPCard
              post={firstThree[0]}
              setDescription={setDescription}
              description={description}
              handleClickPlay={handleClickPlay}
              id={0}
              show={show}
            />
            {/* </div> */}
          </div>
          <div
            className={
              'flex-1 duration-300' + (show > 1 ? ' opacity-100' : ' opacity-0')
            }
          >
            {/* <div className={show > 1 ? 'block h-full w-full' : 'hidden'}> */}
            <FTPCard
              post={firstThree[1]}
              setDescription={setDescription}
              description={description}
              handleClickPlay={handleClickPlay}
              id={1}
              show={show}
            />
            {/* </div> */}
          </div>
          <div
            className={
              'flex-1 duration-300' + (show > 2 ? ' opacity-100' : ' opacity-0')
            }
          >
            {/* <div className={show > 2 ? 'block h-full w-full' : 'hidden'}> */}
            <FTPCard
              post={firstThree[2]}
              setDescription={setDescription}
              description={description}
              handleClickPlay={handleClickPlay}
              id={2}
              show={show}
            />
            {/* </div> */}
          </div>
        </div>

        <div className='w-full h-2'>
          <motion.div
            className='bg-white/80 h-2 rounded-md'
            style={{ width }}
          ></motion.div>
        </div>

        {/* description */}
        {description && isDesktop && (
          <div className='w-full flex flex-col justify-end text-white/70 p-2 rounded-md bg-black/70 font-light'>
            <div
              className='w-full'
              dangerouslySetInnerHTML={{
                __html: description.split('\n')[0],
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
