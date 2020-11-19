import { analytics } from '@/services/firebase'

export const state = () => ({
  navbarState: false,
  theme: 'dark',
})

export const getters = {}

export const mutations = {
  toggleNavbar(state, payload) {
    state.navbarState = payload
  },

  toggleTheme(state, payload) {
    state.theme = payload
  },
}

export const actions = {
  logNavEvent({ dispatch }, payload) {
    const { name, ...rest } = payload
    const props = { ...rest, category: 'navigation' }
    dispatch('logEvent', { name, props })
  },

  logSocialEvent({ dispatch }, payload) {
    const { name, ...rest } = payload
    const props = { ...rest, category: 'social-links' }
    dispatch('logEvent', { name, props })
  },

  logProjectEvent({ dispatch }, payload) {
    const { name, ...rest } = payload
    const props = { ...rest, category: 'project' }
    dispatch('logEvent', { name, props })
  },

  logArticleEvent({ dispatch }, payload) {
    const { name, ...rest } = payload
    const props = { ...rest, category: 'article' }
    dispatch('logEvent', { name, props })
  },

  logEvent({ commit }, payload) {
    if (analytics) {
      const { name, props } = payload
      // console.log(payload)
      analytics.logEvent(name, { ...props })
    }
  },

  toggleNavbar({ commit }, { state }) {
    commit('toggleNavbar', state)
  },

  toggleTheme({ commit }, { theme }) {
    // debugger
    commit('toggleTheme', theme)
  },
}
