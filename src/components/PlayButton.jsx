'use client';

import { PiPlayLight } from 'react-icons/pi';
import { useContext } from 'react';
import { MainContext } from '@/context/mainContext';
import Image from 'next/image';

export default function PlayButton({ size, src, img, title, artist }) {
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
    <div
      className={
        'p-4 w-[30%] rounded-full flex items-center justify-center overflow-hidden aspect-square bg-black'
      }
      onClick={(event) => handleClickPlay(event)}

      //   style={{ zIndex: '0 !important' }}
      //   style={{ filter: 'saturate(0)' }}
    >
      {/* <Image
            src={image}
            alt={itemObj.title}
            width={180}
            height={180}
            className=' duration-500 ease-in-out'
          /> */}
      <PiPlayLight
        className=' opacity-40 hover:opacity-90 duration-300 hover:scale-110 ease-in-out cursor-pointer z-10'
        color='white'
        size={size ? size : 30}
      />
    </div>
  );
}
