<template>
    <div class="home">
        <h4>我是Home的内容</h4>
        <div>
            <ul class="nav nav-tabs">
                <li>
                    <router-link
                        replace
                        class="list-group-item"
                        to="/home/news"
                        active-class=" active"
                        >News</router-link
                    >
                </li>
                <li>
                    <router-link
                        replace
                        class="list-group-item"
                        to="/home/message"
                        active-class=" active"
                        >Message</router-link
                    >
                </li>
            </ul>
            <!-- 组件展示区 -->
            <router-view> </router-view>
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