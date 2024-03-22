<script setup lang="ts">
import Navbar from './components/Navbar.vue'
import HeaderPhoto from './components/Header/HeaderPhoto.vue'
import HeaderInfo from './components/Header/HeaderInfo.vue'
</script>

<template>
  <Navbar />
  <div class="mt-16 p-4">
    <div
      class="flex h-[40rem] w-full flex-row items-center justify-center bg-blue-50"
    >
      <HeaderInfo />
      <HeaderPhoto />
    </div>
  </div>
</template>
