<template>
  <div :class="`theme-${theme}`" class="text-on-background-1">
    <the-navbar />
    <nuxt keep-alive />
    <the-footer />
  </div>
</template>

<script>
export default {
  computed: {
    theme() {
      return this.$store.state.app.theme
    },
  },

  key(route) {
    return route.fullPath
  },

  head() {
    return {
      htmlAttrs: {
        class: [`${this.theme}-bg`, 'bg-transition'],
      },
    }
  },
}
</script>
