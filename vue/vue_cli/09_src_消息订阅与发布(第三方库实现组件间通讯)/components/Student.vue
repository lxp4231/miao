<template>
    <div class="Student">
        <h4>name:{{ name }}</h4>
        <h4>age:{{ age }}</h4>
        <button @click="sendName">发送student</button>
    </div>
</template>

<script>
import pubsub from "pubsub-js";
export default {
    name: "Student",
    data() {
        return {
            name: "lxp",
            age: "20",
        };
    },
    methods: {
        sendName() {
            // 发布消息
            pubsub.publish("hello", this.name);
        },
    },
};
</script>

<style>
h4 {
    color: orange;
}
</style>