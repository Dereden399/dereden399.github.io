<script setup lang="ts">
import { ProjectInfoType } from '../constants.ts'
import PillElement from './PillElement.vue'

const { project } = defineProps<{ project: ProjectInfoType }>()
</script>

<template>
  <div
    class="relative transition-all duration-300 ease-in-out lg:hover:scale-105"
  >
    <div
      class="absolute -z-10 h-full w-full translate-x-2 translate-y-2 rounded-xl bg-accent-300/50"
    />
    <div class="flex h-full flex-col rounded-xl bg-white p-4">
      <h1 class="text-xl md:text-3xl">
        {{ project.name }}
        <span v-if="project.isPrivate" class="text-sm text-zinc-700 md:text-lg"
          >(Private)</span
        >
      </h1>
      <div class="flex flex-row flex-wrap gap-y-2">
        <PillElement
          v-for="tech in project.technologies"
          :key="tech"
          class="me-2 rounded-full bg-accent-50 p-1 text-xl"
          :text="tech"
        />
      </div>
      <p class="flex-1 overflow-clip text-lg md:text-xl 3xl:text-2xl">
        {{ project.description }}
      </p>
      <a
        v-if="project.link"
        :href="project.link"
        target="_blank"
        class="text-lg text-accent-600 md:text-xl 3xl:text-2xl"
        >Link</a
      >
    </div>
  </div>
</template>

<style scoped></style>
