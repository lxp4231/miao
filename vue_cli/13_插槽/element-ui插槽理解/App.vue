<template>
    <div class="container">
        <!-- 三个组件相互独立 -->
        <!-- Category相当于element-ui中的标签组件，:foods="foods"向这个组件中传递数据，Category作处理 -->
        <Category title="foods" :foods="foods">
            <!-- slot属性，告诉往哪个插槽放 -->
            <img
                slot="center"
                src="https://dimg04.c-ctrip.com/images/200l0w000000kqos68EA1_R_300_225_R5_Q70_D.jpg"
                alt=""
            />
            <a
                slot="footer"
                href="http://www.baidu.com"
                style="font-weight: 700"
                >点击查看更多</a
            >
        </Category>
        <Category title="games">
            <ul slot="center">
                <li v-for="(item, index) in games" :key="index">
                    {{ item }}
                </li>
            </ul>
            <template slot="center">
                <div class="footer">
                    <a href="http://www.baidu.com">单机</a>
                    <a href="http://www.baidu.com">网游</a>
                </div>
            </template>
        </Category>
        <Category title="films">
            <!--  controls:允许用户控制视频的播放 -->
            <video src="" controls slot="center"></video>
            <!-- 可以使用v-slot:center(仅适用于template包裹的时候) -->
            <template slot="center">
                <div class="footer">
                    <a href="http://www.baidu.com">更多</a>
                    <a href="http://www.baidu.com">几十年从</a>
                </div>
            </template>
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
.container,
.footer {
    display: flex;
    /* 主轴对其方式 */
    justify-content: space-around;
    text-align: center;
}
img {
    margin-bottom: 20px;
    width: 100%;
}
video {
    width: 100%;
}
</style>