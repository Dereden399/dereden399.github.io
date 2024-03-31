<script setup lang="ts">
import { navbarHeight } from '../../constants.ts'
</script>

<template>
  <div
    class="flex flex-auto items-center justify-start md:flex-[2]"
    :style="`height: calc(100vh - ${navbarHeight});`"
  >
    <div class="h-96 w-40 bg-accent-300">Photo here</div>
  </div>
</template>

<style scoped></style>
