<template>
  <!-- eslint-disable vue/no-v-html -->
  <base-item-card
    :image-url="project.image.url"
    :image-alt="project.title"
    :link="link"
  >
    <div
      class="flex flex-col justify-between h-full p-4 text-sm text-on-background-1"
    >
      <div class="mb-4">
        <a :href="link" target="_blank">
          <h1 class="mb-2 text-xl font-semibold">{{ project.title }}</h1>
        </a>
        <div class="text-on-background-2" v-html="project.description" />
      </div>

      <div class="flex flex-col text-sm">
        <div
          class="flex flex-row flex-wrap items-center mb-4 text-sm text-on-background-2"
        >
          <div class="mr-1 text-sm font-medium text-on-background-1">
            Tech Stack -
          </div>
          <div
            v-for="(stack, i) in project.stack"
            :key="i"
            class="flex flex-row items-center"
          >
            <div :class="[i > 0 ? 'mx-2' : 'mr-2']">
              {{ stack }}
            </div>
            <span v-if="i < project.stack.length - 1" class="text-primary">
              &bull;
            </span>
          </div>
        </div>

        <div>
          <template v-if="project.location.url">
            <a
              :href="project.location.url"
              rel="noopener"
              target="_blank"
              class="mr-8 capitalize btn"
            >
              <span class="mr-2">{{ project.location.name }}</span>
              <IconArrowRightDiagonal class="w-4 h-4" />
            </a>
          </template>
          <template v-if="project.github.url">
            <a
              :href="project.github.url"
              rel="noopener"
              target="_blank"
              class="btn"
            >
              <span class="mr-2">GitHub</span>
              <IconGithub class="w-4 h-4" />
            </a>
          </template>
        </div>
      </div>
    </div>
  </base-item-card>
</template>

<script>
import IconArrowRightDiagonal from '@/components/icons/IconArrowRightDiagonal'
import IconGithub from '@/components/icons/IconGithub'

export default {
  components: {
    IconArrowRightDiagonal,
    IconGithub,
  },

  props: {
    project: {
      type: Object,
      required: true,
    },
  },

  computed: {
    link() {
      return this.project.location.url || this.project.github.url
    },
  },
}
</script>
