<script setup lang="ts">
import {
  aaltoDescription,
  educationTimelineSize,
  navbarHeight,
  navbarHeightNum,
  schoolDescription,
  spbuDescription
} from '../constants.ts'
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import SchoolInfoCard from './SchoolInfoCard.vue'
import { remToPx } from './utils.ts'

const schools = [schoolDescription, spbuDescription, aaltoDescription]

const oneNth = educationTimelineSize / schools.length

const fadeDistance = oneNth / 4

const years = [
  ...new Set(
    schools.flatMap((x) => [x.startYear, x.endYear]).filter((x) => x !== null)
  )
].map(Number) as number[]
const distances = [
  ...years.slice(1).map((year, idx) => (year - years[idx]) * 3),
  0
]

const containerRef = ref<HTMLDivElement | null>(null)

const scrolledAmount = ref(0)

const shownSchool = computed(() => {
  return Math.min(Math.floor(scrolledAmount.value / oneNth), schools.length - 1)
})

const getScrollAmount = (scrolled: number) => {
  if (containerRef.value) {
    return (
      Math.round(
        scrolled +
          remToPx(navbarHeightNum) +
          document.documentElement.clientHeight * 0.1 -
          10
      ) - containerRef.value.offsetTop
    )
  } else return 0
}

const handleScroll = (e: Event) => {
  const window = (e.target as Document).scrollingElement
  if (window && containerRef.value) {
    if (getScrollAmount(window.scrollTop) >= 0) {
      scrolledAmount.value = getScrollAmount(window.scrollTop)
    }
  }
}

const opacityForSchoolCard = computed(() => {
  const scrolled = scrolledAmount.value % oneNth
  if (shownSchool.value === 0) {
    return oneNth - scrolled > fadeDistance
      ? 1.0
      : oneNth - scrolled < 10
        ? 0
        : (oneNth - scrolled) / fadeDistance
  } else if (shownSchool.value === schools.length - 1) {
    return scrolled < fadeDistance
      ? scrolled < 10
        ? 0
        : scrolled / fadeDistance
      : 1
  } else {
    return scrolled < fadeDistance
      ? scrolled < 10
        ? 0
        : scrolled / fadeDistance
      : oneNth - scrolled > fadeDistance
        ? 1.0
        : oneNth - scrolled < 10
          ? 0
          : (oneNth - scrolled) / fadeDistance
  }
})

const scaleForSchoolCard = computed(() => {
  const scrolled = scrolledAmount.value % oneNth
  if (shownSchool.value === 0) {
    return oneNth - scrolled > fadeDistance
      ? 1.0
      : oneNth - scrolled < 10
        ? 0
        : (oneNth - scrolled) / fadeDistance
  } else if (shownSchool.value === schools.length - 1) {
    return scrolled < fadeDistance
      ? scrolled < 10
        ? 0
        : scrolled / fadeDistance
      : 1
  } else {
    return scrolled < fadeDistance
      ? scrolled < 10
        ? 0
        : scrolled / fadeDistance
      : oneNth - scrolled > fadeDistance
        ? 1.0
        : oneNth - scrolled < 10
          ? 0
          : (oneNth - scrolled) / fadeDistance
  }
})

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <div
    ref="containerRef"
    class="relative mt-4 w-full"
    :style="`height: ${educationTimelineSize}px`"
  >
    <div
      class="sticky mt-4 flex w-full flex-row gap-x-12"
      :style="`top: calc(${navbarHeight} + 10vh)`"
    >
      <div class="flex min-w-12 flex-[3] flex-col items-center">
        <span class="year-circle-small"></span>
        <span class="year-circle-small"></span>
        <div
          v-for="(year, idx) in years"
          :key="year"
          class="flex flex-col items-center"
        >
          <div class="year-circle relative">
            <p class="absolute -top-1 left-12 text-2xl">
              {{ year }}
            </p>
          </div>
          <span
            v-for="n in distances[idx]"
            :key="`${year}-${n}`"
            class="year-circle-small"
          ></span>
        </div>
        <span class="year-circle-small"></span>
        <span class="year-circle-small"></span>
      </div>

      <div class="flex flex-[6] flex-col justify-center">
        <SchoolInfoCard
          :school="schools[shownSchool]"
          :style="`opacity: ${opacityForSchoolCard}; scale: ${scaleForSchoolCard}`"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.year-circle {
  @apply m-2 h-8 w-8 rounded-full border-2 border-slate-950;
}
.year-circle-small {
  @apply m-3 h-2 w-2 rounded-full bg-slate-950;
}
</style>
