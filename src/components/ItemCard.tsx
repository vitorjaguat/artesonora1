'use client';

import Image from 'next/image';
import type { StaticImport } from 'next/dist/shared/lib/get-img-props';
import { PiPlayLight } from 'react-icons/pi';
import { useContext } from 'react';
import { MainContext } from '@/context/mainContext';
import Link from 'next/link';
import TransitionLink from './TransitionLink';

type ItemCardProps = {
  itemObj: any; // Replace 'any' with the appropriate type for itemObj
  image: string | StaticImport; // Replace 'any' with the appropriate type for image
  type: 'podcast' | 'mixtape' | 'na-historia';
};

export default function ItemCard({ itemObj, image, type }: ItemCardProps) {
  const {
    changePlaySrc,
    playSrc,
    changePlayImg,
    changePlayTitle,
    changePlayArtist,
  } = useContext(MainContext);

  const handleClickPlay = () => {
    changePlaySrc(itemObj.fileLink);
    changePlayImg(image);
    changePlayTitle(itemObj.title);
    changePlayArtist(
      itemObj.collaborators.map((colObj: any) => colObj.label).join(', ')
    );
    console.log(itemObj);
  };

  return (
    <div className='w-full md:max-w-full h-96 md:h-fit p-4 rounded-lg bg-white/20 flex flex-col md:flex-row justify-between items-center gap-6 group duration-300 shadow-[10px_10px_25px_-8px_rgba(255,255,255,0.3)]'>
      <div className=' w-40 h-40 flex justify-center items-center'>
        <div
          className='relative w-40 h-40 rounded-full overflow-hidden'
          //   style={{ zIndex: '0 !important' }}
          //   style={{ filter: 'saturate(0)' }}
        >
          <Image
            src={image}
            alt={itemObj.title}
            className='rounded-full object-cover'
            width={160}
            height={160}
          />
          <PiPlayLight
            onClick={handleClickPlay}
            className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 opacity-40 hover:opacity-90 duration-300 hover:scale-110 ease-in-out cursor-pointer'
            color='white'
          />
        </div>
      </div>

      <TransitionLink
        href={`/${type}/${itemObj.slug}`}
        className='h-full md:flex-grow md:w-full flex flex-col justify-between items-center md:items-start gap-2'
      >
        <div className='text-2xl'>{itemObj.title}</div>
        <div className='text-sm text-center md:text-left mt-2'>
          {itemObj.content.slice(0, 180)}...
        </div>
      </TransitionLink>
    </div>
  );
}

// export default function ItemCard({ itemObj, image }: ItemCardProps) {
//   return (
//     <div className='w-full max-w-[700px] h-60 p-4 rounded-lg bg-white/20 flex justify-between items-center gap-6 group duration-300 shadow-[10px_10px_25px_-8px_rgba(255,255,255,0.3)]'>
//       <div className='flex justify-center items-center w-full'>
//         <div
//           className='rounded-full overflow-hidden  '
//           //   style={{ zIndex: '0 !important' }}
//           //   style={{ filter: 'saturate(0)' }}
//         >
//           <Image
//             src={image}
//             alt={itemObj.title}
//             width={180}
//             height={180}
//             className=' duration-500 ease-in-out'
//           />
//         </div>
//       </div>
//       <div className='h-full max-w-[65%]'>
//         <div className='text-3xl'>{itemObj.title}</div>
//         <div className='text-sm'>{itemObj.content.slice(0, 300)}...</div>
//       </div>
//     </div>
//   );
// }
