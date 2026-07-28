<script setup lang="ts">
import {
  email,
  github,
  linkedin,
  name,
  resumeUrl,
  sidebarRole
} from '../constants'
import { scrollToId } from '../composables/scrollToId'

// two never drift apart.
withDefaults(defineProps<{ scrollOffset?: number }>(), { scrollOffset: 24 })

const emit = defineEmits<{ navigate: [] }>()

const nav: { label: string; id: string }[] = [
  { label: 'About', id: 'about' },
  { label: 'ML & Research', id: 'ml' },
  { label: 'Engineering', id: 'engineering' },
  { label: 'Experience', id: 'experience' },
  { label: 'Education', id: 'education' },
  { label: 'Contact', id: 'contact' }
]

const go = (id: string, offset: number): void => {
  scrollToId(id, offset)
  emit('navigate')
}
</script>

<template>
  <div>
    <div
      class="photo-treated mb-[var(--nav-avatar-mb)] h-[var(--nav-avatar)] w-[var(--nav-avatar)] rounded-full border-2 border-accent2-300"
    >
      <img
        src="/picture.webp"
        alt=""
        width="128"
        height="128"
        class="h-full w-full object-cover"
        style="object-position: 50% 20%"
      />
    </div>
    <div
      class="font-display text-subheader font-medium text-ink dark:text-ink-dark"
    >
      {{ name }}
    </div>
    <div
      class="nav-role mt-1.5 whitespace-pre-line font-mono text-caption leading-[1.75] tracking-wide text-accent-500 dark:text-accent-400"
    >
      {{ sidebarRole }}
    </div>
  </div>

  <div class="my-[var(--nav-gap)] h-px bg-line dark:bg-line-dark"></div>

  <nav class="flex flex-col">
    <a
      v-for="item in nav"
      :key="item.id"
      :href="'#' + item.id"
      class="border-b border-line py-[var(--nav-item-pad)] font-mono text-label tracking-[0.08em] text-ink-mut transition-colors hover:text-accent-500 dark:border-line-dark dark:text-ink-mut-dark dark:hover:text-accent-400"
      @click.prevent="go(item.id, scrollOffset)"
    >
      {{ item.label }}
    </a>
  </nav>

  <div class="flex-1"></div>

  <div class="my-[var(--nav-gap)] h-px bg-line dark:bg-line-dark"></div>

  <div class="flex flex-col gap-[var(--nav-link-gap)]">
    <a
      :href="'mailto:' + email"
      class="break-all font-mono text-caption tracking-wide text-accent-500 transition-colors hover:text-accent-600 dark:text-accent-400 dark:hover:text-accent-300"
      >{{ email }}</a
    >
    <a
      :href="'https://github.com/' + github"
      class="break-all font-mono text-caption tracking-wide text-accent-500 transition-colors hover:text-accent-600 dark:text-accent-400 dark:hover:text-accent-300"
      >github/{{ github }}</a
    >
    <a
      :href="'https://linkedin.com/in/' + linkedin"
      class="break-all font-mono text-caption tracking-wide text-accent-500 transition-colors hover:text-accent-600 dark:text-accent-400 dark:hover:text-accent-300"
      >linkedin/{{ linkedin }}</a
    >
    <div class="mt-[var(--nav-link-gap)] flex items-center gap-2">
      <a
        :href="resumeUrl"
        download
        class="hover:bg-accent-500/8 flex-1 border border-accent-500/35 py-[var(--nav-cv-pad)] text-center font-mono text-label tracking-[0.08em] text-accent-500 transition-colors dark:border-accent-400/35 dark:text-accent-400 dark:hover:bg-accent-400/10"
        >↓&nbsp;&nbsp;Download CV</a
      >
      <slot name="action" />
    </div>
  </div>
</template>
