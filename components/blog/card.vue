<script setup lang="ts">
import type { IBlog } from '~/types/from-directus'

const props = defineProps<{
  blog: IBlog
}>()

const onWorkClick = () => {
  navigateTo(`/articles/${props.blog.id}`)
}
</script>

<template>
  <div class="blog__card" @click="onWorkClick">
    <div class="blog__card-image">
      <img
        class="object-cover w-full h-full"
        :src="dirAssetsSrc(props.blog.image)"
      />
    </div>
    <h1>{{ props.blog.title }}</h1>
  </div>
</template>

<style lang="scss" scoped>
.blog__card {
  @apply p-2 cursor-pointer flex flex-col gap-2;

  h1 {
    @apply text-sm h-[24px] line-clamp-1;
  }

  &-image {
    @apply w-full h-[170px] rounded-lg overflow-hidden;
  }
}
</style>
