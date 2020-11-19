<template>
  <!-- eslint-disable vue/no-v-html -->
  <base-item-card
    :image-url="article.image"
    :image-alt="article.title"
    :link="link"
    :title="article.title"
    :is-external="article.isExternal"
  >
    <div
      class="flex flex-col justify-between h-full p-4 text-sm text-on-background-1"
    >
      <div class="py-2">
        <div class="flex flex-row flex-wrap justify-between mb-3 text-xs">
          <div :class="`pill-${setColor}`" class="pill">
            {{ article.tags[0] }}
          </div>
          <div>
            {{
              this.$options.filters.formattedDate(new Date(article.createdAt))
            }}
          </div>
        </div>
        <a
          v-if="article.isExternal"
          :href="link"
          target="_blank"
          @click="visitArticle(article.title)"
        >
          <p class="text-xl font-semibold">{{ article.title }}</p>
        </a>
        <a v-else :href="link" @click="visitArticle(article.title)">
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

    setColor() {
      switch (this.article.tags[0].toLowerCase()) {
        case 'use case':
          return 'orange'

        case 'cloud computing':
          return 'purple'

        case 'machine learning':
          return 'red'

        case 'data analysis':
          return 'red'

        case 'data':
          return 'red'

        default:
          return 'blue'
      }
    },
  },

  methods: {
    visitArticle(article) {
      this.$store.dispatch('app/logArticleEvent', {
        name: 'article_visited',
        article,
        route: this.$route.name,
      })
      return true
    },
  },
}
</script>
