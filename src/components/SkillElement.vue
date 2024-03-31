<script setup lang="ts">
const { skill } = defineProps<{ skill: string }>()
</script>

<template>
  <div
    class="m-1 rounded-full border-2 border-dashed border-slate-950 px-2 py-1 text-lg font-bold md:m-2 md:text-2xl"
  >
    {{ skill }}
  </div>
</template>

<style scoped></style>
