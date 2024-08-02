'use client';

import { useContext, useState } from 'react';
import { MainContext } from '@/context/mainContext';
import { useMotionValueEvent } from 'framer-motion';
import Card from '@/components/subpages/Card';
import { useMediaQuery } from '@/util/useMediaQuery';
import RevealText from '../RevealText';
import Description from './Description';
import { usePathname } from 'next/navigation';

export default function AllCards({ items, sideRight = false }) {
  const isDesktop = useMediaQuery('md');
  const firstThree = items;
  const pathname = usePathname();

  const {
    changePlaySrc,
    playSrc,
    changePlayImg,
    changePlayTitle,
    changePlayArtist,
    changeDescription,
    description,
  } = useContext(MainContext);

  const handleClickPlay = (e, post) => {
    e.preventDefault();
    e.stopPropagation();
    changePlaySrc(post.fileLink);
    changePlayImg(post.collaborators[0].coverImage);
    changePlayTitle(post.title);
    changePlayArtist(
      post.collaborators.map((colObj) => colObj.title).join(', ')
    );
  };

  const cardVariants = {
    hidden: { opacity: 0 },
    visible1: { opacity: 1 },
    visible2: { opacity: 1 },
    visible3: { opacity: 1 },
  };

  return (
    <>
      <div className={'flex md:w-[calc(100vw-52px)]'}>
        <div className='relative pt-36 sm:pt-8 px-4 sm:px-0 sm:pl-8 lg:pt-14 lg:pl-14 xl:pt-24 xl:pl-24 pb-[130px] sm:pb-[109px] flex-1 flex flex-wrap gap-4 md:gap-2 justify-center md:justify-normal'>
          <div className='block sm:hidden pb-8'>
            {pathname !== '/colaboradores' && <Description />}
          </div>
          {items.map((item, i) => (
            <div key={i} className={' duration-300 w-full sm:w-32'}>
              <Card
                post={item}
                changeDescription={changeDescription}
                handleClickPlay={handleClickPlay}
                description={description}
              />
            </div>
          ))}
        </div>
        <div className='hidden md:block flex-1 text-right text-white/90 pt-44 pr-8'></div>
      </div>

      {/* {description && isDesktop && (
          <div className='w-full flex flex-col justify-end text-white/70 p-2 rounded-md bg-black/70 font-light'>
            <div
              className='w-full'
              dangerouslySetInnerHTML={{
                __html: description.split('\n')[0],
              }}
            />
          </div>
        )} */}

      {/* description */}
      {/* <div
        className='absolute right-5 md:right-8 bottom-5 md:bottom-8 w-2/3 md:w-1/3 text-right text-xs md:text-base text-white/90'
        style={{
          opacity: 1,
          transitionProperty: 'opacity',
          transitionDuration: '500ms',
        }}
      >
        {description.split('\n').map((sentence, i) => (
          <RevealText width='100%' key={i}>
            <div className='w-full flex justify-end text-right'>{sentence}</div>
          </RevealText>
        ))}
      </div> */}

      {/* cards: */}
      {/* <div className='absolute top-0 left-0 w-full max-h-[100vh] overflow-scroll z-[100000000]'> */}
      {/* <div className='relative h-[100vh] inset-0 overflow-scroll'>
        <div className='absolute pt-32 pl-32 pr-[50%] top-0 left-0 flex flex-wrap gap-2 text-white/90 max-h-[100vh] overflow-scroll'>
          {items.map((item, i) => (
            <div key={i} className={' duration-300 w-32'}>
              <FTPCard
                post={item}
                setDescription={setDescription}
                description={description}
                handleClickPlay={handleClickPlay}
              />
            </div>
          ))}
        </div>
      </div> */}
      {/* </div> */}
    </>
  );
}
