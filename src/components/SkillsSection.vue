<script setup lang="ts">
import { mySkills } from '../constants.ts'
import PillElement from './PillElement.vue'
</script>

<template>
  <div
    class="mt-4 flex flex-row flex-wrap items-center justify-center gap-x-2 gap-y-2"
  >
    <PillElement
      v-for="skill in mySkills"
      :key="skill"
      class="rounded-lg bg-accent-50 px-2 py-1 text-xl"
      :text="skill"
    />
  </div>
</template>

<style scoped></style>
