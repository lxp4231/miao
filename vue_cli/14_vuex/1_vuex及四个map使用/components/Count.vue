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
        <button @click="increment(n)">+</button>
        <button @click="decrement(n)">-</button>
        <button @click="incrementOdd(n)">当前求和为奇数时再加</button>
        <button @click="incrementWait(n)">等一等再加</button>
    </div>
</template>

<script>
import { mapActions, mapMutations, mapState, mapGetters } from "vuex";
export default {
    name: "Count",
    data() {
        return {
            n: 1,
        };
    },
    methods: {
        // 获取方法写在方法中
        //
        // increment() {
        //     // 使用commit直接和mutation对话
        //     this.$store.commit("ADD", this.n);
        // },
        // decrement() {
        //     this.$store.commit("DC", this.n);
        // },
        // 借助mapMutations生成对应的方法，方法中会调用commit去联系mutations
        ...mapMutations({ increment: "ADD", decrement: "DC" }), //绑定事件时传入参数/可写为数组形式
        // ******************************
        // incrementOdd() {
        //     this.$store.dispatch("addOdd", this.n);
        // },
        // incrementWait() {
        //     this.$store.dispatch("addWait", this.n);
        // },
        ...mapActions({ incrementOdd: "addOdd", incrementWait: "addWait" }), //{事件名:'Mutations或Actions中方法名'}
    },
    computed: {
        // 获取数据写在计算属性中
        //
        // 手动添加计算属性
        // sum() {
        //     return this.$store.state.sum;
        // },
        // stude() {
        //     return this.$store.state.stude;
        // },
        // address() {
        //     return this.$store.state.address;
        // },
        // bigSum() {
        //     return this.$store.getters.bigSum;
        // },
        // ******************************
        // 使用mapState,mapGetters(映射state中的属性为计算属性)
        // 借助mapState 生成计算属性，从state中读取数据(对象形式)
        // ...mapState({
        //     sum: "sum",
        //     stude: "stude",
        //     address: "address",
        // }),
        // 数组形式
        ...mapState(["sum", "stude", "address"]), //一个作为计算属性名，一个去state找
        // ******************************
        // 借助mapGetters 生成计算属性，从getters中读取数据(对象形式)
        // ...mapGetters({
        //     bigSum: "bigSum",
        // }),
        // 借助mapGetters生成计算属性，从getters中读取数据(数组形式)
        ...mapGetters(["bigSum"]),
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