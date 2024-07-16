import { load } from 'outstatic/server';
import markdownToHtml from '../../lib/markdownToHtml';
import ItemCard from '@/components/ItemCard';
import HeaderSubpage from '@/components/HeaderSubpage';
import RevealText from '@/components/RevealText';
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
  const {
    filteredPosts: posts,
    // contentArrHtml,
    collabImages,
  } = await getData();

  // console.log(podcasts[0].collaborators);

  return (
    <>
      {/* Header */}
      <HeaderSubpage title='Podcast' bgImg='/images/dummyImg.png' />

      {/* Intro text */}
      <div className='pt-24 pb-16 text-white/90 bg-zinc-900 w-full flex flex-col items-center'>
        <div className='w-full max-w-[90%] md:max-w-[700px] lg:max-w-[900px] flex flex-col items-center justify-center gap-8 text-white'>
          <RevealText>
            <div className=''>
              <span className='font-bold'>Arte Sonora Podcast</span> apresenta
              de forma monográfica os principais artistas e pensadores
              brasileiros que tem investigando o mundo através do som e suas
              interfaces,apresentando seu pensamento, obras e interesses.
            </div>
          </RevealText>
          <RevealText>
            <div className=''>
              O programa foi estruturado na forma de uma conversa informal, e
              algumas das vezes foi gravado no próprio espaço do entrevistado,
              exceto um depoimento e duas palestras que ocorreram na Escola de
              Artes Visuais do Parque Lage.
            </div>
          </RevealText>
          <RevealText>
            <div className=''>
              Procuramos colocar o artista e seu pensamento no centro do
              problema. Geralmente, conversamos sobre formação, o interesse pela
              arte e o som, passando pelos principais trabalhos e mostras. Ao
              final, cada entrevistado é instigado a refletir sobre o que lhe
              move nos dias de hoje.
            </div>
          </RevealText>
          <RevealText>
            <div className=''>
              Nossas escolhas são de caráter afetivo mas não deixam de
              considerar o percurso, relevância histórica e originalidade do
              trabalho.{' '}
            </div>
          </RevealText>
          <RevealText>
            <div className=''>
              Por fim, entendemos Arte Sonora como um campo amplo e plural que
              recusa categorizações, o que nos permite apresentar artistas,
              pesquisadores, acadêmicos, músicos, maestros, DJs produtores,
              repentistas e muito mais.
            </div>
          </RevealText>
        </div>
      </div>

      {/* Content */}
      <div className='pb-60 bg-zinc-900 w-full min-h-screen flex flex-col justify-center items-center'>
        <div className='w-full max-w-[90%] md:max-w-[700px] lg:max-w-[900px] flex flex-col items-center justify-center gap-8 text-white'>
          {posts.map((post, i) => (
            <>
              <ItemCard
                key={i}
                itemObj={post}
                type='podcast'
                image={
                  collabImages.find(
                    (img) => img.title === post?.collaborators[0].label
                  )?.coverImage
                }
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

  const filteredPosts = await db
    .find({ collection: 'posts', 'type.value': 'podcast' }, [
      'title',
      'content',
      'publishedAt',
      'slug',
      'collaborators',
      'soundcloudLink',
      'type',
      'fileLink',
    ])
    .sort({ publishedAt: -1 })
    .toArray();

  // const contentArr = filteredPosts.map((post) => post.content);
  // const contentArrHtml = await Promise.all(
  //   contentArr.map((content) => markdownToHtml(content))
  // );

  const collabImages = await db
    .find({ collection: 'collaborators' }, ['title', 'coverImage'])
    .toArray();

  // const allProjects = await db
  //   .find({ collection: 'projects' }, ['title', 'slug', 'coverImage'])
  //   .sort({ publishedAt: -1 })
  //   .toArray();

  return {
    // content,
    filteredPosts,
    collabImages,
    // contentArrHtml,
    // allProjects,
  };
}
