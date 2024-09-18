'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useMediaQuery } from '@/util/useMediaQuery';

const CardAtivacoes = ({ post }) => {
  // console.log('posts', post);
  const isDesktop = useMediaQuery('sm');

  //mobile:
  if (!isDesktop) {
    return (
      <Link
        href={`/ativacoes/${post.slug}`}
        className='w-full aspect-square flex flex-col justify-between rounded-sm text-white border-[1px] border-neutral-700'
      >
        <div className='flex flex-1 flex-col items-center justify-center w-full h-full  p-3 gap-1 bg-black'>
          <div className='text-center  font-chakra text-xl'>{post.title}</div>
          <div
            className='font-light text-base -mb-3 text-white'
            dangerouslySetInnerHTML={{
              __html:
                post.content.substring(
                  post.content.indexOf('<p>'),
                  (post.content.indexOf('</p>') > 175
                    ? 175
                    : post.content.indexOf('</p>')) + '</p>'.length
                ) + (post.content.indexOf('</p>') > 175 ? '...' : ''),
            }}
          />
        </div>

        <div className='w-full flex-1 flex justify-between'>
          <div className='relative flex-1 aspect-square'>
            <Image
              alt={post.title}
              src={post.coverImage || '/images/exst-E3ND.jpeg'}
              fill
              className='object-cover'
            />
          </div>
          <div className='flex-1 flex justify-center items-center border-t-[1px] border-neutral-700 bg-white/10'>
            Leia mais
          </div>
        </div>
      </Link>
    );
  }
  //desktop:
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
                (post.content.indexOf('</p>') > 300
                  ? 300
                  : post.content.indexOf('</p>')) + '</p>'.length
              ) + (post.content.indexOf('</p>') > 300 ? '...' : ''),
          }}
        />
      </div>
    </Link>
  );
};

export default CardAtivacoes;
