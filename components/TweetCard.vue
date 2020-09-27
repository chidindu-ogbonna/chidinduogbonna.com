<template>
  <!-- eslint-disable vue/no-v-html -->
  <div v-html="tweet.link"></div>
</template>

<script>
export default {
  props: {
    tweet: {
      type: Object,
      required: true,
    },
  },
}
</script>
