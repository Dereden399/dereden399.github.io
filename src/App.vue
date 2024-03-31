<script setup lang="ts">
import Navbar from './components/Navbar.vue'
import HeaderPhoto from './components/Header/HeaderPhoto.vue'
import HeaderInfo from './components/Header/HeaderInfo.vue'
import { aboutMeDescription, navbarHeight } from './constants.ts'
import EducationTimeLine from './components/EducationTimeLine.vue'
</script>

<template>
  <Navbar />
  <div :style="`margin-top: ${navbarHeight};`">
    <div class="flex w-full flex-col items-center justify-center md:flex-row">
      <HeaderInfo />
      <HeaderPhoto />
    </div>
    <div
      id="mainContainer"
      class="flex w-full flex-col items-center p-2 lg:p-0"
    >
      <div id="aboutMeSection" class="w-full lg:max-w-[80%]">
        <div class="flex flex-col items-center">
          <h1 class="text-3xl text-slate-950">About me</h1>
          <p class="mt-2 text-center text-lg text-slate-950 md:mt-4 md:text-xl">
            {{ aboutMeDescription }}
          </p>
          <h1 class="mt-2 text-3xl text-slate-950 md:mt-4">
            My Education Path
          </h1>
          <EducationTimeLine />
        </div>
      </div>
    </div>
  </div>
</template>
