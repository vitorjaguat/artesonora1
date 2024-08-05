import Layout from '../components/Layout';

import ContentGrid from '../components/ContentGrid';
import { Metadata } from 'next';
import markdownToHtml from '../lib/markdownToHtml';
import { absoluteUrl } from '@/lib/utils';
import Hero from '@/components/Hero';
import CarouselContainer from '@/components/CarouselContainer';
import { load } from 'outstatic/server';
import ProgramasIntro from '@/components/ProgramasIntro/ProgramasIntro';
import getProgramasIntroData from '@/components/ProgramasIntro/getProgramasIntroData';
import HomePodcast from '@/components/ProgramasIntro/HomePodcast';
import HomeMixtape from '@/components/ProgramasIntro/HomeMixtape';
import HomeHistoria from '@/components/ProgramasIntro/HomeHistoria';
import HomeVaranda from '@/components/ProgramasIntro/HomeVaranda';

export default async function Index() {
  const { newestPosts } = await getData();
  // console.log('newestPosts', newestPosts);
  const firstThree = await getProgramasIntroData();
  // console.log('firstThree', firstThree);

  return (
    <>
      <Hero />
      <CarouselContainer newestPosts={newestPosts} />
      <HomePodcast firstThree={firstThree.filteredPodcasts} />
      <HomeMixtape firstThree={firstThree.filteredMixtapes} />
      <HomeHistoria firstThree={firstThree.filteredHistoria} />
      <HomeVaranda firstThree={firstThree.filteredVaranda} />

      {/* <ProgramasIntro firstThree={firstThree} /> */}
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
    .find({ collection: { $in: ['posts', 'news'] } }, [
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
    .limit(6)
    .toArray();

  const newestPosts = await Promise.all(
    newestPostsNoImages.map(async (post) => {
      if (post?.collaborators) {
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
          // image: collaborator ? absoluteUrl(collaborator.coverImage) : null,
          image: collaborator ? collaborator.coverImage : null,
        };
      }
      return post;
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
