<script setup lang="ts">
const images = [
  {
    title: 'Title',
    description: '123',
    img: '/hero.png',
  },
  {
    title: 'Title',
    description: '123',
    img: '/wave.png',
  },
  {
    title: 'Title',
    description: '123',
    img: '/hero.png',
  },
  {
    title: 'Title',
    description: '123',
    img: '/hero.png',
  },
  {
    title: 'Title',
    description: '123',
    img: '/wave.png',
  },
]
</script>

<template>
  <div class="art">
    <MasonryWall :gap="16" :column-width="300" :items="images">
      <template #default="{ item }">
        <img
          :src="item.img"
          class="w-full rounded-lg border border-neutral-300"
        />
      </template>
    </MasonryWall>
  </div>
</template>

<style lang="scss" scoped>
.art {
  @apply max-w-full w-[100vw];
}
</style>
