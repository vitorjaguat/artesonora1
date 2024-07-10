import HeaderSubpage from '@/components/HeaderSubpage';
import { getDocumentBySlug, load, getDocumentSlugs } from 'outstatic/server';
import markdownToHtml from '../../../lib/markdownToHtml';
import { absoluteUrl } from '@/lib/utils';
import PlayButton from '@/components/PlayButton';
import Image from 'next/image';
import Link from 'next/link';
import { SlSocialSoundcloud } from 'react-icons/sl';
import ItemCard from '@/components/ItemCard';

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

  console.log('collabPosts', collabPosts);
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
  const { content, title, coverImage, publishedAt, slug, collabPosts } =
    await getData(params);

  // const soundcloudPageUrl = `https://soundcloud.com/artesonora/${slug.replace(
  //   'pod',
  //   'podcast'
  // )}`;

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
        blur={true}
      />
      <div className='pt-10 pb-60 w-full flex flex-col justify-center items-center bg-black/90 text-white/90'>
        <div className='flex flex-col gap-5 max-w-[90%] md:max-w-[700px] lg:max-w-[900px]'>
          {/* Play subheader (removed) */}

          <div
            className='w-full'
            dangerouslySetInnerHTML={{ __html: content }}
          />

          {/* Posts com esse colaborador: */}
          {/* <div className='mt-10 p-4 flex flex-col gap-3 border-neutral-300 rounded-lg bg-white/10'>
            <div className='text-neutral-500 text-sm'>
              Conteúdo relacionado:
            </div> */}

          <div className='w-full flex flex-col gap-5'>
            {collabPosts.map((post, i) => (
              // <div key={i} className='flex items-center gap-4'>
              //   <Image
              //     className='rounded-full'
              //     src={absoluteUrl(collaborator.coverImage)}
              //     width={50}
              //     height={50}
              //     alt={collaborator.title}
              //   />
              //   <Link href={`/${post.type[0].value}/${post.slug}`}>
              //     <div className='flex-grow'>{post.title}</div>
              //   </Link>
              // </div>
              <ItemCard
                key={i}
                itemObj={post}
                image={coverImage}
                type={post.type[0].value}
              />
            ))}
          </div>
          {/* </div> */}
        </div>
      </div>
    </>
  );
}

export const dynamic = 'force-static';
export const revalidate = false;
export async function generateStaticParams() {
  const posts = getDocumentSlugs('collaborators');
  return posts.map((slug) => ({ slug }));
}
