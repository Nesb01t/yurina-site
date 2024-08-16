<script setup lang="ts"></script>

<template>
  <div class="header">
    <img class="header__hero" src="/hero.png" />
    <ul class="header__content">
      <NuxtLink to="/">About</NuxtLink>
      <NuxtLink to="/stories">Stories</NuxtLink>
      <NuxtLink to="/work">Work</NuxtLink>
    </ul>

    <img class="header__img" src="/wave.png" />
  </div>
</template>

<style lang="scss" scoped>
.header {
  @apply flex flex-col max-md:h-[340px] h-[400px] items-center gap-8 pt-8;
  width: 100%;
  position: relative;

  &__img {
    @apply top-0 absolute object-top max-md:h-[340px] h-[400px] transition-all duration-300;
    z-index: -2;
    width: 100%;
  }

  &__hero {
    z-index: -1;
    object-fit: cover;
    width: 380px;
  }

  &__content {
    @apply max-md:text-xl text-2xl font-sans;
    @apply flex justify-center gap-16 cursor-pointer;
    width: 100%;
    max-width: 300px;
    list-style: none;
    color: white;
  }
}
</style>
