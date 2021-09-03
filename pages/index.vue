<template>
  <div class="max-w-screen-lg mx-auto">
    <IndexAbout @mount-intro="mountIntro" />

    <IndexProjects />

    <IndexWriting :articles="articles" />

    <!-- FAB -->
    <transition name="fade-in">
      <the-fab v-if="showFab" scroll-to-id="#about"></the-fab>
    </transition>
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
      showFab: false,
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
