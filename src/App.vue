<script setup lang="ts">
import Navbar from './components/Navbar.vue'
import HeaderPhoto from './components/Header/HeaderPhoto.vue'
import HeaderInfo from './components/Header/HeaderInfo.vue'
import { aboutMeDescription, navbarHeight } from './constants.ts'
import EducationTimeLine from './components/EducationTimeLine.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import ContactsSection from './components/ContactsSection.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <Navbar />
  <div
    :style="`margin-top: ${navbarHeight};`"
    class="flex w-full flex-col items-center"
  >
    <div class="flex w-full flex-col items-center justify-center md:flex-row">
      <HeaderInfo />
      <HeaderPhoto />
    </div>
    <div class="flex w-full flex-col items-center p-2 lg:max-w-[80%] lg:p-0">
      <h1 id="aboutMe" class="text-3xl text-slate-950">About me</h1>
      <p class="mt-2 text-center text-lg text-slate-950 md:mt-4 md:text-xl">
        {{ aboutMeDescription }}
      </p>
      <h1 class="mt-2 text-3xl text-slate-950 md:mt-4">My Education Path</h1>
      <EducationTimeLine />
      <h1 id="projects" class="mt-2 text-3xl text-slate-950 md:mt-4">
        Projects
      </h1>
    </div>
    <ProjectsSection />
    <div class="flex w-full flex-col items-center p-2 lg:max-w-[80%] lg:p-0">
      <h1 id="contacts" class="mt-4 text-3xl text-slate-950 md:mt-6">
        Get in touch
      </h1>
      <ContactsSection />
    </div>
  </div>
  <Footer class="mt-16" />
</template>
