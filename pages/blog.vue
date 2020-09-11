<template>
  <page-section>
    <page-title class="mb-8"> Blog </page-title>
    <div class="flex flex-col flex-wrap md:flex-row fade-in-fwd">
      <div
        v-for="(article, index) in articles"
        :key="index"
        :class="[index % 2 == 0 ? 'md:pr-10' : 'md:pl-10']"
        class="w-full mb-10 md:w-1/2"
      >
        <article-card :article="article" />
      </div>
    </div>
  </page-section>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const isDev = process.env.APP_MODE === 'development'
    let articleQuery

    if (isDev) {
      articleQuery = {}
      // articleQuery = { published: true }
    } else {
      articleQuery = { published: true }
    }

    const articles = await $content('/articles')
      .where(articleQuery)
      .sortBy('createdAt', 'desc')
      .fetch()
    return { articles }
  },

  head() {
    return {
      title: 'Blog - Chidindu Promise Ogbonna',
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
          content: 'Blog - Chidindu Promise Ogbonna',
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: 'Blog - Chidindu Promise Ogbonna',
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
