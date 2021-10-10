<template>
    <div class="person">
        <h4>人员列表</h4>
        <input type="text" placeholder="输入名字" v-model="name" />
        <button @click="addPerson(name)">添加</button>
        <ul>
            <li v-for="item in persons" :key="item.id">name:{{ item.name }}</li>
        </ul>
        <h5>sum的和为：{{ sum }}</h5>
    </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
    name: "Person",
    data() {
        return {
            name: "",
            b: 3,
        };
    },
    methods: {
        add() {
            // const personObj = {
            //     id: nanoid(),
            //     name: this.name,
            // };
            // this.$store.dispatch("addPerson", personObj);
        },
        ...mapActions({ addPerson: "addPerson" }), //对象形式不能简写
    },
    computed: {
        // persons() {
        //     return this.$store.state.persons;
        // },
        // sum() {
        //     return this.$store.state.sum;
        // },
        ...mapState(["persons", "sum"]),
    },
};
</script>

<style>
.person {
    margin-left: 20px;
}
</style>