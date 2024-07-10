import HeaderSubpage from '@/components/HeaderSubpage';
import { getDocumentBySlug, load, getDocumentSlugs } from 'outstatic/server';
import markdownToHtml from '../../../lib/markdownToHtml';
import { absoluteUrl } from '@/lib/utils';
import PlayButton from '@/components/PlayButton';
import Image from 'next/image';
import Link from 'next/link';
import { SlSocialSoundcloud } from 'react-icons/sl';

// import { generateStaticParams } from '@/app/posts/[slug]/page';

async function getData(params) {
  const post = getDocumentBySlug('posts', params.mixtapeSlug, [
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
  const db = await load();
  // const imgArr = post.collaborators.map(col => col.label).map(async (label) => await db.find({collection: 'collaborators', title: label}).first())
  const collaboratorsData = await db
    .find(
      {
        collection: 'collaborators',
        title: { $in: post.collaborators.map((col) => col.label) },
        // title: post.collaborators[0].label,
      },
      ['title', 'coverImage', 'slug']
    )
    .toArray();

  // console.log('collaboratorsData', collaboratorsData);

  const content = await markdownToHtml(post.content);
  // console.log('post', post);

  return {
    ...post,
    content,
    collaboratorsData,
  };
}

// export async function generateStaticParams() {}

export default async function MixtapeSlug({ params }) {
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
  // const post = await getData(params);
  // console.log('post', post);
  // console.log('cover image', coverImage);
  console.log('soundcloudLink', soundcloudLink);

  const soundcloudPageUrl = `https://soundcloud.com/artesonora/${slug.replace(
    'mix',
    'mixtape'
  )}`;
  return (
    <>
      <HeaderSubpage
        title={title}
        // bgImg='https://placehold.co/600x400?text=imagem&font=lora'
        bgImg={
          coverImage
            ? absoluteUrl(coverImage)
            : 'https://placehold.co/600x400?text=imagem&font=lora'
        }
        kind='2'
      />
      <div className='pt-10 pb-60 w-full flex flex-col justify-center items-center bg-black/90 text-white/90'>
        <div className='flex flex-col gap-5 w-[90%] md:w-[700px] lg:w-[900px]'>
          {/* Play subheader */}
          <div className='flex items-center gap-4 p-4 w-full rounded-full bg-zinc-600'>
            <PlayButton
              size={25}
              src={fileLink}
              title={title}
              img={collaboratorsData[0]?.coverImage}
              artist={collaborators
                .map((collaborator) => collaborator.label)
                .join(', ')}
            />
            <div className='flex flex-col text-neutral-300'>
              <div className='text-sm'>Ouça agora</div>
              <div className='text-sm'>{title}</div>
              {/* {collaborators.length > 0 && (
                <div className='text-xs'>
                  com a participação de{' '}
                  {collaborators.map((col) => col.label).join(', ')}
                </div>
              )} */}
              {soundcloudLink.includes('/player/?') && (
                <div className='text-xs flex items-center gap-1'>
                  Disponível também no{' '}
                  <a
                    href={soundcloudPageUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <SlSocialSoundcloud size={20} />
                  </a>
                </div>
              )}
            </div>
          </div>
          <div
            className='w-full'
            dangerouslySetInnerHTML={{ __html: content }}
          />
          <div className='mt-10 p-4 flex flex-col gap-3 border-neutral-300 rounded-lg bg-white/10'>
            <div className='text-neutral-500 text-sm'>
              Colabor{collaboratorsData.length > 1 ? 'aram' : 'ou'} neste
              episódio:
            </div>
            {/* Colaboradores */}

            {collaboratorsData.map((collaborator, i) => (
              <div key={i} className='flex items-center gap-4'>
                <Image
                  className='rounded-full'
                  src={collaborator.coverImage}
                  width={50}
                  height={50}
                  alt={collaborator.title}
                />
                <Link href={`/colaboradores/${collaborator.slug}`}>
                  <div className='flex-grow'>{collaborator.title}</div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export async function generateStaticParams() {
  const posts = getDocumentSlugs('posts');
  return posts.map((slug) => ({ mixtapeSlug: slug }));
}
