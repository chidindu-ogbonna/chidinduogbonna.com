<template>
  <div class="text-on-background-1 theme-dark">
    <app-navbar />
    <nuxt keep-alive />
    <transition name="bottom-slide">
      <app-footer v-if="$route.name !== 'slug'" />
    </transition>
  </div>
</template>

<script>
export default {
  key(route) {
    return route.fullPath
  },
}
</script>
