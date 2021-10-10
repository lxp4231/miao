//该文件用于创建Vuex中最为核心的store
import Vue from "vue"
//引入vuex
import Vuex from "vuex"
// 使用Vuex
Vue.use(Vuex) //在store中引入,不然报错，要先引入Vue.use(Vuex)
// 求和功能相关配置
import countOptions from "./count"

// 人员管理功能相关配置
import personOptions from "./person"

// 创建store,并导出store
export default new Vuex.Store({
  modules: {
    countOptions,
    personOptions,
  },
})
