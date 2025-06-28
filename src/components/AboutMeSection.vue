<script setup lang="ts">
import { aboutMeDescription } from '../constants.ts'
</script>

<template>
  <div class="flex flex-row items-center gap-x-8 p-2 lg:max-w-[80%] lg:p-0">
    <img
      src="/picture2.webp"
      alt="Picture of a handsome guy"
      class="aspect-auto w-[30rem] rounded-xl"
    />
    <div>
      <h1 id="aboutMe" class="text-3xl text-slate-950">About me</h1>
      <div
        class="mt-2 text-lg text-slate-950 md:mt-4 md:text-xl 3xl:text-2xl"
        v-html="aboutMeDescription"
      />
    </div>
  </div>
</template>

<style scoped></style>
