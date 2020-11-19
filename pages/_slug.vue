<template>
  <slug-section id="top">
    <div class="mb-16">
      <!-- heading -->
      <div id="page-details" class="mb-12">
        <div class="px-4 py-8 lg:py-16">
          <h1 class="mb-4 text-2xl font-semibold md:text-4xl">
            {{ page.title }}
          </h1>
          <div class="flex flex-row flex-wrap py-3 text-xs md:text-sm">
            <div :class="`pill-${setColor}`" class="pill">
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
            @error="setFallbackImage"
          />
        </div>
      </div>

      <!-- Body -->
      <div class="flex flex-row items-start px-4">
        <!-- TOC Desktop -->
        <!-- <div
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
        </div> -->

        <transition name="fade-in">
          <div
            v-if="toc && toc.length > 1 && showTOCDesktop"
            class="fixed top-0 left-0 flex-col justify-center hidden h-screen px-2 py-20 md:flex"
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
        </transition>

        <!-- TOC mobile -->
        <div class="w-full max-w-screen-md mx-auto lg:px-4 lg:w-4/5">
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
            <transition name="fade-in">
              <ul
                v-if="showTOC"
                class="flex flex-col px-4 text-on-background-2"
              >
                <li v-for="(link, index) in toc" :key="index" class="toc-link">
                  <span class="mr-2 text-primary">{{ index + 1 }}</span>
                  <a v-scroll-to="`#${link.id}`" class="toc__text">{{
                    link.text
                  }}</a>
                </li>
              </ul>
            </transition>
          </div>

          <!-- Content -->
          <div ref="content" class="mb-16 lg:px-4">
            <nuxt-content :document="page"></nuxt-content>
          </div>

          <!-- Share -->
          <div class="flex items-center justify-between lg:px-4">
            <n-link
              to="/blog"
              class="inline-flex items-center px-2 py-1 text-xs transition-all duration-500 ease-in transform border-2 rounded-md cursor-pointer focus:outline-none md:text-sm border-primary text-primary hover:scale-110 hover:-translate-y-1"
            >
              <icon-chevron-left class="w-5 h-5 mr-2"></icon-chevron-left>
              Back
            </n-link>

            <button
              class="inline-flex items-center px-2 py-1 text-xs transition-all duration-500 ease-in transform border-2 rounded-md cursor-pointer focus:outline-none md:text-sm border-primary text-primary hover:scale-110 hover:-translate-y-1"
              @click="share"
            >
              <icon-send class="w-5 h-5 mr-2"></icon-send>
              Share
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- <transition name="fade-in">
      <the-fab v-if="showFab" scroll-to-id="#top"></the-fab>
    </transition> -->
  </slug-section>
</template>

<script>
import IconSend from '@/assets/svg/send.svg?inline'
import IconChevronRight from '@/components/icons/IconChevronRight'
import IconChevronLeft from '@/assets/svg/chevron-left.svg?inline'

export default {
  name: 'Blogpost',
  components: {
    IconSend,
    IconChevronRight,
    IconChevronLeft,
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
      showTOCDesktop: false,
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
    window.addEventListener('scroll', this.checkContentPosition)

    this.$on('hook:beforeDestroy', () => {
      window.removeEventListener('scroll', this.checkContentPosition)
    })

    if (navigator.share) {
      this.useNativeShare = true
    }
  },

  methods: {
    async share() {
      let via

      if (this.useNativeShare) {
        await this.shareWithNative()
        via = 'native'
      } else {
        via = 'link'
        const link = `http://twitter.com/share?text=${this.page.title}&url=${this.fullURL}`
        window.open(link, '_blank')
      }

      this.$store.dispatch('app/logEvent', {
        name: 'article_shared',
        props: { title: this.page.title, url: this.fullURL, via },
      })
    },

    async shareWithNative() {
      await navigator.share({ title: this.page.title, url: this.fullURL })
    },

    checkContentPosition() {
      const contentPosition = this.$refs.content.getBoundingClientRect()

      if (contentPosition.top < 100) {
        this.showTOCDesktop = true
      } else {
        this.showTOCDesktop = false
      }
    },

    setFallbackImage(event) {
      event.target.src = require(`~/assets/images/no-image.svg`)
      event.target.classList.add('mx-auto', 'p-8', 'h-56', 'w-56')
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
    font-weight: 600;
    padding: 40px 0px 24px 0px;
    // margin: 0px 0px 24px 0px;
    letter-spacing: -0.3px;
    line-height: 34px;

    @screen lg {
      padding: 50px 0px 30px 0px;
    }
  }

  h2 {
    font-size: 1.35rem;

    @screen lg {
      font-size: 2.2rem;
    }
  }

  h3 {
    font-size: 1.15rem;
  }

  h4 {
    font-size: 1rem;
  }

  p {
    font-family: -apple-system, BlinkMacSystemFont, 'Inter', sans-serif;

    margin: 0 auto 18px auto;

    @screen lg {
      font-size: 18px;
    }

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
