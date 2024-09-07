<script setup lang="ts"></script>

<template>
  <div class="default-layout">
    <Header></Header>
    <main>
      <slot />
    </main>
    <Footer></Footer>
  </div>
</template>

<style scoped>
.default-layout {
  @apply min-h-[100vh];
  display: flex;
  flex-direction: column;
  align-items: center;

  main {
    @apply max-w-[1280px] w-full px-4 pt-4 pb-24;
  }
}
</style>
