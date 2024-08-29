import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.artesonora.net',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://www.artesonora.net/sobre',
      lastModified: new Date(),
      changeFrequency: 'weekly',
    },
    {
      url: 'https://www.artesonora.net/podcast',
      lastModified: new Date(),
      changeFrequency: 'weekly',
    },
    {
      url: 'https://www.artesonora.net/mixtape',
      lastModified: new Date(),
      changeFrequency: 'weekly',
    },
    {
      url: 'https://www.artesonora.net/varanda-sonora',
      lastModified: new Date(),
      changeFrequency: 'weekly',
    },
    {
      url: 'https://www.artesonora.net/na-historia',
      lastModified: new Date(),
      changeFrequency: 'weekly',
    },
    {
      url: 'https://www.artesonora.net/varanda-sonora',
      lastModified: new Date(),
      changeFrequency: 'weekly',
    },
    {
      url: 'https://www.artesonora.net/ativacoes',
      lastModified: new Date(),
      changeFrequency: 'weekly',
    },
  ];
}
