<script setup lang="ts">
import NavContent from './NavContent.vue'
import ThemeToggle from './ThemeToggle.vue'
</script>

<template>
  <aside
    class="nav-shell px-6.5 3xl:px-8 sticky top-0 hidden h-dvh shrink-0 flex-col overflow-hidden border-r border-line bg-rail py-[var(--nav-pad)] dark:border-line-dark dark:bg-rail-dark lg:flex"
  >
    <NavContent>
      <template #action>
        <ThemeToggle />
      </template>
    </NavContent>
  </aside>
</template>
