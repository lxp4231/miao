import { nanoid } from "nanoid" //随机生成id
import axios from "axios" //随机生成id
export default {
  namespaced: true, //命名空间，写了后才能被mapState查看到
  actions: {
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
    //从服务器发送请求获得名字
    addPersonServer(context) {
      axios
        .get("https://api.uixsj.cn/hitokoto/get?type=social")
        .then((res) => {
          context.commit("ADDPerson", { id: nanoid(), name: res.data })
        })
        .catch((err) => {
          return console.log(err.message)
        })
    },
  },
  mutations: {
    ADDPerson(state, value) {
      state.persons.unshift(value)
    },
  },
  state: { persons: [{ id: "001", name: "liu123" }] },
  getters: {
    firstName(state) {
      return state.persons[0].name
    },
  },
}
