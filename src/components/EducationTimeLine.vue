<script setup lang="ts">
import {
  schools,
  educationTimelineSize,
  navbarHeight,
  navbarHeightNum
} from '../constants.ts'
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import SchoolInfoCard from './SchoolInfoCard.vue'
import { remToPx } from './utils.ts'

const oneNthWithoutStickyHeight = educationTimelineSize / schools.length

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

const changeAnimationPlaying = ref(false)

const oneNth = computed(() => {
  return (
    oneNthWithoutStickyHeight -
    (stickyElemRef.value?.offsetHeight ?? 0) / schools.length
  )
})

const scrolledPercentageInOneNth = computed(() => {
  return (scrolledAmount.value % oneNth.value) / oneNth.value
})

const shownSchool = computed(() => {
  return Math.min(
    Math.floor(scrolledAmount.value / oneNth.value),
    schools.length - 1
  )
})

watch(shownSchool, () => {
  if (!changeAnimationPlaying.value) {
    changeAnimationPlaying.value = true
    setTimeout(() => {
      changeAnimationPlaying.value = false
    }, 500)
  }
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

const scrollToSection = (section: number) => {
  if (containerRef.value && section < schools.length) {
    window.scrollTo({
      top: containerRef.value.offsetTop + oneNth.value * section,
      behavior: 'smooth'
    })
  }
}

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
    class="mt-4 w-full"
    :style="`height: ${educationTimelineSize}px`"
  >
    <div
      ref="stickyElemRef"
      class="sticky flex h-[90vh] w-full flex-col justify-start gap-y-6 md:flex-row md:gap-x-12 md:gap-y-0"
      :style="`top: calc(${navbarHeight} + 2vh)`"
    >
      <div
        class="flex min-w-12 flex-row items-center justify-evenly md:flex-[1] md:flex-col md:justify-start"
      >
        <span class="year-circle-small"></span>
        <template v-for="(year, idx) in years" :key="year">
          <div
            class="flex flex-col items-center md:ml-10 md:flex-row"
            @click="scrollToSection(idx)"
          >
            <div
              class="relative transition-all duration-500 ease-in-out"
              :class="
                idx === shownSchool || idx === shownSchool + 1
                  ? 'year-circle-selected'
                  : 'year-circle'
              "
            >
              <p
                class="absolute -left-[8px] text-base md:hidden md:text-lg"
                :class="
                  idx === shownSchool || idx === shownSchool + 1
                    ? 'top-[12px]'
                    : 'top-[8px]'
                "
              >
                {{ year }}
              </p>
            </div>
            <p class="hidden text-base md:block md:text-lg">
              {{ year }}
            </p>
          </div>
          <span
            v-for="n in distances[idx]"
            :key="`${year}-${n}`"
            class="transition-all duration-500 ease-in-out"
            :class="
              idx === shownSchool
                ? scrolledPercentageInOneNth >= n / distances[idx]
                  ? 'year-circle-small-selected-now'
                  : 'year-circle-small-selected'
                : 'year-circle-small'
            "
            @click="scrollToSection(idx)"
          ></span>
        </template>
        <span
          class="transition-all duration-500 ease-in-out"
          :class="
            shownSchool == schools.length - 1
              ? scrolledPercentageInOneNth >= 0.3
                ? 'year-circle-small-selected-now'
                : 'year-circle-small-selected'
              : 'year-circle-small'
          "
          @click="scrollToSection(schools.length - 1)"
        ></span>
        <span
          class="transition-all duration-500 ease-in-out"
          :class="
            shownSchool == schools.length - 1
              ? scrolledPercentageInOneNth >= 0.6
                ? 'year-circle-small-selected-now'
                : 'year-circle-small-selected'
              : 'year-circle-small'
          "
          @click="scrollToSection(schools.length - 1)"
        ></span>
      </div>

      <div class="flex flex-col justify-start md:mt-[10vh] md:flex-[2]">
        <SchoolInfoCard
          :school="schools[shownSchool]"
          :class="{ inChange: changeAnimationPlaying }"
        />
      </div>

      <div
        class="absolute bottom-0 right-0 origin-bottom-right md:hidden"
        :class="`${scrolledAmount > educationTimelineSize - (stickyElemRef ? stickyElemRef.offsetHeight : 0) && 'hidden'}`"
      >
        <div>
          <p class="animate-bounce">Scroll</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.year-circle {
  @apply h-[12px] w-[12px] rounded-full border-2 border-slate-950 md:m-[8px] md:h-[32px] md:w-[32px];
}

.year-circle-selected {
  @apply h-[20px] w-[20px] rounded-full border-2 border-slate-950 bg-accent-300 md:m-[8px] md:h-[48px] md:w-[48px];
}

.year-circle-small {
  @apply h-[6px] w-[6px] rounded-full bg-slate-950 md:m-[6px] md:h-[8px] md:w-[8px];
}

.year-circle-small-selected {
  @apply h-[8px] w-[8px] rounded-full bg-accent-50 md:m-[6px] md:h-[16px] md:w-[16px];
}

.year-circle-small-selected-now {
  @apply h-[8px] w-[8px] rounded-full bg-accent-500 md:m-[6px] md:h-[16px] md:w-[16px];
}

.inChange {
  animation: changeAnimation 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  scale: 1;
  opacity: 1;
}

@keyframes changeAnimation {
  0%,
  100% {
    scale: 1;
    opacity: 1;
  }
  50% {
    scale: 0;
    opacity: 0;
  }
}
</style>
