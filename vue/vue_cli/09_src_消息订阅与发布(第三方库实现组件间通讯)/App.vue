<template>
    <div>
        <h4 ref="title">欢迎{{ name1 }}</h4>
        <School />
        <Student />
    </div>
</template> 

<script>
import School from "./components/School";
import Student from "./components/Student";
export default {
    //这里面的this指向VueComponent实例
    name: "App",
    components: {
        School,
        Student,
    },
    data() {
        return {
            name1: "app",
        };
    },
};
</script>

<style>
</style>