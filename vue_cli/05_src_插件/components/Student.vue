<template>
    <div class="demo">
        <h4>student名字:{{ name }}</h4>
        <h4>age:{{ age }}</h4>
        <h4>sex:{{ sex }}</h4>
        <button @click="d()">点击调用demo</button>
    </div>
</template>

<script>
export default {
    name: "Student",
    data() {
        return {
            name: "jsj",
            age: "99",
            sex: "male",
        };
    },
    methods: {
        d() {
            this.demo();
        },
    },
};
</script>

<style scoped>
 /* <style lang="less"> 使用less编写要下载插件：less-loader，版本要对应webpack
</style> */
/*  查看版本信息：npm view less-loader versions
*/
h4 {
    color: #fff;
}
.demo {
    background-color: skyblue;
}
</style>
