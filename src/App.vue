<script setup lang="ts">
import Navbar from './components/Navbar.vue'
import HeaderPhoto from './components/Header/HeaderPhoto.vue'
import HeaderInfo from './components/Header/HeaderInfo.vue'
import { navbarHeight } from './constants.ts'
</script>

<template>
  <Navbar />
  <div :style="`margin-top: ${navbarHeight};`">
    <div
      class="flex w-full flex-row items-center justify-center"
      :style="`height: calc(100vh - ${navbarHeight});`"
    >
      <HeaderInfo />
      <HeaderPhoto />
    </div>
    <div id="aboutMeSection" class="h-52">
      <p>Hello</p>
    </div>
  </div>
</template>
