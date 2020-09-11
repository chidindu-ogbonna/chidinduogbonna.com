<template>
  <div
    :class="[showing ? 'flex' : 'hidden']"
    class="fixed inset-0 z-30 items-center justify-center w-full h-screen transition-opacity duration-1000 ease-in-out bg-black bg bg-opacity-90"
  >
    <div>
      <button
        v-if="closeButton"
        aria-label="close"
        class="absolute top-0 right-0 mx-4 my-2 text-xl text-white cursor-pointer"
        @click.prevent="close"
      >
        <IconCancel class="w-8 h-8 fill-current" />
      </button>
      <slot />
    </div>
  </div>
</template>

<script>
import IconCancel from '@/components/icons/IconCancel'

export default {
  components: {
    IconCancel,
  },

  props: {
    showing: {
      required: true,
      type: Boolean,
    },

    closeButton: {
      required: false,
      type: Boolean,
      default: true,
    },
  },

  mounted() {
    const onEscape = (e) => {
      if (!this.showing || e.key !== 'Escape') {
        return
      }
      this.close()
    }
    document.addEventListener('keydown', onEscape)

    this.$on('hook:destroyed', () => {
      document.removeEventListener('keydown', onEscape)
    })
  },

  methods: {
    close() {
      this.$emit('modal-close')
    },
  },

  head() {
    return {
      bodyAttrs: {
        class: [this.showing ? 'bg' : null],
      },
    }
  },
}
</script>

<style lang="scss">
.bg {
  filter: blur(8px);
}
</style>
