<script setup lang="ts">
import { navbarHeight } from '../constants.ts'
</script>

<template>
  <div
    class="flex items-center justify-center bg-red-600"
    :style="`height: calc(100vh - ${navbarHeight});`"
  >
    <p class="text-center text-lg text-slate-950">
      This place will contain 3d experience
    </p>
  </div>
</template>

<style scoped></style>
