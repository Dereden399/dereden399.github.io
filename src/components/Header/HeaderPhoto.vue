<script setup lang="ts">
import { navbarHeight } from '../../constants.ts'
</script>

<template>
  <div class="flex h-full flex-auto items-center justify-start md:flex-[2]">
    <div
      class="relative flex h-full w-full max-w-[40rem] flex-col items-center justify-center"
    >
      <img src="/picture.png" class="w-full" alt="picture of me" />
      <div class="absolute w-full rounded-full bg-accent-200/50 pt-[100%]" />
    </div>
  </div>
</template>

<style scoped></style>
