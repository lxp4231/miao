export default {
  install(Vue, x, y, z) {
    //可以接收参数，可以接收Vue,接收plugins中的参数
    // 过滤器
    Vue.filter("filters", function(value) {
      return value.slice(0, 2)
    }),
      // 自定义指令
      Vue.directive("fbind", {
        //指定与元素成功绑定时调用
        bind(ele, b) {
          ele.value = b.value
        },
        //绑定的元素插入页面时调用
        inserted(ele, b) {
          ele.focus()
        },
        // 指令所在的模板被重新解析时
        update(ele, b) {
          ele.value = b.value
        },
      }),
      // 混入
      Vue.mixin({
        data() {
          return {
            x: 100,
            y: 200,
          }
        },
      })
    //给原型上添加方法
    Vue.prototype.demo = () => {
      alert("hello")
    }
    console.log(x, y, z)
  },
}
