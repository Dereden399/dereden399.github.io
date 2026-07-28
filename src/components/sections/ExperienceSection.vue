<script setup lang="ts">
import SectionHeader from '../SectionHeader.vue'
import { experience } from '../../constants'
import { useScrollReveal } from '../../composables/useScrollReveal'

const min = Math.floor(Math.min(...experience.map((e) => e.start)))
const max = Math.ceil(Math.max(...experience.map((e) => e.end)))
const span = max - min

const rows = experience.map((entry) => ({
  entry,
  left: ((entry.start - min) / span) * 100,
  width: ((entry.end - entry.start) / span) * 100,
  ...useScrollReveal()
}))
</script>

<template>
  <section id="experience" class="mb-16 lg:mb-20">
    <SectionHeader index="04" title="Experience" />
    <div
      class="3xl:grid-cols-[1fr_220px] mb-2.5 grid grid-cols-1 gap-5 lg:grid-cols-[1fr_160px]"
    >
      <div class="hidden lg:block"></div>
      <div
        class="flex justify-between font-mono text-caption tracking-wide text-ink-dim dark:text-ink-dim-dark"
      >
        <span>{{ min }}</span>
        <span>{{ max }}</span>
      </div>
    </div>
    <div
      v-for="row in rows"
      :key="row.entry.role"
      :ref="row.setTarget"
      class="scroll-reveal 3xl:grid-cols-[1fr_220px] grid grid-cols-1 gap-3 border-b border-line py-4 dark:border-line-dark lg:grid-cols-[1fr_160px] lg:items-center lg:gap-5"
    >
      <div>
        <div
          class="mb-0.5 text-title font-semibold text-ink dark:text-ink-dark"
        >
          {{ row.entry.role }}
        </div>
        <div class="mb-1 text-body-sm text-accent-500 dark:text-accent-400">
          {{ row.entry.org }}
        </div>
        <div
          class="mb-1 font-mono text-caption tracking-wide text-ink-dim dark:text-ink-dim-dark"
        >
          {{ row.entry.dateLabel }}
        </div>
        <div class="text-body-sm text-ink-mut dark:text-ink-mut-dark">
          {{ row.entry.detail }}
        </div>
      </div>
      <div
        class="relative h-1 self-center rounded-full bg-line dark:bg-line-dark"
      >
        <div
          class="absolute top-0 h-1 rounded-full bg-accent-500 opacity-85 dark:bg-accent-400"
          :style="{ left: row.left + '%', width: row.width + '%' }"
        ></div>
      </div>
    </div>
  </section>
</template>
