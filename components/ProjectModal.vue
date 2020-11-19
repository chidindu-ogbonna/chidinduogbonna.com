<template>
  <div
    class="fixed top-0 left-0 right-0 z-50 flex items-center justify-center w-full h-full mx-auto my-auto lg:py-12"
    style="
      -webkit-backdrop-filter: saturate(180%) blur(5px);
      backdrop-filter: saturate(180%) blur(10px);
    "
  >
    <div
      class="relative w-full h-full max-w-screen-md py-8 mx-auto overflow-x-scroll md:rounded-3xl bg-card-bg"
    >
      <div class="px-4 mb-4 lg:px-12">
        <button
          class="p-1 border-2 border-white rounded-full focus:outline-none border-1"
          @click="closeModal"
        >
          <icon-x class="w-6 h-6 text-white"></icon-x>
        </button>
      </div>
      <div class="mb-4">
        <img
          class="mx-auto"
          :src="project.image.url"
          :alt="project.title"
          @error="setFallbackImage"
        />
      </div>
      <div class="px-4 py-4 mb-4 lg:px-16">
        <div class="flex mb-8">
          <a
            v-if="project.location"
            :href="project.location"
            target="_blank"
            class="inline-flex mr-8 link"
            @click="visit('project')"
          >
            <icon-web class="w-5 h-5 mr-2"></icon-web>
            Live
          </a>
          <a
            v-if="project.github"
            :href="project.github"
            target="_blank"
            class="inline-flex link"
            @click="visit('code')"
          >
            <icon-github class="w-5 h-5 mr-2"></icon-github>
            View Code
          </a>
        </div>
        <div>
          <div class="mb-4 text-lg font-bold">
            {{ project.title }}
          </div>
          <!-- eslint-disable vue/no-v-html -->
          <div class="mb-4" v-html="project.description"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IconX from '@/assets/svg/x.svg?inline'
import IconWeb from '@/assets/svg/web.svg?inline'
import IconGithub from '@/assets/svg/github.svg?inline'

export default {
  components: { IconX, IconGithub, IconWeb },

  props: {
    project: { type: Object, required: true },
  },

  methods: {
    visit(type) {
      this.$store.dispatch('app/logProjectEvent', {
        name: `${type}_visited`,
        type: 'visit',
        project: this.project.title,
        route: this.$route.name,
      })
      return true
    },

    closeModal() {
      this.$store.dispatch('app/logProjectEvent', {
        name: `project_closed`,
        project: this.project.title,
        route: this.$route.name,
      })
      this.$emit('close')
    },

    setFallbackImage(event) {
      event.target.src = require(`~/assets/images/no-image.svg`)
      event.target.classList.add('mx-auto', 'p-8', 'h-56', 'w-56')
    },
  },
}
</script>
