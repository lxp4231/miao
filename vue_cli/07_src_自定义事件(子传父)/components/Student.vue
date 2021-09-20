<template>
    <div class="Student">
        <h4>名字:{{ name }}</h4>
        <h4>年纪:{{ age }}</h4>
        <span>{{ number }}</span
        ><br />
        <button @click="add">点击++</button>
        <!-- 绑定事件 -->
        <button @click="sendName">绑定</button>
        <!-- 解绑事件 -->
        <button @click="unbind">解绑</button>
        <!-- 销毁组件destroy -->
        <button @click="deth">销毁组件</button>
    </div>
</template>

<script>
export default {
    name: "Student",
    data() {
        return {
            name: "lxp",
            age: "20",
            number: "0",
        };
    },
    methods: {
        // 触发
        sendName() {
            // 触发App上Student组件实例对象上atg事件
            this.$emit("atg", this.name); // this.name为返回父级回调的数据
            this.$emit("haha", this.name);
            console.log(this);
            // this.$emit("click"); //在父组件中，给子组件绑定原生click事件，此方式被当做自定义事件，需要在App中，给click添加click修饰符native
        },
        // 解绑
        unbind() {
            this.$off("atg"); //解绑单个
            this.$off(["atg", "haha"]); //解绑多个，放数组中
            // this.$off(); //所有都解绑
        },
        // 销毁
        deth() {
            this.$destroy("销毁了当前student实例"); //原生的绑定事件依然起作用，但组件中的自定义事件全部作废
        },
        add() {
            this.number++;
            console.log("okokokokok");
        },
    },
};
</script>

<style>
h4 {
    color: orange;
}
</style>