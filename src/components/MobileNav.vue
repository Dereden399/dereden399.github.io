<script setup lang="ts">
import { onUnmounted, ref, watch } from 'vue'
import NavContent from './NavContent.vue'
import ThemeToggle from './ThemeToggle.vue'
import { name } from '../constants'

const HEADER_H = 56 // must match `h-14` on the bar below
const open = ref(false)

const close = (): void => {
  open.value = false
}

const onKeydown = (e: KeyboardEvent): void => {
  if (e.key === 'Escape') close()
}

watch(open, (isOpen) => {
  document.documentElement.classList.toggle('overflow-hidden', isOpen)
  if (isOpen) window.addEventListener('keydown', onKeydown)
  else window.removeEventListener('keydown', onKeydown)
})

onUnmounted(() => {
  document.documentElement.classList.remove('overflow-hidden')
  window.removeEventListener('keydown', onKeydown)
})
</script>

<template>
  <div class="lg:hidden">
    <header
      class="sticky top-0 z-40 flex h-14 items-center gap-3 border-b border-line bg-page/85 px-4 backdrop-blur-md dark:border-line-dark dark:bg-page-dark/85 sm:px-6"
    >
      <img
        src="/picture.webp"
        alt=""
        width="32"
        height="32"
        class="h-8 w-8 shrink-0 rounded-full border border-accent2-300 object-cover"
        style="object-position: 50% 20%"
      />
      <span
        class="truncate font-display text-[15px] font-medium text-ink dark:text-ink-dark"
      >
        {{ name }}
      </span>
      <div class="flex-1"></div>
      <ThemeToggle />
      <button
        type="button"
        aria-label="Open navigation menu"
        aria-controls="mobile-drawer"
        :aria-expanded="open"
        class="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-line text-ink dark:border-line-dark dark:text-ink-dark"
        @click="open = true"
      >
        <svg
          class="h-5 w-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.7"
          stroke-linecap="round"
          aria-hidden="true"
        >
          <path d="M4 7h16M4 12h16M4 17h16" />
        </svg>
      </button>
    </header>

    <Transition
      enter-active-class="motion-reduce:transition-none transition-opacity duration-200 ease-out"
      leave-active-class="motion-reduce:transition-none transition-opacity duration-200 ease-in"
      enter-from-class="opacity-0"
      leave-to-class="opacity-0"
    >
      <div
        v-if="open"
        class="fixed inset-0 z-[60] bg-black/50 backdrop-blur-[2px]"
        @click="close"
      ></div>
    </Transition>

    <Transition
      enter-active-class="motion-reduce:transition-none transition-transform duration-300 ease-out"
      leave-active-class="motion-reduce:transition-none transition-transform duration-200 ease-in"
      enter-from-class="translate-x-full"
      leave-to-class="translate-x-full"
    >
      <aside
        v-if="open"
        id="mobile-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation"
        class="nav-shell fixed right-0 top-0 z-[70] flex h-dvh w-[min(20rem,85vw)] flex-col overflow-y-auto border-l border-line bg-rail px-6 py-[var(--nav-pad)] dark:border-line-dark dark:bg-rail-dark"
      >
        <button
          type="button"
          aria-label="Close navigation menu"
          class="mb-4 flex h-11 w-11 shrink-0 items-center justify-center self-end rounded-full border border-line text-ink-mut dark:border-line-dark dark:text-ink-mut-dark"
          @click="close"
        >
          <svg
            class="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.7"
            stroke-linecap="round"
            aria-hidden="true"
          >
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
        <NavContent :scroll-offset="HEADER_H + 16" @navigate="close" />
      </aside>
    </Transition>
  </div>
</template>
