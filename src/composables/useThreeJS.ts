import { computed, onMounted, Ref, watch } from 'vue'
import * as THREE from 'three'
import { useWindowSize } from './useWindowSize.ts'
import { remToPx } from '../components/utils.ts'
import { navbarHeightNum } from '../constants.ts'

//TODO: Add WebGL check https://threejs.org/docs/index.html#manual/en/introduction/WebGL-compatibility-check
export const useThreeJS = (
  canvasRef: Ref<HTMLCanvasElement | null>,
  animateLoop: () => void
) => {
  const { width, height: windowHeight } = useWindowSize()
  const height = computed(() => {
    return Math.round(windowHeight.value - remToPx(navbarHeightNum))
  })

  let renderer: THREE.WebGLRenderer
  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(
    75,
    width.value / height.value,
    0.1,
    1000
  )
  const updateRendererAndCamera = () => {
    renderer.setSize(width.value, height.value)
    renderer.setPixelRatio(window.devicePixelRatio)

    camera.aspect = width.value / height.value
    camera.updateProjectionMatrix()
  }
  const onResize = () => {
    updateRendererAndCamera()
  }
  watch([width, height], onResize)

  const animateLoopInner = () => {
    animateLoop()
    renderer.render(scene, camera)
    requestAnimationFrame(animateLoopInner)
  }

  onMounted(() => {
    if (!canvasRef.value) {
      console.error('Something went wrong setting up renderer')
      return
    }
    renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.value,
      antialias: true,
      alpha: true
    })
    updateRendererAndCamera()
    animateLoopInner()
  })

  return { renderer, scene, camera }
}
