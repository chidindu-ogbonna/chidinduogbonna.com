<template>
  <section id="about" class="flex flex-col max-w-screen-lg px-4 py-16 mx-auto">
    <div class="max-w-screen-sm mr-auto">
      <!-- <div class="mb-12">
        <button
          class="px-2 py-1 transition-all duration-500 ease-in transform border-2 cursor-pointer border-primary text-primary hover:scale-110 hover:-translate-y-1"
          @click="mountIntro"
        >
          View Intro
        </button>
      </div> -->
      <h1 class="py-8 mb-4 text-3xl font-bold text-on-background-1">
        Hi, I'm Chidindu Ogbonna
      </h1>
      <div class="text-lg">
        <h2 class="mb-2 font-bold text-on-background-1">An Engineer</h2>
        <div class="mb-2 text-on-background-2">
          I've built some
          <a v-scroll-to="'#projects'" class="about-link" href="#projects">
            things
          </a>
          on the side. <br />
          I contribute to open source through my
          <a
            target="_blank"
            href="https://github.com/chidindu-ogbonna"
            class="about-link"
            >GitHub</a
          >. <br />
          I talk about Data, ML and Cloud Computing on my
          <n-link to="/blog" class="about-link"> @blog </n-link> and
          <a
            class="about-link"
            href="https://twitter.com/intent/user?screen_name=chidinduogbonna"
            target="_blank"
            >Twitter</a
          >
        </div>
        <div class="mb-2 text-on-background-2">
          You can reach me through mail at
          <a
            class="about-link"
            href="mailto:hello@chidinduogbonna.com"
            target="_blank"
          >
            hello@chidinduogbonna.com
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      imageUrl:
        'https://res.cloudinary.com/cheapflix/image/upload/r_0/v1581550020/03a5e749-4ee9-49d5-8cf7-786806db376b.jpg',
      sections: ['projects', 'writing', 'experience'],
    }
  },

  methods: {
    mountIntro() {
      this.$store.dispatch('app/logEvent', {
        name: 'user_click_view_intro',
        props: { path: this.$route.path },
      })
      this.$emit('mount-intro')
    },

    goToSection(section) {
      const scroll = '#' + section
      this.$scrollTo(scroll)
      this.$store.dispatch('app/logEvent', {
        name: 'user_view_section',
        props: { section },
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.link__about {
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  font-weight: 800;
  margin-bottom: 1.3rem;
  transition: background 0.4s ease-in-out, color 0.4s ease-out, right ease 0.3s;
  right: 0;
  font-size: 1.5rem;
  position: relative;
  text-transform: capitalize;
  color: var(--on-background-2);

  &:hover {
    right: -10px;
    background: var(--potion);
    color: var(--default);
  }
}
</style>
