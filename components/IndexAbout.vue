<template>
  <section
    id="about"
    class="relative flex flex-col items-center justify-center max-w-screen-md min-h-screen px-4 mx-auto"
  >
    <div class="py-4 mb-4">
      <vue-typed-js
        :start-delay="1000"
        :strings="['I\'m 6ones']"
        :type-speed="100"
      >
        <h1
          class="mb-4 text-2xl font-semibold md:text-5xl text-on-background-1"
        >
          👋 <span class="typing"></span>
        </h1>
      </vue-typed-js>

      <vue-typed-js :start-delay="4000" :strings="['Applied AI Engineer']">
        <h2
          class="mb-4 text-xl font-semibold md:text-4xl text-on-background-1 highlight"
        >
          <span class="typing"></span>
        </h2>
      </vue-typed-js>

      <vue-typed-js
        :start-delay="5000"
        :strings="['I build intelligent applications']"
      >
        <h3 class="text-xl font-semibold md:text-3xl text-on-background-2">
          <span class="typing"></span>
        </h3>
      </vue-typed-js>

      <!-- <div class="mt-8 text-sm text-on-background-2 md:text-lg">
        <p class="mb-2">
          Currently working on
          <span class="highlight">Jollof Rice</span> @
          <a
            href="https://isthisjollof.web.app"
            class="about-link"
            target="_blank"
            @click="visitProject('isthisjollof.web.app')"
          >
            isthisjollof.web.app
          </a>
        </p>

        <p>
          Started a
          <span class="highlight">12 ML projects in 12 months</span>
          campaign
        </p>
      </div> -->
    </div>
    <div class="absolute bottom-0">
      <a
        v-scroll-to="`#projects`"
        href="#"
        class="flex items-center px-3 py-3 text-sm text-on-background-2 animate-bounce"
        @click="scroll"
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

  methods: {
    visitProject(project) {
      this.$store.dispatch('app/logProjectEvent', {
        name: 'project_visited',
        project,
        route: this.$route.name,
      })
      return true
    },

    scroll() {
      this.$store.dispatch('app/logNavEvent', {
        name: 'scroll-button_clicked',
      })
      return true
    },
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
