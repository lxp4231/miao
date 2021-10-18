<template>
    <div>
        <span>动画</span>
        <Test />
        <span>过渡</span>
        <Test2 />
        <span>第三方库</span>
        <Test3 />
        <span>练习</span>
        <Test4 />
    </div>
</template> 

<script>
// 使用第三方库：animate.css
import Test from "./components/Test";
import Test2 from "./components/Test2";
import Test3 from "./components/Test3";
import Test4 from "./components/Test4";
export default {
    //这里面的this指向VueComponent实例
    components: {
        Test,
        Test2,
        Test3,
        Test4,
    },
};
</script>

<style>
</style>