<template>
    <ul>
        <!-- style样式：{样式名：值} -->
        <!-- class样式：{类名,类名}或[类名,类名] -->
        <li :style="{ opacity }">hello,very</li>
        <li>
            news001 <input type="text" placeholder="添加了include,不被销毁" />
        </li>
        <li>news002 <input type="text" /></li>
        <li>news003 <input type="text" /></li>
    </ul>
</template>

<script>
export default {
    name: "News",
    // beforeDestroy() {
    //     console.log("news即将被销毁");
    // },
    data() {
        return {
            opacity: 1,
        };
    },

    // beforeDestroy() {
    //     // 销毁之前清除定时器
    //     clearInterval(this.timer);
    // },
    // mounted() {
    //     this.timer = setInterval(() => {
    //         this.opacity -= 0.01;
    //         if (this.opacity <= 0) this.opacity = 1;
    //         console.log("@");//因为News组件被缓存了，会一直输出，不触发销毁流程
    //     }, 16);
    // },

    //路由专有的生命周期钩子,用于捕获路由组件激活状态
    //路由组件被激活时触发。
    activated() {
        this.timer = setInterval(() => {
            this.opacity -= 0.01;
            if (this.opacity <= 0) this.opacity = 1;
        }, 16);
    },
    //路由组件失活时触发。
    deactivated() {
        clearInterval(this.timer);
    },
};
</script>

<style>
</style>