<template>
  <section id="writing" class="min-h-screen py-20">
    <div class="flex flex-col justify-center px-4 mx-auto">
      <div class="w-full mb-8 text-center">
        <page-title> BLOG POSTS </page-title>
      </div>
      <div class="flex flex-col flex-wrap mb-4 md:flex-row">
        <!-- :class="[index % 2 == 0 ? 'md:pr-8' : 'md:pl-8']" -->
        <div
          v-for="(article, index) in articles"
          :key="index"
          class="w-full mb-10 md:px-4 md:w-1/2"
        >
          <article-card :article="article" />
        </div>
      </div>
      <div class="w-full text-center">
        <n-link class="link" to="/blog" @click.native="seeAllBlogs('/blog')">
          See All Articles
        </n-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  /* eslint-disable vue/require-default-prop */
  props: {
    articles: Array,
  },

  methods: {
    seeAllBlogs(link) {
      this.$store.dispatch('app/logNavEvent', {
        name: 'inlink_visited',
        link,
        position: 'body',
        route: this.$route.name,
      })
      return true
    },
  },
}
</script>
