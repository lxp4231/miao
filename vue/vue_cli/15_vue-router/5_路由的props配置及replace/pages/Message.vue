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
                        name: 'message', //此时必须要用name形式
                        params: {
                            id: item.id,
                            title: item.title,
                        },
                    }"
                    >{{ item.title }}</router-link
                >
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
    mounted() {
        console.log(this.$route);
    },
};
</script>

<style>
</style>