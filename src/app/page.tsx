import Layout from '../components/Layout';
import { load } from 'outstatic/server';
import ContentGrid from '../components/ContentGrid';
import markdownToHtml from '../lib/markdownToHtml';

export default async function Index() {
  const { content, allPosts, allProjects } = await getData();

  return (
    <Layout>
      <div className='max-w-6xl mx-auto'>
        <section className='w-full flex items-center justify-center py-16'>
          {/* <div
            className="prose lg:prose-2xl home-intro"
            dangerouslySetInnerHTML={{ __html: content }}
          /> */}
          <div className='text-5xl font-bold'>Arte Sonora</div>
        </section>
        <div className='h-[9000px] w-full bg-zinc-200'></div>
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

  const page = await db
    .find({ collection: 'pages', slug: 'home' }, ['content'])
    .first();

  const content = await markdownToHtml(page.content);

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

  const allProjects = await db
    .find({ collection: 'projects' }, ['title', 'slug', 'coverImage'])
    .sort({ publishedAt: -1 })
    .toArray();

  return {
    content,
    allPosts,
    allProjects,
  };
}
