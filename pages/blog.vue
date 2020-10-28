<template>
  <page-section>
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
  name: 'Blog',
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
