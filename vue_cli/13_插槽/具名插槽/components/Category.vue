<template>
    <div class="Category">
        <h4>{{ title }}分类</h4>
        <!-- 组件标签存放位置 -->
        <slot name="center">默认值，当组件标签有传入时不显示</slot>
        <slot name="footer"></slot>
    </div>
</template>

<script>
export default {
    name: "Category",
    data() {
        return {};
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