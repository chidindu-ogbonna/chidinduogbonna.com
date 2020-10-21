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
      <div class="py-2">
        <a :href="link" target="_blank">
          <h1 class="text-xl font-semibold">{{ project.title }}</h1>
          <p class="text-xs text-on-background-2">{{ project.summary }}</p>
        </a>
      </div>
    </div>
  </base-item-card>
</template>

<script>
export default {
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
