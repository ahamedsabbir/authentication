import { createStore } from 'vuex'

const localStoragePlugin = store => {
  const savedState = localStorage.getItem('vuex-state')
  if (savedState) {
    store.replaceState(JSON.parse(savedState))
  }

  store.subscribe((mutation, state) => {
    localStorage.setItem('vuex-state', JSON.stringify(state))
  })
}

export default createStore({
  state: {
    // Your state properties
    count: 0
  },
  mutations: {
    // Your mutations
    increment(state) {
      state.count++
    }
  },
  actions: {
    // Your actions
  },
  getters: {
    // Your getters
  },
  plugins: [localStoragePlugin]
})