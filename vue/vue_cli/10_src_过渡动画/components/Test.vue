<template>
    <div class="Test">
        <button @click="istrue = !istrue">显示/隐藏</button>
        <!-- 上来就直接出现 加appear -->
        <!-- <transition name="hello" appear>
            <h4 v-show="istrue">hello</h4>
        </transition> -->
        <!-- 给多个相同样式加动画用 transition-group 但要加key值-->
        <transition-group name="hello" appear>
            <h4 v-show="!istrue" key="1">hello1</h4>
            <h4 v-show="istrue" key="2">hello2</h4>
        </transition-group>
    </div>
</template>

<script>
export default {
    name: "Test",
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
/* 给transiton加类名，默认为v */
/*给多个相同样式加动画用 transition-group */
.hello-enter-active {
    animation: at 0.5s linear;
}
.hello-leave-active {
    animation: at 0.5s reverse linear;
}

/* keyframes动画实现 */
@keyframes at {
    from {
        transform: translateX(-100%);
    }
    to {
        transform: translateX(0px);
    }
}
</style>