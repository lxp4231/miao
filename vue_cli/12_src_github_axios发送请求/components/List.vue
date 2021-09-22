<template>
    <div class="row">
        <div
            v-for="item in info.users"
            :key="item.id"
            class="card"
            v-show="info.users.length"
        >
            <a :href="item.html_url" target="_blank">
                <!-- src动态绑定？？？ -->
                <img :src="item.avatar_url" style="width: 100px" />
            </a>
            <p class="card-text">{{ item.login }}</p>
        </div>
        <!--欢迎词 -->
        <div v-show="info.isFirst">welcome</div>
        <!-- 页面加载 -->
        <div v-show="info.isLoading">Loading</div>
        <!-- 请求错误信息 -->
        <div v-show="info.errMsg">{{ info.errMsg }}</div>
    </div>
</template>

<script>
export default {
    name: "List",
    data() {
        return {
            info: {
                isFirst: true,
                isLoading: false,
                errMsg: "",
                users: [],
            },
        };
    },
    mounted() {
        this.$bus.$on("updateListData", (dataObj) => {
            // isFirst, isLoading, errMsg, data //写成对象dataObj形式，语义化
            // ES6对象解构！！！
            this.info = { ...this.info, ...dataObj };
        });
    },
};
</script>

<style>
</style>