import { load } from 'outstatic/server';
import markdownToHtml from '../../lib/markdownToHtml';
import ItemCard from '@/components/ItemCard';
import HeaderSubpage from '@/components/HeaderSubpage';
import RevealText from '@/components/RevealText';
import Image from 'next/image';
import dummyPodcast from '../../../public/images/dummyPodcast2.jpg';
import dummyMixtape from '../../../public/images/dummyMixtape.jpg';
import dummyHistoria from '../../../public/images/dummyHistoria.jpg';
import dummyVaranda from '../../../public/images/dummyVaranda.jpg';
import FirstThreePrograms2 from '@/components/ProgramasIntro/FirstThreePrograms2';
import AllCards from '@/components/subpages/AllCards';
import TextAtivacoes from '@/components/subpages/TextAtivacoes';
import Description from '@/components/subpages/Description';
import Title from '@/components/subpages/Title';
import OptionsAtivacoes from '@/components/subpages/OptionsAtivacoes';
import bgAtivacoes from '../../../public/images/bgAtivacoes.jpg';

export default async function Page() {
  const podcasts = await getData();
  const isLoading = false;

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
            <OptionsAtivacoes />
          </div>
        </div>
      </div>

      {/* cards */}
      <TextAtivacoes />
    </section>
  );
}

async function getData() {
  const db = await load();

  // podcasts
  let podcasts = await db
    .find({ collection: 'posts', 'type.value': 'podcast' }, [
      'title',
      'content',
      'publishedAt',
      'slug',
      'collaborators',
      'fileLink',
      'type',
    ])
    .sort({ publishedAt: -1 })
    .toArray();

  const collabs = podcasts.map((post) => post.collaborators[0]);

  const collaboratorsData = await db
    .find(
      {
        collection: 'collaborators',
        title: { $in: collabs.map((col) => col.label) },
        // title: { $in: post.collaborators.map((col) => col.label) },
        // title: post.collaborators[0].label,
      },
      ['title', 'coverImage', 'slug']
    )
    .toArray();

  podcasts = await Promise.all(
    podcasts.map(async (post) => {
      post.collaborators = post.collaborators.map((col) => {
        return collaboratorsData.find((collab) => collab.title === col.label);
      });
      // post.content = await markdownToHtml(post.content);
      return post;
    })
  );

  return podcasts;
}
