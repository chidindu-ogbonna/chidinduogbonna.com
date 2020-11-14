<template>
  <header
    class="fixed top-0 left-0 right-0 z-10 max-w-screen-lg mx-auto"
    style="
      -webkit-backdrop-filter: saturate(180%) blur(5px);
      backdrop-filter: saturate(180%) blur(5px);
    "
  >
    <nav
      class="flex items-center justify-between px-2 pt-2 text-on-background-2"
    >
      <div class="text-2xl md:text-3xl font-cursive">
        <nuxt-link to="/" class="cursor-pointer text-potion">
          <!-- exact-active-class="text-potion" -->
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
            >
              {{ i.name }}
            </n-link>
          </li>
          <span :key="`${i.name}-span`" class="mx-3 text-on-background-2"
            >&bull;</span
          >
        </template>

        <li>
          <a
            class="transition-colors duration-300 ease-in-out cursor-pointer hover:text-potion"
            href="/resume.pdf"
            target="_blank"
          >
            Résumé
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
        { name: 'Projects', link: '/projects' },
        { name: 'Blog', link: '/blog' },
      ],
    }
  },
}
</script>
