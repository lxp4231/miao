module.exports = {
  presets: ["@vue/cli-plugin-babel/preset", ["@babel/preset-env", { modules: false }]], //引入
  plugins: [
    [
      "component",
      {
        libraryName: "element-ui",
        styleLibraryName: "theme-chalk",
      },
    ],
  ],
}
//此文件为Babel的配置文件，将ES6转为ES5，兼容低版本浏览器
