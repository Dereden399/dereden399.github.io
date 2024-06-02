<script setup lang="ts">
import { navbarHeight, SchoolType } from '../constants.ts'
import PillElement from './PillElement.vue'
import { ref } from 'vue'

const { school } = defineProps<{ school: SchoolType }>()

const headerRef = ref<HTMLDivElement | null>(null)
const skillsRef = ref<HTMLDivElement | null>(null)
</script>

<template>
  <div
    class="flex max-h-full w-full flex-col items-start rounded-2xl bg-white shadow-2xl"
  >
    <div
      ref="headerRef"
      class="flex w-full flex-row items-center justify-between rounded-tl-2xl rounded-tr-2xl bg-accent-50 p-[4px] text-center md:p-[8px]"
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
    <div class="p-[8px]">
      <div
        class="overflow-y-auto text-base md:text-xl 3xl:text-2xl"
        :style="`max-height: calc(100vh - ${headerRef ? headerRef.offsetHeight : 0}px - ${skillsRef ? skillsRef.offsetHeight : 0}px - ${navbarHeight} - 16vh)`"
        v-html="school.description"
      />
      <div ref="skillsRef">
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
  </div>
</template>

<style scoped></style>
