<script setup lang="ts">
import { navbarHeight } from '../constants.ts'
import { scrollTo } from './utils.ts'
</script>

<template>
  <nav>
    <div
      class="fixed top-0 z-10 flex w-full flex-row items-center justify-end gap-x-5 bg-white/30 px-5 align-middle shadow backdrop-blur-sm md:gap-x-20 md:px-16"
      :style="`height: ${navbarHeight};`"
    >
      <a class="link" @click="scrollTo('aboutMe')">About</a>
      <a class="link" @click="scrollTo('projects')">Projects</a>
      <a class="link" @click="scrollTo('contacts')">Contacts</a>
    </div>
  </nav>
</template>

<style scoped>
.link {
  @apply text-base font-semibold text-slate-950 hover:text-slate-600 md:text-lg;
}
</style>
