<template>
  <div>
    <transition name="fade-in">
      <project-modal
        v-if="showDescription"
        :project="project"
        @close="showDescription = false"
      >
      </project-modal>
    </transition>
    <a
      class="flex flex-col w-full h-full transition-all duration-500 ease-in-out transform border-2 border-transparent cursor-pointer rounded-3xl bg-card-bg hover:border-primary hover:scale-105 hover:-translate-y-1"
      @click="openProject"
    >
      <div class="relative">
        <img
          :src="project.image.url"
          :alt="project.title"
          class="relative object-contain rounded-t-3xl z-1"
          @error="setFallbackImage"
        />
      </div>
      <div
        class="flex flex-col justify-between h-full p-4 text-sm text-on-background-1"
      >
        <div class="py-2">
          <h1 class="text-xl font-semibold">{{ project.title }}</h1>
          <p class="text-xs text-on-background-2">{{ project.summary }}</p>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      showDescription: false,
    }
  },

  computed: {
    link() {
      return this.project.location.url || this.project.github.url
    },
  },

  methods: {
    openProject() {
      this.$store.dispatch('app/logProjectEvent', {
        name: 'project_opened',
        project: this.project.title,
        route: this.$route.name,
      })
      this.showDescription = true
    },

    setFallbackImage(event) {
      event.target.src = require(`~/assets/images/no-image.svg`)
      event.target.classList.add(
        'mx-auto',
        'p-8',
        'md:h-56',
        'md:w-56',
        'h-40',
        'w-40'
      )
    },
  },

  head() {
    return {
      bodyAttrs: {
        class: [this.showDescription ? 'overflow-y-hidden' : ''],
      },
    }
  },
}
</script>
