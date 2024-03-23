<script setup lang="ts">
import { SchoolType } from '../constants.ts'

const { school } = defineProps<{ school: SchoolType }>()
</script>

<template>
  <div class="h-full w-full bg-blue-300">
    <h1>{{ school.name }}</h1>
  </div>
</template>

<style scoped></style>
