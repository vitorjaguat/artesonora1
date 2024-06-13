import { load } from 'outstatic/server';
import markdownToHtml from '../../lib/markdownToHtml';

export default async function Page() {
  const { allPodcasts: podcasts, contentArrHtml } = await getData();

  return (
    <div className=''>
      {podcasts.map((podcast, i) => (
        <div key={i} className=''>
          #####{i + 1}#####{' '}
          <div
            className=''
            dangerouslySetInnerHTML={{ __html: contentArrHtml[i] }}
          />
          {/* <div className=''>{podcast.content}</div> */}
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

  const contentArr = allPodcasts.map((podcast) => podcast.content);
  const contentArrHtml = await Promise.all(
    contentArr.map((content) => markdownToHtml(content))
  );

  // const allProjects = await db
  //   .find({ collection: 'projects' }, ['title', 'slug', 'coverImage'])
  //   .sort({ publishedAt: -1 })
  //   .toArray();

  return {
    // content,
    allPodcasts,
    contentArrHtml,
    // allProjects,
  };
}
