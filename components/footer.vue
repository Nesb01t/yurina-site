<script setup lang="ts">
const urls = [
  {
    name: '我的 GitHub',
    url: 'https://github.com/nesb01t',
  },
  {
    name: '稀土掘金',
    url: 'https://juejin.cn/user/1128536414880599',
  },
  {
    name: 'EachStar 社区',
    url: 'https://each-star.com/#/',
  },
]
</script>

<template>
  <div class="footer">
    <div class="footer__logo">
      <NuxtLink to="https://github.com/Nesb01t/meteor-v2"
        >🌠 MeteorTemplate V2</NuxtLink
      >
      <NuxtLink to="https://nuxt.com/">Powered by Nuxt.js</NuxtLink>
    </div>
    <div class="footer__nav">
      <div>浙ICP备2024103738号-1</div>
      <div class="flex gap-8">
        <NuxtLink v-for="url in urls" :key="url.name" :to="url.url">
          {{ url.name }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.footer {
  @apply mt-auto mx-auto max-w-[800px] w-[100%];

  @apply flex justify-between items-center;
  @apply p-4 pb-8;

  &__logo {
    @apply text-sm flex flex-col gap-3;
  }

  &__nav {
    @apply text-xs flex flex-col gap-3 items-end;
  }

  a {
    @apply hover:text-purple-800 transition-all duration-300;
  }
}
</style>
