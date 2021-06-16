const moduleA = {
  namespaced: true,
  state() {
    return {
      count: 0,
      todos: [1, 2],
    };
  },
  mutations: {
    increment(state) {
      state.count++;
    },
  },
  actions: {
    increment({ commit }) {
      console.log(111);
      commit('increment');
    },
  },
  getters: {
    doneTodos(state) {
      return state.todos;
    },
  },
};

export default moduleA;
