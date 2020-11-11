<template>
  <section id="projects" class="min-h-screen py-20">
    <div class="flex flex-col justify-center max-w-screen-lg px-4 mx-auto">
      <div class="flex flex-col flex-wrap mb-4 md:flex-row">
        <div
          v-for="(project, index) in projects"
          :key="index"
          :class="[index % 2 == 0 ? 'md:pr-8' : 'md:pl-8']"
          class="w-full mb-10 md:w-1/2"
        >
          <project-card :project="project" />
        </div>
      </div>
      <div>
        <n-link class="link" to="/projects"> See All Projects </n-link>
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
}
</script>
