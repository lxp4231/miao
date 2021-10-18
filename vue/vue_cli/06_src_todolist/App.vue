<template>
    <div id="root">
        <div class="todo-container">
            <div class="todo-wrap">
                <!-- 直接使用自定义事件绑定addTodo -->
                <MyHeader @addTodo="addTodo" />
                <MyList :todos="todos" />
                <!-- 使用自定义事件，子传父数据 -->
                <MyFooter
                    :todos="todos"
                    @clearDone="clearDone"
                    @allDone="allDone"
                />
            </div>
        </div>
    </div>
</template>
<script>
import MyHeader from "./components/MyHeader.vue";
import MyList from "./components/MyList.vue";
import MyFooter from "./components/MyFooter.vue";
export default {
    //这里面的this指向VueComponent实例
    name: "App",
    //注册组件
    data() {
        return {
            //bug1:  [] 初始化没有值时用[]代替
            todos: JSON.parse(localStorage.getItem("todos")) || [],
        };
    },

    // watch用来监视属性，监视todos的变化
    // 监视的谁，值就是谁,新添加的值
    // bug2:开启深度监视
    watch: {
        todos: {
            deep: true, //深度监视，todos中的子项也监视
            handler(value) {
                localStorage.setItem("todos", JSON.stringify(value));
            },
        },
    },
    // 注册组件
    components: {
        MyHeader,
        MyList,
        MyFooter,
    },
    // 事件处理
    methods: {
        //添加todo
        addTodo(n) {
            // 先判断是否已经添加
            let x = true;
            this.todos.forEach((item) => {
                if (item.title == n.title) {
                    x = false;
                    alert("该项已经添加，请重新填写");
                }
            });
            if (x) {
                this.todos.unshift(n);
            }
        },
        //勾选或取消todo
        checkTodo(id) {
            this.todos.forEach((item) => {
                if (item.id === id) item.done = !item.done;
            });
        },
        // 删除
        deleteTodo(id) {
            // filters不改变原数组的值，筛选返回一个新数组
            this.todos = this.todos.filter((it) => it.id != id);
        },
        // 清除已完成
        clearDone() {
            this.todos = this.todos.filter((it) => it.done == false);
        },
        //全选或全不选
        allDone(done) {
            this.todos.forEach((item) => {
                item.done = done;
            });
        },
        // 更新todo
        updateTodo(id, title) {
            this.todos.forEach((item) => {
                if (item.id === id) item.title = title;
            });
        },
    },
    // 一挂载就立即绑定总线
    mounted() {
        this.todos.forEach((todo) => {
            todo.isEdit = false;
        });
        this.$bus.$on("checkTodo", this.checkTodo); //谁要接收数据给谁绑定$on
        this.$bus.$on("deleteTodo", this.deleteTodo);
        this.$bus.$on("updateTodo", this.updateTodo);
    },
    beforeDestroy() {
        this.$bus.$off("checkTodo");
        this.$bus.$off("deleteTodo");
        this.$bus.$off("updateTodo");
    },
};
</script>

<style>
/*base*/
body {
    background: #fff;
}

.btn {
    display: inline-block;
    padding: 4px 12px;
    margin-bottom: 0;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
        0 1px 2px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
}

.btn-danger {
    color: #fff;
    background-color: #da4f49;
    border: 1px solid #bd362f;
}

.btn-danger:hover {
    color: #fff;
    background-color: #bd362f;
}

.btn:focus {
    outline: none;
}

.todo-container {
    width: 600px;
    margin: 0 auto;
}
.todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
}
</style>