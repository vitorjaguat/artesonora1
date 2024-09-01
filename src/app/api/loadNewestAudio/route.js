import { load } from 'outstatic/server';
import { NextResponse } from 'next/server';

export async function GET() {
  const db = await load();

  // try {
  const latestPost = await db
    .find(
      {
        collection: 'posts',
        status: 'published',
        fileLink: { $exists: true, $ne: '' },
      },
      ['title', 'fileLink', 'collaborators']
    )
    .sort({ publishedAt: -1 })
    .limit(1)
    .toArray();
  // } catch (error) {
  //   console.error('Error fetching latest postttt:', error);
  // }
  console.dir(latestPost, { depth: null });

  const image = await db
    .find(
      {
        collection: 'collaborators',
        title: { $in: latestPost[0].collaborators.map((col) => col.label) },
        // title: { $in: post.collaborators.map((col) => col.label) },
        // title: post.collaborators[0].label,
      },
      ['coverImage']
    )
    .toArray();

  const imageParsed = image[0].coverImage;

  const latestPostParsed = {
    title: latestPost[0].title,
    fileLink: latestPost[0].fileLink,
    collaborators: latestPost[0].collaborators.map((col) => col.label),
    image: imageParsed,
  };

  if (latestPost.length > 0) {
    return NextResponse.json(latestPostParsed);
  } else {
    return NextResponse.json({
      title: 'Varanda Sonora #01 - Arto Lindsay + Magno Calliman',
      collaborators: 'Arto Lindsay, Magno Calliman',
      fileLink:
        'https://arweave.net/CHXN5Qzm1mA24_sEG-PxNXjlAgLtTzw1mR6FzphJnRY',
      image: '/images/arto-U5Nz.webp',
    });
  }
}
