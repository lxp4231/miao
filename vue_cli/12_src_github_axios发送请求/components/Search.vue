<template>
    <section class="jumbotron">
        <h3 class="jumbotron-heading">Search Github Users</h3>
        <div>
            <input
                type="text"
                placeholder="enter the name you search"
                v-model="keyWords"
            />&nbsp;
            <button @click="searchUsers">Search</button>
        </div>
    </section>
</template>

<script>
import axios from "axios";
export default {
    name: "Search",
    data() {
        return {
            keyWords: "",
        };
    },
    methods: {
        searchUsers() {
            //发送请求前，更新List数据
            this.$bus.$emit("updateListData", {
                isFirst: false,
                isLoading: true,
                errMsg: "",
                users: [],
            });
            //发送请求的另一种方法：使用vue-resource插件，将axios替换为this.$http
            axios
                .get(`https://api.github.com/search/users?q=${this.keyWords}`)
                .then((res) => {
                    this.$bus.$emit("updateListData", {
                        //对象传参，顺序可以不对应
                        isLoading: false,
                        errMsg: "",
                        users: res.data.items,
                    });
                })
                .catch((err) => {
                    this.$bus.$emit("updateListData", {
                        isLoading: false,
                        errMsg: err.message,
                        users: [],
                    });
                });
        },
    },
};
</script>

<style>
.album {
    min-height: 50rem; /* Can be removed; just added for demo purposes */
    padding-top: 3rem;
    padding-bottom: 3rem;
    background-color: #f7f7f7;
}

.card {
    float: left;
    width: 33.333%;
    padding: 0.75rem;
    margin-bottom: 2rem;
    border: 1px solid #efefef;
    text-align: center;
}

.card > img {
    margin-bottom: 0.75rem;
    border-radius: 100px;
}

.card-text {
    font-size: 85%;
}
</style>