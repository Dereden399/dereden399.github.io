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

const oneNthWithoutStickyHeight = educationTimelineSize / schools.length

const fadeDistance = oneNthWithoutStickyHeight / 5

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

const stickyElemRef = ref<HTMLDivElement | null>(null)

const scrolledAmount = ref(0)

const oneNth = computed(() => {
  console.log(stickyElemRef.value?.offsetHeight)
  return (
    oneNthWithoutStickyHeight -
    (stickyElemRef.value?.offsetHeight ?? 0) / schools.length
  )
})

const shownSchool = computed(() => {
  return Math.min(
    Math.floor(scrolledAmount.value / oneNth.value),
    schools.length - 1
  )
})

const getScrollAmount = (scrolled: number) => {
  if (containerRef.value) {
    return (
      Math.round(scrolled + remToPx(navbarHeightNum)) -
      containerRef.value.offsetTop
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
  const scrolled = scrolledAmount.value % oneNth.value
  if (shownSchool.value === 0) {
    return oneNth.value - scrolled > fadeDistance
      ? 1.0
      : oneNth.value - scrolled < 10
        ? 0
        : (oneNth.value - scrolled) / fadeDistance
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
      : oneNth.value - scrolled > fadeDistance
        ? 1.0
        : oneNth.value - scrolled < 10
          ? 0
          : (oneNth.value - scrolled) / fadeDistance
  }
})

const scaleForSchoolCard = computed(() => {
  const scrolled = scrolledAmount.value % oneNth.value
  if (shownSchool.value === 0) {
    return oneNth.value - scrolled > fadeDistance
      ? 1.0
      : oneNth.value - scrolled < 10
        ? 0
        : (oneNth.value - scrolled) / fadeDistance
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
      : oneNth.value - scrolled > fadeDistance
        ? 1.0
        : oneNth.value - scrolled < 10
          ? 0
          : (oneNth.value - scrolled) / fadeDistance
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
      ref="stickyElemRef"
      class="sticky flex w-full flex-col gap-y-12 md:flex-row md:gap-x-12 md:gap-y-0"
      :style="`top: calc(${navbarHeight} + 2vh)`"
    >
      <div
        class="flex min-w-12 grow flex-row items-center justify-evenly md:flex-[1] md:flex-col"
      >
        <span class="year-circle-small"></span>
        <span class="year-circle-small"></span>
        <template v-for="(year, idx) in years" :key="year">
          <div
            class="relative transition-all duration-500 ease-in-out"
            :class="
              idx === shownSchool || idx === shownSchool + 1
                ? 'year-circle-selected'
                : 'year-circle'
            "
          >
            <p
              class="absolute left-[80%] top-4 origin-top-left rotate-45 text-base md:left-[130%] md:top-0 md:rotate-0 md:text-2xl"
            >
              {{ year }}
            </p>
          </div>
          <span
            v-for="n in distances[idx]"
            :key="`${year}-${n}`"
            class="transition-all duration-500 ease-in-out"
            :class="
              idx === shownSchool
                ? 'year-circle-small-selected'
                : 'year-circle-small'
            "
          ></span>
        </template>
        <span
          class="transition-all duration-500 ease-in-out"
          :class="
            shownSchool == schools.length - 1
              ? 'year-circle-small-selected'
              : 'year-circle-small'
          "
        ></span>
        <span
          class="transition-all duration-500 ease-in-out"
          :class="
            shownSchool == schools.length - 1
              ? 'year-circle-small-selected'
              : 'year-circle-small'
          "
        ></span>
      </div>

      <div class="flex flex-col justify-center md:flex-[2]">
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
  @apply h-3 w-3 rounded-full border-2 border-slate-950 md:m-2 md:h-8 md:w-8;
}

.year-circle-selected {
  @apply h-5 w-5 rounded-full border-2 border-slate-950 bg-accent-300 md:m-2 md:h-12 md:w-12;
}

.year-circle-small {
  @apply h-1 w-1 rounded-full bg-slate-950 md:m-3 md:h-2 md:w-2;
}

.year-circle-small-selected {
  @apply h-2 w-2 rounded-full bg-accent-100 md:m-3 md:h-4 md:w-4;
}
</style>
