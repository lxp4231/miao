<template>
  <div>
    <h4 ref="title">欢迎{{ name }}</h4>
    <!-- 此处的age绑定了v-bind，相当于一个表达式，值取决于写的什么(vue会解析表达式) -->
    <Student name="lusas" :age="18" sex="famale" />
  </div>
</template>
<script>
import Student from "./components/Student.vue";
export default {
  //这里面的this指向VueComponent实例
  name: "App",
  components: {
    Student,
  },
  data() {
    return {
      name: "app",
    };
  },
};
</script>

<style>
</style>