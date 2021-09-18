<template>
    <div>
        <h4>student名字:{{ name }}</h4>
        <h4>age:{{ age }}</h4>
        <h4>sex:{{ sex }}</h4>
        <button @click="add()">点击age++</button>
        <button @click="reduce()">点击age--</button>
    </div>
</template>

<script>
import { mix } from "../mixin";
export default {
    name: "Student",
    data() {
        return {
            name: "jsj",
            age: "99",
            sex: "male",
            x: 666, //data中的数据以组件的为主，不会被mixin影响
            y: 300,
        };
    },
    methods: {
        reduce() {
            this.age--;
        },
    },
    mounted() {
        console.log("mix成功666"); //会和mixins中的数据混合
    },
    mixins: [mix],
};
</script>

<style>
h4 {
    color: orange;
}
</style>