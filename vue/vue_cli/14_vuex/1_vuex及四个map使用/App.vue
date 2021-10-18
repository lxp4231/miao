<template>
    <Count> </Count>
</template>

<script>
import Count from "./components/Count.vue";
export default {
    //这里面的this指向VueComponent实例
    name: "App",
    data() {
        return {};
    },
    components: {
        Count,
    },
};
</script>

<style>
</style>