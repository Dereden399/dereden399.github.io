<script setup lang="ts">
import { navbarHeight } from '../constants.ts'
import * as THREE from 'three'
import { ref } from 'vue'
import { useThreeJS } from '../composables/useThreeJS.ts'

const canvasRef = ref<HTMLCanvasElement | null>(null)

const geometry = new THREE.BoxGeometry(2, 2, 2)
const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 })
const cube = new THREE.Mesh(geometry, material)
const animateLoop = () => {
  cube.rotation.x += 0.01
  cube.rotation.y += 0.01
}

const { scene, camera } = useThreeJS(canvasRef, animateLoop)

scene.add(cube)
const light = new THREE.PointLight('#fff', 50, 100)
light.position.set(0, 0, 5)
scene.add(light)
camera.position.z = 5
</script>

<template>
  <div
    class="relative flex w-full items-center justify-center"
    :style="`height: calc(100vh - ${navbarHeight});`"
  >
    <p class="text-center text-lg text-accent-500">
      This place will contain 3d experience
    </p>
    <canvas ref="canvasRef" class="absolute -z-10 h-full w-full" />
  </div>
</template>

<style scoped></style>
