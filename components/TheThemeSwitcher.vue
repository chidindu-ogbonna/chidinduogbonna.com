<template>
  <button class="p-2 rounded-full focus:outline-none" @click="toggleTheme">
    <dark-icon
      v-if="theme === 'dark'"
      class="w-5 h-5 md:h-8 md:w-8"
    ></dark-icon>
    <light-icon v-else class="w-5 h-5 md:h-8 md:w-8"></light-icon>
  </button>
</template>

<script>
import DarkIcon from '@/assets/svg/dark.svg?inline'
import LightIcon from '@/assets/svg/light.svg?inline'

export default {
  components: {
    DarkIcon,
    LightIcon,
  },

  computed: {
    theme() {
      return this.$store.state.app.theme
    },
  },

  methods: {
    toggleTheme() {
      let newValue
      if (this.theme.toLowerCase() === 'light') newValue = 'dark'
      else newValue = 'light'

      this.$store.dispatch('app/toggleTheme', { theme: newValue })
    },
  },
}
</script>
