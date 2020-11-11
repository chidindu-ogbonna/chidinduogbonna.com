<template>
  <page-section>
    <div class="flex flex-col flex-wrap md:flex-row">
      <div
        v-for="(project, index) in projects"
        :key="index"
        :class="[index % 2 == 0 ? 'md:pr-10' : 'md:pl-10']"
        class="w-full mb-10 md:w-1/2"
      >
        <project-card :project="project" />
      </div>
    </div>
  </page-section>
</template>

<script>
import { projects } from '@/info'

export default {
  name: 'Projects',
  data() {
    return {
      projects,
    }
  },

  head() {
    return {
      title: 'Projects - 6ones',
      meta: [
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Projects - 6ones',
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: 'Projects - 6ones',
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://chidinduogbonna.com/projects',
        },
      ],
    }
  },
}
</script>
