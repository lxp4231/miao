<template>
    <div class="Count">
        <!--   $store.state.sum 注：在模板里不需要加this -->
        <h4>当前sum为:{{ sum }}</h4>
        <h4>sum放大十倍:{{ bigSum }}</h4>
        <h4>stude:{{ stude }} at {{ address }}</h4>
        <!-- 给select上双向绑定， -->
        <select v-model.number="n">
            <!-- 加上v-bind就变为表达式 -->
            <option>1</option>
            <option>2</option>
            <option>3</option>
        </select>
        <h5>人员列表总数：{{ persons.length }}</h5>
        <button @click="increment(n)">+</button>
        <button @click="decrement(n)">-</button>
        <button @click="incrementOdd(n)">当前求和为奇数时再加</button>
        <button @click="incrementWait(n)">等一等再加</button>
    </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
    name: "Count",
    data() {
        return {
            n: 1,
        };
    },
    methods: {
        // 借助mapMutations生成对应的方法，方法中会调用commit去联系mutations
        // 在第一各参数指定：countOptions的作用是指定哪个分类中的
        ...mapMutations("countOptions", { increment: "ADD", decrement: "DC" }),
        // 借助mapActions生成对应的方法，方法中会调用dispatch去联系actions
        ...mapActions("countOptions", {
            incrementOdd: "addOdd",
            incrementWait: "addWait",
        }),
    },
    computed: {
        //一个作为计算属性名，一个去state找
        ...mapState("countOptions", ["sum", "stude", "address"]), //前提是在index中开启namespace
        ...mapState("personOptions", ["persons"]), //前提是在index中开启namespaced
        ...mapGetters("countOptions", ["bigSum"]),
    },
    mounted() {
        console.log(this);
    },
};
</script>

<style>
.Count {
    margin-left: 50px;
}
button {
    margin-left: 5px;
}
</style>