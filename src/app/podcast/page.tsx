import { load } from 'outstatic/server';

export default async function Page() {
  const { allPodcasts: podcasts } = await getData();
  console.log(podcasts);

  return (
    <div className=''>
      {podcasts.map((podcast, i) => (
        <div key={i} className=''>
          {podcast.content}
        </div>
      ))}
    </div>
  );
}

async function getData() {
  const db = await load();

  // const page = await db
  //   .find({ collection: 'pages', slug: 'home' }, ['content'])
  //   .first();

  // const content = await markdownToHtml(page.content);

  const allPodcasts = await db
    .find({ collection: 'posts' }, [
      'title',
      'content',
      'publishedAt',
      'slug',
      'collaborators',
      'soundcloudLink',
      'type',
    ])
    .sort({ publishedAt: -1 })
    .toArray();

  // const allProjects = await db
  //   .find({ collection: 'projects' }, ['title', 'slug', 'coverImage'])
  //   .sort({ publishedAt: -1 })
  //   .toArray();

  return {
    // content,
    allPodcasts,
    // allProjects,
  };
}
