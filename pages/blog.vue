<template>
  <page-section>
    <div class="flex items-center justify-center max-w-screen-sm mx-auto mb-8">
      <div class="w-full py-2 text-left">
        <div
          class="flex items-center px-2 py-1 text-sm bg-transparent border-2 rounded-md border-on-background-2 hover:border-primary focus:border-primary"
        >
          <div>
            <icon-search
              class="w-5 h-5 text-primary"
              :class="[searchFocus ? 'text-primary' : 'text-on-background-2']"
            ></icon-search>
          </div>
          <input
            v-model="query"
            type="search"
            autocomplete="off"
            placeholder="Search by name or tag or content"
            class="w-full p-2 bg-transparent appearance-none focus:outline-none"
            @focus="searchFocus = true"
          />
        </div>
      </div>
    </div>
    <div class="flex flex-col flex-wrap md:flex-row fade-in-fwd">
      <template v-if="articles.length">
        <div
          v-for="(article, index) in articles"
          :key="index"
          :class="[index % 2 == 0 ? 'md:pr-10' : 'md:pl-10']"
          class="w-full mb-10 md:w-1/2"
        >
          <article-card :article="article" />
        </div>
      </template>
      <template v-else>
        <div
          class="flex flex-col items-center justify-center max-w-screen-sm mx-auto mt-10"
        >
          <p class="text-2xl font-bold">Search not found</p>
          <p class="text-on-background-2">Please try something else</p>

          <icon-search class="w-64 h-64 text-on-background-2"></icon-search>
        </div>
      </template>
    </div>
  </page-section>
</template>

<script>
import IconSearch from '@/assets/svg/search.svg?inline'

export default {
  name: 'Blog',

  components: { IconSearch },

  async fetch() {
    const isDev = process.env.APP_MODE === 'development'
    let articleQuery

    if (isDev) {
      articleQuery = {}
    } else {
      articleQuery = { published: true }
    }

    if (!this.query) {
      this.articles = await this.$content('/articles')
        .where(articleQuery)
        .sortBy('createdAt', 'desc')
        .fetch()
    } else {
      this.articles = await this.$content('articles')
        .where(articleQuery)
        .sortBy('createdAt', 'asc')
        .limit(12)
        .search(this.query)
        .fetch()
    }
  },

  asyncData({ query }) {
    const { q } = query
    if (q) return { query: q }
    return { query: '' }
  },

  data() {
    return {
      articles: [],
      searchFocus: false,
    }
  },

  watch: {
    async query() {
      await this.$fetch()
    },
  },

  head() {
    return {
      title: 'Blog - 6ones',
      meta: [
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: 'https://datahorror.appspot.com/images/card-blog.png',
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: 'https://datahorror.appspot.com/images/card-blog.png',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Blog - 6ones',
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: 'Blog - 6ones',
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://chidinduogbonna.com/blog',
        },
      ],
    }
  },
}
</script>
