// 'use client';
import Link from 'next/link';
import { formatPostType } from '@/lib/utils';
import PlayButton from '../PlayButton';
import Image from 'next/image';
import { useAnimationControls, motion } from 'framer-motion';
import { absoluteUrl } from '@/lib/utils';
import { useMediaQuery } from '@/util/useMediaQuery';

const CardAtivacoes = ({ post }) => {
  // console.log('posts', post);
  const controls = useAnimationControls();
  const isDesktop = useMediaQuery('sm');

  //mobile:
  if (!isDesktop) {
    return (
      <Link
        href={`/ativacoes/${post.slug}`}
        className='w-full aspect-square flex items-center justify-center  overflow-hidden rounded-sm text-white'
        onMouseEnter={isDesktop ? () => controls.start('resize') : null}
        onMouseLeave={isDesktop ? () => controls.start('initial') : null}
      >
        <div className=' relative aspect-square w-full h-full overflow-hidden'>
          {/* INFO LAYER */}

          <div className='absolute flex flex-col items-center justify-between top-0 left-0 right-0 bottom-0 w-full h-full text-xs border-[1px] border-neutral-700'>
            <div className='flex flex-col items-center justify-center w-full h-full  bg-transparent px-2 gap-2'>
              <div className='text-center leading-4 mb-1 font-chakra text-lg'>
                {post.title}
              </div>
              <div className='font-thin text-base'>
                {post.content.split('.')[0]}.
              </div>
            </div>
            <div className='flex justify-between h-full w-full'>
              <div className='h-full w-full bg-transparent'></div>
              <div className='h-full w-full flex items-center justify-center text-white font-light bg-transparent text-base duration-500 border-t-[1px] border-neutral-700'>
                <div className=''>Leia mais</div>
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
                    filter: 'blur(0px)',
                  },
                  resize: {
                    filter: 'blur(0px)',
                  },
                }}
                initial='initial'
                animate={controls}
              >
                <Image
                  alt={post.title}
                  src={post.coverImage || '/images/exst-E3ND.jpeg'}
                  fill
                  className='object-cover z-0'
                />
              </motion.div>
              <motion.div
                className='absolute inset-0 w-full h-full flex flex-col items-center justify-center gap-3 z-50 p-4'
                variants={{
                  initial: { opacity: 0 },
                  resize: { opacity: 1, transition: { delay: 0.2 } },
                }}
                // transition={{ delay: 0.2 }}
                initial='initial'
                animate={controls}
              >
                {/* <PlayButton
                size={20}
                src={post.fileLink}
                img={post.image}
                title={post.title}
                artist={post.collaborators[0].label}
              /> */}
                <div className='font-thin text-sm p-3 bg-black/80 rounded-sm'>
                  {post.content.split('.')[1]}.
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={'/ativacoes/' + post.slug}
      className='h-[280px] w-full flex justify-between border-[1px] border-neutral-700'
    >
      <div className='relative aspect-square h-full'>
        <Image
          src={post.coverImage || '/images/exst-E3ND.jpeg'}
          alt={post.title}
          fill
          className='object-cover'
        />
      </div>
      <div className='flex flex-col justify-between w-full h-full p-4 gap-4'>
        <div className='font-chakra font-semibold text-lg lg:text-xl text-white/90'>
          {post.title}
        </div>
        <div
          className='text-sm max-h-full overflow-hidden -mb-3'
          dangerouslySetInnerHTML={{
            __html:
              post.content.substring(
                post.content.indexOf('<p>'),
                (post.content.indexOf('</p>') > 314
                  ? 314
                  : post.content.indexOf('</p>')) + '</p>'.length
              ) + (post.content.indexOf('</p>') > 314 ? '...' : ''),
          }}
        />
      </div>
    </Link>
  );
};

export default CardAtivacoes;
