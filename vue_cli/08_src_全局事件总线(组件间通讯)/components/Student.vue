<template>
    <div class="Student">
        <h4>name:{{ name }}</h4>
        <h4>age:{{ age }}</h4>
        <button @click="getName">发送student</button>
    </div>
</template>

<script>
export default {
    name: "Student",
    data() {
        return {
            name: "lxp",
            age: "20",
        };
    },
    methods: {
        getName() {
            this.$bus.$emit("sendName", this.name); //触发事件，发送数据
        },
    },
};
</script>

<style>
h4 {
    color: orange;
}
</style>