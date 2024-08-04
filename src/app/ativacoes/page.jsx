import { load } from 'outstatic/server';
import Image from 'next/image';
import Title from '@/components/subpages/Title';
import OptionsAtivacoes from '@/components/subpages/OptionsAtivacoes';
import bgAtivacoes from '../../../public/images/bgAtivacoes.jpg';
import AllCardsAtivacoes from '@/components/subpages/AllCardsAtivacoes';
import markdownToHtml from '@/lib/markdownToHtml';

export default async function Page() {
  const news = await getData();

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
            {/* <div className='hidden md:block w-[38%]'>
              <Description />
            </div> */}
            {/* <OptionsAtivacoes /> */}
            <div className='hidden md:block text-base max-w-[60%] mt-8 font-lato text-white/90'>
              Ao longo dos anos, realizamos diversas ativações, que aos poucos
              serão documentadas por aqui.
            </div>
          </div>
        </div>
      </div>

      {/* cards */}
      {/* <TextAtivacoes /> */}
      <AllCardsAtivacoes items={news} />
    </section>
  );
}

async function getData() {
  const db = await load();

  // news
  let news = await db
    .find({ collection: 'news' }, [
      'title',
      'content',
      'publishedAt',
      'slug',
      'coverImage',
      // 'collaborators',
    ])
    .sort({ publishedAt: -1 })
    .toArray();

  // const collabs = podcasts.map((post) => post.collaborators[0]);

  // const collaboratorsData = await db
  //   .find(
  //     {
  //       collection: 'collaborators',
  //       title: { $in: collabs.map((col) => col.label) },
  //       // title: { $in: post.collaborators.map((col) => col.label) },
  //       // title: post.collaborators[0].label,
  //     },
  //     ['title', 'coverImage', 'slug']
  //   )
  //   .toArray();

  news = await Promise.all(
    news.map(async (post) => {
      post.content = await markdownToHtml(post.content);
      return post;
    })
  );

  return news;
}
