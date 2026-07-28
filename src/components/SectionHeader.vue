<script setup lang="ts">
defineProps<{ title: string }>()
</script>

<template>
  <div class="mb-7 lg:mb-9">
    <h2
      class="font-display text-header font-semibold leading-none text-ink dark:text-ink-dark"
    >
      {{ title }}
    </h2>
  </div>
</template>
