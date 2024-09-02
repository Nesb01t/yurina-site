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
  <div>
    <div v-for="b in blogs">
      <BlogCard :blog="b" />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
