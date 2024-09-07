<script setup lang="ts">
import { readItems } from '@directus/sdk'

const blogs = ref()
const readBlogs = async () => {
  const res = await client.request(
    readItems(dirStaticConfig.blogCollection, {
      sort: '-date_updated',
    })
  )
  return res
}

onMounted(async () => {
  blogs.value = await readBlogs()
})
</script>

<template>
  <dir class="cards">
    <div v-for="b in blogs" class="cards__card">
      <BlogCard class="h-[230px]" :blog="b" />
    </div>
  </dir>
</template>

<style lang="scss" scoped>
.cards {
  @apply p-0 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3;
  @apply justify-center items-center;

  &__card {
    @apply col-span-1 h-full w-full;
  }
}
</style>
