<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import * as THREE from 'three'
import {
  HERO_BG,
  email,
  github,
  linkedin,
  name,
  roleTyped,
  tagline
} from '../constants'
import { useThreeScene } from '../composables/useThreeScene'

const typed = ref('')

let typeTimeout: ReturnType<typeof setTimeout> | undefined
let typeInterval: ReturnType<typeof setInterval> | undefined

// rebuildLinks() below is O(N²) per frame, so phones get a much smaller field.
const particleCount = (width: number): number => {
  if (width < 400) return 55
  if (width < 640) return 70
  if (width < 1024) return 150
  return 220
}

const { setTarget } = useThreeScene({
  cameraZ: 4.5,
  clearColor: HERO_BG,
  setup: ({ scene, width }) => {
    const N = particleCount(width)
    const pos = new Float32Array(N * 3)
    const vel = new Float32Array(N * 3)
    for (let i = 0; i < N; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 9
      pos[i * 3 + 1] = (Math.random() - 0.5) * 5.5
      pos[i * 3 + 2] = (Math.random() - 0.5) * 3
      vel[i * 3] = (Math.random() - 0.5) * 0.42
      vel[i * 3 + 1] = (Math.random() - 0.5) * 0.42
      vel[i * 3 + 2] = (Math.random() - 0.5) * 0.24
    }
    const ptGeo = new THREE.BufferGeometry()
    const ptPos = new THREE.BufferAttribute(pos, 3)
    ptPos.setUsage(THREE.DynamicDrawUsage)
    ptGeo.setAttribute('position', ptPos)

    const ptMat = new THREE.ShaderMaterial({
      vertexShader: `
        void main() {
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = 4.5 * (3.5 / -mv.z);
          gl_Position = projectionMatrix * mv;
        }`,
      fragmentShader: `
        void main() {
          vec2 uv = gl_PointCoord - 0.5;
          float d = length(uv);
          if (d > 0.5) discard;
          float a = 1.0 - smoothstep(0.1, 0.5, d);
          gl_FragColor = vec4(0.655, 0.545, 0.980, a * 0.88);
        }`,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    })
    const points = new THREE.Points(ptGeo, ptMat)
    scene.add(points)

    const MAX_L = N * 8
    const lineArr = new Float32Array(MAX_L * 6)
    const lineGeo = new THREE.BufferGeometry()
    const linePos = new THREE.BufferAttribute(lineArr, 3)
    linePos.setUsage(THREE.DynamicDrawUsage)
    lineGeo.setAttribute('position', linePos)
    lineGeo.setDrawRange(0, 0)
    const lineMat = new THREE.LineBasicMaterial({
      color: 0x8b5cf6,
      transparent: true,
      opacity: 0.22,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    })
    const lines = new THREE.LineSegments(lineGeo, lineMat)
    scene.add(lines)

    const THRESH2 = 1.25 * 1.25
    let frame = 0

    const rebuildLinks = (): void => {
      let lc = 0
      outer: for (let i = 0; i < N; i++) {
        for (let j = i + 1; j < N; j++) {
          const dx = pos[i * 3] - pos[j * 3]
          const dy = pos[i * 3 + 1] - pos[j * 3 + 1]
          const dz = pos[i * 3 + 2] - pos[j * 3 + 2]
          if (dx * dx + dy * dy + dz * dz < THRESH2) {
            lineArr[lc * 6] = pos[i * 3]
            lineArr[lc * 6 + 1] = pos[i * 3 + 1]
            lineArr[lc * 6 + 2] = pos[i * 3 + 2]
            lineArr[lc * 6 + 3] = pos[j * 3]
            lineArr[lc * 6 + 4] = pos[j * 3 + 1]
            lineArr[lc * 6 + 5] = pos[j * 3 + 2]
            if (++lc >= MAX_L) break outer
          }
        }
      }
      linePos.needsUpdate = true
      lineGeo.setDrawRange(0, lc * 2)
    }

    rebuildLinks()

    return {
      update: (dt) => {
        for (let i = 0; i < N; i++) {
          pos[i * 3] += vel[i * 3] * dt
          pos[i * 3 + 1] += vel[i * 3 + 1] * dt
          pos[i * 3 + 2] += vel[i * 3 + 2] * dt
          if (Math.abs(pos[i * 3]) > 4.5) vel[i * 3] *= -1
          if (Math.abs(pos[i * 3 + 1]) > 2.75) vel[i * 3 + 1] *= -1
          if (Math.abs(pos[i * 3 + 2]) > 1.5) vel[i * 3 + 2] *= -1
        }
        ptPos.needsUpdate = true

        if (frame++ % 2 === 0) rebuildLinks()
      },
      dispose: () => {
        ptGeo.dispose()
        ptMat.dispose()
        lineGeo.dispose()
        lineMat.dispose()
      }
    }
  }
})

onMounted(() => {
  let i = 0
  typeTimeout = setTimeout(() => {
    typeInterval = setInterval(() => {
      i++
      typed.value = roleTyped.slice(0, i)
      if (i >= roleTyped.length) clearInterval(typeInterval)
    }, 52)
  }, 900)
})

onUnmounted(() => {
  clearTimeout(typeTimeout)
  clearInterval(typeInterval)
})
</script>

<template>
  <div
    class="relative min-h-[calc(100svh-3.5rem)] overflow-hidden bg-hero lg:h-[110vh]"
  >
    <div :ref="setTarget" class="absolute inset-0 h-full w-full"></div>
    <div
      class="pointer-events-none absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-page dark:to-page-dark"
    ></div>
    <div
      class="absolute bottom-16 left-5 right-5 sm:bottom-24 sm:left-8 sm:right-8 lg:bottom-36 lg:left-16 lg:right-16"
    >
      <div class="mx-auto max-w-[1400px]">
        <h1
          class="animate-fade-up mb-3.5 font-display text-display font-semibold leading-[1.05] tracking-tight text-white"
        >
          {{ name }}
        </h1>
        <div
          class="animate-fade-in mb-5 min-h-5 font-mono text-label uppercase tracking-[0.14em] text-accent-300"
        >
          {{ typed }}<span class="opacity-60">_</span>
        </div>
        <p
          class="animate-fade-up max-w-[520px] text-body text-white/70"
          style="animation-delay: 0.48s"
        >
          {{ tagline }}
        </p>
        <div
          class="animate-fade-up mt-6.5 gap-x-5.5 flex flex-wrap gap-y-3"
          style="animation-delay: 0.7s"
        >
          <a
            :href="'mailto:' + email"
            class="border-accent-300/28 break-all border-b pb-0.5 font-mono text-label tracking-wide text-accent-300"
            >{{ email }}</a
          >
          <a
            :href="'https://github.com/' + github"
            class="border-accent-300/28 break-all border-b pb-0.5 font-mono text-label tracking-wide text-accent-300"
            >github/{{ github }}</a
          >
          <a
            :href="'https://linkedin.com/in/' + linkedin"
            class="border-accent-300/28 break-all border-b pb-0.5 font-mono text-label tracking-wide text-accent-300"
            >linkedin/{{ linkedin }}</a
          >
        </div>
      </div>
    </div>
  </div>
</template>
