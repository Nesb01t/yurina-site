<script lang="ts" setup>
import '~/assets/fonts/fonts.scss'

const title = '聪明nes的建模糕手小屋'

useHead({
  title,
  meta: [{ name: 'description', content: 'Page description' }],
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage></NuxtPage>
  </NuxtLayout>
</template>

<style>
body,
main {
  margin: 0;
  padding: 0;
  font-family: 'EduVICWANTBeginner', 'NotoSerif-Regular', 'Roboto', sans-serif;
  background-color: #f5f5f5;
}
</style>
