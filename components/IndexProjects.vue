<template>
  <section id="projects" class="min-h-screen py-20">
    <div class="flex flex-col justify-center px-4 mx-auto">
      <div class="w-full mb-8 text-center">
        <page-title> Side projects </page-title>
      </div>
      <div class="flex flex-col flex-wrap mb-4 md:flex-row">
        <!-- :class="[index % 2 == 0 ? 'md:pr-8' : 'md:pl-8']" -->
        <div
          v-for="(project, index) in projects"
          :key="index"
          class="w-full mb-10 md:px-4 md:w-1/2 lg:w-1/3"
        >
          <project-card :project="project" />
        </div>
      </div>
      <div class="w-full text-center">
        <n-link
          class="link"
          to="/projects"
          @click.native="seeAllProjects('/projects')"
        >
          See All Projects
        </n-link>
      </div>
    </div>
  </section>
</template>

<script>
import { projects } from '@/info'

export default {
  data() {
    return {
      projects: projects.filter((project) => project.featured),
    }
  },

  methods: {
    seeAllProjects(link) {
      this.$store.dispatch('app/logNavEvent', {
        name: 'inlink_visited',
        link,
        position: 'body',
        route: this.$route.name,
      })
      return true
    },
  },
}
</script>
