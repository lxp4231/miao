<template>
    <div class="demo">
        <h4>sthool名字:{{ name }}</h4>
        <h4>address:{{ address }}</h4>
        <h4>build:{{ builds }}</h4>
        <input type="text" v-fbind:value="builds" />
        <button @click="add()">点击</button>
    </div>
</template>

<script>
export default {
    name: "School", //后台vue的名字
    data() {
        return {
            name: "xcu",
            address: "aaaa",
            builds: 30,
        };
    },
    methods: {
        add() {
            this.builds++;
        },
    },
};
</script>

<style scoped>
/* 给style 加一个scoped防止类名冲突 */
h4 {
    color: #fff;
}
.demo {
    background-color: orange;
}
</style>