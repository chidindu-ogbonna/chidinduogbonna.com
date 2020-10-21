<template>
  <!-- eslint-disable vue/no-v-html -->
  <base-item-card
    :image-url="article.image"
    :image-alt="article.title"
    :link="link"
    :title="article.title"
  >
    <div
      class="flex flex-col justify-between h-full p-4 text-sm text-on-background-1"
    >
      <div class="py-2">
        <div class="flex flex-row flex-wrap">
          <div class="mb-2 mr-2 text-xs">
            {{
              this.$options.filters.formattedDate(new Date(article.createdAt))
            }}
          </div>
        </div>
        <a v-if="article.isExternal" :href="link" target="_blank">
          <p class="text-xl font-semibold">{{ article.title }}</p>
        </a>
        <a v-else :href="link">
          <p class="text-xl font-semibold">{{ article.title }}</p>
        </a>
        <div
          class="text-xs text-on-background-2"
          v-html="article.description"
        />
      </div>
    </div>
  </base-item-card>
</template>

<script>
export default {
  props: {
    article: {
      type: Object,
      required: true,
    },
  },

  computed: {
    link() {
      if (this.article.isExternal) {
        return this.article.external.link
      }
      return `/${this.article.slug}`
    },
  },
}
</script>
