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
      <div class="mb-4">
        <div class="flex flex-row flex-wrap text-xs">
          <div class="mb-2 mr-2">
            {{
              this.$options.filters.formattedDate(new Date(article.createdAt))
            }}
          </div>
          <span class="mr-2 text-primary"> &bull; </span>
          <div
            v-for="(tag, i) in article.tags"
            :key="i"
            class="text-on-background-2"
          >
            {{ tag }}
            <span v-if="i < article.tags.length - 1" class="mr-2 text-primary">
              &bull;
            </span>
          </div>
        </div>
        <a v-if="article.isExternal" :href="link" target="_blank">
          <p class="mb-2 text-xl font-semibold">{{ article.title }}</p>
        </a>
        <a v-else :href="link">
          <p class="mb-2 text-xl font-semibold">{{ article.title }}</p>
        </a>
        <div class="text-on-background-2" v-html="article.description" />
      </div>

      <div class="flex flex-col text-sm">
        <div>
          <template v-if="article.isExternal">
            <a
              :href="article.external.link"
              rel="noopener"
              target="_blank"
              class="btn"
            >
              Read on
              <span class="ml-1 capitalize">{{ article.external.text }}</span>
              <IconArrowRightDiagonal class="w-4 h-4 ml-2" />
            </a>
          </template>
          <template v-else>
            <nuxt-link class="btn" :to="`/${article.slug}`"
              >Read Article</nuxt-link
            >
          </template>
        </div>
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
