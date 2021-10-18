<template>
    <div class="todo-footer" v-show="total">
        <label>
            <!--监测复选框是否勾选使用change事件绑定  :checked为true表示被勾选-->
            <!-- <input type="checkbox" :checked="isAll" @change="checkAll" /> -->
            <!-- 当todo都被勾选时，isAll变为true -->
            <!-- v-model="isAll" 双向绑定input 可以控制是否被选 !!!!!!!!-->
            <input type="checkbox" v-model="isAll" />
        </label>
        <span>
            <!-- 数据里没有的属性，用计算属性写 -->
            <span>已完成{{ doneTotal }}</span> / 全部{{ total }}
        </span>
        <button class="btn btn-danger" @click="clear">清除已完成任务</button>
    </div>
</template>

<script>
export default {
    name: "MyFooter",
    methods: {
        // 清除所有完成
        clear() {
            // this.clearDone();
            // 使用自定义事件
            this.$emit("clearDone");
        },
        //全选或全不选
        // checkAll(e) {
        //     if (e.target.value) this.allDone(e.target.checked);
        // },
    },
    // 计算属性
    computed: {
        //汇总左右todo
        total() {
            return this.todos.length;
        },
        //汇总已完成
        doneTotal() {
            // 法1
            // let n = this.todos.filter((it) => {
            //     return it.done != false;
            // });
            // return `${n.length}`;
            // 法2: 用reduce做条件统计
            return this.todos.reduce((pre, current) => {
                return pre + (current.done ? 1 : 0);
            }, 0);
        },

        isAll: {
            // 都完成自动全选
            //获取isAll的值(v-model就是获取值)
            get() {
                return this.doneTotal == this.todos.length && this.total > 0;
            },
            // 全选/全不选
            //input被修改了(input 的选中或不选中就是赋值)
            set(value) {
                // this.allDone(value);
                // 使用自定义事件
                this.$emit("allDone", value);
            },
        },
    },
    props: ["todos"],
};
</script>

<style scoped>
/*footer*/
.todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
}

.todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
}

.todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
}

.todo-footer button {
    float: right;
    margin-top: 5px;
}
</style>
