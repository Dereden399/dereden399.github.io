<script setup lang="ts">
const scrollToAbout = () => {
  const elem = document.getElementById('aboutMeSection')
  console.log(elem)
  if (elem) {
    elem.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <div class="flex h-full flex-[3] flex-col items-center justify-center">
    <div>
      <p class="text-6xl text-slate-950">
        <span class="font-bold">Hi!</span> I'm Denis,
      </p>
      <p
        class="relative z-0 mt-4 text-5xl text-white before:absolute before:-inset-x-4 before:-z-10 before:block before:h-[120%] before:w-[105%] before:skew-y-2 before:bg-accent-300 before:transition-all hover:before:skew-y-0"
      >
        Web and Mobile Developer
      </p>
      <p
        class="mt-4 cursor-pointer text-3xl text-accent-500 transition-all hover:scale-110"
        @click="scrollToAbout"
      >
        Discover my story down below!
      </p>
    </div>
  </div>
</template>

<style scoped></style>
