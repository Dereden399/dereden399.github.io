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

const nav: { label: string; id: string }[] = [
  { label: 'About', id: 'about' },
  { label: 'ML & Research', id: 'ml' },
  { label: 'Engineering', id: 'engineering' },
  { label: 'Experience', id: 'experience' },
  { label: 'Education', id: 'education' },
  { label: 'Contact', id: 'contact' }
]
</script>

<template>
  <aside
    class="border-black/7 px-6.5 sticky top-0 flex h-screen shrink-0 flex-col overflow-y-auto border-r bg-[#f7f6fc] py-11"
  >
    <div>
      <div
        class="photo-treated mb-3.5 h-32 w-32 rounded-full border-2 border-accent2-300"
      >
        <img
          src="/picture.webp"
          alt=""
          class="h-full w-full object-cover"
          style="object-position: 50% 20%"
        />
      </div>
      <div class="font-display text-subheader font-medium text-neutral-900">
        {{ name }}
      </div>
      <div
        class="mt-1.5 whitespace-pre-line font-mono text-caption leading-[1.75] tracking-wide text-accent-500"
      >
        {{ sidebarRole }}
      </div>
    </div>

    <div class="my-6.5 bg-black/7 h-px"></div>

    <nav class="flex flex-col">
      <a
        v-for="item in nav"
        :key="item.id"
        :href="'#' + item.id"
        class="border-black/4 border-b py-2.5 font-mono text-label tracking-[0.08em] text-neutral-600 hover:text-accent-500"
        @click.prevent="scrollToId(item.id)"
      >
        {{ item.label }}
      </a>
    </nav>

    <div class="flex-1"></div>

    <div class="my-6.5 bg-black/7 h-px"></div>

    <div class="flex flex-col gap-2.5">
      <a
        :href="'mailto:' + email"
        class="font-mono text-caption tracking-wide text-accent-500 hover:text-accent-600"
        >{{ email }}</a
      >
      <a
        :href="'https://github.com/' + github"
        class="font-mono text-caption tracking-wide text-accent-500 hover:text-accent-600"
        >github/{{ github }}</a
      >
      <a
        :href="'https://linkedin.com/in/' + linkedin"
        class="font-mono text-caption tracking-wide text-accent-500 hover:text-accent-600"
        >linkedin/{{ linkedin }}</a
      >
      <a
        :href="resumeUrl"
        download
        class="mt-3.5 block border border-accent-500/35 py-2.5 text-center font-mono text-label tracking-[0.08em] text-accent-500"
        >↓&nbsp;&nbsp;Download CV</a
      >
    </div>
  </aside>
</template>
