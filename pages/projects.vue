<template>
  <page-section>
    <page-title class="mb-8"> Projects </page-title>
    <div class="flex flex-col flex-wrap md:flex-row fade-in-fwd">
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
  data() {
    return {
      projects,
    }
  },

  head() {
    return {
      title: 'Projects - Chidindu Promise Ogbonna',
      meta: [
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Projects - Chidindu Promise Ogbonna',
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: 'Projects - Chidindu Promise Ogbonna',
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
