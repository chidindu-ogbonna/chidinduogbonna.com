<template>
  <section id="experience" class="min-h-screen py-20">
    <div class="flex flex-col justify-center max-w-screen-lg px-4 mx-auto">
      <div class="mb-8">
        <page-title> Experience </page-title>
      </div>
      <div class="flex flex-col flex-wrap md:flex-row">
        <div
          v-for="(experience, index) in experiences"
          :key="index"
          class="flex flex-col items-center justify-start mb-10 text-sm lg:flex-row lg:text-base"
        >
          <div class="lg:w-9/12 md:py-5">
            <div class="text-2xl font-bold text-on-background-1">
              {{ experience.role }}
              <span class="text-base text-primary">
                <a
                  :href="`${experience.company.url}`"
                  class="btn"
                  target="_blank"
                  rel="noopener"
                >
                  @{{ experience.company.name }}
                </a>
              </span>
            </div>
            <div
              class="mb-3 text-xs font-normal lg:text-sm text-on-background-1"
            >
              {{ experience.period }}
            </div>
            <div class="mb-3 text-on-background-2">
              {{ experience.summary }}
            </div>
            <div class="text-on-background-2">
              <span class="mr-1 font-medium text-on-background-1">
                Location -
              </span>
              {{ experience.location }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { experiences } from '@/info'
import PageTitle from '@/components/PageTitle'

export default {
  components: {
    PageTitle,
  },

  data() {
    return { experiences }
  },
}
</script>
