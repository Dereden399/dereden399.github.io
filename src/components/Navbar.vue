<script setup lang="ts">
import { navbarHeight } from '../constants.ts'
</script>

<template>
  <nav>
    <div
      class="fixed top-0 z-10 flex w-full flex-row items-center justify-end gap-x-20 bg-white/30 px-16 align-middle shadow backdrop-blur-sm"
      :style="`height: ${navbarHeight};`"
    >
      <a href="#" class="link">About</a>
      <a href="#" class="link">Projects</a>
      <a href="#" class="link">Contacts</a>
    </div>
  </nav>
</template>

<style scoped>
.link {
  @apply text-lg font-semibold text-slate-950 hover:text-slate-600;
}
</style>
