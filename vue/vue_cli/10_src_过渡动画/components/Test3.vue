<template>
    <div class="Text3">
        <button @click="istrue = !istrue">显示/隐藏</button>
        <!-- 上来就直接出现 加appear -->
        <transition
            name="animate__animated animate__bounce"
            enter-active-class="animate__swing"
            leave-active-class="animate__backOutUp"
            appear
        >
            <h4 v-show="istrue">hello</h4>
        </transition>
    </div>
</template>

<script>
import "animate.css"; //引入库
export default {
    name: "Text3",
    data() {
        return {
            istrue: true,
        };
    },
};
</script>

<style>
h4 {
    color: #fff;
    background-color: orange;
    width: 300px;
}
</style>