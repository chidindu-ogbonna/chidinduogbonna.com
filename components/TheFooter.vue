<template>
  <section>
    <div class="max-w-screen-lg px-4 mx-auto">
      <hr class="hr-style opacity-70" />
      <div class="flex py-8">
        <div class="mr-4">
          &copy;
          {{ currentYear }}
        </div>
        <div class="font-black">chidinduogbonna.com</div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    currentYear() {
      return new Date().getFullYear()
    },
  },
}
</script>
