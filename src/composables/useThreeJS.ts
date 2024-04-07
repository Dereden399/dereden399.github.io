import { onMounted, onUnmounted, ref, Ref, watch } from 'vue'
import * as THREE from 'three'
import { useWindowSize } from './useWindowSize.ts'
import { HorizontalControls } from './HorizontalControls.ts'

//TODO: Add WebGL check https://threejs.org/docs/index.html#manual/en/introduction/WebGL-compatibility-check
export const useThreeJS = (
  canvasRef: Ref<HTMLCanvasElement | null>,
  animateLoop: () => void
) => {
  const { width, height } = useWindowSize()
  const animationRequestId = ref<number | null>(null)

  let controls: HorizontalControls
  let renderer: THREE.WebGLRenderer
  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(
    75,
    width.value / height.value,
    0.1,
    1000
  )

  const light = new THREE.PointLight('#fff', 50, 100)
  light.position.set(0, 0, 5)
  scene.add(light)

  camera.position.z = 5

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

  // TODO: check requestAnimationFrame callback fps
  const animateLoopInner = () => {
    animateLoop()
    controls.update()
    light.position.set(camera.position.x, camera.position.y, camera.position.z)
    renderer.render(scene, camera)
    animationRequestId.value = requestAnimationFrame(animateLoopInner)
  }

  const onVisibilityChange = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (!animationRequestId.value) {
          animateLoopInner()
        }
      } else {
        if (animationRequestId.value) {
          cancelAnimationFrame(animationRequestId.value)
          animationRequestId.value = null
        }
      }
    })
  }

  const observer = new IntersectionObserver(onVisibilityChange, {
    root: null,
    threshold: 0.5
  })

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
    controls = new HorizontalControls(camera, renderer.domElement)

    updateRendererAndCamera()
    animateLoopInner()
    observer.observe(canvasRef.value)
  })

  // cleanup
  onUnmounted(() => {
    observer.disconnect()
    controls.delete()
  })

  //@ts-ignore
  return { renderer, scene, camera }
}
