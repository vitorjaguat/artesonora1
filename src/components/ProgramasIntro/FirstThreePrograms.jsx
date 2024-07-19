import Image from 'next/image';
import { useContext, useState } from 'react';
import { MainContext } from '@/context/mainContext';
import { PiPlayLight } from 'react-icons/pi';
import Link from 'next/link';
import { formatPostType } from '@/lib/utils';
import { useMediaQuery } from '@/util/useMediaQuery';

export default function FirstThreePrograms({ firstThree }) {
  // console.log('firstThree', firstThree);
  const [description, setDescription] = useState(null);
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

  return (
    <div className='absolute flex justify-center md:block w-[calc(100vw-80px)] md:w-full top-32 left-10 md:translate-x-0 md:top-10 md:left-14 '>
      <div className='w-full md:w-1/2 flex flex-col gap-4'>
        <div className='-mb-2 w-full text-center md:tracking-[4px]'>
          episódios mais recentes:
        </div>
        <div className='flex  gap-2 text-white/90'>
          {firstThree.map((post, index) => (
            <Link
              key={index}
              href={`${formatPostType(post.type[0].label)}/${post.slug}`}
              className={
                'flex w-full flex-col items-center gap-0 rounded-md overflow-hidden duration-300' +
                (description === post.content ? ' bg-black/40 scale-105' : '') +
                (index > 1 && ' hidden md:inline-flex')
              }
              onMouseEnter={() => {
                if (isDesktop) setDescription(post.content);
              }}
              onMouseLeave={() => {
                if (isDesktop) setDescription(null);
              }}
            >
              {/* image */}
              <div className='p-2 w-full flex justify-center h-fit bg-neutral-300/20'>
                <div className='w-20 h-20  flex justify-center items-center'>
                  <div
                    className='relative w-20 h-20 rounded-full overflow-hidden'
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
                        className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 opacity-40 hover:opacity-90 duration-300 hover:scale-110 ease-in-out cursor-pointer'
                        color='white'
                      />
                    )}
                  </div>
                </div>
              </div>

              {/* title */}
              <div
                className='py-2 w-full flex justify-center items-center text-center text-xs md:text-sm px-4 bg-neutral-300/80 h-full text-black/80'
                // style={{ writingMode: 'vertical-rl' }}
              >
                {post.title}
              </div>
            </Link>
          ))}
        </div>

        {/* description */}
        {description && (
          <div className='w-full flex flex-col justify-end text-white/70 p-2 rounded-md bg-black/50 font-light'>
            <div
              className='w-full'
              dangerouslySetInnerHTML={{
                __html: description.split('\n')[0],
              }}
              // style={{ fontWeight: '200 !important' }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
