<script setup lang="ts">
import { navbarHeight } from '../../constants.ts'
import HeaderInfo from './HeaderInfo.vue'
import HeaderPhoto from './HeaderPhoto.vue'
</script>

<template>
  <div
    class="flex w-full flex-col items-center justify-center gap-x-[48px] px-[8px] md:flex-row md:px-[64px]"
    :style="`min-height: calc(100vh - ${navbarHeight});`"
  >
    <HeaderInfo />
    <HeaderPhoto />
  </div>
</template>
