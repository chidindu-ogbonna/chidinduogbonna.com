<template>
  <slug-section id="top">
    <div class="mb-16">
      <div id="page-details" class="mb-12">
        <div class="px-4 py-8">
          <h1
            class="mb-4 text-4xl font-extrabold leading-10 md:leading-normal md:text-5xl"
          >
            {{ page.title }}
          </h1>
          <div class="flex flex-row flex-wrap py-3 text-xs md:text-sm">
            <div :class="`bg-${setColor}`" class="px-2 text-black rounded-full">
              {{ page.tags[0] }}
            </div>
            <div class="mx-2 text-primary">&bull;</div>
            <div>
              {{
                this.$options.filters.formattedDate(new Date(page.createdAt))
              }}
            </div>
          </div>
        </div>
        <div>
          <img
            class="mx-auto md:rounded-md"
            :src="page.image"
            :alt="page.title"
          />
        </div>
      </div>

      <div class="flex flex-row items-start px-4">
        <div
          v-if="toc && toc.length > 1"
          class="sticky flex-col hidden w-1/5 lg:flex"
          style="top: 6rem; position: -webkit-sticky"
        >
          <div class="mb-8">
            <div
              class="inline-flex w-auto text-base font-light tracking-wider text-center uppercase bg-default-inverse text-default"
            >
              on this page
            </div>
          </div>

          <ul class="flex flex-col text-on-background-2">
            <li v-for="(link, index) in toc" :key="index" class="toc-link">
              <span class="mr-2 text-primary">{{ index + 1 }}</span>
              <a v-scroll-to="`#${link.id}`" class="toc__text">{{
                link.text
              }}</a>
            </li>
          </ul>
        </div>

        <div class="w-full max-w-screen-sm mx-auto lg:w-4/5">
          <div
            v-if="toc && toc.length > 1"
            class="flex flex-col mb-4 lg:hidden lg:px-4"
          >
            <button
              class="flex items-center mb-4 text-on-background-2 focus:outline-none"
              @click="showTOC = !showTOC"
            >
              <icon-chevron-right
                class="w-5 h-5 mr-2 text-primary toc-icon"
                :class="[showTOC ? 'open' : 'close']"
              />
              <span v-if="!showTOC">See Content</span>
              <span v-else>Hide</span>
            </button>
            <ul
              v-if="showTOC"
              class="flex flex-col px-4 fade-in-fwd text-on-background-2"
            >
              <li v-for="(link, index) in toc" :key="index" class="toc-link">
                <span class="mr-2 text-primary">{{ index + 1 }}</span>
                <a v-scroll-to="`#${link.id}`" class="toc__text">{{
                  link.text
                }}</a>
              </li>
            </ul>
          </div>
          <div class="mb-16 lg:px-4">
            <nuxt-content :document="page"></nuxt-content>
          </div>
          <div class="flex items-center lg:px-4">
            <div class="mr-16 share">
              <a
                v-if="useNativeShare"
                class="inline-flex items-center px-2 py-1 text-xs transition-all duration-500 ease-in transform border-2 rounded-md cursor-pointer md:text-sm border-primary text-primary hover:scale-110 hover:-translate-y-1"
                @click="shareWithNative"
              >
                Share via...
              </a>
              <a
                v-else
                target="_blank"
                :href="`http://twitter.com/share?text=${page.title}&url=${fullURL}`"
                class="inline-flex items-center px-2 py-1 text-xs transition-all duration-500 ease-in transform border-2 rounded-md cursor-pointer md:text-sm border-primary text-primary hover:scale-110 hover:-translate-y-1"
              >
                Share
                <icon-twitter class="w-5 h-5 ml-2"></icon-twitter>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      v-if="prev || next"
      class="max-w-screen-sm px-4 py-8 mx-auto mt-20 rounded-md bg-background"
    >
      <div class="mb-8 text-center">
        <div
          class="inline-flex w-auto text-base font-light tracking-wider text-center uppercase bg-default-inverse text-default"
        >
          continue reading
        </div>
      </div>
      <div class="flex flex-col">
        <div
          v-if="prev"
          class="flex items-center justify-start"
          :class="[next ? 'mb-4' : null]"
        >
          <icon-arrow-left class="w-5 h-5 mr-2 text-primary" />
          <a
            :href="`/${prev.slug}`"
            class="text-lg font-bold md:text-xl hover:text-primary"
          >
            {{ prev.title }}
          </a>
        </div>
        <div v-if="next" class="flex items-center justify-end">
          <a
            :href="`/${next.slug}`"
            class="text-lg font-bold md:text-xl hover:text-primary"
          >
            {{ next.title }}
          </a>
          <icon-arrow-right class="w-5 h-5 ml-2 text-primary" />
        </div>
      </div>
    </div>

    <!-- FAB -->
    <the-fab
      scroll-to-id="#top"
      :class="[
        showFab ? 'opacity-100 scale-up-center' : 'opacity-0 scale-down-center',
      ]"
    ></the-fab>
  </slug-section>
</template>

<script>
import IconChevronRight from '@/components/icons/IconChevronRight'
import IconArrowRight from '@/components/icons/IconArrowRight'
import IconArrowLeft from '@/components/icons/IconArrowLeft'

export default {
  components: {
    IconChevronRight,
    IconArrowRight,
    IconArrowLeft,
  },

  async asyncData({ params, $content, error }) {
    try {
      const page = await $content('/articles', params.slug).fetch()
      const [prev, next] = await $content('articles')
        .where({ published: true })
        .where({ isExternal: false })
        .only(['title', 'slug', 'tags', 'image', 'description', 'createdAt'])
        .sortBy('createdAt', 'asc')
        .surround(params.slug)
        .fetch()

      return { page, prev, next }
    } catch (e) {
      error(e)
    }
  },

  data() {
    return {
      showFab: false,
      showTOC: false,
      useNativeShare: false,
      topPrevious: 0,
    }
  },

  computed: {
    toc() {
      return this.page.toc.filter((link) => link.depth === 2)
    },

    fullURL() {
      if (process.client) {
        return window.location.href
      } else {
        return `https://chidinduogbonna.com/${this.page.slug}`
      }
    },

    setColor() {
      switch (this.page.tags[0].toLowerCase()) {
        case 'use case':
          return 'orange'

        case 'cloud computing':
          return 'purple'

        case 'machine learning':
          return 'red'

        case 'data analysis':
          return 'red'

        case 'data':
          return 'red'

        default:
          return 'blue'
      }
    },
  },

  mounted() {
    window.addEventListener('scroll', this.checkFab)

    this.$on('hook:beforeDestroy', () => {
      window.removeEventListener('scroll', this.checkFab)
    })

    if (navigator.share) {
      this.useNativeShare = true
    }
  },

  methods: {
    async shareWithNative() {
      this.$store.dispatch('app/logEvent', {
        name: 'share_with_native',
        props: { title: this.page.title, url: this.fullURL },
      })
      await navigator.share({ title: this.page.title, url: this.fullURL })
    },

    checkFab() {
      const top = document
        .getElementById('page-details')
        .getBoundingClientRect()

      // if (this.topPrevious < top.top) {
      //   this.$store.dispatch('app/toggleNavbar', { state: true })
      // } else {
      //   this.$store.dispatch('app/toggleNavbar', { state: false })
      // }

      this.topPrevious = top.top

      if (top.bottom <= 60) {
        this.showFab = true
      }

      if (top.bottom > 60) {
        this.showFab = false
      }
    },
  },

  head() {
    return {
      title: this.page.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.page.description,
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: this.page.image,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.page.image,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.page.description,
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.page.title,
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: this.fullURL,
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.page.title,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.page.description,
        },
      ],
    }
  },
}
</script>

<style lang="scss">
.nuxt-content {
  h2,
  h3,
  h4 {
    font-weight: 700;
    padding: 40px 0px 0px 0px;
    margin: 0px 0px 24px 0px;
    letter-spacing: -0.3px;
    line-height: 34px;
  }

  h2 {
    font-size: 28px;
  }

  h3 {
    font-size: 24px;
  }

  h4 {
    font-size: 20px;
  }

  a {
    color: var(--primary);
    transition: border 0.2s ease-in, color 0.2s ease-in;

    &:hover {
      border-bottom: 2px solid var(--primary);
    }
  }

  img {
    margin: 32px 0;
    border-radius: 0.375rem;
    width: 100% !important;
  }

  figure {
    margin: 32px 0;

    img {
      margin: 0;
    }

    figcaption {
      text-align: center;
      padding: 0.5rem 0;
      font-size: 0.8rem;
      color: var(--on-background-2);
    }
  }

  i {
    color: var(--on-background-2);
  }

  p {
    margin: 0 auto 28px auto;

    b {
      font-weight: 900;
    }

    code {
      font-family: 'Fira Code', monospace;
      font-size: 0.9rem;
      background: var(--default);
      color: var(--on-background-2);
    }
  }

  table {
    margin: 0 auto 32px auto;
  }

  pre {
    margin: 0 auto 32px auto;
  }

  ol,
  ul {
    list-style-position: outside;
    padding-left: 32px;
    margin: 0 auto 32px auto;
  }

  ol {
    list-style-type: decimal;
  }

  ul {
    list-style-type: disc;
  }

  li {
    margin-bottom: 8px;

    b {
      font-weight: 900;
    }
  }

  .nuxt-content-highlight {
    .filename {
      font-size: 1rem;
      color: var(--on-background-2);
    }

    pre {
      code {
        font-family: 'Fira Code', monospace;
        font-size: 0.875rem;
      }
    }
  }

  .footnotes {
    border-top: 1px dashed var(--on-background-2);
    padding: 2rem 0px 0px 0px;
    font-size: 0.75rem;

    hr {
      display: none;
      border-color: var(--on-background-2);
      margin-bottom: 24px;
      opacity: 0.5;
    }

    ol {
      list-style-type: decimal;
      list-style-position: outside;
      padding-left: 16px;

      // max-width: 640px;
      margin: 0 auto 32px auto;
    }
  }

  blockquote {
    transition: border 0.2s ease-in, color 0.2s ease-in;
    transition-property: background-color, border-color, color;
    transition-timing-function: ease-in;
    transition-duration: 150ms;
    font-size: 1.5rem;
    // font-style: ;

    padding: 2rem 0.75rem;
    // background: var(--default);
    // border-left: 6px solid var(--on-background-2);
    quotes: '\201C''\201D''\2018''\2019';
    color: var(--on-background-2);
    text-align: left;

    &:before {
      color: var(--primary);
      content: open-quote;
      font-size: 5em;
      line-height: 0.1em;
      margin-right: 0.25em;
      vertical-align: -0.4em;
    }

    p:nth-child(1) {
      display: inline;
      margin: 0 !important;
    }

    p:nth-child(2) {
      font-weight: bold;
      margin: 1rem 0 0 0 !important;

      &:before {
        content: '—';
      }
    }
  }
}

.toc-icon {
  transition: transform 0.5s;

  &.close {
    transform: rotate(0deg);
  }

  &.open {
    transform: rotate(90deg);
  }
}

.toc-link {
  cursor: pointer;
  font-size: 0.9rem;
  display: inline-flex;
  align-items: center;
  transition: background 0.4s ease-in-out, color 0.4s ease-out, right ease 0.3s;
  right: 0;
  position: relative;
  color: var(--on-background-2);
  padding: 2px 0px;
  margin-bottom: 6px;

  .toc__text {
    --line-height: 1.5rem;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }

  &:hover {
    right: -10px;
    color: var(--primary);
  }
}
</style>
