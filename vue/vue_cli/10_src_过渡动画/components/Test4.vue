<template>
    <div class="Test4">
        <button @click="show = !show">Toggle</button>
        <transition name="fade" mode="out-in">
            <p v-if="show">hello</p>
        </transition>
    </div>
</template>

<script>
import "animate.css";
export default {
    data() {
        return {
            show: true,
        };
    },
};
</script>

<style>
h3 {
    color: #fff;
    background-color: orange;
    width: 300px;
}
/* 这个过程 */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}
/* 期间的状态 */
.fade-enter,
.fade-leave-to {
    opacity: 0;
}
/* .fade-enter-to,
.fade-leave {
    opacity: 1;
} */
</style>