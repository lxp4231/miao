<template>
    <div class="container">
        <!-- 作用域插槽，在组件标签中加template标签，在template中加要写的内容 -->
        <!-- 使用场景：当数据不在这，又要使用数据，所以作用域插槽从组件中拿到数据 -->
        <Category title="games">
            <!-- v-slot接过来的是一个对象，可以用解构 -->
            <!--此处必须加template包裹：使用 scope="{ games }也可(已被废弃) -->
            <!-- 如果是指定插槽用v-slot:center(指定加到哪个插槽里，不加引号，v-slot="{ games }"用于接收数据),注意区分 -->
            <template v-slot="{ games }">
                <ul>
                    <li v-for="(item, index) in games" :key="index">
                        {{ item }}
                    </li>
                </ul>
            </template>
        </Category>
        <Category title="games">
            <template v-slot="{ games }">
                <ol>
                    <li v-for="(item, index) in games" :key="index">
                        {{ item }}
                    </li>
                </ol>
            </template>
        </Category>
        <Category title="games">
            <template v-slot="{ games }">
                <h4 v-for="(item, index) in games" :key="index">
                    {{ item }}
                </h4>
            </template>
        </Category>
    </div>
</template>

<script>
import Category from "./components/Category.vue";
export default {
    //这里面的this指向VueComponent实例
    name: "App",
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
</style>