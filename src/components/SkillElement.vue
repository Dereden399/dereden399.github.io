<script setup lang="ts">
const { skill } = defineProps<{ skill: string }>()
</script>

<template>
  <div
    class="m-2 rounded-full border-2 border-dashed border-slate-950 px-2 py-1 text-2xl font-bold"
  >
    {{ skill }}
  </div>
</template>

<style scoped></style>
