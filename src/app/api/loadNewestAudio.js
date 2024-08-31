import { load } from 'outstatic/server';

export default async function handler(req, res) {
  const db = await load();

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

  const image = await db
    .find(
      {
        collection: 'collaborators',
        title: { $in: latestPost.collaborators.map((col) => col.label) },
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
    res.status(200).json(latestPostParsed);
  } else {
    res.status(200).json({
      title: 'Varanda Sonora #01 - Arto Lindsay + Magno Calliman',
      collaborators: 'Arto Lindsay, Magno Calliman',
      fileLink:
        'https://arweave.net/CHXN5Qzm1mA24_sEG-PxNXjlAgLtTzw1mR6FzphJnRY',
      image: '/images/arto-U5Nz.webp',
    });
  }
}
