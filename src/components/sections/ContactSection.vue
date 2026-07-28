<script setup lang="ts">
import SectionHeader from '../SectionHeader.vue'
import { email, github, linkedin, resumeUrl } from '../../constants'
import { useScrollReveal } from '../../composables/useScrollReveal'

const { setTarget } = useScrollReveal()
</script>

<template>
  <section id="contact" class="mb-20">
    <SectionHeader index="06" title="Contact" />
    <div :ref="setTarget" class="scroll-reveal">
      <a
        :href="resumeUrl"
        download
        class="border-accent-500/38 px-5.5 mb-7 inline-flex items-center gap-2 border py-2.5 font-mono text-label tracking-[0.08em] text-accent-500"
        >↓&nbsp;&nbsp;Download CV</a
      >
      <div class="grid max-w-[460px] grid-cols-2 gap-2.5">
        <a
          :href="'mailto:' + email"
          class="border-black/7 px-4.5 block border bg-neutral-50 py-4 transition-colors hover:border-accent2-300"
        >
          <div
            class="mb-1 font-mono text-caption uppercase tracking-[0.12em] text-neutral-600"
          >
            Email
          </div>
          <div class="text-body-sm text-accent-500">{{ email }}</div>
        </a>
        <a
          :href="'https://github.com/' + github"
          class="border-black/7 px-4.5 block border bg-neutral-50 py-4 transition-colors hover:border-accent2-300"
        >
          <div
            class="mb-1 font-mono text-caption uppercase tracking-[0.12em] text-neutral-600"
          >
            GitHub
          </div>
          <div class="text-body-sm text-accent-500">/{{ github }}</div>
        </a>
        <a
          :href="'https://linkedin.com/in/' + linkedin"
          class="border-black/7 px-4.5 block border bg-neutral-50 py-4 transition-colors hover:border-accent2-300"
        >
          <div
            class="mb-1 font-mono text-caption uppercase tracking-[0.12em] text-neutral-600"
          >
            LinkedIn
          </div>
          <div class="text-body-sm text-accent-500">/in/{{ linkedin }}</div>
        </a>
      </div>
    </div>
  </section>
</template>
