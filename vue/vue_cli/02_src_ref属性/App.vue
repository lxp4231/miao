<template>
    <div>
        <h4 ref="title">欢迎{{ name }}</h4>
        <School ref="sch" />
        <button @click="showName()">点击获得DOM</button>
    </div>
</template>

<script>
// 引入School组件
import School from "./components/School.vue";
export default {
    //这里面的this指向VueComponent实例
    name: "App",
    components: {
        School,
    },
    data() {
        return {
            name: "app",
        };
    },
    methods: {
        showName() {
            console.log(this.$refs.title); //获取h4元素(获得真实DOM元素)
            console.log(this.$refs.sch); //获取School的实例(vc)
        },
    },
};
</script>

<style>
</style>