<template>
    <div>
        <h4>获取student信息</h4>
        <button @click="getStudent()">点击获得</button>
        <h4>获取car信息</h4>
        <button @click="getCar()">点击获得</button>
    </div>
</template>

<script>
// 1.代理服务器解决跨域问题 2.axios发送请求
import axios from "axios";
export default {
    name: "App",
    data() {
        return {};
    },
    methods: {
        getStudent() {
            axios
                .get("http://localhost:8080/xs/students")
                .then((response) => {
                    // response.data得到的数据
                    console.log("请求成功", response.data);
                })
                .catch((err) => {
                    // err.message获得失败的原因
                    console.log("请求失败", err.message);
                });
        },
        getCar() {
            axios
                .get("http://localhost:8080/qc/cars") //先通过代理服务器
                .then((response) => {
                    // response.data得到的数据
                    console.log("请求成功", response.data);
                })
                .catch((err) => {
                    // err.message获得失败的原因
                    console.log("请求失败", err.message);
                });
        },
    },
};
</script>

<style>
</style>