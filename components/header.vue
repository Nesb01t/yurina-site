<script setup lang="ts">
const paths = [
  { name: 'About', path: '/' },
  { name: 'Work', path: '/work' },
  { name: 'Art', path: '/Art' },
]

const pathsWithoutCurrent = computed(() => {
  return paths.filter((i) => i.path !== useRoute().path)
})

const currentPathName = computed(() => {
  return paths.find((i) => i.path === useRoute().path)?.name
})

const isCurrentPath = (path: string) => {
  return path.toLowerCase() == useRoute().path
}
</script>

<template>
  <div class="header">
    <img class="header__hero" src="/hero.png" />

    <ul class="header__content">
      <h1 class="text-6xl flex-1">{{ currentPathName }}</h1>
      <NuxtLink v-for="i in pathsWithoutCurrent" :to="i.path">
        <span :class="isCurrentPath(i.path) ? `text-4xl` : ``">
          {{ i.name }}
        </span>
      </NuxtLink>
    </ul>

    <img class="header__img" src="/wave.png" />
  </div>
</template>

<style lang="scss" scoped>
.header {
  @apply flex flex-col min-h-[240px] h-[240px] items-center gap-8 pt-8 px-2 mb-2;
  width: 100%;
  position: relative;

  &__img {
    @apply top-0 absolute object-cover h-[240px] transition-all duration-300;
    filter: blur(2px) brightness(0.6);
    z-index: -2;
    width: 100%;
  }

  &__hero {
    @apply absolute top-[-45px];
    @apply drop-shadow-lg;
    z-index: -1;
    object-fit: cover;
    width: 380px;
  }

  &__content {
    @apply max-w-[800px] w-full mt-auto mb-[-7px];
    @apply max-md:text-2xl text-3xl items-end;
    @apply flex gap-16;
    width: 100%;
    list-style: none;
    color: white;

    & {
      @apply transition-all duration-150;
    }

    a {
      @apply cursor-pointer hover:scale-[110%] hover:translate-y-[-1px] transition-all duration-150;
      @apply hover:text-purple-300;
    }
  }
}
</style>
