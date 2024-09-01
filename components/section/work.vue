<script setup lang="ts">
import type { IWork } from '~/types/from-directus'
import { readItems } from '@directus/sdk'

const works = ref()
const readWork = async () => {
  const res = await client.request<IWork>(
    readItems(dirStaticConfig.workCollection, {
      sort: '-date_updated',
    })
  )
  return res
}

onMounted(async () => {
  works.value = await readWork()
})

const onWorkClick = (work: any) => {
  navigateTo(`/posts/${work.id}`)
}
</script>

<template>
  <div class="work__cards">
    <div
      v-for="card in works"
      :key="card.title"
      class="work__card"
      @click="onWorkClick(card)"
    >
      <div class="flex flex-col flex-1 w-[calc(50%-24px)] max-w-[300px] mt-2">
        <div class="text-3xl">{{ card.title }}</div>
        <div class="text-lg w-auto max-w-[300px] text-wrap break-words">
          {{ card.sub_title }}
        </div>
      </div>
      <img
        class="ml-auto block min-w-1/2 w-1/2 max-w-[400px] h-[140px] rounded-lg border border-neutral-300"
        :src="dirAssetsSrc(card.img)"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.work {
  &__cards {
    @apply w-full max-w-[800px] mt-12;
    @apply flex flex-col gap-8;
  }

  &__card {
    @apply flex gap-4 w-full items-start;
    @apply max-w-[800px];
  }
}
</style>
