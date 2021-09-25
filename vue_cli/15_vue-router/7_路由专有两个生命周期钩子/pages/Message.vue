<template>
    <div>
        <ul>
            <li v-for="item in messagesList" :key="item.id">
                <!-- 跳转路由并携带params参数，参数直接拼接上去，to的字符串写法 -->
                <!-- <router-link
                    :to="`/home/message/detail/${item.id}/${item.title}`"
                    >{{ item.title }}</router-link
                > -->
                <!-- 跳转路由并携带params参数，to的对象写法-->
                <router-link
                    :to="{
                        name: 'detail', //此时必须要用name形式
                        params: {
                            id: item.id,
                            title: item.title,
                        },
                    }"
                    >{{ item.title }}</router-link
                >
                <!-- v-for中的都能接收到其中的参数 -->
                <button @click="pushShow(item)">push查看</button>
                <button @click="pushReplace(item)">replace查看</button>
            </li>
        </ul>
        <!-- 组件展示区域 -->
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: "Message",
    data() {
        return {
            messagesList: [
                { id: "001", title: "message001" },
                { id: "002", title: "message002" },
                { id: "003", title: "message003" },
            ],
        };
    },
    methods: {
        pushShow(item) {
            //push留历史记录
            this.$router.push({
                name: "detail",
                params: {
                    id: item.id,
                    title: item.title,
                },
            });
        },
        pushReplace(item) {
            //replace不留历史记录
            this.$router.replace({
                name: "detail",
                params: {
                    id: item.id,
                    title: item.title,
                },
            });
        },
    },
    mounted() {
        // console.log(this.$router);
        // console.log(this.$route);
    },
    beforeDestroy() {
        console.log("message即将被销毁");
    },
};
</script>

<style>
</style>