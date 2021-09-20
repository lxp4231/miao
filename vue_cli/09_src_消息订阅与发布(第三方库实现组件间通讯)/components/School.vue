<template>
    <div class="School">
        <h4>名字:{{ name }}</h4>
        <h4>地址:{{ address }}</h4>
    </div>
</template>

<script>
import pubsub from "pubsub-js";
export default {
    name: "School",
    data() {
        return {
            name: "xcu",
            address: "八一东路",
        };
    },
    mounted() {
        // 挂载完毕立即订阅消息
        this.pubId = pubsub.subscribe("hello", (name, value) => {
            //写成箭头函数，或者回调写到methods中
            //接收两个参数，消息名、消息值
            console.log("订阅成功", value, this.name);
        });
    },
    beforeDestroy() {
        pubsub.unsubscribe(this.pubId); //当School被销毁前取消订阅
    },
};
</script>

<style>
h4 {
    color: orange;
}
</style>