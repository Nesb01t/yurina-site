<script setup lang="ts">
import type { IArt } from '~/types/from-directus'
import { readItems } from '@directus/sdk'

const arts = ref<IArt[]>()
const readArts = async () => {
  const res = await client.request<IArt[]>(
    readItems(dirStaticConfig.artCollection, {
      sort: '-date_updated',
    })
  )
  return res
}

onMounted(async () => {
  arts.value = await readArts()
})
</script>

<template>
  <div class="art" v-if="arts">
    <div class="w-[768px] my-4 rounded-lg overflow-hidden shadow-lg">
      <iframe
        class="w-full h-[400px]"
        src="//player.bilibili.com/player.html?isOutside=true&aid=112830686693061&bvid=BV1yt8tepEDZ&cid=500001623941614&p=1"
        scrolling="no"
        border="0"
        frameborder="no"
        framespacing="0"
        allowfullscreen="true"
      ></iframe>
    </div>
    <MasonryWall :gap="16" :column-width="300" :items="arts">
      <template #default="{ item }">
        <img
          :src="dirAssetsSrc(item.img)"
          class="w-full rounded-lg border border-neutral-300"
        />
        <span class="text-xs text-gray-500">
          {{ item.title }}
        </span>
      </template>
    </MasonryWall>
  </div>
</template>

<style lang="scss" scoped>
.art {
  @apply max-w-full w-[100vw];
}
</style>
