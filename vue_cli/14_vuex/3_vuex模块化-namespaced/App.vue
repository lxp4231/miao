<template>
    <div>
        <Count> </Count>
        <hr />
        <Person> </Person>
    </div>
</template>

<script>
import Count from "./components/Count.vue";
import Person from "./components/Person.vue";
export default {
    //这里面的this指向VueComponent实例
    name: "App",
    components: {
        Count,
        Person,
    },
};
</script>

<style>
</style>