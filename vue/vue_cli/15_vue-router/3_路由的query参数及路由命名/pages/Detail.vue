<template>
    <ul>
        <li>消息1：{{ $route.query.id }}</li>
        <li>消息2：{{ $route.query.title }}</li>
    </ul>
</template>

<script>
export default {
    name: "Detail",
    // mounted() {
    //     console.log(this.$route);
    // },
};
</script>

<style>
</style>