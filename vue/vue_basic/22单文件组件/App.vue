
<template>
  <!-- 在这个文件夹里汇总组件 -->
  <div>
    <School></School>
    <Student></Student>
  </div>
</template>
<script>
import School from "../../../vue_basic/19_单文件组件/School.vue";
import School from "./School";
import Student from "./Student";
export default {
  name: "App",
  // 注册
  components: {
    School,
    Student,
  },
};
</script>

<style>
</style>
