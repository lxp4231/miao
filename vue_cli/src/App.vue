<template>
    <div class="container">
        <button @click="isShow = 'Category'">左</button>
        <button @click="isShow = 'Shi'">右</button>
        <!--<component>动态切换组建的展示与隐藏 is的值等于谁，就展示什么组件  -->
        <div><component :is="isShow"></component></div>
    </div>
</template>

<script>
import Category from "./components/Category.vue";
import Shi from "./components/shi.vue";
export default {
    //这里面的this指向VueComponent实例
    name: "App",
    data() {
        return {
            foods: ["apple", "banana", "pick", "orange"],
            games: ["GTA5", "PUBG", "bigma", "qqcar"],
            films: ["nihai!ying", "guigu", "chai", "father"],
            isShow: "",
        };
    },
    components: {
        Category,
        Shi,
    },
};
</script>

<style>
.container {
    display: flex;
    /* 主轴对其方式 */
    justify-content: space-around;
}
img {
    width: 100%;
}
video {
    width: 100%;
}
</style>