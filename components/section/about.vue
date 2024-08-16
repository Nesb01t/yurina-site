<script setup lang="ts">
const hobbies = ['唱', '跳', 'rap', '篮球']
</script>

<template>
  <div class="about-section">
    <div class="about-section__me">
      <div class="min-w-60 flex flex-col items-center gap-8 text-3xl">
        <img src="/avatar.gif" />
        <div>Yurina</div>
      </div>

      <div class="text-lg">
        你好，我是<br />
        Yurina，喜欢唱，跳，rap，篮球，画画，做饭，吃饭，睡觉，打游戏，看电影<br />
        看书，旅行，摄影，健身，瑜伽，冥想，学习，思考，分享，交流，成长，探索，创造，生活，生命。
      </div>
    </div>

    <div class="about-section__interest">
      <div class="text-3xl">Hobbies</div>
      <div class="flex gap-4 flex-wrap">
        <div v-for="hobby in hobbies" :key="hobby" class="text-lg">
          {{ hobby }}
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.about-section {
  @apply flex flex-col items-center gap-24 pt-12;
  width: 100%;
  position: relative;

  &__me {
    @apply flex items-center;

    img {
      @apply w-40 h-40;
    }
  }

  &__interest {
    @apply flex flex-col items-center gap-4;
  }
}
</style>
