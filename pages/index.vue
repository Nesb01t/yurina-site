<script setup lang="ts">
import About from '@/components/section/about.vue'
</script>

<template>
  <div class="about-page">
    <About></About>
  </div>
</template>

<style lang="scss" scoped>
.about-page {
  @apply flex flex-col mx-auto items-center gap-8;
  width: 100%;
  position: relative;
}
</style>
