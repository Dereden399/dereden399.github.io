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

<template>
  <div class="absolute left-0 top-0 h-screen w-screen overflow-hidden">
    <div
      class="absolute -right-[20%] -top-[80px] -z-10 h-[240px] w-[240px] rounded-full bg-accent-50 md:-left-[8%] md:-top-[320px] md:h-[480px] md:w-[480px] lg:h-[640px] lg:w-[640px]"
    />
  </div>
  <Navbar />
  <div
    :style="`margin-top: ${navbarHeight};`"
    class="relative flex w-full flex-col items-center justify-center"
  >
    <div class="flex w-full flex-col items-center 3xl:max-w-[2400px]">
      <div
        class="flex w-full flex-col items-center justify-center gap-x-[48px] px-[8px] md:flex-row md:px-[64px]"
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
