<template>
    <ul>
        <!-- 原始写法 -->
        <!-- <li>消息1：{{ $route.params.id }}</li>
        <li>消息2：{{ $route.params.title }}</li> -->
        <!-- 第一种写法 -->
        <!-- <li>{{ a }}</li>
        <li>{{ b }}</li>  -->
        <!-- 第二种写法 -->
        <!-- <li>消息1：{{ id }}</li>
        <li>消息2：{{ title }}</li> -->
        <!-- 第三种写法 -->
        <li>消息1：{{ id }}</li>
        <li>消息2：{{ title }}</li>
    </ul>
</template>

<script>
export default {
    name: "Detail",
    // mounted() {
    //     console.log(this.$route);
    // },
    props: ["id", "title"],
};
</script>

<style>
</style>