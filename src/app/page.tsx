'use client';

import Layout from '../components/Layout';
import { load } from 'outstatic/server';
import ContentGrid from '../components/ContentGrid';
import { Metadata } from 'next';
import markdownToHtml from '../lib/markdownToHtml';
import { absoluteUrl } from '@/lib/utils';
import Hero from '@/components/Hero';
import { useEffect } from 'react';
import Lenis from 'lenis';

export default async function Index() {
  // const { allPosts } = await getData();
  // console.log('allPosts', allPosts);

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);

      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <Hero />
      <div className=''>
        <section className='w-full flex items-center justify-center'>
          {/* <div
            className="prose lg:prose-2xl home-intro"
            dangerouslySetInnerHTML={{ __html: content }}
          /> */}
        </section>
        <div className='h-[2000px] w-full bg-neutral-800'></div>
        {/* {allPosts.length > 0 && (
          <ContentGrid
            title='Posts'
            items={allPosts}
            collection='posts'
            priority
          />
        )}
        {allProjects.length > 0 && (
          <ContentGrid
            title='Projects'
            items={allProjects}
            collection='projects'
          />
        )} */}
      </div>
    </>
  );
}

// async function getData() {
//   const db = await load();

//   // const page = await db
//   //   .find({ collection: 'pages', slug: 'home' }, ['content'])
//   //   .first();

//   // const content = await markdownToHtml(page.content);

//   const allPosts = await db
//     .find({ collection: 'posts' }, [
//       'title',
//       'publishedAt',
//       'slug',
//       'coverImage',
//       'description',
//       'tags',
//     ])
//     .sort({ publishedAt: -1 })
//     .limit(5)
//     .toArray();

//   // const allProjects = await db
//   //   .find({ collection: 'projects' }, ['title', 'slug', 'coverImage'])
//   //   .sort({ publishedAt: -1 })
//   //   .toArray();

//   return {
//     // content,
//     allPosts,
//     // allProjects,
//   };
// }
