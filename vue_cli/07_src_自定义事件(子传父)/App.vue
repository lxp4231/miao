<template>
    <div>
        <h4 ref="title">欢迎{{ name1 }}</h4>
        <!-- 通过props从父组件向子组件传递数据 -->
        <School :getSchoolName="getSchoolName" />
        <!-- 通过自定义组件事件实现从父组件向子组件传递数据(第一种写法@) -->
        <!-- <Student @atg="getStudentName" @click.native="show" @haha.once="h" /> -->
        <!-- 通过自定义组件事件实现从父组件向子组件传递数据(第二种写法ref,灵活性强) -->
        <!-- 给click添加修饰符native，表示原生click(不然就被当做自定义事件) -->
        <Student ref="student" />
        <!-- 给组件绑定原生事件，需要在这个Student组件中，调用$emit -->
    </div>
</template> 

<script>
import School from "./components/School";
import Student from "./components/Student";
export default {
    //这里面的this指向VueComponent实例
    name: "App",
    components: {
        School,
        Student,
    },
    data() {
        return {
            name1: "app",
        };
    },
    methods: {
        h(x) {
            console.log("好整,加油", x);
        },
        //methods里的this指当前实例
        getSchoolName(x) {
            console.log(x);
        },
        getStudentName(n) {
            //需要接收
            console.log("被调用了", n);
        },
        demo() {
            console.log("解绑多个");
        },
        show() {
            alert("666");
        },
    },
    // mounted（挂载）单独一个
    mounted() {
        // mount里的this指当前实例;
        this.$refs.student.$on("atg", this.getStudentName); //这里的this.getStudentName的this是App实例，如果换成函数形式，要写成箭头函数
        // 触发一次不再触发;
        this.$refs.student.$once("atg", this.getStudentName);
    },
    // 绑定事件的回调写在父级
};
</script>

<style>
</style>