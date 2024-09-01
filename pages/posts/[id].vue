<script setup lang="ts">
import { readItem } from '@directus/sdk'
import MarkdownIt from 'markdown-it'

const route = useRoute()
const id = route.params.id

const post = ref()
const mdContent = ref()
const readPost = async (id: string) => {
  const res = await client.request(readItem('work_yurina', id))
  return res
}

onMounted(async () => {
  post.value = await readPost(id as string)

  if (post.value.content) {
    mdContent.value = new MarkdownIt().render(post.value.content)
  } else {
    mdContent.value = '待补充...'
  }
})
</script>

<template>
  <div v-if="post" class="single-post-page">
    <header>
      <h1>{{ post.title }}</h1>
      <h2>{{ post.sub_title }}</h2>
    </header>

    <div v-html="mdContent" class="mt-12"></div>
  </div>
</template>

<style lang="scss" scoped></style>
