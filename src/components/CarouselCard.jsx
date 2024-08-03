// 'use client';
import Link from 'next/link';
import { formatPostType } from '@/lib/utils';
import PlayButton from './PlayButton';
import Image from 'next/image';
import { useAnimationControls, motion } from 'framer-motion';
import { absoluteUrl } from '@/lib/utils';

const CarouselCard = ({ post }) => {
  console.log('posts', post);
  const controls = useAnimationControls();

  return (
    <Link
      href={`/${formatPostType(post.type[0].label)}/${post.slug}`}
      className='w-[360px] h-[360px] flex items-center justify-center  overflow-hidden aspect-square rounded-sm text-white'
      onMouseEnter={() => controls.start('resize')}
      onMouseLeave={() => controls.start('initial')}
    >
      <div className=' relative aspect-square w-full h-full overflow-hidden'>
        {/* INFO LAYER */}

        <div className='absolute flex flex-col items-center justify-between top-0 left-0 right-0 bottom-0 w-full h-full text-xs border-[1px] border-neutral-700'>
          <div className='flex flex-col items-center justify-center w-full h-full  bg-transparent px-2 gap-2'>
            <div className='text-center leading-4 mb-1 font-chakra text-lg'>
              {post.title}
            </div>
            <div className='md:hidden font-thin text-sm'>
              {post.content.split('.')[0]}.
            </div>
          </div>
          <div className='flex justify-between h-full w-full'>
            <div className='h-full w-full bg-transparent'></div>
            <div className='h-full w-full flex items-center justify-center text-white font-light bg-transparent text-base duration-500 border-t-[1px] border-neutral-700'>
              <div className='hidden md:block'>{post.type[0].label}</div>
              <div className='md:hidden'>
                {post?.fileLink && (
                  <div className='md:hidden'>
                    <PlayButton
                      size={40}
                      src={post?.fileLink}
                      img={post?.image}
                      title={post?.title}
                      artist={post?.collaborators[0]?.label}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* IMAGE LAYER */}
        <motion.div
          className='absolute'
          variants={{
            initial: {
              top: '50%',
              bottom: 0,
              left: 0,
              right: '50%',
            },
            resize: {
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
            },
          }}
          initial='initial'
          animate={controls}
        >
          <div className='relative w-full h-full overflow-hidden'>
            <motion.div
              className='absolute w-full h-full inset-0'
              variants={{
                initial: {
                  filter: 'saturate(100%) blur(0px)',
                },
                resize: {
                  filter: 'saturate(0%) blur(3px)',
                },
              }}
              initial='initial'
              animate={controls}
            >
              {post.image && (
                <Image
                  alt={post.title}
                  src={post.image}
                  fill
                  className='object-cover z-0'
                />
              )}
            </motion.div>
            <motion.div
              className='absolute inset-0 w-full h-full flex flex-col items-center justify-center gap-3 z-50 p-4'
              variants={{
                initial: { opacity: 0 },
                resize: { opacity: 1 },
              }}
              initial='initial'
              animate={controls}
            >
              <PlayButton
                size={20}
                src={post.fileLink}
                img={post.image}
                title={post.title}
                artist={post.collaborators[0].label}
              />
              <div className='font-thin text-sm p-3 bg-black/70 rounded-sm'>
                {post.content.split('.')[0]}.
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </Link>
  );

  return (
    <Link href={`/${formatPostType(post.type[0].label)}/${post.slug}`}>
      {/* bg */}
      <div
        key={post.title}
        className='group relative h-[360px] w-[360px] overflow-hidden'
      >
        <div
          style={{
            //   backgroundImage: `url(${
            //     'https://artesonora1.vercel.app/' + post.image
            //   })`,
            backgroundImage: `url(${post.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          className='absolute inset-0 z-0 transition-transform duration-500 group-hover:scale-110'
        ></div>

        {/* title */}
        <div className='absolute bottom-0 left-0 z-10 flex justify-center w-full'>
          <p className='relative bg-gradient-to-br from-white/20 to-white/0 p-6 text-xl font-black uppercase text-black backdrop-blur-lg my-0 w-full'>
            {post.title}
            <div className='absolute -translate-y-1/2 top-0 right-6'>
              <PlayButton
                size={20}
                src={post.fileLink}
                img={post.image}
                title={post.title}
                artist={post.collaborators[0].label}
              />
            </div>
            {/* <div className='absolute -translate-y-2/3 top-0 left-6'>
              <div className='rounded-xl bg-zinc-300 text-black/80 text-xs px-3 py-1'>
                {post.type[0].label}
              </div>
            </div> */}
          </p>
        </div>

        {/* label */}
        <div className='absolute top-0 left-0 bg-zinc-300/40 text-black/80 text-xs px-3 py-1 uppercase'>
          {post.type[0].label}
        </div>
      </div>
    </Link>
  );
};

export default CarouselCard;
