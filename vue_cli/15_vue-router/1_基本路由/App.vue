<template>
    <div>
        <Banner />
        <div class="row">
            <div class="col-xs-2 col-xs-offset-2">
                <div class="list-group">
                    <!-- <a class="list-group-item" href="./about.html">About</a>
                    <a class="list-group-item active" href="./home.html"
                        >Home</a
                    > -->
                    <!--  active-class="active"该元素被激活时的样式 -->
                    <!-- 借助路由实现页面跳转 -->
                    <router-link
                        class="list-group-item"
                        active-class="active"
                        to="/about"
                        >About</router-link
                    >
                    <router-link
                        class="list-group-item"
                        active-class="active"
                        to="/home"
                        >Home</router-link
                    >
                </div>
            </div>
            <div class="col-xs-6">
                <div class="panel">
                    <div class="panel-body">
                        <!-- 指定组件呈现的位置 -->
                        <router-view> </router-view>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import About from "./pages/About";
import Home from "./pages/Home";
import Banner from "./components/Banner"; //???
export default {
    name: "App",
    components: {
        About,
        Home,
        Banner,
    },
};
</script>

<style>
</style>