<template>
    <ul class="todo-main">
        <!-- 需要加key,并且值为todo中的id,利用props传递数据，即todos前要加：表示绑定数据，加冒号todos才是表达式-->
        <!-- keyde作用是让vue复用之前的数据 -->
        <MyItem v-for="todo in todos" :key="todo.id" :todos="todo" />
    </ul>
</template>

<script>
import MyItem from "./MyItem.vue";
export default {
    name: "MyList",
    //注册组件
    components: {
        MyItem,
    },
    props: ["todos"], //props为只读，不建议修改(要改就复制一份数据，再改)
};
</script>

<style scoped>
/*main*/
.todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
}

.todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
}
</style>
