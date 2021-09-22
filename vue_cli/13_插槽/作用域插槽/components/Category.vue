<template>
    <div class="Category">
        <h4>{{ title }}分类</h4>
        <!-- 作用域插槽 -->
        <!-- :games="games 表示给组件使用者传递数据 -->
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