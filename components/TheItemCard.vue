<template>
  <div class="flex flex-col justify-between w-full h-full bg-black rounded-md">
    <TheImage
      :image-url="item.image.url"
      :image-alt="item.title"
      :link="link"
      class="mt-4"
    />

    <div class="p-4">
      <div class="mb-4 text-sm text-on-background-2">
        <!-- eslint-disable vue/no-v-html -->
        <div v-html="item.description" />
      </div>
      <div class="mb-4 text-sm text-on-background-2">
        <span class="mr-1 font-medium text-on-background-1">
          Tech Stack -
        </span>
        <template v-for="(tag, i) in item.tags">
          <span :key="i">
            {{ tag }}
            <template v-if="i < item.tags.length - 1"> &bull; </template>
          </span>
        </template>
      </div>

      <div class="flex text-sm">
        <template v-if="item.location.url">
          <a
            :href="item.location.url"
            rel="noopener"
            target="_blank"
            class="mr-8 capitalize btn"
          >
            <span class="mr-2">{{ item.location.name }}</span>
            <IconArrowRightDiagonal class="w-4 h-4" />
          </a>
        </template>
        <template v-if="item.github.url">
          <a :href="item.github.url" rel="noopener" target="_blank" class="btn">
            <span class="mr-2">GitHub</span>
            <IconGithub class="w-4 h-4" />
          </a>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import IconArrowRightDiagonal from '@/components/icons/IconArrowRightDiagonal'
import IconGithub from '@/components/icons/IconGithub'
import TheImage from '@/components/TheImage'

export default {
  components: {
    IconArrowRightDiagonal,
    IconGithub,
    TheImage,
  },

  props: {
    item: {
      type: Object,
      required: true,
    },

    type: {
      // project || article
      type: String,
      required: true,
    },
  },

  computed: {
    link() {
      return this.item.location.url || this.item.github.url
    },
  },
}
</script>
