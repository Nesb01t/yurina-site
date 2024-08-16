<script setup lang="ts"></script>

<template>
  <div class="default-layout">
    <Header></Header>
    <main>
      <slot />
    </main>
  </div>
</template>

<style scoped>
.default-layout {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;

  main {
    @apply max-w-full overflow-hidden pt-4;
  }
}
</style>
