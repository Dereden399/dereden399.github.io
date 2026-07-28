<script setup lang="ts">
import SectionHeader from '../SectionHeader.vue'
import ProjectCard from '../ProjectCard.vue'
import { mlProjects } from '../../constants'
import { useScrollReveal } from '../../composables/useScrollReveal'

const cards = mlProjects.map((project) => ({ project, ...useScrollReveal() }))
</script>

<template>
  <section id="ml" class="mb-16 lg:mb-20">
    <SectionHeader index="02" title="ML and Research stuff" />
    <div class="3xl:grid-cols-3 grid grid-cols-1 gap-4 sm:grid-cols-2">
      <div
        v-for="card in cards"
        :key="card.project.id"
        :ref="card.setTarget"
        class="scroll-reveal"
      >
        <ProjectCard
          variant="ml"
          :title="card.project.title"
          :subtitle="card.project.subtitle"
          :highlight="card.project.highlight"
          :description="card.project.description"
          :tags="card.project.tags"
          :link="card.project.link"
          link-label="View on GitHub →"
        />
      </div>
    </div>
  </section>
</template>
