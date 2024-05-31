<script setup lang="ts">
import { projects } from '../constants.ts'
import ProjectCard from './ProjectCard.vue'
</script>

<template>
  <div
    class="flex flex-col gap-5 p-3 md:grid md:grid-cols-2 lg:max-w-[80%] lg:grid-cols-3 lg:p-0"
  >
    <ProjectCard
      v-for="project in projects"
      :key="project.name"
      :project="project"
    />
  </div>
</template>

<style scoped></style>
