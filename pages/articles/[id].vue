<script setup lang="ts">
import { readItem } from '@directus/sdk'
import MarkdownIt from 'markdown-it'

const route = useRoute()
const id = route.params.id

const post = ref()
const mdContent = ref()
const readPost = async (id: string) => {
  const res = await client.request(readItem('blog_yurina', id))
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

    <div v-html="mdContent" class="mx-auto mt-12 prose"></div>
  </div>
</template>

<style lang="scss" scoped>
.single-post-page {
  header {
    @apply text-center;
  }

  h1 {
    @apply text-4xl font-bold my-6;
  }

  h2 {
    @apply text-2xl font-semibold;
  }

  .prose {
    @apply prose-lg;
  }
}
</style>
