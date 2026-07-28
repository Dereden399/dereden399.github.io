<script setup lang="ts">
import SectionHeader from '../SectionHeader.vue'
import { education } from '../../constants'
import { useScrollReveal } from '../../composables/useScrollReveal'

const items = education.map((entry) => ({ entry, ...useScrollReveal() }))
</script>

<template>
  <section id="education" class="mb-16 lg:mb-20">
    <SectionHeader index="05" title="Education" />
    <div class="-my-[18px]">
      <div
        v-for="(item, idx) in items"
        :key="item.entry.role"
        :ref="item.setTarget"
        class="scroll-reveal"
      >
        <div class="flex gap-4 sm:gap-5">
          <div class="flex w-6 shrink-0 flex-col items-center">
            <div
              class="w-[5px] flex-1"
              :class="idx > 0 ? 'timeline-connector' : ''"
            ></div>
            <div
              class="timeline-circle h-6 w-6 shrink-0 rounded-full border-2 border-ink bg-page dark:border-ink-dark dark:bg-page-dark"
            ></div>
            <div
              class="w-[5px] flex-1"
              :class="idx < items.length - 1 ? 'timeline-connector' : ''"
            ></div>
          </div>
          <div class="py-[18px]">
            <div class="mb-1 flex flex-wrap items-center gap-2.5">
              <span
                class="font-mono text-title font-semibold text-accent-500 dark:text-accent-400"
                >{{ item.entry.year }}</span
              >
              <span
                v-if="item.entry.badge"
                class="border border-accent-100 bg-accent-50 px-2 py-0.5 font-mono text-caption text-ink-mut dark:border-accent-400/30 dark:bg-accent-900/40 dark:text-ink-mut-dark"
                >{{ item.entry.badge }}</span
              >
            </div>
            <div
              class="mb-0.5 text-title font-semibold text-ink dark:text-ink-dark"
            >
              {{ item.entry.role }}
            </div>
            <div class="text-body-sm text-ink-mut dark:text-ink-mut-dark">
              {{ item.entry.org }} · {{ item.entry.detail }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
