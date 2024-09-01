<script setup lang="ts">
interface Hobby {
  name: string
  imgSrc: string
}
const hobbies = ['唱', '跳', 'rap', '篮球']
</script>

<template>
  <div class="about-section">
    <div class="about-section__me">
      <div class="min-w-60 flex flex-col items-center gap-8 text-3xl">
        <img src="/avatar.gif" />
        <div>Yurina</div>
      </div>

      <div class="text-base flex flex-col gap-1">
        <span> 你好 我是yurina 目前是一个动画专业的在校大学生 </span>

        <span>
          目前的制作方向是三维以及二维的动画和游戏，视频的剪辑以及后期。
        </span>

        <span> houdini特效正在学习中 ，RPGmaker像素类游戏制作中…， </span>

        <span> 闲暇之时偶尔会写一些游戏剧本大纲，动画故事。 </span>
        <span>
          3D方向熟悉的软件：unreal engine5,maya,cinema4D,daz3D,marvelous
          designer,substance 3d,Zbrush等</span
        >

        <span>
          2D方向：sai,ps,live2d模型+绘画制作，ae制作动态CG以及后期,偶尔自制ai绘画模型（注明：仅用于学习参考
        </span>

        <span>
          视觉传达方面会进行logo以及海报，交互界面的制作。 联系我-一起进步
        </span>

        <span> 邮箱：3317414319@qq.com</span>
      </div>
    </div>

    <div class="invisible about-section__interest">
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
