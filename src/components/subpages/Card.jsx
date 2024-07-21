import Link from 'next/link';
import { formatPostType } from '@/lib/utils';
import { PiPlayLight } from 'react-icons/pi';
import Image from 'next/image';
import { useMediaQuery } from '@/util/useMediaQuery';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';

export default function Card({
  post,
  changeDescription,
  description,
  handleClickPlay,
}) {
  const isDesktop = useMediaQuery('md');

  return (
    <Link
      href={`${formatPostType(post.type[0].label)}/${post.slug}`}
      className={
        'relative flex w-full h-full flex-col items-center gap-0 rounded-md overflow-hidden duration-300 border-[1px] border-neutral-400 border-opacity-0 group hover:border-opacity-100'
      }
      onMouseEnter={() => {
        if (isDesktop) changeDescription(post);
      }}
      onMouseLeave={() => {
        if (isDesktop) changeDescription(null);
      }}
    >
      {/* image */}
      <div className='p-2 w-full flex justify-center h-fit bg-neutral-300/20'>
        <div className='sm:w-20 sm:h-20  flex justify-center items-center'>
          <div
            className='relative sm:w-20 sm:h-20 rounded-full overflow-hidden'
            //   style={{ zIndex: '0 !important' }}
            //   style={{ filter: 'saturate(0)' }}
          >
            <Image
              src={post.collaborators[0].coverImage}
              alt={post.title}
              className='rounded-full object-cover aspect-square'
              width={160}
              height={160}
            />
            {post?.fileLink && (
              <PiPlayLight
                onClick={(e) => handleClickPlay(e, post)}
                className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 opacity-50 hover:opacity-90 duration-300 hover:scale-110 ease-in-out cursor-pointer'
                color='white'
              />
            )}
          </div>
        </div>
      </div>

      {/* title */}
      <div
        className='relative py-2 w-full flex flex-col md:flex-row justify-center items-center text-center  px-4 bg-neutral-300/70 md:bg-neutral-300/50 h-full text-black font-chakra group-hover:text-white/90 duration-300'
        // style={{ writingMode: 'vertical-rl' }}
      >
        <div className='font-semibold md:font-normal text-lg md:text-sm'>
          {post.title}
        </div>

        <div className='block md:hidden pt-2'>
          {post.content.slice(0, 200)}...
        </div>

        {/* saiba mais */}
        <div className='absolute bottom-0 right-2 md:bottom-0 md:right-1 hover:animate-pulse group-hover:text-white group-hover:scale-150 duration-300 font-semibold md:font-normal text-lg md:text-base'>
          +
        </div>
      </div>
    </Link>
  );
}
