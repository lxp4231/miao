<template>
  <div class="demo">
    <!-- template不作为页面标签使用，做一个包裹 -->
    <h4>name:{{ name }}</h4>
    <h4>address:{{ address }}</h4>
    <button @click="showName()">点击</button>
  </div>
</template>

<script>
//  Vue.extend 可以省略
export default {
  // 单个直接默认暴露
  //省略了Vue.extend
  name: "School", //起了个名字,组件名
  data() {
    return {
      name: "xcu",
      address: "bayidonglu",
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
.demo {
  /* background-color: orange; */
}
</style>