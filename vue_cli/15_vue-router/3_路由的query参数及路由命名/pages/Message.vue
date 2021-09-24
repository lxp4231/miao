<template>
    <div>
        <ul>
            <li v-for="item in messagesList" :key="item.id">
                <!-- 使用模板字符串  并v-bind绑定！！！！！！-->

                <!-- 跳转路由并携带query参数，to的字符串写法 -->
                <!-- <router-link
                    :to="`/home/message/detail?id=${item.id}&title=${item.title}`"
                    >{{ item.title }}</router-link
                >&nbsp;&nbsp; -->

                <!-- 跳转路由并携带query参数，to的对象写法 -->
                <!-- path: '/home/message/detail' 采用给路由命名的方式 -->
                <router-link
                    :to="{
                        name: 'message',
                        query: {
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
};
</script>

<style>
</style>