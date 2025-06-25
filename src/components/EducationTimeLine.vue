<script setup lang="ts">
import { schools } from '../constants.ts'
import SchoolInfoCard from './SchoolInfoCard.vue'
import { ComponentPublicInstance, onBeforeUnmount, onMounted, ref } from 'vue'

const years = [
  ...new Set(
    schools.flatMap((x) => [x.startYear, x.endYear]).filter((x) => x !== null)
  )
]
  .map(Number)
  .sort((a, b) => a - b)

const distances = [
  ...years.slice(1).map((year, idx) => (year - years[idx]) * 3),
  0
]

const carouselRef = ref<HTMLElement | null>(null)
const cardRefs = ref<HTMLElement[]>([])
const carouselCenter = ref(0)

const selectedCardIndex = ref(0)

const shouldASmallCircleBeSelected = (
  cardIdx: number,
  smallCircleIdx: number
) => {
  const cardElement = cardRefs.value[cardIdx]

  if (!cardElement) return false

  const zoneStartingPosition =
    cardElement.offsetLeft +
    cardElement.clientWidth / 2 -
    cardElement.clientWidth * 0.05
  const totalRange = cardElement.clientWidth * 0.95
  const oneSegment = totalRange / distances[cardIdx]
  const scrolledAmount = carouselCenter.value - zoneStartingPosition

  return smallCircleIdx * oneSegment <= scrolledAmount
}

const onScroll = () => {
  if (!carouselRef.value || cardRefs.value.length === 0) return

  const container = carouselRef.value
  const viewCenter = container.scrollLeft + container.clientWidth / 2
  carouselCenter.value = viewCenter

  const zoneStartingPositions = cardRefs.value.map(
    (el) => el.offsetLeft + el.clientWidth / 2 - el.clientWidth * 0.05
  )
  let newIndex = 0
  for (let i = 0; i < zoneStartingPositions.length; i++) {
    if (viewCenter >= zoneStartingPositions[i]) {
      newIndex = i
    } else {
      break
    }
  }
  selectedCardIndex.value = newIndex
}

const assignCardRef = (
  el: Element | ComponentPublicInstance | null,
  index: number
) => {
  if (el instanceof HTMLElement) {
    cardRefs.value[index] = el
  } else if (el && '$el' in el) {
    const dom = (el as ComponentPublicInstance).$el
    if (dom instanceof HTMLElement) {
      cardRefs.value[index] = dom
    }
  }
}

onMounted(() => {
  carouselRef.value!.addEventListener('scroll', onScroll)
  requestAnimationFrame(onScroll)
})

onBeforeUnmount(() => {
  carouselRef.value!.removeEventListener('scroll', onScroll)
})
</script>

<template>
  <h1 class="text-3xl text-slate-950">My education</h1>
  <div class="mt-2 flex flex-col items-center md:mt-4">
    <div class="flex flex-row items-center justify-evenly">
      <span class="year-circle-small"></span>
      <template v-for="(year, idx) in years" :key="year">
        <div class="flex items-center">
          <div
            class="relative transition-all duration-500 ease-in-out"
            :class="
              idx === selectedCardIndex || idx === selectedCardIndex + 1
                ? 'year-circle-selected'
                : 'year-circle'
            "
          >
            <p
              class="absolute -left-[8px] text-base md:text-lg"
              :class="
                idx === selectedCardIndex || idx === selectedCardIndex + 1
                  ? 'top-[12px]'
                  : 'top-[8px]'
              "
            >
              {{ year }}
            </p>
          </div>
        </div>
        <span
          v-for="n in distances[idx]"
          :key="`${year}-${n}`"
          class="transition-all duration-500 ease-in-out"
          :class="
            idx === selectedCardIndex
              ? shouldASmallCircleBeSelected(idx, n)
                ? 'year-circle-small-selected-now'
                : 'year-circle-small-selected'
              : 'year-circle-small'
          "
        ></span>
      </template>
    </div>
    <div
      ref="carouselRef"
      class="flex w-screen flex-1 snap-x snap-mandatory flex-row gap-x-16 overflow-x-scroll scroll-smooth px-[calc(50vw-350px)] py-8"
      style="
        scroll-padding-left: calc(50vw - 350px);
        scroll-padding-right: calc(50vw - 350px);
      "
    >
      <SchoolInfoCard
        v-for="(school, idx) in schools"
        :school="school"
        :key="school.name"
        :ref="(el) => assignCardRef(el, idx)"
      />
    </div>
  </div>
  <!--  <div class="mt-4 w-full">
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
          <div class="flex flex-col items-center md:ml-10 md:flex-row">
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
        />
      </div>

      <div
        class="absolute bottom-0 right-0 origin-bottom-right md:hidden"
        :class="`${scrolledAmount > educationTimelineSize - (stickyElemRef ? stickyElemRef.offsetHeight : 0) && 'hidden'}`"
      >
        <div class="flex flex-col items-center">
          <svg width="70" height="70">
            <image xlink:href="/scroll-indicator.svg" height="70" width="70" />
          </svg>
          <p>Scroll vertically</p>
        </div>
      </div>
    </div>
  </div>-->
</template>

<style scoped>
@reference "../styles.css";

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
</style>
