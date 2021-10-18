<template>
    <div class="home">
        <h4>我是Home的内容</h4>
        <div>
            <ul class="nav nav-tabs">
                <li>
                    <router-link
                        class="list-group-item"
                        to="/home/news"
                        active-class=" active"
                        >News</router-link
                    >
                </li>
                <li>
                    <router-link
                        class="list-group-item"
                        to="/home/message"
                        active-class=" active"
                        >Message</router-link
                    >
                </li>
            </ul>
            <!-- 组件展示区 -->
            <!-- keep-alive缓存路由器组件(不缓存则被销毁)，使用include(组件名)指明缓存的是那个，不写则router-view中的组件都缓存 -->
            <!--缓存多个逗号隔开 或写成数组绑定形式： :include="['News', 'Message']" -->
            <keep-alive include="News">
                <router-view> </router-view>
            </keep-alive>
        </div>
    </div>
</template>

<script>
import News from "./News";
import Message from "./Message";
export default {
    name: "Home",
    data() {
        return {};
    },
    components: {
        News,
        Message,
    },
    methods: {},
    computed: {},
    mounted() {
        // console.log(this.$route); //this.$route 为路由信息，每个路由都不同
        // console.log(this.$router); //this.$router 每个路由都有，且相同
    },
};
</script>

<style>
</style>