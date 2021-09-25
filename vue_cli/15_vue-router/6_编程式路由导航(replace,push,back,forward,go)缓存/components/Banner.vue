<template>
    <!-- 一般组件存放在components文件夹中 -->
    <div class="row">
        <div class="col-xs-offset-2 col-xs-8">
            <div class="page-header">
                <h2>Vue Router</h2>
                <button @click="back">后退</button>
                <button @click="forward">前进</button>
                <button @click="go">go可前进可后退</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Banner",
    methods: {
        // forward, back均为路由器上的方法，全局使用
        forward() {
            this.$router.forward(); //前进
        },
        back() {
            this.$router.back(); //后退
        },
        go() {
            this.$router.go(0); //为负后退几步，为正前进几步,为0时，刷新当前页面
        },
    },
    mounted() {
        // console.log(this.$route);
        // console.log(this.$router);
    },
};
</script>

<style>
</style>