export const mix = {
  mounted() {
    console.log("mix成功")
  },
  data() {
    return {
      x: 100,
      y: 200,
    }
  },
  methods: {
    add() {
      this.age++
    },
    build() {
      this.builds++
    },
  },
}
