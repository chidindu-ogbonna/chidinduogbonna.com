<template>
  <div :class="`theme-${theme}`" class="text-on-background-1">
    <nuxt />
  </div>
</template>

<script>
export default {
  computed: {
    theme() {
      return this.$store.state.app.theme
    },
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
