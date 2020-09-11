<template>
  <div>
    <div
      :class="`${theme}-bg`"
      class="fixed top-0 left-0 right-0 z-5 bg-transition"
    >
      <header class="max-w-screen-lg px-4 py-2 mx-auto">
        <nav class="flex items-center justify-between">
          <the-theme-switcher></the-theme-switcher>
          <div class="flex items-center">
            <icon-hamburger
              :state="dropdownState"
              class="text-on-background-2"
              @click.native="toggleDropdown"
            />
          </div>
        </nav>
      </header>
    </div>
    <div
      class="fixed top-0 left-0 h-full transition-opacity duration-300 ease-in-out cover-background z-2"
      :class="[dropdownState ? 'w-full opacity-100' : 'w-0 opacity-0']"
    ></div>
    <div
      ref="dropdown"
      :class="[dropdownState ? 'w-full' : 'w-0']"
      class="fixed top-0 left-0 right-0 z-10 flex justify-end h-full mt-12 ml-auto transition-width"
      @click="dropdownState = !dropdownState"
    >
      <div class="w-5/6 h-full py-4 shadow-xl bg-background lg:w-1/2">
        <ul class="flex flex-col px-4 mb-12">
          <li v-for="(link, index) in links" :key="index" class="py-2 mb-2">
            <n-link
              :key="index"
              :to="link.link"
              class="nav-link"
              exact-active-class="nav-link--active"
            >
              <IconChevronRight class="w-6 h-6 mr-4 text-primary" />
              {{ link.name }}
            </n-link>
          </li>

          <li>
            <a href="/resume.pdf" target="_blank" class="nav-link">
              <IconChevronRight class="w-6 h-6 mr-4 text-primary" />
              Resume
            </a>
          </li>
        </ul>
        <the-social-links class="px-4 mb-8" />
        <!-- <div class="flex items-center mb-4">
          <the-logo></the-logo>
          <span class="text-xl font-bold text-on-background-1"
            >chidinduogbonna.com</span
          >
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import IconChevronRight from '@/components/icons/IconChevronRight'

export default {
  components: {
    IconChevronRight,
  },

  data() {
    return {
      sections: ['about', 'projects', 'experience'],
      links: [
        { name: 'home', link: '/' },
        { name: 'projects', link: '/projects' },
        { name: 'blog', link: '/blog' },
      ],
      dropdownState: false,
    }
  },

  computed: {
    navbarState() {
      return this.$store.state.app.navbarState
    },

    theme() {
      return this.$store.state.app.theme
    },
  },

  methods: {
    toggleDropdown() {
      this.dropdownState = !this.dropdownState
    },
  },

  head() {
    return {
      bodyAttrs: { class: [this.dropdownState ? 'overflow-hidden' : ''] },
    }
    // watch: {
    //   dropdownState(value) {
    //     const body = document.querySelector('body')
    //     if (!value) {
    //       body.classList.remove('overflow-hidden')
    //     } else {
    //       body.classList.add('overflow-hidden')
    //     }
    //   },
    // },
  },
}
</script>

<style lang="scss">
.nav-link {
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  // font-weight: 800;
  transition: background 0.4s ease-in-out, color 0.4s ease-out, right ease 0.3s;
  right: 0;
  text-transform: capitalize;
  position: relative;
  color: var(--on-background-2);
  font-size: 1.4rem;

  &--active {
    background: var(--primary);
    color: var(--default);
  }

  &:hover {
    right: -10px;
    background: var(--primary);
    color: var(--default);
  }
}

.background-opacity {
  --bg-opacity: 0.7;
  background: rgba(11, 12, 14, var(--bg-opacity));
}

.transition-width {
  // -webkit-transition: width 1s ease-in-out;
  // -moz-transition: width 1s ease-in-out;
  // -o-transition: width 1s ease-in-out;
  // transition: width 1s ease-in-out;

  -webkit-transition: width 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  -moz-transition: width 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  -o-transition: width 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  transition: width 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
</style>
