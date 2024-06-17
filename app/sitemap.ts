import { MetadataRoute } from 'next'
 
const link : string = 'https://www.bestdjguides.com'
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: link,
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: link + '/about',
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    {
        url: link + '/tips',
        changeFrequency: 'daily',
        priority: 0.8,
      },
      {
        url: link + '/reviews',
        changeFrequency: 'daily',
        priority: 0.8,
      },
      {
        url: link + '/news',
        changeFrequency: 'daily',
        priority: 0.8,
      },
  ]
}