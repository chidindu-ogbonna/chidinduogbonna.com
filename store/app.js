import { analytics } from '@/services/firebase'

export const state = () => ({
  navbarState: false,
  theme: 'light',
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
  logEvent({ commit }, payload) {
    if (analytics) {
      const { name, props } = payload
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
