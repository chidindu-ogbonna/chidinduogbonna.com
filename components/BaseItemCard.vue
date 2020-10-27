<template>
  <div
    class="flex flex-col w-full h-full transition-all duration-500 ease-in-out transform border-2 border-transparent rounded-md bg-card-bg hover:border-primary hover:scale-105 hover:-translate-y-1"
  >
    <TheImage
      :image-url="imageUrl"
      :image-alt="imageAlt"
      :link="link"
      :is-external="isExternal"
    />
    <slot />
  </div>
</template>

<script>
/* eslint-disable vue/require-default-prop */
import TheImage from '@/components/TheImage'

export default {
  components: {
    TheImage,
  },

  props: {
    imageUrl: String,
    imageAlt: String,
    link: String,
    title: String,
    isExternal: Boolean,
  },
}
</script>
