<template>
    <div>
        <h4>student名字:{{ name }}</h4>
        <h4>age:{{ myAge }}</h4>
        <h4>sex:{{ sex }}</h4>
        <button @click="add()">点击++</button>
    </div>
</template>

<script>
// 配置项：props:让组件接收外部传过来的数据
export default {
    name: "Student",
    data() {
        return {
            myAge: this.age, //传过来的数据要修改，直接建立一个变量接收再更改数据
        };
    },
    //注：1父传子直接传数据，2子传父时，父级传一个函数，子级调用
    //1.简单声明接收(一般值接收过来后不允许修改)
    props: ["name", "age", "sex"],
    //2.接收的同时对数据类型进行控制
    // props: {
    //   name: String,
    //   age: Number,
    //   sex: String,
    // },
    //3.类型限制+默认值指定+必要性限制(完整写法)
    // props: {
    //   name: {
    //     type: String, //name的类型
    //     require: true, //必须要传
    //   },
    //   age: {
    //     type: Number,
    //     default: 80,
    //   },
    //   sex: {
    //     type: String,
    //     require: true,
    //   },
    // },
    methods: {
        showName() {
            alert("this is a student");
        },
        add() {
            this.myAge++;
        },
    },
};
</script>

<style>
h4 {
    color: orange;
}
</style>