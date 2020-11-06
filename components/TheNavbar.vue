<template>
  <div
    :class="`${theme}-bg`"
    class="fixed top-0 left-0 right-0 z-5 bg-transition"
  >
    <header class="max-w-screen-lg px-4 py-2 mx-auto">
      <nav class="relative flex items-center justify-between">
        <ul
          class="flex pr-4 overflow-x-scroll no-scrollbar text-on-background-2"
        >
          <template v-for="i in links">
            <li :key="i.name">
              <n-link
                class="nav-link"
                :class="[
                  $route.name === 'slug' && i.link === '/blog'
                    ? 'nav-link--active'
                    : '',
                ]"
                exact-active-class="nav-link--active"
                :to="i.link"
              >
                {{ i.name }}
              </n-link>
            </li>
            <span :key="`${i.name}-span`" class="mx-3">/</span>
          </template>

          <li>
            <a class="nav-link" href="/resume.pdf" target="_blank">Résumé</a>
          </li>
        </ul>
        <the-theme-switcher></the-theme-switcher>
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { name: '6ones', link: '/' },
        { name: 'Projects', link: '/projects' },
        { name: 'Blog', link: '/blog' },
      ],
    }
  },

  computed: {
    theme() {
      return this.$store.state.app.theme
    },
  },
}
</script>

<style lang="scss">
.nav-link {
  font-size: 0.875rem;
  transition: border 0.2s ease-in, color 0.5s ease-in;

  @media (min-width: 768px) {
    font-size: 1.125rem;
  }

  &:hover {
    color: var(--primary);
    border-bottom: 4px solid var(--primary);
  }

  &--active {
    color: var(--primary);
    border-bottom: 4px solid var(--primary);
  }
}
</style>
