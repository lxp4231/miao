<template>
    <div>
        <School />
        <hr />
        <Student />
    </div>
</template>
<script>
import Student from "./components/Student.vue";
import School from "./components/School.vue";
export default {
    //这里面的this指向VueComponent实例
    name: "App",
    components: {
        Student,
        School,
    },
};
</script>

<style>
</style>