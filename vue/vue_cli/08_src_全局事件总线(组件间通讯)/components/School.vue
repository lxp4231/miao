<template>
    <div class="School">
        <h4>名字:{{ name }}</h4>
        <h4>地址:{{ address }}</h4>
        <!-- <button>发送</button> -->
    </div>
</template>

<script>
export default {
    name: "School",
    data() {
        return {
            name: "xcu",
            address: "八一东路",
        };
    },
    mounted() {
        this.$bus.$on("sendName", (data) => {
            //用箭头函数形式，this指向School实例
            console.log("chenggong ", data);
        });
    },
    // 解绑($bus绑定了就一直在，所以手动解绑，在组件销毁之前)
    beforeDestroy() {
        this.$bus.$off("sendName");
    },
};
</script>

<style>
h4 {
    color: orange;
}
</style>