<template>
    <div class="Category">
        <h4>{{ title }}分类</h4>
        <!-- 作用域插槽 -->
        <!-- 作用域插槽（数据在组件中，使用:games="games"绑定传递数据，和默认插槽类似，只是数据在组件中） -->
        <!-- :games="games 表示给组件使用者传递数据，用v-slot="{ games }"接收 -->
        <slot :games="games" tip="ok"></slot>
    </div>
</template>

<script>
export default {
    name: "Category",
    data() {
        return {
            games: ["GTA5", "PUBG", "bigma", "qqcar"], //数据在这，不在组件的使用者
        };
    },
    props: ["title"],
};
</script>

<style>
.Category {
    background-color: skyblue;
    width: 200px;
    height: 300px;
}
h4 {
    text-align: center;
    background-color: orange;
}
</style>