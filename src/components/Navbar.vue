<script setup lang="ts">
import { navbarHeight } from '../constants.ts'
import { scrollTo } from './utils.ts'
</script>

<template>
  <nav>
    <div
      class="fixed top-0 z-10 flex w-full flex-row items-center justify-end gap-x-[20px] bg-white/30 px-[20px] align-middle shadow backdrop-blur-sm md:gap-x-[80px] md:px-[64px]"
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
  @apply cursor-pointer text-base font-semibold text-slate-950 hover:text-slate-600;
}
</style>
