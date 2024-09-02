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
    <h1>{{ props.blog.title }}</h1>
    <h2>{{ props.blog.content }}</h2>
  </div>
</template>

<style lang="scss" scoped>
.blog__card {
  @apply p-4 rounded-lg shadow-sm cursor-pointer;

  h1 {
    @apply text-2xl font-semibold;
  }

  h2 {
    @apply text-lg;
  }
}
</style>
