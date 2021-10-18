<template>
    <div class="Category">
        <h4>{{ title }}分类</h4>
        <!-- 组件标签存放位置 -->
        <slot><button>左边</button></slot>
        <slot name="center"><button>中</button></slot>
        <slot><button>右</button></slot>
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