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
  <section id="experience" class="mb-20">
    <SectionHeader index="04" title="Experience" />
    <div class="mb-2.5 grid grid-cols-[1fr_160px] gap-5">
      <div></div>
      <div
        class="flex justify-between font-mono text-caption tracking-wide text-neutral-600"
      >
        <span>{{ min }}</span>
        <span>{{ max }}</span>
      </div>
    </div>
    <div
      v-for="row in rows"
      :key="row.entry.role"
      :ref="row.setTarget"
      class="scroll-reveal border-black/6 grid grid-cols-[1fr_160px] items-center gap-5 border-b py-4"
    >
      <div>
        <div class="mb-0.5 text-title font-semibold text-neutral-900">
          {{ row.entry.role }}
        </div>
        <div class="mb-1 text-body-sm text-accent-500">
          {{ row.entry.org }}
        </div>
        <div class="mb-1 font-mono text-caption tracking-wide text-neutral-600">
          {{ row.entry.dateLabel }}
        </div>
        <div class="text-body-sm text-neutral-600">
          {{ row.entry.detail }}
        </div>
      </div>
      <div class="bg-black/6 relative h-1 rounded-full">
        <div
          class="absolute top-0 h-1 rounded-full bg-accent-500 opacity-85"
          :style="{ left: row.left + '%', width: row.width + '%' }"
        ></div>
      </div>
    </div>
  </section>
</template>
