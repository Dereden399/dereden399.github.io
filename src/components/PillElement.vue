<script setup lang="ts">
const { text } = defineProps<{ text: string }>()
</script>

<template>
  <div class="rounded-lg bg-accent-50 px-1 py-1 text-base md:text-xl">
    {{ text }}
  </div>
</template>

<style scoped></style>
