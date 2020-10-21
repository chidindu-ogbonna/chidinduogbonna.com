<template>
  <div>
    <ul v-if="showIcons" class="flex flex-row flex-wrap">
      <li class="link__social">
        <a
          href="https://www.github.com/chidindu-ogbonna"
          rel="noopener"
          class=""
          target="_blank"
        >
          <icon-github class="w-5 h-5" />
        </a>
      </li>
      <li class="link__social">
        <a
          href="https://www.twitter.com/@6ones"
          rel="noopener"
          class=""
          target="_blank"
        >
          <icon-twitter class="w-5 h-5" />
        </a>
      </li>
      <li class="link__social">
        <a
          href="https://www.linkedin.com/in/chidindu-ogbonna"
          rel="noopener"
          class=""
          target="_blank"
        >
          <icon-linked-in class="w-5 h-5" />
        </a>
      </li>
      <li class="link__social">
        <a
          href="mailto:hello@chidinduogbonna.com"
          rel="noopener"
          class=""
          target="_blank"
        >
          <icon-mail class="w-5 h-5" />
        </a>
      </li>
    </ul>

    <ul v-else class="flex flex-row justify-start my-4">
      <li v-for="(socialLink, index) in socialLinks" :key="index" class="">
        <a
          :href="socialLink.link"
          :class="[index !== 0 ? 'mx-2' : 'mr-2']"
          rel="noopener"
          class="text-base lg:text-base link__regular"
          target="_blank"
        >
          {{ socialLink.name }}
        </a>
        <template v-if="index < socialLinks.length - 1"> / </template>
      </li>
    </ul>
  </div>
</template>

<script>
import IconGithub from '@/components/icons/IconGithub'
import IconTwitter from '@/components/icons/IconTwitter'
import IconMail from '@/components/icons/IconMail'
import IconLinkedIn from '@/components/icons/IconLinkedIn'

export default {
  components: {
    IconGithub,
    IconTwitter,
    IconMail,
    IconLinkedIn,
  },

  props: {
    showIcons: {
      required: false,
      type: Boolean,
      default: true,
    },
  },

  data() {
    return {
      socialLinks: [
        { name: 'Twitter', link: 'https://www.twitter.com/@chidinduogbonna' },
        { name: 'GitHub', link: 'https://www.github.com/chidindu-ogbonna' },
        {
          name: 'LinkedIn',
          link: 'https://www.linkedin.com/in/chidindu-ogbonna',
        },
        { name: 'Medium', link: 'https://www.medium.com/@chidinduogbonna' },
      ],
    }
  },
}
</script>

<style lang="scss">
.link__social {
  @apply flex items-center mb-2 justify-center w-10 h-10 mr-4 transition-colors duration-500 ease-in-out rounded-full cursor-pointer bg-card-bg text-on-background-2;

  &:hover {
    @apply bg-primary text-default;
  }
}
</style>
