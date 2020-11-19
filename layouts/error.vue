<template>
  <div class="flex items-center justify-center min-h-screen">
    <div class="flex flex-col items-center">
      <div class="font-bold text-9xl">404</div>
      <div class="mb-6 text-lg font-semibold">Lost your way ? Go back to</div>
      <ul class="flex">
        <li v-for="(page, index) in pages" :key="index">
          <a
            :class="[index !== 0 ? 'mx-2' : 'mr-2']"
            class="btn"
            @click="changeRoute(page)"
          >
            {{ page.name }}
          </a>
          <template> / </template>
        </li>
        <li>
          <a href="/resume.pdf" class="ml-2 btn"> CV </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  /* eslint-disable vue/require-prop-types */
  props: ['error'],

  layout: 'bare',

  data() {
    return {
      pages: [
        { name: 'Home', link: '/' },
        { name: 'Projects', link: '/projects' },
        { name: 'Blog', link: '/blog' },
      ],
    }
  },

  methods: {
    changeRoute(page) {
      this.$store.dispatch('app/logEvent', {
        name: 'user_leave_404',
        props: { to: page.name },
      })
      this.$router.push({ path: page.link })
    },
  },
}
</script>
