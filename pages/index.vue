<template>
  <div class="py-8">
    <!-- <IndexIntro
      :class="[
        showIntro
          ? 'flex scale-up-center opacity-100'
          : 'opacity-0 scale-down-center',
      ]"
      @remove-intro="removeIntro"
    /> -->

    <IndexAbout @mount-intro="mountIntro" />

    <IndexProjects />

    <IndexWriting :articles="articles" />

    <!-- Contact Section -->
    <section id="contact">
      <div
        class="flex flex-col items-start justify-start max-w-screen-lg px-4 mx-auto"
      >
        <TheSocialLinks class="mb-8" />
      </div>
    </section>

    <!-- FAB -->
    <the-fab
      scroll-to-id="#about"
      :class="[
        showFab ? 'opacity-100 scale-up-center' : 'opacity-0 scale-down-center',
      ]"
    ></the-fab>

    <section
      class="fixed bottom-0 right-0 flex justify-center w-40 py-5 mx-auto transition-opacity duration-500 ease-out z-2"
    >
      <a
        target="_blank"
        class="flex items-center p-1 text-sm rounded-full text-default bg-default-inverse"
        href="https://twitter.com/intent/user?screen_name=chidinduogbonna"
      >
        <img
          :src="imageUrl"
          class="w-6 h-6 rounded-full bounce-in-bottom"
          alt="Chidindu Promise Ogbonna"
        />
        <span class="mx-1">By Chidindu</span>
      </a>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Index',

  async asyncData({ query, $content }) {
    const { view } = query
    // const { view, intro } = query
    // const showIntro = !intro
    const scrollTo = view || null
    const isDev = process.env.APP_MODE === 'development'
    let articleQuery

    if (isDev) {
      articleQuery = { featured: true }
      // articleQuery = { published: true, featured: true }
    } else {
      articleQuery = { published: true, featured: true }
    }

    const articles = await $content('/articles')
      .where(articleQuery)
      .sortBy('createdAt', 'desc')
      .fetch()

    return { scrollTo, articles }
    // return { scrollTo, showIntro, articles }
  },

  data() {
    return {
      imageUrl:
        'https://res.cloudinary.com/cheapflix/image/upload/r_0/v1581550020/03a5e749-4ee9-49d5-8cf7-786806db376b.jpg',
      showFab: false,
      // showIntro: true
    }
  },

  watch: {
    showIntro(value) {
      const body = document.querySelector('body')
      if (value) {
        body.classList.add('hide-scrollbar')
      } else {
        body.classList.remove('hide-scrollbar')
      }
    },
  },

  mounted() {
    if (this.scrollTo) {
      const position = '#' + this.scrollTo
      this.$scrollTo(position)
      this.showIntro = false
    }

    if (!this.showIntro) {
      setTimeout(() => {
        const intro = document.getElementById('introduction')
        if (intro) {
          intro.classList.add('hidden')
        }
      }, 500)
    }

    window.addEventListener('scroll', this.showElement)

    this.$on('hook:beforeDestroy', () => {
      window.removeEventListener('scroll', this.showElement)
    })
  },

  methods: {
    mountIntro() {
      this.showIntro = true
      const intro = document.getElementById('introduction')
      intro.classList.remove('hidden')
    },

    removeIntro() {
      this.showIntro = false
      this.$scrollTo('#about')

      setTimeout(() => {
        const intro = document.getElementById('introduction')
        if (intro) {
          intro.classList.add('hidden')
        }
      }, 500)
    },

    showElement() {
      let about = document.getElementById('about')

      if (about) {
        about = about.getBoundingClientRect()

        if (about.bottom <= 60) {
          this.showFab = true
        }

        if (about.bottom > 60) {
          this.showFab = false
        }
      }
    },
  },

  head() {
    return {
      bodyAttrs: {
        class: [this.showIntro ? 'overflow-hidden' : ''],
      },
    }
  },
}
</script>
