<script setup lang="ts">
import Sidebar from './components/Sidebar.vue'
import Hero from './components/Hero.vue'
import AboutSection from './components/sections/AboutSection.vue'
import MLSection from './components/sections/MLSection.vue'
import EngineeringSection from './components/sections/EngineeringSection.vue'
import ExperienceSection from './components/sections/ExperienceSection.vue'
import EducationSection from './components/sections/EducationSection.vue'
import ContactSection from './components/sections/ContactSection.vue'
</script>

<template>
  <div class="grid min-h-screen grid-cols-[240px_1fr] bg-white">
    <Sidebar />
    <main>
      <Hero />
      <div class="pt-18 pb-30 mx-auto max-w-[900px] px-16">
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
