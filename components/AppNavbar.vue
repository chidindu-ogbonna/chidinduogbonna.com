<template>
  <header class="fixed top-0 left-0 right-0 z-10 dark-bg">
    <nav
      class="flex items-center justify-between max-w-screen-lg px-2 pt-2 mx-auto text-on-background-2"
    >
      <div class="text-2xl md:text-3xl font-cursive">
        <nuxt-link
          to="/"
          class="cursor-pointer text-potion"
          @click.native="visitLink('/')"
        >
          6ones
        </nuxt-link>
      </div>
      <ul class="flex pr-4 overflow-x-scroll text-sm no-scrollbar md:text-lg">
        <template v-for="i in links">
          <li :key="i.name">
            <n-link
              :to="i.link"
              class="transition-colors duration-300 ease-in-out cursor-pointer hover:text-potion"
              exact-active-class="text-potion"
              @click.native="visitLink(i.link)"
            >
              {{ i.name }}
            </n-link>
          </li>
          <span :key="`${i.name}-span`" class="mx-3 text-on-background-2">
            &bull;
          </span>
        </template>

        <li>
          <a
            class="transition-colors duration-300 ease-in-out cursor-pointer hover:text-potion"
            href="/resume.pdf"
            target="_blank"
            @click="visitLink('/resume.pdf')"
          >
            CV
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { name: 'Me', link: '/' },
        { name: 'Projects', link: '/projects' },
        { name: 'Blog', link: '/blog' },
      ],
    }
  },

  methods: {
    visitLink(link) {
      this.$store.dispatch('app/logNavEvent', {
        name: 'inlink_visited',
        link,
        position: 'nav',
        route: this.$route.name,
      })
      return true
    },
  },
}
</script>
