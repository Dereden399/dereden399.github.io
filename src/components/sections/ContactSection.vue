<script setup lang="ts">
import SectionHeader from '../SectionHeader.vue'
import { email, github, linkedin, resumeUrl } from '../../constants'
import { useScrollReveal } from '../../composables/useScrollReveal'

const { setTarget } = useScrollReveal()
</script>

<template>
  <section id="contact" class="mb-16 lg:mb-20">
    <SectionHeader index="06" title="Contact" />
    <div :ref="setTarget" class="scroll-reveal">
      <a
        :href="resumeUrl"
        download
        class="border-accent-500/38 px-5.5 hover:bg-accent-500/8 mb-7 inline-flex items-center gap-2 border py-3 font-mono text-label tracking-[0.08em] text-accent-500 transition-colors dark:border-accent-400/40 dark:text-accent-400 dark:hover:bg-accent-400/10"
        >↓&nbsp;&nbsp;Download CV</a
      >
      <div class="grid max-w-[460px] grid-cols-1 gap-2.5 sm:grid-cols-2">
        <a
          :href="'mailto:' + email"
          class="px-4.5 block border border-line bg-card py-4 transition-colors hover:border-accent2-300 dark:border-line-dark dark:bg-card-dark dark:hover:border-accent2-300"
        >
          <div
            class="mb-1 font-mono text-caption uppercase tracking-[0.12em] text-ink-dim dark:text-ink-dim-dark"
          >
            Email
          </div>
          <div
            class="break-all text-body-sm text-accent-500 dark:text-accent-400"
          >
            {{ email }}
          </div>
        </a>
        <a
          :href="'https://github.com/' + github"
          class="px-4.5 block border border-line bg-card py-4 transition-colors hover:border-accent2-300 dark:border-line-dark dark:bg-card-dark dark:hover:border-accent2-300"
        >
          <div
            class="mb-1 font-mono text-caption uppercase tracking-[0.12em] text-ink-dim dark:text-ink-dim-dark"
          >
            GitHub
          </div>
          <div
            class="break-all text-body-sm text-accent-500 dark:text-accent-400"
          >
            /{{ github }}
          </div>
        </a>
        <a
          :href="'https://linkedin.com/in/' + linkedin"
          class="px-4.5 block border border-line bg-card py-4 transition-colors hover:border-accent2-300 dark:border-line-dark dark:bg-card-dark dark:hover:border-accent2-300"
        >
          <div
            class="mb-1 font-mono text-caption uppercase tracking-[0.12em] text-ink-dim dark:text-ink-dim-dark"
          >
            LinkedIn
          </div>
          <div
            class="break-all text-body-sm text-accent-500 dark:text-accent-400"
          >
            /in/{{ linkedin }}
          </div>
        </a>
      </div>
    </div>
  </section>
</template>
