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

const data = {
  podcast: {
    title: 'Podcast',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt voluptatibus odio fuga sint eaque ipsa, est maiores veniam aspernatur magnam eligendi quis aliquam, consectetur blanditiis voluptate nisi accusantium labore. Amet. Placeat aut iste unde explicabo dolor delectus quidem! A aspernatur eius molestias animi! Nulla accusamus est aliquid vero porro labore unde praesentium rerum sint quaerat, iure nisi assumenda? Est, placeat?',
    image: dummyPodcast,
    id: 1,
    link: '/podcast',
  },
  mixtape: {
    title: 'Mixtape',
    description:
      'Aperiam expedita dolores unde doloribus repudiandae quia, earum voluptatum eius quisquam. Obcaecati laudantium vel, illo minima iste officiis maiores debitis reiciendis quasi aliquid qui officia, expedita delectus? A, tenetur cumque! Voluptates ex, sunt quibusdam reprehenderit sequi suscipit ad quidem, earum officia totam architecto velit quia. Mollitia, exercitationem aliquam impedit voluptatem adipisci, deleniti temporibus repudiandae iste magni laborum, recusandae sequi quae!',
    // image: '/images/dummyMixtape.jpg',
    image: dummyMixtape,
    id: 2,
    link: '/mixtape',
  },
  naHistória: {
    title: 'Na História',
    description:
      'Culpa repudiandae veritatis ipsam porro ea, debitis praesentium laudantium molestias. Labore non eaque quas eum explicabo, sint ea nemo nostrum minima odit iure culpa ipsa similique earum, sapiente, fuga aliquam! Reprehenderit, deleniti accusantium illum odio, molestiae sit vero modi, quis quisquam id earum suscipit at temporibus dicta consequatur possimus eum inventore. Porro similique officia voluptate, incidunt sed impedit nostrum iure?',
    // image: '/images/dummyHistoria.jpg',
    image: dummyHistoria,
    id: 3,
    link: '/na-historia',
  },
  varandaSonora: {
    title: 'Varanda Sonora',
    description:
      'Laboriosam neque debitis voluptatem maxime modi omnis adipisci vel voluptate cum dolore quas doloremque harum blanditiis, nulla animi molestias dolores odio amet fugit deserunt quidem quod error. Possimus, aliquam architecto. Qui id necessitatibus quia aliquid ipsam soluta est repellendus nostrum at sunt! Optio magnam dolore itaque natus libero numquam delectus fugiat nostrum doloribus! Ducimus sed illum eos sequi sit mollitia.',
    // image: '/images/dummyVaranda.jpg',
    image: dummyVaranda,
    id: 4,
    link: '/varanda-sonora',
  },
};
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
