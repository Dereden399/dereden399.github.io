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
    <div
      class="flex w-full flex-row items-center justify-center"
      :style="`height: calc(100vh - ${navbarHeight});`"
    >
      <HeaderInfo />
      <HeaderPhoto />
    </div>
    <div id="mainContainer" class="w-full px-56">
      <div id="aboutMeSection" class="w-full">
        <div class="flex flex-col items-center">
          <h1 class="text-6xl text-slate-950">About me</h1>
          <p class="mt-4 text-center text-2xl text-slate-950">
            {{ aboutMeDescription }}
          </p>
          <h1 class="mt-4 text-4xl text-slate-950">My Education</h1>
          <EducationTimeLine />
          <p class="text-5xl">
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            tristique iaculis tortor, ut consequat mauris pellentesque nec.
            Quisque sed ante laoreet, sodales elit vitae, suscipit est. Ut diam
            odio, molestie at urna bibendum, laoreet sagittis dolor. Phasellus
            tristique et lectus nec lobortis. Etiam ultricies sit amet quam quis
            vestibulum.',
          </p>
          <p class="text-5xl">
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            tristique iaculis tortor, ut consequat mauris pellentesque nec.
            Quisque sed ante laoreet, sodales elit vitae, suscipit est. Ut diam
            odio, molestie at urna bibendum, laoreet sagittis dolor. Phasellus
            tristique et lectus nec lobortis. Etiam ultricies sit amet quam quis
            vestibulum.',
          </p>
          <p class="text-5xl">
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            tristique iaculis tortor, ut consequat mauris pellentesque nec.
            Quisque sed ante laoreet, sodales elit vitae, suscipit est. Ut diam
            odio, molestie at urna bibendum, laoreet sagittis dolor. Phasellus
            tristique et lectus nec lobortis. Etiam ultricies sit amet quam quis
            vestibulum.',
          </p>
          <p class="text-5xl">
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            tristique iaculis tortor, ut consequat mauris pellentesque nec.
            Quisque sed ante laoreet, sodales elit vitae, suscipit est. Ut diam
            odio, molestie at urna bibendum, laoreet sagittis dolor. Phasellus
            tristique et lectus nec lobortis. Etiam ultricies sit amet quam quis
            vestibulum.',
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
