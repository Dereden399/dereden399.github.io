<script setup lang="ts">
withDefaults(
  defineProps<{
    title: string
    subtitle?: string
    highlight?: string
    description: string
    tags: string[]
    link?: string | null
    linkLabel?: string
    variant?: 'ml' | 'engineering'
  }>(),
  { variant: 'engineering' }
)
</script>

<template>
  <div
    class="proj-card bg-accent-50/60 transition duration-200 ease-out hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(15,118,110,0.14)]"
    :class="variant === 'ml' ? 'p-7 sm:p-8' : 'sm:p-5.5 p-5'"
    :style="{
      clipPath:
        variant === 'ml'
          ? 'polygon(0 0, calc(100% - 28px) 0, 100% 28px, 100% 100%, 0 100%)'
          : 'polygon(0 0, calc(100% - 18px) 0, 100% 18px, 100% 100%, 0 100%)'
    }"
  >
    <div
      class="mb-1 font-bold text-neutral-900"
      :class="variant === 'ml' ? 'text-subheader' : 'text-title'"
    >
      {{ title }}
    </div>
    <div
      v-if="subtitle"
      class="mb-4 font-mono text-label tracking-wide text-neutral-600"
    >
      {{ subtitle }}
    </div>
    <div
      v-if="highlight"
      class="mb-4 flex items-center gap-2 font-mono text-label text-accent-500"
    >
      <span class="h-1.5 w-1.5 shrink-0 bg-accent-500"></span>{{ highlight }}
    </div>
    <p
      class="text-neutral-700"
      :class="
        variant === 'ml'
          ? 'text-body leading-[1.85]'
          : 'text-body-sm leading-[1.65]'
      "
    >
      {{ description }}
    </p>
    <div
      class="font-mono text-caption tracking-wide text-neutral-600"
      :class="variant === 'ml' ? 'mt-3.5' : 'mt-2.5'"
    >
      {{ tags.join('  /  ') }}
    </div>
    <a
      v-if="link"
      :href="link"
      class="mt-3 inline-block font-mono tracking-wide text-accent-500 hover:underline"
      :class="variant === 'ml' ? 'text-label' : 'text-caption'"
      >{{ linkLabel ?? 'GitHub →' }}</a
    >
  </div>
</template>
