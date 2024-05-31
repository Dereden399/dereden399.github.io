<script setup lang="ts">
import { SchoolType } from '../constants.ts'
import PillElement from './PillElement.vue'

const { school } = defineProps<{ school: SchoolType }>()
</script>

<template>
  <div class="flex w-full flex-col items-start rounded-2xl bg-white shadow-2xl">
    <div
      class="flex w-full flex-row items-center justify-between rounded-tl-2xl rounded-tr-2xl bg-accent-50 p-2 text-center md:p-4"
    >
      <div class="flex flex-col items-start justify-start text-center">
        <h1 class="text-base text-accent-600 md:text-3xl">{{ school.name }}</h1>
        <small class="text-sm text-accent-500 md:text-xl"
          >{{ school.startYear }} -
          {{ school.endYear ? school.endYear : 'present.' }}</small
        >
      </div>
      <h2 class="text-sm text-accent-600 md:text-3xl">GPA: {{ school.gpa }}</h2>
    </div>
    <div class="p-2 md:p-4">
      <div
        class="text-base md:text-xl 3xl:text-2xl"
        v-html="school.description"
      />
      <h1
        v-if="school.skills.length > 0"
        class="text-base font-bold md:text-xl"
      >
        Notable skills:
      </h1>
      <div class="flex flex-row flex-wrap gap-1">
        <PillElement
          v-for="skill in school.skills"
          :key="skill"
          :text="skill"
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
