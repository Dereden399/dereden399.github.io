<script setup lang="ts">
import Sidebar from './components/Sidebar.vue'
import MobileNav from './components/MobileNav.vue'
import Hero from './components/Hero.vue'
import AboutSection from './components/sections/AboutSection.vue'
import MLSection from './components/sections/MLSection.vue'
import EngineeringSection from './components/sections/EngineeringSection.vue'
import ExperienceSection from './components/sections/ExperienceSection.vue'
import EducationSection from './components/sections/EducationSection.vue'
import ContactSection from './components/sections/ContactSection.vue'
</script>

<template>
  <div
    class="3xl:grid-cols-[280px_1fr] min-h-dvh bg-page dark:bg-page-dark lg:grid lg:grid-cols-[240px_1fr]"
  >
    <MobileNav />
    <Sidebar />
    <main>
      <Hero />
      <div
        class="lg:pt-18 lg:pb-30 3xl:max-w-[1100px] 4xl:max-w-[1280px] mx-auto max-w-[900px] px-5 pb-20 pt-12 sm:px-8 lg:px-16"
      >
        <AboutSection />
        <MLSection />
        <EngineeringSection />
        <ExperienceSection />
        <EducationSection />
        <ContactSection />
      </div>
    </main>
  </div>
</template>
