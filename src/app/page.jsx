import Layout from '../components/Layout';

import ContentGrid from '../components/ContentGrid';
import { Metadata } from 'next';
import markdownToHtml from '../lib/markdownToHtml';
import { absoluteUrl } from '@/lib/utils';
import Hero from '@/components/Hero';
import CarouselContainer from '@/components/CarouselContainer';
import { load } from 'outstatic/server';

export default async function Index() {
  const { newestPosts } = await getData();
  console.log('newestPosts', newestPosts);

  return (
    <>
      <Hero />
      <CarouselContainer newestPosts={newestPosts} />
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

async function getData() {
  const db = await load();

  // const page = await db
  //   .find({ collection: 'pages', slug: 'home' }, ['content'])
  //   .first();

  // const content = await markdownToHtml(page.content);

  const newestPostsNoImages = await db
    .find({ collection: 'posts' }, [
      'title',
      'publishedAt',
      'slug',
      'coverImage',
      'content',
      'collaborators',
      'type',
      'fileLink',
    ])
    .sort({ publishedAt: -1 })
    .limit(10)
    .toArray();

  const newestPosts = await Promise.all(
    newestPostsNoImages.map(async (post) => {
      const collaborator = await db
        .find(
          {
            collection: 'collaborators',
            title: post?.collaborators[0]?.label,
          },
          ['title', 'coverImage']
        )
        .limit(1)
        .first();

      return {
        ...post,
        image: collaborator ? absoluteUrl(collaborator.coverImage) : null,
      };
    })
  );

  // const allProjects = await db
  //   .find({ collection: 'projects' }, ['title', 'slug', 'coverImage'])
  //   .sort({ publishedAt: -1 })
  //   .toArray();

  return {
    newestPosts,
  };
}
