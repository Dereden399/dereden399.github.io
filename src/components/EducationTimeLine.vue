<script setup lang="ts">
import {
  aaltoDescription,
  schoolDescription,
  spbuDescription
} from '../constants.ts'
import { ref } from 'vue'
import SchoolInfoCard from './SchoolInfoCard.vue'

const schools = [schoolDescription, spbuDescription, aaltoDescription]
const years = [
  ...new Set(
    schools.flatMap((x) => [x.startYear, x.endYear]).filter((x) => x !== null)
  )
].map(Number) as number[]
const distances = [
  ...years.slice(1).map((year, idx) => (year - years[idx]) * 3),
  0
]

const focusedSchool = ref(0)
</script>

<template class="mt-4">
  <div class="mt-4 flex w-full flex-row gap-x-12">
    <div class="flex min-w-12 flex-[3] flex-col items-center">
      <span class="year-circle-small"></span>
      <span class="year-circle-small"></span>
      <div
        v-for="(year, idx) in years"
        :key="year"
        class="flex flex-col items-center"
      >
        <div class="year-circle relative">
          <p class="absolute -top-1 left-12 text-2xl">
            {{ year }}
          </p>
        </div>
        <span
          v-for="n in distances[idx]"
          :key="`${year}-${n}`"
          class="year-circle-small"
        ></span>
      </div>
      <span class="year-circle-small"></span>
      <span class="year-circle-small"></span>
    </div>

    <div class="flex-[6]">
      <SchoolInfoCard :school="schools[focusedSchool]" />
    </div>
  </div>
</template>

<style scoped>
.year-circle {
  @apply m-2 h-8 w-8 rounded-full border-2 border-slate-950;
}
.year-circle-small {
  @apply m-3 h-2 w-2 rounded-full bg-slate-950;
}
</style>
