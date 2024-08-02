import HeaderSubpage from '@/components/HeaderSubpage';
import { getDocumentBySlug, load, getDocuments } from 'outstatic/server';
import markdownToHtml from '../../../lib/markdownToHtml';
import Image from 'next/image';
import Link from 'next/link';
import PlaySlug from '@/components/PlaySlug';
import { HiOutlineArrowNarrowDown } from 'react-icons/hi';
import Title from '@/components/subpages/Title';
import bgVarandaSlug from '../../../../public/images/bgVarandaSlug.jpg';

async function getData(params) {
  const post = getDocumentBySlug('posts', params.varandaSlug, [
    'title',
    'publishedAt',
    'slug',
    'content',
    'coverImage',
    'collaborators',
    'soundcloudLink',
    'type',
    'fileLink',
  ]);

  // if (post?.status === 'draft') return null;

  const db = await load();
  // const imgArr = post.collaborators.map(col => col.label).map(async (label) => await db.find({collection: 'collaborators', title: label}).first())
  const collaboratorsData = await db
    .find(
      {
        collection: 'collaborators',
        title: { $in: post?.collaborators?.map((col) => col.label) },
        // title: post.collaborators[0].label,
      },
      ['title', 'coverImage', 'slug']
    )
    .toArray();

  // console.log('collaboratorsData', collaboratorsData);

  const content = await markdownToHtml(post.content);
  // console.log('post', post);

  // if (post?.type[0].label !== 'Varanda Sonora') return null;

  return {
    ...post,
    content,
    collaboratorsData,
  };
}

// export async function generateStaticParams() {}

export default async function VarandaSlug({ params }) {
  const {
    content,
    title,
    coverImage,
    publishedAt,
    slug,
    collaborators,
    soundcloudLink,
    type,
    fileLink,
    collaboratorsData,
  } = await getData(params);

  return (
    <section className='relative text-white/50 max-w-[100vw] h-full md:max-w-none md:w-[calc(100vw-52px)]  md:h-full md:min-h-[calc(100vh-92px)] '>
      {/* fixed: */}
      <div className='fixed top-0 md:left-[52px] w-full  md:w-[calc(100vw-52px)] h-[calc(100vh-109px)] md:h-[calc(100vh-92px)] overflow-x-hidden'>
        <div className='relative w-full h-full overflow-hidden'>
          <div className='absolute inset-0 max-h-full w-full h-full'>
            <Image
              src={bgVarandaSlug}
              alt='Varanda Sonora'
              fill
              style={{
                objectFit: 'cover',
                zIndex: 0,
              }}
              priority={true}
            />
          </div>

          {/* title */}
          <div
            className={
              'absolute md:w-fit top-[69px] md:top-14 right-5 md:right-8 lg:right-14 xl:right-24  z-50  text-right  text-white/70 font-light font-chakra md:text-5xl h-full flex flex-col items-end gap-10' +
              (title.length >= 40
                ? ' text-3xl'
                : title.length > 16 && title.length < 40
                ? ' text-4xl'
                : ' text-5xl')
            }
          >
            <div className='block px-4 md:hidden'>
              <Title title={title} />
            </div>
            <div className='hidden md:block'>{title}</div>

            {/* Play + Colaboradores DESKTOP */}
            <div className='hidden sm:flex md:h-[calc(100vh-300px)] flex-col justify-end items-end gap-6 z-50'>
              <PlaySlug
                title={title}
                fileLink={fileLink}
                soundcloudLink={soundcloudLink}
                collaborators={collaborators}
                collaboratorsData={collaboratorsData}
              />

              {/* Colaboradores */}
              <div className=' p-4 flex flex-col items-center gap-6 border-neutral-300 rounded-lg bg-white/10'>
                <div className='text-neutral-400 text-sm'>
                  Colabor{collaboratorsData.length > 1 ? 'aram' : 'ou'} neste
                  episódio:
                  {/* <HiOutlineArrowNarrowDown
                    size={18}
                    className='inline animate-bounce'
                  /> */}
                </div>

                {collaboratorsData.map((collaborator, i) => (
                  <Link
                    key={i}
                    className='flex items-center gap-6'
                    href={`/colaboradores/${collaborator.slug}`}
                  >
                    <div className='flex-grow text-base'>
                      {collaborator.title}
                    </div>

                    <div className='rounded-full overflow-hidden aspect-square w-[80px] h-[80px]'>
                      <Image
                        src={collaborator.coverImage}
                        width={80}
                        height={80}
                        alt={collaborator.title}
                      />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* not fixed */}
      <div className={'flex mt-4 sm:mt-20 md:w-[calc(100vw-52px)]'}>
        <div className='pt-48 sm:pt-8 px-4 sm:px-0 sm:pl-8 lg:pt-14 lg:pl-14 xl:pt-24 xl:pl-24 pb-[130px] sm:pb-[calc(109px+60px)] flex-1 flex flex-col sm:flex-row gap-4 md:gap-4 md:justify-normal'>
          {/* Play + Colaboradores MOBILE */}
          <div className='sm:hidden flex flex-col justify-center items-center gap-6 z-[9]'>
            <PlaySlug
              title={title}
              fileLink={fileLink}
              soundcloudLink={soundcloudLink}
              collaborators={collaborators}
              collaboratorsData={collaboratorsData}
            />

            {/* Colaboradores */}
            <div className='w-full p-2 flex flex-col items-center gap-3 border-neutral-300 rounded-lg bg-white/10'>
              <div className='text-neutral-400 text-base'>
                Colabor{collaboratorsData.length > 1 ? 'aram' : 'ou'} neste
                episódio:
                {/* <HiOutlineArrowNarrowDown
                    size={18}
                    className='inline animate-bounce'
                  /> */}
              </div>

              {collaboratorsData.map((collaborator, i) => (
                <Link
                  key={i}
                  className='flex items-center gap-6'
                  href={`/colaboradores/${collaborator.slug}`}
                >
                  <div className='flex-grow text-lg'>{collaborator.title}</div>

                  <div className='rounded-full overflow-hidden aspect-square w-[70px] h-[70px]'>
                    <Image
                      src={collaborator.coverImage}
                      width={70}
                      height={70}
                      alt={collaborator.title}
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* content */}
          <div
            className='sm:w-1/2 relative'
            dangerouslySetInnerHTML={{ __html: content }}
          ></div>
          <div className=' bg-green-300'></div>
        </div>
      </div>
    </section>
  );
}

// export async function generateStaticParams() {
//   const posts = getDocumentSlugs('posts');
//   return posts.map((slug) => ({ varandaSlug: slug }));
// }

export async function generateStaticParams() {
  const allPosts = getDocuments('posts', ['type', 'slug', 'status']);
  const allVaranda = allPosts.filter(
    (post) => post.type.map((type) => type.label).includes('Varanda Sonora')
    // && post.status === 'published' // TODO: when at least 3 posts are published, remove comment out
  );

  // const posts = getDocumentSlugs('posts');
  return allVaranda.map((post) => {
    return {
      varandaSlug: post.slug,
    };
  });
}
