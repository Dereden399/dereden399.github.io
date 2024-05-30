<script setup lang="ts">
import { mySkills } from '../constants.ts'
</script>

<template>
  <div class="mt-4 flex flex-row gap-x-2">
    <span
      v-for="skill in mySkills"
      :key="skill"
      class="rounded-lg bg-accent-50 px-2 py-1 text-xl"
      >{{ skill }}</span
    >
  </div>
</template>

<style scoped></style>
