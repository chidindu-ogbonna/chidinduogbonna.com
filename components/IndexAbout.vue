<template>
  <section
    id="about"
    class="flex flex-col max-w-screen-lg px-4 pt-16 pb-10 mx-auto"
  >
    <div class="max-w-screen-sm mr-auto">
      <!-- <div class="mb-12">
        <button
          class="px-2 py-1 transition-all duration-500 ease-in transform border-2 cursor-pointer border-primary text-primary hover:scale-110 hover:-translate-y-1"
          @click="mountIntro"
        >
          View Intro
        </button>
      </div> -->
      <div class="py-4 mb-4">
        <h1 class="text-3xl font-bold text-on-background-1">
          Hi, I'm Chidindu Ogbonna
        </h1>
        <p class="text-sm md:text-lg text-on-background-2">Call me 6ones.</p>
      </div>
      <div class="max-w-screen-sm mb-4">
        <h2 class="mb-2 text-lg font-bold text-on-background-1">An Engineer</h2>
        <div class="text-sm text-on-background-2 md:text-lg">
          <div class="pb-1">
            I engineer
            <span class="font-medium text-on-background-1">Software</span> and
            teach computers to behave like humans using
            <span class="font-medium text-on-background-1"
              >Machine Learning</span
            >.
          </div>

          <div class="pb-1">
            I've built
            <a v-scroll-to="'#projects'" class="about-link" href="#projects">
              software
            </a>
            on the side
          </div>

          <div>
            I put some code on
            <a
              target="_blank"
              href="https://github.com/chidindu-ogbonna"
              class="about-link"
            >
              @github
            </a>
          </div>

          <div class="pb-1">
            I blog <n-link to="/blog" class="about-link"> @blog </n-link> and
            tweet on
            <a
              class="about-link"
              href="https://twitter.com/intent/user?screen_name=chidinduogbonna"
              target="_blank"
              >@twitter</a
            >
          </div>
          <div class="pb-1">
            You can email me at
            <a
              class="about-link"
              href="mailto:hello@chidinduogbonna.com"
              target="_blank"
            >
              me@me.me
            </a>
          </div>
          <div class="mt-8">
            Currently working on making Jollof Rice easy to identify. You can
            see it at
            <a
              href="https://isthisjollof.web.app"
              class="about-link"
              target="_blank"
              >IsThisJollof</a
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    mountIntro() {
      this.$store.dispatch('app/logEvent', {
        name: 'user_click_view_intro',
        props: { path: this.$route.path },
      })
      this.$emit('mount-intro')
    },
  },
}
</script>
