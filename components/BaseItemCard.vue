<template>
  <div class="flex flex-col w-full h-full rounded-md co-shadow bg-card-bg">
    <TheImage :image-url="imageUrl" :image-alt="imageAlt" :link="link" />
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
  },
}
</script>
