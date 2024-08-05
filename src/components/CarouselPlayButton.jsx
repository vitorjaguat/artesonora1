'use client';

import { PiPlayLight } from 'react-icons/pi';
import { useContext } from 'react';
import { MainContext } from '@/context/mainContext';
// import { MdKeyboardArrowRight } from 'react-icons/md';
import { HiArrowRight } from 'react-icons/hi2';
import Link from 'next/link';

export default function PlayButton({ size, src, img, title, artist, href }) {
  const {
    changePlaySrc,
    playSrc,
    changePlayImg,
    changePlayTitle,
    changePlayArtist,
  } = useContext(MainContext);

  const handleClickPlay = (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (src) {
      changePlaySrc(src);
      changePlayImg(img);
      changePlayTitle(title);
      changePlayArtist(artist);
    }
  };

  return (
    <>
      <div
        className='absolute bottom-0 right-0 w-0 h-0 
             border-b-[80px] border-r-[80px] 
             border-b-neutral-700 border-r-transparent
             cursor-pointer z-10 -rotate-90 opacity-80'
      ></div>
      {artist && (
        <PiPlayLight
          className='absolute bottom-[10px] right-[10px] 
             opacity-70 
            hover:opacity-90 duration-300 
            hover:scale-110 ease-in-out z-20'
          color='white'
          size={size ? size : 25}
          onClick={(event) => handleClickPlay(event)}
        />
      )}
      {href && (
        <Link href={href}>
          <HiArrowRight
            className='absolute bottom-[10px] right-[10px]
             opacity-70
            hover:opacity-90 duration-300
            hover:scale-110 ease-in-out z-20'
            color='white'
            size={size ? size : 24}
          />
        </Link>
      )}
    </>
  );

  // return (
  //   <div
  //     className={
  //       'p-4  rounded-full flex items-center justify-center overflow-hidden aspect-square bg-black'
  //     }
  //     onClick={(event) => handleClickPlay(event)}

  //     //   style={{ zIndex: '0 !important' }}
  //     //   style={{ filter: 'saturate(0)' }}
  //   >
  //     {/* <Image
  //           src={image}
  //           alt={itemObj.title}
  //           width={180}
  //           height={180}
  //           className=' duration-500 ease-in-out'
  //         /> */}
  //     <PiPlayLight
  //       className=' opacity-40 hover:opacity-90 duration-300 hover:scale-110 ease-in-out cursor-pointer z-10'
  //       color='white'
  //       size={size ? size : 30}
  //     />
  //   </div>
  // );
}
