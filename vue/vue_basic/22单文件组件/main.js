// 在这里创建vm实例
import App from "./App"
new Vue({
  el: "#root",
  template: `
    <App></App>
    `,
  components: {
    App,
  },
})
