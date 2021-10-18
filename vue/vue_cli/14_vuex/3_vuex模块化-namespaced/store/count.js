export default {
  namespaced: true, //命名空间，写了后才能被mapState查看到
  actions: {
    addOdd(context, value) {
      //在此处理条件()
      if (context.state.sum % 2) {
        context.commit("ADD", value) //commit在context(上下文)中
      }
    },
    addWait(context, value) {
      setTimeout(() => {
        context.commit("ADD", value)
      }, 500)
    },
  },
  mutations: {
    ADD(state, value) {
      state.sum += value
    },
    DC(state, value) {
      state.sum -= value
    },
  },
  state: { sum: 0, stude: "web", address: "sgg" },
  // getters对数据进行加工
  getters: {
    bigSum(state) {
      return state.sum * 10
    },
  },
}
