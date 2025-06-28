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
const totalDistanceForEachCard = schools.map((school) => {
  const startYear = Number(school.startYear)
  const endYear = school.endYear
    ? Number(school.endYear)
    : years[years.length - 1]
  return years.reduce((acc, year) => {
    if (year >= startYear && year < endYear) {
      return acc + (distances[years.indexOf(year)] || 0)
    }
    return acc
  }, 0)
})
const startingYearIndexForEachCard = schools.map((school) => {
  const startYear = Number(school.startYear)
  return years.findIndex((year) => year === startYear)
})

const carouselRef = ref<HTMLElement | null>(null)
const cardRefs = ref<HTMLElement[]>([])
const carouselCenter = ref(0)

const selectedCardIndex = ref(0)

const calculateSmallCircleClass = (smallCircleIdx: number, yearIdx: number) => {
  const selectedCard = schools[selectedCardIndex.value]
  const isSelectedYear =
    years[yearIdx] >= Number(selectedCard.startYear) &&
    years[yearIdx] < Number(selectedCard.endYear)

  if (!isSelectedYear) return 'year-circle-small'

  const totalAmountOfSmallCircles =
    totalDistanceForEachCard[selectedCardIndex.value]
  let realSmallCircleIdx = smallCircleIdx
  for (
    let i = startingYearIndexForEachCard[selectedCardIndex.value];
    i < yearIdx;
    i += 1
  ) {
    realSmallCircleIdx += distances[i]
  }
  const selectedCardElement = cardRefs.value[selectedCardIndex.value]
  if (!selectedCardElement) return 'year-circle-small'
  const zoneStartingPosition =
    selectedCardElement.offsetLeft +
    selectedCardElement.clientWidth / 2 -
    selectedCardElement.clientWidth * 0.05
  const totalRange = selectedCardElement.clientWidth * 0.95
  const oneSegment = totalRange / totalAmountOfSmallCircles
  const scrolledAmount = carouselCenter.value - zoneStartingPosition
  if (realSmallCircleIdx * oneSegment <= scrolledAmount) {
    return 'year-circle-small-selected-now'
  } else {
    return 'year-circle-small-selected'
  }
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
    <div class="timeline-container flex flex-row items-center justify-evenly">
      <span class="year-circle-small"></span>
      <template v-for="(year, idx) in years" :key="year">
        <div class="flex items-center">
          <div
            class="relative transition-all duration-500 ease-in-out"
            :class="
              year === Number(schools[selectedCardIndex].startYear) ||
              year === Number(schools[selectedCardIndex].endYear)
                ? 'year-circle-selected'
                : 'year-circle'
            "
          >
            <p
              class="absolute text-base transition-all md:text-lg"
              :class="
                year === Number(schools[selectedCardIndex].startYear) ||
                year === Number(schools[selectedCardIndex].endYear)
                  ? 'top-[45px]'
                  : 'top-[30px]'
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
          :class="calculateSmallCircleClass(n, idx)"
        ></span>
      </template>
      <span class="year-circle-small"></span>
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
</template>

<style scoped>
@reference "../styles.css";

.year-circle {
  @apply h-[12px] w-[12px] rounded-full border-2 border-slate-950 md:m-[8px] md:h-[32px] md:w-[32px];
}

.year-circle-selected {
  @apply h-[20px] w-[20px] rounded-full border-2 border-slate-950 bg-accent-300 md:m-[8px] md:h-[48px] md:w-[48px];
}

.timeline-container {
  @apply h-[20px] md:h-[48px];
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
