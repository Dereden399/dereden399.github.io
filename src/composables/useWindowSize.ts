import { onUnmounted, onMounted, ref } from 'vue'

export const useWindowSize = () => {
  const width = ref(window.innerWidth)
  const height = ref(window.innerHeight)

  const onResize = () => {
    width.value = window.document.documentElement.clientWidth
    height.value = window.document.documentElement.clientHeight
  }

  onMounted(() => {
    window.addEventListener('resize', onResize)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', onResize)
  })

  return { width, height }
}
