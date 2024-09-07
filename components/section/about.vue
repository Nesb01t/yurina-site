<script setup lang="ts">
import c4dLogo from '~/assets/icons/c4d-logo.png'
import daz3dLogo from '~/assets/icons/daz3d-logo.png'
import marvelousDesignerLogo from '~/assets/icons/marvelous-designer.png'
import substanceLogo from '~/assets/icons/adobe-substance-3d-painter-icon.webp'
import spineLogo from '~/assets/icons/spine.png'
import saiLogo from '~/assets/icons/sai.png'
interface Hobby {
  name: string
  imgSrc: string
}
const hobbies = ['唱', '跳', 'rap', '篮球']

interface Direction {
  name: string
}

const directions: Direction[] = [
  {
    name: '三维',
  },
  {
    name: '2D 动画/游戏',
  },
  {
    name: '视频剪辑/后期',
  },
]

interface IconGroup {
  name: string
  iconifyName?: string
  imgSrc?: string
  additionalClass?: string
}
const threeDimensionSoftwares: IconGroup[] = [
  {
    name: 'ue5',
    iconifyName: 'logos:unrealengine-icon',
  },
  {
    name: 'Zbrush',
    iconifyName: 'file-icons:zbrush',
  },
  {
    name: 'maya',
    iconifyName: 'devicon:maya',
  },
  {
    name: 'daz3D',
    imgSrc: daz3dLogo,
    additionalClass: '!w-[32px] !h-[32px]',
  },
  {
    name: 'cinema4D',
    imgSrc: c4dLogo,
  },
  {
    name: 'marvelous designer',
    imgSrc: marvelousDesignerLogo,
    additionalClass: '!w-[26px] !h-[28px]',
  },
  {
    name: 'substance 3d',
    imgSrc: substanceLogo,
    additionalClass: '!w-[26px] !h-[26px]',
  },
]

const twoDimensionSoftwares: IconGroup[] = [
  {
    name: 'live2d',
    imgSrc: spineLogo,
    additionalClass:
      '!w-[70px] !h-[26px] px-[4px] py-[2px] shadow-md rounded-lg',
  },
  {
    name: 'ps',
    iconifyName: 'logos:adobe-photoshop',
  },
  {
    name: 'ae',
    iconifyName: 'logos:adobe-after-effects',
  },
  {
    name: 'ai',
    iconifyName: 'logos:adobe-illustrator',
  },
  {
    name: 'sai',
    imgSrc: saiLogo,
  },
]
</script>

<template>
  <div class="about-section">
    <div class="about-section__me">
      <div class="min-w-60 flex flex-col items-center gap-8 text-3xl">
        <img src="/avatar.gif" />
        <div>Yurina</div>
      </div>

      <div
        class="text-base text-center mt-8 flex flex-col items-center gap-[2px]"
      >
        <span> 你好~ 我是yurina，一个动画专业在校生 </span>

        <div class="flex">
          <div class="mx-auto flex gap-1 items-center">
            <div>目前的制作方向</div>

            <dir class="w-auto pl-2">
              <div class="mx-auto flex justify-center items-center gap-2">
                <div
                  class="flex flex-col gap-[1px] bg-red-100 rounded-lg py-1 px-2"
                  v-for="direction in directions"
                  :key="direction.name"
                >
                  {{ direction.name }}
                </div>
              </div>
            </dir>
          </div>
        </div>

        <div class="flex items-center gap-4">
          <div>3D 方向</div>

          <div class="flex gap-2 items-center">
            <div
              class="flex flex-col items-center gap-[1px]"
              v-for="software in threeDimensionSoftwares"
              :key="software.name"
            >
              <Icon
                v-if="software.iconifyName"
                class="text-2xl"
                :name="software.iconifyName"
              />

              <img
                v-else
                :class="
                  software.additionalClass
                    ? software.additionalClass
                    : 'drop-shadow-lg !w-[26px] !h-[26px]'
                "
                :src="software.imgSrc"
                alt="software.name"
              />
            </div>
          </div>
        </div>

        <div class="flex items-center gap-4">
          <div>2D 方向</div>

          <div class="flex gap-2 items-center">
            <div
              class="flex flex-col items-center gap-[1px]"
              v-for="software in twoDimensionSoftwares"
              :key="software.name"
            >
              <Icon
                v-if="software.iconifyName"
                class="text-2xl"
                :name="software.iconifyName"
              />

              <img
                v-else
                :class="
                  software.additionalClass
                    ? software.additionalClass
                    : 'drop-shadow-lg !w-[26px] !h-[26px]'
                "
                :src="software.imgSrc"
                alt="software.name"
              />
            </div>
          </div>
        </div>

        <!-- 

        <span>
          视觉传达方面会进行logo以及海报，交互界面的制作。 联系我-一起进步
        </span>

         -->
        <div class="flex gap-2 mt-12">
          <div class="text-xl">
            <Icon name="twemoji:open-mailbox-with-raised-flag" />
          </div>
          <div>邮箱 3317414319@qq.com</div>
        </div>
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
    @apply flex flex-col items-center;

    img {
      @apply w-40 h-40;
    }
  }

  &__interest {
    @apply flex flex-col items-center gap-4;
  }
}
</style>
