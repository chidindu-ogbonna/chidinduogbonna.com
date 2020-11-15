<template>
  <footer class="py-4">
    <nav
      class="flex items-center justify-between max-w-screen-lg px-4 mx-auto text-4xl text-white"
    >
      <ul class="flex items-center justify-start text-on-background-1">
        <li class="mr-3">
          <a
            href="mailto:hello@chidinduogbonna.com"
            target="_blank"
            class="transition-colors duration-300 ease-in-out cursor-pointer hover:text-potion"
          >
            <icon-mail class="w-6 h-6"></icon-mail>
          </a>
        </li>
        <li class="mx-3">
          <a
            href="https://twitter.com/intent/user?screen_name=chidinduogbonna"
            target="_blank"
            class="transition-colors duration-300 ease-in-out cursor-pointer hover:text-potion"
          >
            <icon-twitter class="w-6 h-6"></icon-twitter>
          </a>
        </li>
        <li class="mx-3">
          <a
            target="_blank"
            href="https://github.com/chidindu-ogbonna"
            class="transition-colors duration-300 ease-in-out cursor-pointer hover:text-potion"
          >
            <icon-github class="w-6 h-6"></icon-github>
          </a>
        </li>
        <li class="mx-3">
          <a
            target="_blank"
            href="https://medium.com/@6ones"
            class="transition-colors duration-300 ease-in-out cursor-pointer hover:text-potion"
          >
            <icon-medium class="w-6 h-6"></icon-medium>
          </a>
        </li>
      </ul>
      <a
        target="_blank"
        class="flex items-center p-1 text-xs rounded-full text-default bg-default-inverse"
        href="https://twitter.com/intent/user?screen_name=chidinduogbonna"
      >
        <img
          :src="imageUrl"
          class="w-6 h-6 rounded-full bounce-in-bottom"
          alt="Chidindu Promise Ogbonna"
        />
        <span class="mx-1">By Chidindu</span>
      </a>
    </nav>
  </footer>
</template>

<script>
import IconMail from '@/assets/svg/envelope.svg?inline'
import IconGithub from '@/assets/svg/github.svg?inline'
import IconMedium from '@/assets/svg/medium.svg?inline'
import IconTwitter from '@/assets/svg/twitter.svg?inline'
export default {
  components: {
    IconMail,
    IconGithub,
    IconMedium,
    IconTwitter,
  },

  data() {
    return {
      imageUrl:
        'https://res.cloudinary.com/cheapflix/image/upload/r_0/v1581550020/03a5e749-4ee9-49d5-8cf7-786806db376b.jpg',
    }
  },

  methods: {
    visitLink(link) {
      this.$store.dispatch('app/logSocialEvent', {
        name: 'social-link_visited',
        link,
        route: this.$route.name,
      })
      return true
    },
  },
}
</script>
