// 'use client';
import Link from 'next/link';
import { formatPostType } from '@/lib/utils';

const CarouselCard = ({ post }) => {
  console.log('posts', post);
  return (
    <Link href={`/${formatPostType(post.type[0].label)}/${post.slug}`}>
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
        <div className='absolute bottom-0 left-0 z-10 flex justify-center w-full'>
          <p className='bg-gradient-to-br from-white/20 to-white/0 p-8 text-2xl font-black uppercase text-black backdrop-blur-lg my-0 w-full'>
            {post.title}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CarouselCard;
