<template>
    <div class="person">
        <h4>人员列表</h4>
        <input type="text" placeholder="输入名字" v-model="name" />
        <button @click="addPerson(name)">添加</button>
        <ul>
            <li v-for="item in persons" :key="item.id">name:{{ item.name }}</li>
        </ul>
        <h5>sum的和为：{{ sum }}</h5>
        <h5>获取第一个name:{{ firstName }}</h5>
        <button @click="addPersonServer">addPersonServer</button>
    </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
export default {
    name: "Person",
    data() {
        return {
            name: "",
            b: 3,
        };
    },
    methods: {
        // addPerson() {
        //     const personObj = {
        //         id: nanoid(),
        //         name: this.name,
        //     };
        //     this.$store.dispatch("personOptions/addPerson", personObj);//法1
        // },
        ...mapActions("personOptions", {
            addPerson: "addPerson",
            addPersonServer: "addPersonServer", //axios请求
        }), //法2
        // addPersonServer() {
        //     this.$store.dispatch("personOptions/addPersonServer");
        // },
    },
    computed: {
        // persons() {
        //     return this.$store.state.personOptions.persons; //法1
        // },
        // sum() {
        //     return this.$store.state.personOptions.sum; //法1
        // },
        ...mapState("personOptions", ["persons", "sum"]), //法2
        // firstName() { //法1
        //     return this.$store.getters["personOptions/firstName"]; //!!!!! 用[]获取属性：因为getters内部为：personOptions/firstName
        //     // getters的内部形式
        //     // countOptions/bigSum: (...)
        //     // personOptions/firstName: (...)
        // },
        ...mapGetters("personOptions", ["firstName"]), //法2
    },
    mounted() {
        console.log(this);
    },
};
</script>

<style>
.person {
    margin-left: 20px;
}
</style>