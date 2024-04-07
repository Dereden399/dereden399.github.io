<script setup lang="ts">
import { navbarHeight } from '../constants.ts'
import * as THREE from 'three'
import { ref } from 'vue'
import { useThreeJS } from '../composables/useThreeJS.ts'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'

const screenFactor = window.document.documentElement.clientWidth / 1920

const loader = new GLTFLoader()

const canvasRef = ref<HTMLCanvasElement | null>(null)

// const geometry = new THREE.BoxGeometry(2, 2, 2)
// const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 })
// const cube = new THREE.Mesh(geometry, material)
// cube.position.set(0, 0, 0)
const animateLoop = () => {
  //cube.rotation.x += 0.01
  //cube.rotation.y += 0.01
}

const { scene } = useThreeJS(canvasRef, animateLoop)

loader.load('./old_tv.glb', (gltf) => {
  const scaleCoef = 1.5 * screenFactor
  gltf.scene.scale.set(scaleCoef, scaleCoef, scaleCoef)

  const obj1 = gltf.scene.clone()
  obj1.position.set(-3, 2, 0)
  obj1.rotation.set(0.3, 0.3, 0)
  scene.add(obj1)

  const obj2 = gltf.scene.clone()
  obj2.position.set(-2, -1.7, 0)
  obj2.rotation.set(-0.1, 0.4, 0)
  scene.add(obj2)

  const obj3 = gltf.scene.clone()
  obj3.position.set(0.5, 1.3, 0)
  obj3.rotation.set(0.3, 0, 0)
  scene.add(obj3)

  const obj4 = gltf.scene.clone()
  obj4.position.set(4, 0.9, 0)
  obj4.rotation.set(0, -0.3, 0)
  scene.add(obj4)

  const obj5 = gltf.scene.clone()
  obj5.position.set(3, -1.3, 0)
  obj5.rotation.set(-0.3, -0.3, 0)
  scene.add(obj5)
})
</script>

<template>
  <div
    class="relative flex w-full cursor-default select-none items-center justify-center"
    :style="`height: calc(100vh - ${navbarHeight});`"
  >
    <p class="text-center text-lg text-accent-500">
      This place will contain 3d experience
    </p>
    <canvas ref="canvasRef" class="absolute h-full w-full" />
  </div>
</template>

<style scoped></style>
