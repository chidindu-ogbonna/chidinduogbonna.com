<template>
  <div id="nav-hamburger" :class="[state ? 'open' : 'close']">
    <span />
    <span />
    <span />
    <span />
    <span />
    <span />
  </div>
</template>

<script>
export default {
  props: {
    state: Boolean,
  },
}
</script>
