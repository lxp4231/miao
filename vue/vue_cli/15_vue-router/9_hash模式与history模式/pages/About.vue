<template>
    <!-- 路由组件一般放在pages文件夹中 -->
    <div class="about">
        <h4>我是About的内容</h4>
    </div>
</template>

<script>
export default {
    name: "About",
    //通过路由规则，进入组件时被调用
    beforeRouteEnter(to, from, next) {
        // 可以在这验证权限
        if (to.meta.isAuth) {
            if (localStorage.getItem("school") == "liuxp") {
                next();
            }
            //加权限限制
            else {
                alert("school不对，无权限查看");
            }
        } else {
            next();
        }
    },
    //通过路由规则，离开组件时被调用
    beforeRouteLeave(to, from, next) {
        console.log("离开组件");
        next();
    },
};
</script>

<style>
</style>