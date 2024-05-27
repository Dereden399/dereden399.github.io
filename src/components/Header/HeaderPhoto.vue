<script setup lang="ts">
import { navbarHeight } from '../../constants.ts'
</script>

<template>
  <div
    class="flex flex-auto items-center justify-start md:flex-[2]"
    :style="`height: calc(100vh - ${navbarHeight});`"
  >
    <img
      src="/picture.png"
      class="max-h-[40rem] w-full max-w-[40rem]"
      alt="picture of me"
    />
  </div>
</template>

<style scoped></style>
