<template>
    <div class="container">
        <!-- 三个组件相互独立 -->
        <Category title="foods" :listData="foods">
            <img
                src="https://dimg04.c-ctrip.com/images/200l0w000000kqos68EA1_R_300_225_R5_Q70_D.jpg"
                alt=""
            />
        </Category>
        <Category title="games" :listData="games">
            <!-- Category 标签里的内容都放到 Category组件的slot中 -->
            <ul>
                <li v-for="(item, index) in games" :key="index">
                    {{ item }}
                </li>
            </ul>
        </Category>
        <Category title="films" :listData="films">
            <!--  controls:允许用户控制视频的播放 -->
            <video src="" controls></video>
        </Category>
    </div>
</template>

<script>
import Category from "./components/Category.vue";
export default {
    //这里面的this指向VueComponent实例
    name: "App",
    data() {
        return {
            foods: ["apple", "banana", "pick", "orange"],
            games: ["GTA5", "PUBG", "bigma", "qqcar"],
            films: ["nihai!ying", "guigu", "chai", "father"],
        };
    },
    components: {
        Category,
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