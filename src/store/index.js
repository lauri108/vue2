import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    centralCounter: 1,
    centralMessage: 'Vuex string',
    studentsArray: [
      { id: 'zxc1', name: 'Jack', age: 1 },
      { id: 'zxc2', name: 'Jill', age: 2 },
      { id: 'zxc3', name: 'Rick', age: 3 },
      { id: 'zxc4', name: 'Tracy', age: 5 }
    ]
  },
  mutations: {
    addStudent (state, student) {
      state.studentsArray.push(student)
    }
  },
  actions: {
  },
  modules: {
  },
  getters: {
    studentsArray: state => { return state.studentsArray }
  }
})
