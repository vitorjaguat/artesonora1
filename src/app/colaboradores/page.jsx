import { load } from 'outstatic/server';
import markdownToHtml from '../../lib/markdownToHtml';
import CollabCard from '@/components/CollabCard';
import HeaderSubpage from '@/components/HeaderSubpage';
// import OutstaticSchema from 'outstatic/dist/utils/server';
// import imgPlaceholder from '@/public/images/imgPlaceholder.webp';

// interface Podcast {
//   title: string;
//   content: string;
//   publishedAt: string;
//   slug: string;
//   soundcloudLink: string;
//   type: string[];
//   collaborators: string[];
//   // include other properties of the podcast object
// }

// interface ImageObject {
//   coverImage: string;
//   title: number;
// }

// type Podcast = OutstaticSchema<PodcastComplete>;

export default async function Page() {
  const { allCollaborators } = await getData();

  // console.log(allCollaborators);

  // console.log(podcasts[0].collaborators);

  // return null;

  return (
    <>
      {/* Header */}
      <HeaderSubpage title='Colaboradores' bgImg='/images/dummyImg.png' />

      {/* Content */}
      <div className='pt-10 pb-60 bg-zinc-900 w-full min-h-screen flex flex-col justify-center items-center'>
        <div className='w-full max-w-[90%] md:max-w-[700px] lg:max-w-[900px] flex flex-col items-center justify-center gap-8 text-white'>
          {allCollaborators.map((collab, i) => (
            <>
              <CollabCard
                key={i}
                collabObj={collab}
                image={collab.coverImage}
              />
              {/* #####{i + 1}#####{' '} */}
              {/* <div
            className=''
            dangerouslySetInnerHTML={{ __html: contentArrHtml[i] }}
          /> */}
              {/* <div className=''>{podcast.content}</div> */}
            </>
          ))}
        </div>
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

  const allCollaborators = await db
    .find({ collection: 'collaborators' }, [
      'title',
      'content',
      'publishedAt',
      'slug',
      'coverImage',
      'facebook',
      'twitter',
      'instagram',
    ])
    .sort({ publishedAt: -1 })
    .toArray();

  // const contentArr = filteredPosts.map((post) => post.content);
  // const contentArrHtml = await Promise.all(
  //   contentArr.map((content) => markdownToHtml(content))
  // );

  // const collabImages = await db
  //   .find({ collection: 'collaborators' }, ['title', 'coverImage'])
  //   .toArray();

  // const allProjects = await db
  //   .find({ collection: 'projects' }, ['title', 'slug', 'coverImage'])
  //   .sort({ publishedAt: -1 })
  //   .toArray();

  return {
    allCollaborators,
  };
}
