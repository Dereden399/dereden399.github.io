<script setup lang="ts">
import { SchoolType } from '../constants.ts'
import SkillElement from './SkillElement.vue'

const { school } = defineProps<{ school: SchoolType }>()
</script>

<template>
  <div class="flex w-full flex-col items-start rounded-2xl bg-white shadow-2xl">
    <div
      class="bg-accent-50 flex w-full flex-row items-center justify-between rounded-tl-2xl rounded-tr-2xl p-4 text-center"
    >
      <div class="flex flex-row items-center text-center align-middle">
        <h1 class="text-4xl text-accent-600">{{ school.name }}</h1>
        <small class="ml-4 text-xl text-accent-500"
          >{{ school.startYear }} -
          {{ school.endYear ? school.endYear : 'present.' }}</small
        >
      </div>
      <h2 class="text-4xl text-accent-600">GPA: {{ school.gpa }}</h2>
    </div>
    <div class="p-4">
      <p class="text-xl">{{ school.description }}</p>
      <h1 class="text-2xl">Skills:</h1>
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
