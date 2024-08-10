'use client';

import Link from 'next/link';
import { useContext } from 'react';
import { MainContext } from '@/context/mainContext';
import Image from 'next/image';
import { PiPlayLight } from 'react-icons/pi';
import { formatPostType } from '../../lib/utils';
export default function CardProgramForCollab({ post, image, small = false }) {
  const {
    changePlaySrc,
    playSrc,
    changePlayImg,
    changePlayTitle,
    changePlayArtist,
  } = useContext(MainContext);

  const handleClickPlay = () => {
    changePlaySrc(post.fileLink);
    changePlayImg(image);
    changePlayTitle(post.title);
    changePlayArtist(
      post.collaborators.map((colObj) => colObj.label).join(', ')
    );
    // console.log(post);
  };

  return (
    <Link
      href={`/${
        post?.type?.length > 0
          ? formatPostType(post.type[0].label)
          : 'colaboradores'
      }/${post.slug}`}
      className={
        'relative flex flex-col items-center gap-0 rounded-md overflow-hidden duration-300 border-[1px] border-neutral-400 border-opacity-0 group md:hover:border-opacity-100' +
        (small ? ' w-[120px]' : ' w-[140px]')
      }
    >
      {/* image */}
      <div className='p-2 w-full flex justify-center h-fit bg-neutral-300/20'>
        <div
          className={
            'flex justify-center items-center' +
            (small ? ' w-24 h-24' : ' w-32 h-32')
          }
        >
          <div
            className={
              'relative rounded-full overflow-hidden' +
              (small ? ' w-24 h-24' : ' w-32 h-32')
            }
            //   style={{ zIndex: '0 !important' }}
            //   style={{ filter: 'saturate(0)' }}
          >
            <Image
              src={image}
              alt={post.title}
              className='rounded-full object-cover aspect-square'
              width={160}
              height={160}
            />
            {post?.fileLink && (
              <PiPlayLight
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleClickPlay(e);
                }}
                className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 opacity-60 md:hover:opacity-90 duration-300 md:hover:scale-110 ease-in-out cursor-pointer '
                color='white'
              />
            )}
          </div>
        </div>
      </div>

      {/* title */}
      <div
        className='relative py-2 w-full flex flex-col md:flex-row justify-center items-center text-center  px-4 bg-neutral-300/70 md:bg-neutral-300/50 h-full text-black font-chakra md:group-hover:text-white/90 duration-300'
        // style={{ writingMode: 'vertical-rl' }}
      >
        <div className={'text-base md:text-sm'}>{post.title}</div>

        {/* saiba mais */}
        <div className='absolute bottom-0 right-2 md:bottom-0 md:right-1 md:hover:animate-pulse md:group-hover:text-white md:group-hover:scale-150 duration-300 font-semibold md:font-normal text-lg md:text-base '>
          +
        </div>
      </div>
    </Link>
  );
}
