<template>
  <div
    class="fixed flex justify-center px-4 py-12 mx-auto transition-opacity duration-500 ease-out z-2"
    style="bottom: 2%; right: 1%"
  >
    <a
      v-scroll-to="scrollToId"
      href="#"
      class="flex items-center justify-center w-12 h-12 text-sm rounded-full text-default bg-primary"
      @click="fabClicked"
    >
      <IconArrowUp class="w-6 h-6" />
    </a>
  </div>
</template>

<script>
export default {
  props: {
    /* eslint-disable vue/require-default-prop */
    scrollToId: String,
  },

  methods: {
    fabClicked() {
      this.$store.dispatch('app/logNavEvent', {
        name: 'fab_clicked',
      })
      return true
    },
  },
}
</script>
