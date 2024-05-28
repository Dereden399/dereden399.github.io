<script setup lang="ts">
import { scrollTo } from '../utils.ts'
import { navbarHeight } from '../../constants.ts'
</script>

<template>
  <div
    class="flex h-full flex-auto flex-col items-center justify-center p-2 md:flex-[2] lg:p-0"
  >
    <div>
      <p class="4xl:text-8xl text-5xl text-slate-950 md:text-6xl">
        <span class="font-bold">Hi!</span> I'm Denis,
      </p>
      <p
        class="4xl:text-6xl relative z-0 mt-2 text-3xl text-white before:absolute before:-inset-x-1 before:-z-10 before:block before:h-[120%] before:w-[102%] before:skew-y-2 before:bg-accent-300 before:transition-all hover:before:skew-y-0 md:mt-4 md:text-4xl before:md:-inset-x-4 before:md:w-[105%] lg:text-5xl"
      >
        Web and Mobile Developer
      </p>
      <p
        class="4xl:text-4xl mt-4 cursor-pointer text-xl text-accent-500 transition-all hover:scale-110 md:text-3xl"
        @click="scrollTo('aboutMe')"
      >
        Discover my story down below!
      </p>
    </div>
  </div>
</template>

<style scoped></style>
