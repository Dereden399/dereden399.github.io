<script setup lang="ts"></script>

<template>
  <div
    class="flex h-full flex-auto items-center justify-center md:flex-[2] md:justify-start"
  >
    <Transition appear name="photos" :duration="1500">
      <div
        v-if="true"
        class="relative flex w-full max-w-[80%] flex-col items-center justify-center"
      >
        <img
          src="/picture.webp"
          class="w-full"
          alt="picture of a handsome guy"
        />
        <div
          class="inner absolute -left-[8%] bottom-0 -z-10 w-[35%] rounded-full bg-accent-100 pt-[35%]"
        />
        <div
          class="inner2 absolute -right-[10%] top-0 -z-10 w-[50%] rounded-full bg-accent-500 pt-[50%]"
        />
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.photos-enter-active,
.photos-enter-active .inner,
.photos-enter-active .inner2 {
  transition: all 1s ease-in-out;
}

.photos-enter-active .inner {
  transition-delay: 0.25s;
}

.photos-enter-active .inner2 {
  transition-delay: 0.5s;
}

.photos-enter-from,
.photos-enter-from .inner,
.photos-enter-from .inner2 {
  opacity: 0.001;
  transform: translateY(10%);
}
.photos-enter-to,
.photos-enter-to .inner,
.photos-enter-to .inner2 {
  opacity: 1;
  transform: translateY(0);
}
</style>
