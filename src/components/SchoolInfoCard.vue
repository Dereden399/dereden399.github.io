<script setup lang="ts">
import { SchoolType } from '../constants.ts'
import SkillElement from './SkillElement.vue'

const { school } = defineProps<{ school: SchoolType }>()
</script>

<template>
  <div class="flex w-full flex-col items-start rounded-2xl bg-white shadow-2xl">
    <div
      class="flex w-full flex-row items-center justify-between rounded-tl-2xl rounded-tr-2xl bg-accent-50 p-4 text-center"
    >
      <div class="flex flex-col items-start justify-start text-center">
        <h1 class="text-xl text-accent-600 md:text-3xl">{{ school.name }}</h1>
        <small class="text-sm text-accent-500 md:text-xl"
          >{{ school.startYear }} -
          {{ school.endYear ? school.endYear : 'present.' }}</small
        >
      </div>
      <h2 class="text-lg text-accent-600 md:text-3xl">GPA: {{ school.gpa }}</h2>
    </div>
    <div class="p-4">
      <p class="text-base md:text-xl">{{ school.description }}</p>
      <h1 v-if="school.skills.length > 0" class="text-lg md:text-2xl">
        Skills:
      </h1>
      <div class="flex flex-row">
        <SkillElement
          v-for="skill in school.skills"
          :key="skill"
          :skill="skill"
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
