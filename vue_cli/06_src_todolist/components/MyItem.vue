<template>
    <li>
        <label>
            <!--input绑定 :checked 确定是否勾选 -->
            <input
                type="checkbox"
                :checked="todos.done"
                @change="todoChange(todos.id)"
            />
            <span v-show="!todos.isEdit">{{ todos.title }}</span>
            <input
                type="text"
                :value="todos.title"
                v-show="todos.isEdit"
                @blur="handlerblur(todos, $event)"
                @keydown.enter="handlerblur(todos, $event)"
                ref="ipt"
            />
        </label>
        <button class="btn btn-danger" @click="del(todos.id)">删除</button>
        <button
            class="btn btn-edit"
            @click="edit(todos)"
            v-show="!todos.isEdit"
        >
            编辑
        </button>
    </li>
</template>

<script>
export default {
    name: "MyItem",
    methods: {
        //对App中的done状态作出改变
        // 勾选
        todoChange(id) {
            // 触发总线事件
            this.$bus.$emit("checkTodo", id);
            // 获得id
            // this.checkTodo(id);
        },
        //删除
        del(id) {
            if (confirm("确定删除吗")) {
                this.$bus.$emit("deleteTodo", id);
                // this.deleteTodo(id);
            }
        },
        edit(todos) {
            // 给todos添加一个属性idEdit,点击编辑后为true
            // todos.isEdit = true; //直接添加不收监视,用Vue.$set
            if (todos.hasOwnProperty("isEdit")) todos.isEdit = true; //原来有isEdit直接赋值
            this.$set(todos, "isEdit", true); //this指向vue
            // this.$refs.ipt.focus();//不能立即触发，vue要执行完回调再执行，此时没有input,处于隐藏状态，使用$nextTick
            this.$nextTick(() => {
                //下一个DOM更新结束后再执行回调
                this.$refs.ipt.focus();
            });
        },
        handlerblur(todos, e) {
            this.todos.isEdit = false;
            if (!e.target.value.trim()) return alert("输入不能为空");
            this.$bus.$emit("updateTodo", todos.id, e.target.value);
        },
    },

    //声明接收todos对象(checkTodo为通过App传过来的方法)
    props: ["todos"], //里面的方法使用要加this
};
</script>

<style scoped>
/*item*/
li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
}

li label {
    float: left;
    cursor: pointer;
}

li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
}

li button {
    float: right;
    display: none;
    margin-top: 3px;
}

li:before {
    content: initial;
}

li:last-child {
    border-bottom: none;
}
li:hover {
    background-color: #ebedef;
}
li:hover .btn {
    display: block;
    margin-left: 10px;
}
.btn-edit {
    color: #fff;
    background-color: #00a0d6b2;
}
.btn-edit:hover {
    background-color: #1099c7f8;
}
</style>
