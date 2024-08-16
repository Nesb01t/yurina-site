import { useIntersectionObserver } from '@vueuse/core'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('lazy', {
    mounted(el, binding) {
      useIntersectionObserver(el, ([{ isIntersecting }]) => {
        if (isIntersecting) {
          el.src = binding.value
          stop()
        }
      })
    },
    getSSRProps() {
      return {}
    },
  })
})
