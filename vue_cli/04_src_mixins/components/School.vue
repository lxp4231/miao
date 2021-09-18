<template>
    <div>
        <h4>sthool名字:{{ name | filters }}</h4>
        <h4>address:{{ address }}</h4>
        <h4>build:{{ builds }}</h4>
        <button @click="build()">点击</button>
    </div>
</template>

<script>
import { mix } from "../mixin";
export default {
    name: "Student",
    data() {
        return {
            name: "xcu意识的基础上",
            address: "aaaa",
            builds: 30,
        };
    },
    mixins: [mix], //要写成数组形式
};
</script>

<style>
h4 {
    color: orange;
}
</style>