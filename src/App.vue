<script setup lang="ts">
import Navbar from './components/Navbar.vue'
import HeaderPhoto from './components/Header/HeaderPhoto.vue'
import HeaderInfo from './components/Header/HeaderInfo.vue'
import { aboutMeDescription, navbarHeight } from './constants.ts'
import EducationTimeLine from './components/EducationTimeLine.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import ContactsSection from './components/ContactsSection.vue'
import Footer from './components/Footer.vue'
import SkillsSection from './components/SkillsSection.vue'
</script>

<template class="overflow-hidden">
  <Navbar />
  <div
    :style="`margin-top: ${navbarHeight};`"
    class="relative flex w-full flex-col items-center justify-center"
  >
    <div
      class="absolute -right-[15%] -top-[5rem] -z-10 h-[15rem] w-[15rem] rounded-full bg-accent-50 md:-left-[8%] md:-top-[20rem] md:h-[30rem] md:w-[30rem] lg:h-[40rem] lg:w-[40rem]"
    />
    <div class="flex w-full flex-col items-center 3xl:max-w-[2400px]">
      <div
        class="flex w-full flex-col items-center justify-center gap-x-12 px-2 md:flex-row md:px-16"
        :style="`min-height: calc(100vh - ${navbarHeight});`"
      >
        <HeaderInfo />
        <HeaderPhoto />
      </div>
      <div class="flex w-full flex-col items-center p-2 lg:max-w-[80%] lg:p-0">
        <h1 id="aboutMe" class="text-3xl text-slate-950">About me</h1>
        <div
          class="mt-2 text-center text-lg text-slate-950 md:mt-4 md:text-xl 3xl:text-2xl"
          v-html="aboutMeDescription"
        />
        <h1 class="mt-2 text-3xl text-slate-950 md:mt-4">My Skills</h1>
        <SkillsSection />
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
  </div>
  <Footer class="mt-16" />
</template>
