<script setup lang="ts"></script>

<template>
  <div
    class="flex h-full flex-auto items-center justify-center md:flex-[2] md:justify-start"
  >
    <div
      class="relative flex w-full max-w-[80%] flex-col items-center justify-center"
    >
      <img src="/picture.png" class="w-full" alt="picture of me" />
      <div
        class="absolute -left-[8%] bottom-0 -z-10 w-[35%] rounded-full bg-accent-100 pt-[35%]"
      />
      <div
        class="absolute -right-[10%] top-0 -z-10 w-[50%] rounded-full bg-accent-500 pt-[50%]"
      />
    </div>
  </div>
</template>

<style scoped></style>
