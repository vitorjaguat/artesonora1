'use server';
import { load } from 'outstatic/server';
import markdownToHtml from '@/lib/markdownToHtml';

async function getProgramasIntroData() {
  const db = await load();

  // podcasts
  let filteredPodcasts = await db
    .find({ collection: 'posts', 'type.value': 'podcast' }, [
      'title',
      'content',
      'publishedAt',
      'slug',
      'collaborators',
      'fileLink',
      'type',
    ])
    .limit(3)
    .sort({ publishedAt: -1 })
    .toArray();

  const collabs = filteredPodcasts.map((post) => post.collaborators[0]);

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

  filteredPodcasts = await Promise.all(
    filteredPodcasts.map(async (post) => {
      post.collaborators = post.collaborators.map((col) => {
        return collaboratorsData.find((collab) => collab.title === col.label);
      });
      post.content = await markdownToHtml(post.content);
      return post;
    })
  );

  // mixtapes
  let filteredMixtapes = await db
    .find({ collection: 'posts', 'type.value': 'mixtape' }, [
      'title',
      'content',
      'publishedAt',
      'slug',
      'collaborators',
      'fileLink',
      'type',
    ])
    .limit(3)
    .sort({ publishedAt: -1 })
    .toArray();

  const collabsM = filteredMixtapes.map((post) => post.collaborators[0]);

  const collaboratorsDataM = await db
    .find(
      {
        collection: 'collaborators',
        title: { $in: collabsM.map((col) => col.label) },
        // title: { $in: post.collaborators.map((col) => col.label) },
        // title: post.collaborators[0].label,
      },
      ['title', 'coverImage', 'slug']
    )
    .toArray();

  filteredMixtapes = await Promise.all(
    filteredMixtapes.map(async (post) => {
      post.collaborators = post.collaborators.map((col) => {
        return collaboratorsDataM.find((collab) => collab.title === col.label);
      });
      post.content = await markdownToHtml(post.content);
      return post;
    })
  );

  // na História
  let filteredHistoria = await db
    .find({ collection: 'posts', 'type.value': 'naHistória' }, [
      'title',
      'content',
      'publishedAt',
      'slug',
      'collaborators',
      'fileLink',
      'type',
    ])
    .limit(3)
    .sort({ publishedAt: 1 })
    .toArray();

  const collabsH = filteredHistoria.map((post) => post.collaborators[0]);

  const collaboratorsDataH = await db
    .find(
      {
        collection: 'collaborators',
        title: { $in: collabsH.map((col) => col.label) },
        // title: { $in: post.collaborators.map((col) => col.label) },
        // title: post.collaborators[0].label,
      },
      ['title', 'coverImage', 'slug']
    )
    .toArray();

  filteredHistoria = await Promise.all(
    filteredHistoria.map(async (post) => {
      post.collaborators = post.collaborators.map((col) => {
        return collaboratorsDataH.find((collab) => collab.title === col.label);
      });
      post.content = await markdownToHtml(post.content);
      return post;
    })
  );

  // Varanda Sonora:
  let filteredVaranda = await db
    .find({ collection: 'posts', 'type.label': 'Varanda Sonora' }, [
      'title',
      'content',
      'publishedAt',
      'slug',
      'collaborators',
      'fileLink',
      'type',
    ])
    .limit(3)
    .sort({ publishedAt: -1 })
    .toArray();

  const collabsV = filteredVaranda.map((post) => post.collaborators[0]);

  const collaboratorsDataV = await db
    .find(
      {
        collection: 'collaborators',
        title: { $in: collabsV.map((col) => col.label) },
        // title: { $in: post.collaborators.map((col) => col.label) },
        // title: post.collaborators[0].label,
      },
      ['title', 'coverImage', 'slug']
    )
    .toArray();

  filteredVaranda = await Promise.all(
    filteredVaranda.map(async (post) => {
      post.collaborators = post.collaborators.map((col) => {
        return collaboratorsDataV.find((collab) => collab.title === col.label);
      });
      post.content = await markdownToHtml(post.content);
      return post;
    })
  );

  // const collabImages = await db
  //   .find({ collection: 'collaborators' }, ['title', 'coverImage'])
  //   .toArray();

  // const allProjects = await db
  //   .find({ collection: 'projects' }, ['title', 'slug', 'coverImage'])
  //   .sort({ publishedAt: -1 })
  //   .toArray();

  return {
    filteredPodcasts,
    filteredMixtapes,
    filteredHistoria,
    filteredVaranda,
  };
}

export default getProgramasIntroData;
