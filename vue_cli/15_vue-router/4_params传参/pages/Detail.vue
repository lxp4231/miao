<template>
    <ul>
        <li>消息1：{{ $route.params.id }}</li>
        <li>消息2：{{ $route.params.title }}</li>
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