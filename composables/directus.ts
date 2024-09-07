import { createDirectus, rest } from '@directus/sdk'

export const dirStaticConfig = {
  artCollection: 'art_yurina',
  workCollection: 'work_yurina',
  blogCollection: 'blog_yurina',
  apiUrl: 'https://api.nescraft.cn',
}

export const dirAssetsSrc = (src: string) => {
  return `${dirStaticConfig.apiUrl}/assets/${src}?key=fastload-quality-75`
}

export const client = createDirectus(dirStaticConfig.apiUrl).with(rest())
