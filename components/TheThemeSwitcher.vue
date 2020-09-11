<template>
  <div
    class="flex items-center justify-center w-10 h-10 p-1 rounded-full cursor-pointer text-default-inverse bg-card-bg"
  >
    <client-only>
      <button
        v-if="theme === 'dark'"
        class="focus:outline-none"
        @click="toggleTheme('light')"
      >
        <dark-icon class="w-6 h-6"></dark-icon>
      </button>
      <button v-else class="focus:outline-none" @click="toggleTheme('dark')">
        <light-icon class="w-6 h-6"></light-icon>
      </button>
    </client-only>
  </div>

  <!-- <div id="my-button" class="custom-button">
      <input v-model="checked" type="checkbox" class="checkbox" />
      <div class="knobs">
        <span></span>
      </div>
      <div class="layer"></div>
    </div> -->
</template>

<script>
import DarkIcon from '@/assets/svg/dark.svg?inline'
import LightIcon from '@/assets/svg/light.svg?inline'
// import IconDark from '@/components/icons/IconDark'
// import IconLight from '@/components/icons/IconLight'

export default {
  components: {
    // IconDark,
    // IconLight,
    DarkIcon,
    LightIcon,
  },

  data() {
    return {
      checked: false,
    }
  },

  computed: {
    theme() {
      return this.$store.state.app.theme
    },
  },

  watch: {
    checked() {
      let value

      if (this.theme === 'dark') value = 'light'
      else value = 'dark'
      this.toggleTheme(value)
    },
  },

  methods: {
    toggleTheme(value) {
      // console.log('Yes: ', value)
      this.$store.dispatch('app/toggleTheme', { theme: value })
    },
  },
}
</script>

<style lang="scss">
.knobs,
.layer {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.button {
  position: relative;
  top: 50%;
  width: 74px;
  height: 36px;
  // margin: -20px auto 0 auto;
  overflow: hidden;
}

.button.b2 {
  border-radius: 2px;
}

.checkbox {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  opacity: 0;
  cursor: pointer;
  z-index: 3;
}

.knobs {
  z-index: 2;
}

.layer {
  width: 100%;
  // background-color: #ebf7fc;
  background-color: var(--default);
  transition: 0.3s ease all;
  z-index: 1;
  // border-radius: 100px;
}

.custom-button {
  position: relative;
  top: 50%;
  width: 74px;
  height: 24px;
  // margin: -20px auto 0 auto;
  overflow: visible;
  border-radius: 2px;
}

/* Button 11 */
#my-button {
  overflow: visible;
}

#my-button .knobs {
  perspective: 70px;
  border: 2px solid var(--default-inverse);
}

#my-button .knobs:before,
#my-button .knobs:after,
#my-button .knobs span {
  position: absolute;
  top: 4px;
  border-radius: 2px;
}

#my-button .knobs:before,
#my-button .knobs:after {
  height: 100%;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

#my-button .knobs:before {
  content: url('../assets/svg/dark.svg');
  left: 0;
}

#my-button .knobs:after {
  content: url('../assets/svg/light.svg');
  right: 0;
}

#my-button .knobs span {
  top: 2px;
  right: 2px;
  width: 33px;
  height: 16px;
  // background-color: #03a9f4;
  background-color: var(--on-background-1);
  transform: rotateY(0);
  transform-origin: 0% 50%;
  transition: 0.6s ease all;
  z-index: 1;
}

#my-button .checkbox:checked + .knobs span {
  transform: rotateY(-180deg);
  background-color: var(--on-background-1);
}

#my-button .checkbox:checked ~ .layer {
  // background-color: #fcebeb;
  background-color: var(--default);
}
</style>
