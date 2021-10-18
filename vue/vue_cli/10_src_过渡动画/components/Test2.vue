<template>
    <div class="Test2">
        <button @click="istrue = !istrue">显示/隐藏</button>
        <!-- 上来就直接出现 加appear -->
        <transition name="hello" appear>
            <h4 v-show="istrue">hello</h4>
        </transition>
    </div>
</template>

<script>
export default {
    name: "Test2",
    data() {
        return {
            istrue: true,
        };
    },
    methods: {},
};
</script>

<style>
h4 {
    color: #fff;
    background-color: orange;
    width: 300px;
}
/* 进入起点 */
.hello-enter {
    transform: translateX(-100%);
}
/* 进入终点 */
.hello-enter-to {
    transform: translateX(0);
}
/* 离开起点 */
/* .hello-leave {
    transform: translateX(-100%);
} */
/* 离开终点 */
/* .hello-leave-to {
    transform: translateX(0);
} */
/* 进入 */
.hello-enter-active {
    animation: at 0.5s linear;
}
/* 离开 */
.hello-leave-active {
    animation: at 0.5s reverse linear;
}
</style>