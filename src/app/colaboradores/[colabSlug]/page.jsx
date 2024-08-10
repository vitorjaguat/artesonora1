import HeaderSubpage from '@/components/HeaderSubpage';
import { getDocumentBySlug, load, getDocumentSlugs } from 'outstatic/server';
import markdownToHtml from '../../../lib/markdownToHtml';
import PlayButton from '@/components/PlayButton';
import Image from 'next/image';
import Link from 'next/link';
import { SlSocialSoundcloud } from 'react-icons/sl';
import ItemCard from '@/components/ItemCard';
import { RxInstagramLogo } from 'react-icons/rx';
import { LiaFacebookSquare } from 'react-icons/lia';
import { RiTwitterXFill } from 'react-icons/ri';
import Title from '@/components/subpages/Title';
import bgVarandaSlug from '../../../../public/images/bgVarandaSlug.jpg';
import Card from '@/components/subpages/Card';
import CardProgramForCollab from '@/components/subpages/CardProgramForCollab';

async function getData(params) {
  const collab = getDocumentBySlug('collaborators', params.colabSlug, [
    'title',
    'publishedAt',
    'slug',
    'content',
    'coverImage',
    'facebook',
    'twitter',
    'instagram',
  ]);
  const db = await load();
  // const imgArr = post.collaborators.map(col => col.label).map(async (label) => await db.find({collection: 'collaborators', title: label}).first())
  const collabPosts = await db
    .find(
      {
        collection: 'posts',
        collaborators: { $elemMatch: { label: collab.title } },
        // collaborators: { $in: [collab.title] },
        // title: post.collaborators[0].label,
      },
      [
        'title',
        'slug',
        'type',
        'publishedAt',
        'content',
        'fileLink',
        'collaborators',
      ]
    )
    .sort({ publishedAt: -1 })
    .toArray();

  // console.log('collabPosts', collabPosts);
  const content = await markdownToHtml(collab.content);
  // console.log('post', post);

  return {
    ...collab,
    content,
    collabPosts,
  };
}

// export async function generateStaticParams() {}

export default async function ColabSlug({ params }) {
  const {
    content,
    title,
    coverImage,
    publishedAt,
    slug,
    collabPosts,
    instagram,
    twitter,
    facebook,
  } = await getData(params);

  // console.log('instagram', instagram);
  // const soundcloudPageUrl = `https://soundcloud.com/artesonora/${slug.replace(
  //   'pod',
  //   'podcast'
  // )}`;

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

            {/* Social + Programs DESKTOP */}
            {/* Social DESKTOP */}
            {(instagram || twitter || facebook) && (
              <div className='hidden sm:flex w-full items-center justify-end gap-4'>
                {instagram && (
                  <a
                    href={instagram}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='hover:text-white hover:scale-105 duration-300'
                  >
                    <RxInstagramLogo size={23} />
                  </a>
                )}
                {twitter && (
                  <a
                    href={twitter}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='hover:text-white hover:scale-105 duration-300'
                  >
                    <RiTwitterXFill size={23} />
                  </a>
                )}
                {facebook && (
                  <a
                    href={facebook}
                    className='-ml-1 hover:text-white hover:scale-105 duration-300'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <LiaFacebookSquare size={28} />
                  </a>
                )}
              </div>
            )}

            {/* Programs DESKTOP */}
            <div className={'hidden sm:flex w-1/2 gap-4 flex-wrap justify-end'}>
              {collabPosts.length > 0 &&
                collabPosts.map((item, i) => (
                  <CardProgramForCollab
                    key={i}
                    post={item}
                    image={coverImage}
                    small={collabPosts.length > 4 ? true : false}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>

      {/* not fixed */}
      <div className={'flex mt-4 sm:mt-20 md:w-[calc(100vw-52px)]'}>
        <div className='pt-48 sm:pt-8 px-4 sm:px-0 sm:pl-8 lg:pt-14 lg:pl-14 xl:pt-24 xl:pl-24 pb-[130px] sm:pb-[calc(109px+60px)] flex-1 flex flex-col sm:flex-row gap-4 md:gap-4 md:justify-normal'>
          {/* Social + Programs MOBILE */}

          {/* Programs MOBILE */}
          <div className='flex sm:hidden w-full gap-4 flex-wrap justify-center'>
            {collabPosts.length > 0 &&
              collabPosts.map((item, i) => (
                <CardProgramForCollab key={i} post={item} image={coverImage} />
              ))}
          </div>

          {/* Social MOBILE */}
          {(instagram || twitter || facebook) && (
            <div className='pt-4 flex sm:hidden w-fit items-center justify-end gap-4 z-[9]'>
              {instagram && (
                <a
                  href={instagram}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:text-white hover:scale-105 duration-300'
                >
                  <RxInstagramLogo size={30} />
                </a>
              )}
              {twitter && (
                <a
                  href={twitter}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:text-white hover:scale-105 duration-300'
                >
                  <RiTwitterXFill size={30} />
                </a>
              )}
              {facebook && (
                <a
                  href={facebook}
                  className='-ml-1 hover:text-white hover:scale-105 duration-300'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <LiaFacebookSquare size={36} />
                </a>
              )}
            </div>
          )}

          {/* content */}
          <div
            className='content sm:w-1/2 relative'
            dangerouslySetInnerHTML={{ __html: content }}
          ></div>
          <div className=' bg-green-300'></div>
        </div>
      </div>
    </section>
  );
}

export const dynamic = 'force-static';
export const revalidate = false;
export async function generateStaticParams() {
  const posts = getDocumentSlugs('collaborators');
  return posts.map((slug) => ({ colabSlug: slug }));
}
