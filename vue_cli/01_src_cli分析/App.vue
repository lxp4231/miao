<template>
  <!-- 在这个文件夹里汇总组件，即根组件-->
  <div>
    <School></School>
    <Student></Student>
  </div>
</template>
<script>
// 子组件从component中引入
import School from "./components/School.vue";
import Student from "./components/Student.vue";
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
