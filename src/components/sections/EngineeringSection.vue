<script setup lang="ts">
import SectionHeader from '../SectionHeader.vue'
import ProjectCard from '../ProjectCard.vue'
import { engProjects } from '../../constants'
import { useScrollReveal } from '../../composables/useScrollReveal'

const cards = engProjects.map((project) => ({ project, ...useScrollReveal() }))
</script>

<template>
  <section id="engineering" class="mb-16 lg:mb-20">
    <SectionHeader index="03" title="Engineering" />
    <div class="3xl:grid-cols-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
      <div
        v-for="card in cards"
        :key="card.project.title"
        :ref="card.setTarget"
        class="scroll-reveal"
      >
        <ProjectCard
          variant="engineering"
          :title="card.project.title"
          :description="card.project.description"
          :tags="card.project.tags"
          :link="card.project.link"
        />
      </div>
    </div>
  </section>
</template>
