import { createStore } from 'vuex'

const localStoragePlugin = store => {

  const savedState = localStorage.getItem('auth')
  if (savedState) {
    store.commit('setAuth', JSON.parse(savedState))
  }
  store.subscribe((mutation, state) => {
    if (mutation.type === 'setAuth' || mutation.type === 'changeName' || mutation.type === 'changeImage') {
      localStorage.setItem('auth', JSON.stringify(state.auth))
    }
  })

}

export default createStore({
  state() {
    return {
      auth: []
    }
  },
  mutations: {
    setAuth(state, data) {
      state.auth = data;
    },
    changeName(state, name){
      state.auth.name = name;
    },
    changeImage(state, image){
      state.auth.image = image;
    }
  },
  actions: {
    callAuth({ commit }, data) {
      commit('setAuth', data)
    },
    callNameChange({ commit }, name) {
      commit('changeName', name)
    },
    callImageChange({ commit }, image) {
      commit('changeImage', image)
    }
  },
  getters: {
    allAuth: state => state.auth,
  },
  plugins: [localStoragePlugin]
})