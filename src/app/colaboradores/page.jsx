import { load } from 'outstatic/server';
import markdownToHtml from '../../lib/markdownToHtml';
import CollabCard from '@/components/CollabCard';
import HeaderSubpage from '@/components/HeaderSubpage';
import Image from 'next/image';
import collabBg from '../../../public/images/collabBg.jpg';
import Title from '@/components/subpages/Title';
import Description from '@/components/subpages/Description';
import AllCards from '@/components/subpages/AllCards';
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
    <section className='relative text-white/50 max-w-[100vw] h-full md:max-w-none md:w-[calc(100vw-52px)]  md:h-full md:min-h-[calc(100vh-92px)] '>
      {/* fixed: */}
      <div className='fixed top-0 md:left-[52px] w-full  md:w-[calc(100vw-52px)] h-[calc(100vh-109px)] md:h-[calc(100vh-92px)] overflow-x-hidden'>
        <div className='relative w-full h-full overflow-hidden'>
          <div className='absolute inset-0 max-h-full w-full h-full'>
            <Image
              src={collabBg}
              alt='Colaboradores'
              fill
              style={{
                objectFit: 'cover',
                zIndex: 0,
              }}
              priority={true}
            />
          </div>

          {/* title */}
          <div className='absolute md:w-fit top-[69px] md:top-14 right-5 md:right-8 lg:right-14 xl:right-24 z-10  text-right  text-white/70 font-light font-chakra text-5xl md:text-7xl  flex flex-col items-end gap-6'>
            <div className='block md:hidden'>
              <Title title='Colaboradores' />
            </div>
            <div className='hidden  md:block'>Colaboradores</div>
            <div className='hidden md:block w-[38%]'>
              <Description />
            </div>
          </div>
        </div>

        {/* description */}
        {/* <div
          className='absolute right-5 md:right-8 bottom-5 md:bottom-8 w-2/3 md:w-1/3 text-right text-xs md:text-base text-white/90'
          style={{
            opacity: isLoading ? 0 : 1,
            transitionProperty: 'opacity',
            transitionDuration: '500ms',
          }}
        >
          {data.podcast.description.split('.').map((sentence, i) => (
            <RevealText width='100%' key={i}>
              <div className='w-full flex justify-end text-right'>
                {sentence}
              </div>
            </RevealText>
          ))}
        </div> */}
      </div>

      {/* cards */}
      <AllCards items={allCollaborators} />
    </section>
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
    .sort({ title: 1 })
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
