import { getDocuments, getDocumentBySlug } from 'outstatic/server';
import markdownToHtml from '../../../lib/markdownToHtml';

import Image from 'next/image';

import TextAtivacoesSlug from '@/components/subpages/TextAtivacoesSlug';
import Title from '@/components/subpages/Title';
import OptionsAtivacoes from '@/components/subpages/OptionsAtivacoes';
import bgAtivacoes from '../../../../public/images/bgAtivacoes.jpg';
import Link from 'next/link';
import { LiaFastBackwardSolid } from 'react-icons/lia';

async function getData(params) {
  const post = getDocumentBySlug('news', params.ativacoesSlug, [
    'title',
    'publishedAt',
    'slug',
    'content',
    'coverImage',
    //   'collaborators',
    'status',
  ]);

  // const db = await load();

  // const collaboratorsData = await db
  //   .find(
  //     {
  //       collection: 'collaborators',
  //       title: { $in: post?.collaborators?.map((col) => col.label) },
  //     },
  //     ['title', 'coverImage', 'slug']
  //   )
  //   .toArray();

  const content = await markdownToHtml(post.content);

  return {
    ...post,
    content,
    //   collaboratorsData,
  };
}

export default async function Page({ params }) {
  const {
    content,
    title,
    coverImage,
    publishedAt,
    slug,
    // collaborators,
    // collaboratorsData,
  } = await getData(params);

  return (
    <section className='relative text-white/50 max-w-[100vw] h-full md:max-w-none md:w-[calc(100vw-52px)]  md:h-full md:min-h-[calc(100vh-92px)] '>
      {/* fixed: */}
      <div className='fixed top-0 md:left-[52px] w-full  md:w-[calc(100vw-52px)] h-[calc(100vh-109px)] md:h-[calc(100vh-92px)] overflow-x-hidden'>
        <div className='relative w-full h-full overflow-hidden'>
          <div className='absolute inset-0 max-h-full w-full h-full'>
            <Image
              src={bgAtivacoes}
              alt='Ativações'
              fill
              style={{
                objectFit: 'cover',
                zIndex: 0,
              }}
              priority={true}
            />
          </div>

          {/* title */}
          <div className='absolute md:w-fit top-[69px] md:top-14 right-5 md:right-8 lg:right-14 xl:right-24 z-10  text-right  text-white/70 font-light font-chakra text-5xl md:text-8xl  flex flex-col items-end gap-6'>
            <div className='block md:hidden'>
              <Title title='Ativações' />
            </div>
            <div className='hidden  md:block'>Ativações</div>

            {/* voltar desktop */}
            <Link
              href='/ativacoes'
              className='hidden md:block mt-8 text-neutral-300 hover:text-neutral-50 hover:scale-105 duration-300'
            >
              <div className='flex gap-1 items-center select-none'>
                <LiaFastBackwardSolid size={28} />
                <div className='text-base'>voltar</div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* cards */}
      <TextAtivacoesSlug title={title} content={content} />
    </section>
  );
}

export const dynamicParams = false;
export async function generateStaticParams() {
  const allNews = getDocuments('news', ['slug', 'status']);
  const publishedNews = allNews.filter((n) => n.status === 'published');

  // const posts = getDocumentSlugs('posts');
  return publishedNews.map((n) => {
    return {
      ativacoesSlug: n.slug,
    };
  });
}
