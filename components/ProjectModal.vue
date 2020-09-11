<template>
  <TheModal :showing="showing" class="px-3" @modal-close="$emit('close')">
    <div
      :class="[showing ? 'scale-up-center' : '']"
      class="max-w-screen-sm p-4 shadow-2xl bg-background md:p-8"
    >
      This is me
      <!-- <template v-if="project.title">
        <div class="flex mb-4">
          <div class="w-2/5 mr-2 md:mr-8 md:w-auto">
            <img
              :src="project.image.url"
              :alt="project.image.alt"
              class="object-scale-down object-center w-24 h-24 p-2 bg-white shadow-inner"
            >
          </div>
          <div class="w-3/5 md:w-auto">
            <h4 class="mb-2 text-lg font-bold">
              {{ project.title }}
            </h4>
            <div class="mb-2">
              <a
                :href="project.github.url"
                :title="project.title"
                class="link__special link__special-icon_left"
                target="_blank"
              >
                <span class="mr-2">
                  <IconGithub class="w-5 h-5" />
                </span>
                {{ project.github.name }}
              </a>
            </div>
          </div>
        </div>
        <div v-html="project.description" class="mb-4 text-sm md:text-base" />
        <div>
          <a
            :href="project.location.url"
            :title="project.title"
            target="_blank"
            class="inline-flex items-center px-4 py-2 text-sm font-bold btn bg-primary md:text-base text-background"
          >
            View Project
            <span class="ml-2">
              <IconArrowRight class="w-5 h-5 icon" />
            </span>
          </a>
        </div>
      </template> -->
    </div>
  </TheModal>
</template>

<script>
/* eslint-disable */
import TheModal from '@/components/TheModal'
import IconArrowRight from '@/components/icons/IconArrowRight'
import IconGithub from '@/components/icons/IconGithub'

export default {
  components: {
    TheModal,
    IconArrowRight,
    IconGithub
  },

  props: {
    project: {
      required: false,
      type: [Object],
      default: null
    },

    showing: {
      required: true,
      type: Boolean
    }
  },

  head () {
    return {
      bodyAttrs: {
        class: [this.showing ? 'overflow-y-hidden' : '']
      }
    }
  }
}
</script>
