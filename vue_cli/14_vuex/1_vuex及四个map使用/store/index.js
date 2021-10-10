import Vue from "vue"
// 使用Vuex
Vue.use(Vuex) //在store中引入,不然报错，要先引入Vue.use(Vuex)
//该文件用于创建Vuex中最为核心的store
//引入vuex
import Vuex from "vuex"
// 准备actions：用于响应组建中的动作
const actions = {
  // 此处没有业务逻辑要处理，直接在count.vue中commit
  // add(context, value) {
  //   context.commit("ADD", value)//commit在context(上下文)中,context相当于小型Store
  // },
  // dc(context, value) {
  //   context.commit("DC", value)
  // },
  addOdd(context, value) {
    // Action 函数接受一个与 store 实例具有相同方法和属性的 context 对象
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
}
// 准备mutations:用于操作数据(state)
const mutations = {
  ADD(state, value) {
    state.sum += value
  },
  DC(state, value) {
    state.sum -= value
  },
}

// 准备state:用于存储数据
const state = {
  sum: 0,
  stude: "web",
  address: "sgg",
}
//准备getters：用于将state中的数据进行加工
const getters = {
  bigSum(state) {
    return state.sum * 10
  },
}
// 创建store,并导出store
export default new Vuex.Store({
  actions,
  mutations,
  state,
  getters,
})
