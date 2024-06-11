import Layout from '../components/Layout';
import { load } from 'outstatic/server';
import ContentGrid from '../components/ContentGrid';
import { Metadata } from 'next';
import markdownToHtml from '../lib/markdownToHtml';
import { absoluteUrl } from '@/lib/utils';

export const metadata: Metadata = {
  metadataBase: new URL('https://artesonora1.vercel.app/'),
  title: {
    default: 'Arte Sonora',
    template: '%s | Arte Sonora',
  },
  description: 'Um projeto de Franz Manata e Saulo Laudares',
  openGraph: {
    title: 'Arte Sonora',
    description: 'Um projeto de Franz Manata e Saulo Laudares',
    url: absoluteUrl('/'),
    siteName: 'Arte Sonora',
    images: [
      {
        url: absoluteUrl('/images/og-image.png'),
        width: 1800,
        height: 1600,
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  icons: {
    icon: [{ url: '/favicon/favicon-32x32.png' }],
    apple: [{ url: '/favicon/apple-touch-icon.png' }],
  },
};

export default async function Index() {
  const { allPosts } = await getData();

  return (
    <Layout>
      <div className='max-w-6xl mx-auto'>
        <section className='w-full flex items-center justify-center py-16'>
          {/* <div
            className="prose lg:prose-2xl home-intro"
            dangerouslySetInnerHTML={{ __html: content }}
          /> */}
          <div className='text-5xl font-bold text-zinc-400'>Arte Sonora</div>
        </section>
        <div className='h-[2000px] w-full bg-zinc-200'></div>
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
    </Layout>
  );
}

async function getData() {
  const db = await load();

  // const page = await db
  //   .find({ collection: 'pages', slug: 'home' }, ['content'])
  //   .first();

  // const content = await markdownToHtml(page.content);

  const allPosts = await db
    .find({ collection: 'posts' }, [
      'title',
      'publishedAt',
      'slug',
      'coverImage',
      'description',
      'tags',
    ])
    .sort({ publishedAt: -1 })
    .toArray();

  // const allProjects = await db
  //   .find({ collection: 'projects' }, ['title', 'slug', 'coverImage'])
  //   .sort({ publishedAt: -1 })
  //   .toArray();

  return {
    // content,
    allPosts,
    // allProjects,
  };
}
