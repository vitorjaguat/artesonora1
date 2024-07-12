// 'use client';
import Link from 'next/link';
import { formatPostType } from '@/lib/utils';
import PlayButton from './PlayButton';

const CarouselCard = ({ post }) => {
  console.log('posts', post);
  return (
    <Link href={`/${formatPostType(post.type[0].label)}/${post.slug}`}>
      {/* bg */}
      <div
        key={post.title}
        className='group relative h-[350px] w-[350px] overflow-hidden'
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
