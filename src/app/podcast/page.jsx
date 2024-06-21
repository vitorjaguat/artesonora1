import { load } from 'outstatic/server';
import markdownToHtml from '../../lib/markdownToHtml';
import ItemCard from '@/components/ItemCard';
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
  const { allPodcasts: podcasts, contentArrHtml, allImages } = await getData();

  console.log(podcasts[0].collaborators);

  return (
    <div className='bg-black w-full min-h-screen flex flex-col justify-center items-center gap-8'>
      <div
        className={'bg-g h-80 w-full relative'}
        style={{
          backgroundImage:
            'url(https://placehold.co/600x400?text=imagem&font=lora)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className='absolute bottom-4 right-4 text-5xl md:text-8xl'>
          Podcast
        </div>
      </div>
      <div className='w-full max-w-[900px] flex flex-col items-center justify-center gap-4 text-white'>
        {podcasts.map((podcast, i) => (
          <>
            <ItemCard
              key={i}
              itemObj={podcast}
              image={
                allImages.find(
                  (img) => img.title === podcast?.collaborators[0].label
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
  );
}

async function getData() {
  const db = await load();

  // const page = await db
  //   .find({ collection: 'pages', slug: 'home' }, ['content'])
  //   .first();

  // const content = await markdownToHtml(page.content);

  const allPodcasts = await db
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

  const contentArr = allPodcasts.map((podcast) => podcast.content);
  const contentArrHtml = await Promise.all(
    contentArr.map((content) => markdownToHtml(content))
  );

  const allImages = await db
    .find({ collection: 'collaborators' }, ['title', 'coverImage'])
    .toArray();

  // const allProjects = await db
  //   .find({ collection: 'projects' }, ['title', 'slug', 'coverImage'])
  //   .sort({ publishedAt: -1 })
  //   .toArray();

  return {
    // content,
    allPodcasts,
    allImages,
    contentArrHtml,
    // allProjects,
  };
}
