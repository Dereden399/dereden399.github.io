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
import Header from './components/Header/Header.vue'
import AboutMeSection from './components/AboutMeSection.vue'
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
      <Header />
      <div class="flex flex-col items-center p-2 lg:max-w-[80%] lg:p-0">
        <AboutMeSection />
        <SkillsSection />
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
