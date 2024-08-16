<script setup lang="ts">
const workCard = [
  {
    title: 'Title',
    description:
      'DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription',
    img: '/hero.png',
  },
  {
    title: 'Title',
    description: 'DescriptionDescriptionDescriptionDescription',
    img: '/hero.png',
  },
  {
    title: 'Title',
    description:
      'DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription',
    img: '/hero.png',
  },
  {
    title: 'Title',
    description: 'Description',
    img: '/hero.png',
  },
]
</script>

<template>
  <div class="work__cards">
    <div v-for="card in workCard" :key="card.title" class="work__card">
      <div class="flex flex-col flex-1 w-[calc(50%-24px)] max-w-[300px] mt-2">
        <div class="text-3xl">{{ card.title }}</div>
        <div class="text-lg w-auto max-w-[300px] text-wrap break-words">
          {{ card.description }}
        </div>
      </div>
      <img
        class="ml-auto block min-w-1/2 w-1/2 max-w-[400px] h-[140px] rounded-lg border border-neutral-300"
        :src="card.img"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.work {
  &__cards {
    @apply w-full mt-12;
    @apply flex flex-col gap-8;
  }

  &__card {
    @apply flex gap-4 w-full items-start;
  }
}
</style>
