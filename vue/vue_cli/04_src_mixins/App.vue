<template>
    <div>
        <h4 ref="title">欢迎{{ name }}</h4>
        <School />
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
    data() {
        return {
            name: "app",
        };
    },
};
</script>

<style>
</style>