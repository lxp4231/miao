<template>
    <div class="todo-header">
        <input
            type="text"
            placeholder="请输入你的任务名称，按回车键确认"
            v-model="title"
            @keyup.enter="add"
        />
    </div>
</template>

<script>
// nanoid 生成id(采用的是分别暴露)
import { nanoid } from "nanoid";
export default {
    name: "MyHeader",
    data() {
        return {
            title: "",
        };
    },
    methods: {
        add() {
            if (!this.title.trim()) return alert("请输入内容");
            //保存数据
            const todoObj = {
                id: nanoid(),
                // 采用event的方式
                // title: e.target.value,
                // 采用双向数据绑定的方式
                title: this.title,
                done: false,
            };
            // this.addTodo(todoObj);
            // e.target.value = "";
            this.$emit("addTodo", todoObj);
            //添加完成后清空
            this.title = "";
        },
    },
    // 接收App传过来的方法(props中传来的数据名不能重复)
    // props: ["addTodo"], //props会把数据传到vc上
    // 注:父级App使用了自定义事件，所以不用props接收了
};
</script>

<style scoped>
/*header*/
.todo-header input {
    width: 560px;
    height: 28px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px 7px;
}

.todo-header input:focus {
    outline: none;
    border-color: rgba(82, 168, 236, 0.8);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
        0 0 8px rgba(82, 168, 236, 0.6);
}
</style>
