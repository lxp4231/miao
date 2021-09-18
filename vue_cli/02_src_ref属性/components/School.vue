<template>
  <div>
    <h4>名字:{{ name }}</h4>
    <h4>地址:{{ address }}</h4>
  </div>
</template>

<script>
export default {
  name: "School",
  data() {
    return {
      name: "xcu",
      address: "八一东路",
    };
  },
  methods: {
    showName() {
      alert("this is a name of xc");
    },
  },
};
</script>

<style>
h4 {
  color: orange;
}
</style>