<template>
  <section id="writing" class="min-h-screen py-20">
    <div class="flex flex-col justify-center max-w-screen-lg px-4 mx-auto">
      <div class="mb-8">
        <page-title> WRITTEN BY ME </page-title>
      </div>
      <div class="flex flex-col flex-wrap mb-4 md:flex-row">
        <div
          v-for="(article, index) in articles"
          :key="index"
          :class="[index % 2 == 0 ? 'md:pr-8' : 'md:pl-8']"
          class="w-full mb-10 md:w-1/2"
        >
          <article-card :article="article" />
        </div>
      </div>
      <div>
        <n-link
          class="px-2 py-1 transition-all duration-500 ease-in transform border-2 cursor-pointer border-primary text-primary hover:scale-110 hover:-translate-y-1"
          to="/blog"
        >
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
}
</script>
