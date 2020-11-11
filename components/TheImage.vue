<template>
  <div class="relative">
    <a :href="link" :target="target">
      <img
        :src="imageUrl"
        :alt="imageAlt"
        class="relative object-contain rounded-t-3xl z-1"
        @error="setFallbackImage"
      />
    </a>
  </div>
</template>

<script>
export default {
  /* eslint-disable vue/require-default-prop */
  props: {
    imageUrl: String,
    imageAlt: String,
    link: String,
    isExternal: Boolean,
  },

  computed: {
    target() {
      if (this.isExternal) return '_blank'
      return '_self'
    },
  },

  methods: {
    setFallbackImage(event) {
      event.target.src = require(`~/assets/images/no-image.svg`)
      event.target.classList.add(
        'mx-auto',
        'p-8',
        'md:h-56',
        'md:w-56',
        'h-40',
        'w-40'
      )
    },
  },
}
</script>
