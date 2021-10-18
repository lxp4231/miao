<template>
  <div class="demo">
    <!-- template不作为页面标签使用，做一个包裹 -->
    <h4>name:{{ name }}</h4>
    <h4>age:{{ age }}</h4>
    <button @click="showName()">点击</button>
  </div>
</template>

<script>
//  Vue.extend 可以省略
export default {
  //省略了Vue.extend
  name: "Student", //起了个名字,组件名
  data() {
    return {
      name: "lxplalala",
      age: 200,
    };
  },
  methods: {
    showName() {
      alert(this.name);
    },
  },
};
</script>

<style>
</style>