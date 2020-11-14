<template>
  <section
    id="about"
    class="relative flex flex-col items-center justify-center max-w-screen-md min-h-screen px-4 mx-auto fade-in-tl"
  >
    <div class="py-4 mb-4">
      <h1 class="mb-4 text-2xl font-semibold md:text-3xl text-on-background-1">
        Yo, I'm Chidindu Ogbonna. <br />
        A
        <span class="highlight">
          Software
          <span class="text-on-background-1">&</span>
          ML Engineer.
        </span>
        <br />
        I build products and write about software.
      </h1>
      <h2 class="text-xl font-semibold md:text-2xl text-on-background-2">
        My mission is to build practical
        <span class="highlight">Machine Learning</span> applications.
      </h2>

      <div class="mt-8 text-sm text-on-background-2 md:text-lg">
        <p class="mb-2">
          Currently working on
          <span class="highlight">Jollof Rice</span> @
          <a href="https://isthisjollof.com" class="about-link" target="_blank">
            isthisjollof.com
          </a>
        </p>

        <p>
          Started a
          <span class="highlight">12 ML projects in 12 months</span>
          campaign
        </p>
      </div>
    </div>
    <div class="absolute bottom-0">
      <a
        v-scroll-to="`#projects`"
        href="#"
        class="flex items-center px-3 py-3 text-sm text-on-background-2 animate-bounce"
      >
        Scroll down
        <icon-chevron-left class="w-6 h-6 about-icon"></icon-chevron-left>
      </a>
    </div>
  </section>
</template>

<script>
import IconChevronLeft from '@/assets/svg/chevron-left.svg?inline'
export default {
  components: {
    IconChevronLeft,
  },
}
</script>

<style lang="scss">
.highlight {
  color: #f7f1cb;
}

.about-icon {
  transform: rotate(270deg);
}
</style>
