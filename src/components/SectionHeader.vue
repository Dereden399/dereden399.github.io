<script setup lang="ts">
defineProps<{ title: string }>()
</script>

<template>
  <div class="mb-9">
    <h2
      class="font-display text-header font-semibold leading-none text-neutral-900"
    >
      {{ title }}
    </h2>
  </div>
</template>
