import Vue from "vue"
// 使用Vuex
Vue.use(Vuex) //在store中引入
//该文件用于创建Vuex中最为核心的store
//引入vuex
import Vuex from "vuex"
import { nanoid } from "nanoid" //随机生成id
// 准备actions：用于响应组建中的动作
const actions = {
  addOdd(context, value) {
    // value传过来的值
    //在此处理条件()
    // Action 函数接受一个与 store 实例具有相同方法和属性的 context 对象
    if (context.state.sum % 2) {
      context.commit("ADD", value) //commit在context(上下文)中
    }
  },
  addWait(context, value) {
    setTimeout(() => {
      context.commit("ADD", value)
    }, 500)
  },
  addPerson(context, value) {
    const personObj = {
      id: nanoid(),
      name: value,
    }
    if (!value.trim()) {
      return alert("输入不能为空")
    }
    context.commit("ADDPerson", personObj)
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
  ADDPerson(state, value) {
    state.persons.push(value)
  },
}
// 准备state:用于存储数据
const state = {
  sum: 0,
  stude: "web",
  address: "sgg",
  persons: [{ id: "001", name: "liu" }],
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
