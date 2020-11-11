<template>
  <div id="introduction" class="fixed z-10 flex potion-container">
    <div class="w-full max-w-screen-lg px-4 mx-auto">
      <ThePotion />
      <div class="my-4 text-3xl text-left text-on-background-1">
        <h1 class="font-semibold font-b">
          Chidindu
          <span class="hidden md:inline">Promise</span>
          Ogbonna
        </h1>
        <p
          class="text-sm font-semibold tracking-wider uppercase md:text-base text-potion"
        >
          An Engineer
        </p>
      </div>
      <div
        class="flex flex-col flex-wrap items-start max-w-screen-md py-4 mb-8 text-base sm:flex-row"
      >
        <div class="w-full mb-4 sm:pr-8 sm:mb-0 sm:w-2/3">
          <p>
            I like to mix potions at work. In my free time, you'll find me
            trying to extract the acid (HCl) from the salt and water mixture
            (NaCl + H20)
          </p>
        </div>
        <div class="w-full py-4 sm:text-left sm:w-1/3">
          <!-- <div class="flex flex-row items-start w-full sm:flex-col sm:text-left sm:w-1/3"> -->
          <!-- <div>
            <a href="/resume.pdf" target="_blank" class="inline-flex items-center link__regular">
              <IconChevronRight class="w-5 h-5 mr-2 text-primary" />
              Projects
            </a>
          </div>
          <div>
            <a href="/resume.pdf" target="_blank" class="inline-flex items-center link__regular">
              <IconChevronRight class="w-5 h-5 mr-2 text-primary" />
              Blog
            </a>
          </div> -->
          <div>
            <a
              class="px-2 py-1 border-2 cursor-pointer border-primary text-primary"
              @click="removeIntro"
            >
              Explore
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ThePotion from '@/components/ThePotion'
// import IconChevronRight from '@/components/icons/IconChevronRight'

export default {
  components: {
    ThePotion,
    // IconChevronRight
  },

  methods: {
    removeIntro() {
      this.$store.dispatch('app/logEvent', {
        name: 'user_click_explore',
        props: { path: this.$route.path },
      })
      this.$emit('remove-intro')
    },
  },
}
</script>
