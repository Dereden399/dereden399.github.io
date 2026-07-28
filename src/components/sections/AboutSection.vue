<script setup lang="ts">
import SectionHeader from '../SectionHeader.vue'
import { about } from '../../constants'
import { useScrollReveal } from '../../composables/useScrollReveal'

const { setTarget } = useScrollReveal()
</script>

<template>
  <section id="about" class="mb-16 lg:mb-20">
    <SectionHeader index="01" title="About" />
    <div
      :ref="setTarget"
      class="scroll-reveal flex flex-col-reverse gap-8 sm:flex-row sm:items-start"
    >
      <p class="text-body leading-[1.88] text-ink-mut dark:text-ink-mut-dark">
        {{ about }}
      </p>
      <div
        class="photo-treated 3xl:w-[240px] w-40 shrink-0 self-center rounded-[38%_62%_58%_42%/48%_38%_62%_52%] border-2 border-page shadow-[0_10px_28px_-6px_rgba(23,17,51,0.28)] dark:border-line-dark dark:shadow-[0_10px_28px_-6px_rgba(0,0,0,0.6)] sm:w-[200px] sm:self-start"
      >
        <img
          src="/picture2.webp"
          alt="Denis Kuznetsov"
          width="240"
          height="240"
          loading="lazy"
          class="aspect-square w-full object-cover"
          style="object-position: 50% 22%"
        />
      </div>
    </div>
  </section>
</template>
