<template>
    <div class="School">
        <h4>名字:{{ name }}</h4>
        <h4>地址:{{ address }}</h4>
        <button @click="sendName">props方式</button>
    </div>
</template>

<script>
export default {
    name: "School",
    data() {
        return {
            name: "xcu",
            address: "八一东路",
        };
    },
    methods: {
        sendName() {
            this.getSchoolName(this.name);
        },
    },
    props: ["getSchoolName"],
};
</script>

<style>
h4 {
    color: orange;
}
</style>