import * as THREE from 'three'

export interface ScenePointer {
  x: number
  y: number
  inside: boolean
}

export interface SceneContext {
  scene: THREE.Scene
  camera: THREE.PerspectiveCamera
  renderer: THREE.WebGLRenderer
  width: number
  height: number
}

export interface SceneHandle {
  // eslint-disable-next-line no-unused-vars
  update?: (dt: number, elapsed: number, pointer: ScenePointer) => void
  // eslint-disable-next-line no-unused-vars
  resize?: (width: number, height: number) => void
  dispose?: () => void
}

export interface ThreeSceneOptions {
  // eslint-disable-next-line no-unused-vars
  setup: (ctx: SceneContext) => SceneHandle
  fov?: number
  cameraZ?: number
  clearColor?: number
  pointer?: boolean
  maxPixelRatio?: number
}

type SceneTarget = Element | { $el: Element } | null

const MAX_DT = 0.05
const POINTER_EASE = 6

export const useThreeScene = (
  options: ThreeSceneOptions
): {
  // eslint-disable-next-line no-unused-vars
  setTarget: (target: SceneTarget) => void
} => {
  const {
    setup,
    fov = 55,
    cameraZ = 5,
    clearColor,
    pointer: trackPointer = false,
    maxPixelRatio = 1.5
  } = options

  let mount: HTMLElement | null = null
  let renderer: THREE.WebGLRenderer | null = null
  let scene: THREE.Scene | null = null
  let camera: THREE.PerspectiveCamera | null = null
  let handle: SceneHandle | null = null

  let resizeObserver: ResizeObserver | null = null
  let intersectionObserver: IntersectionObserver | null = null
  let raf = 0
  let last = 0
  let elapsed = 0
  let width = 0
  let height = 0
  let onScreen = true
  let contextLost = false

  const pointer: ScenePointer = { x: 0, y: 0, inside: false }
  const targetPointer: ScenePointer = { x: 0, y: 0, inside: false }

  const reducedMotion = (): boolean =>
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const renderFrame = (dt: number): void => {
    if (!renderer || !scene || !camera) return
    elapsed += dt
    handle?.update?.(dt, elapsed, pointer)
    renderer.render(scene, camera)
  }

  const tick = (now: number): void => {
    raf = requestAnimationFrame(tick)
    const dt = Math.min((now - last) / 1000, MAX_DT)
    last = now

    if (trackPointer) {
      const k = Math.min(dt * POINTER_EASE, 1)
      pointer.x += (targetPointer.x - pointer.x) * k
      pointer.y += (targetPointer.y - pointer.y) * k
      pointer.inside = targetPointer.inside
    }

    renderFrame(dt)
  }

  const start = (): void => {
    if (raf || contextLost || !onScreen || document.hidden) return
    if (reducedMotion()) {
      renderFrame(0)
      return
    }
    last = performance.now()
    raf = requestAnimationFrame(tick)
  }

  const stop = (): void => {
    if (!raf) return
    cancelAnimationFrame(raf)
    raf = 0
  }

  const applySize = (): void => {
    if (!mount || !renderer || !camera) return
    const w = Math.round(mount.clientWidth)
    const h = Math.round(mount.clientHeight)
    if (!w || !h || (w === width && h === height)) return
    width = w
    height = h
    camera.aspect = w / h
    camera.updateProjectionMatrix()
    renderer.setSize(w, h, false)
    handle?.resize?.(w, h)
    if (!raf) renderFrame(0)
  }

  const handlePointerMove = (event: PointerEvent): void => {
    if (!mount) return
    const rect = mount.getBoundingClientRect()
    targetPointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1
    targetPointer.y = -(((event.clientY - rect.top) / rect.height) * 2 - 1)
    targetPointer.inside = true
  }

  const handlePointerLeave = (): void => {
    targetPointer.x = 0
    targetPointer.y = 0
    targetPointer.inside = false
  }

  const handleVisibility = (): void => {
    if (document.hidden) stop()
    else start()
  }

  const buildScene = (): void => {
    if (!renderer) return
    scene = new THREE.Scene()
    camera = new THREE.PerspectiveCamera(fov, width / height, 0.1, 100)
    camera.position.z = cameraZ
    handle = setup({ scene, camera, renderer, width, height })
  }

  const teardownScene = (): void => {
    handle?.dispose?.()
    handle = null
    scene = null
    camera = null
  }

  const handleContextLost = (event: Event): void => {
    event.preventDefault()
    contextLost = true
    stop()
  }

  const handleContextRestored = (): void => {
    contextLost = false
    teardownScene()
    buildScene()
    start()
  }

  const mountScene = (el: HTMLElement): void => {
    mount = el
    width = Math.round(el.clientWidth) || 1
    height = Math.round(el.clientHeight) || 1

    renderer = new THREE.WebGLRenderer({
      antialias: false,
      alpha: clearColor === undefined,
      powerPreference: 'default'
    })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, maxPixelRatio))
    renderer.setSize(width, height, false)
    renderer.setClearColor(
      clearColor ?? 0x000000,
      clearColor === undefined ? 0 : 1
    )

    const canvas = renderer.domElement
    Object.assign(canvas.style, {
      position: 'absolute',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      display: 'block'
    })
    canvas.addEventListener('webglcontextlost', handleContextLost)
    canvas.addEventListener('webglcontextrestored', handleContextRestored)
    el.appendChild(canvas)

    buildScene()

    resizeObserver = new ResizeObserver(applySize)
    resizeObserver.observe(el)

    intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        onScreen = entry.isIntersecting
        if (onScreen) start()
        else stop()
      },
      { threshold: 0 }
    )
    intersectionObserver.observe(el)

    document.addEventListener('visibilitychange', handleVisibility)
    if (trackPointer) {
      el.addEventListener('pointermove', handlePointerMove, { passive: true })
      el.addEventListener('pointerleave', handlePointerLeave, { passive: true })
    }

    renderFrame(0)
    start()
  }

  const unmountScene = (): void => {
    stop()
    resizeObserver?.disconnect()
    resizeObserver = null
    intersectionObserver?.disconnect()
    intersectionObserver = null
    document.removeEventListener('visibilitychange', handleVisibility)

    if (mount && trackPointer) {
      mount.removeEventListener('pointermove', handlePointerMove)
      mount.removeEventListener('pointerleave', handlePointerLeave)
    }

    teardownScene()

    if (renderer) {
      const canvas = renderer.domElement
      canvas.removeEventListener('webglcontextlost', handleContextLost)
      canvas.removeEventListener('webglcontextrestored', handleContextRestored)
      renderer.dispose()
      if (!contextLost) renderer.forceContextLoss()
      canvas.remove()
      renderer = null
    }

    mount = null
    elapsed = 0
    width = 0
    height = 0
    onScreen = true
    contextLost = false
  }

  // ref fires on every patch, not just mount/unmount
  const setTarget = (target: SceneTarget): void => {
    const el =
      target === null ? null : target instanceof Element ? target : target.$el
    if (el === mount) return
    if (mount) unmountScene()
    if (!(el instanceof HTMLElement)) return
    mountScene(el)
  }

  return { setTarget }
}
