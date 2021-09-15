//导入express
let express = require("express");
// 创建服务器实例
let app = express();

const joi = require("joi"); //用于定义验证规则
//用cors解决跨域
let cors = require("cors");
app.use(cors()); //将cors注册为全局中间件
app.use(express.urlencoded({ extended: false })); //解析表单数据的中间件:这种格式application/x-www-form-urlencoded
let expressJWT = require("express-jwt"); //解析token的中间件
let config = require("./config");

// 定义res的全局中间件, 注：在路由之前定义中间件!!!!!!!!!
app.use((req, res, next) => {
  res.cc = function (err, status = 1) {
    //给res挂载属性或方法，全局使用
    res.send({
      status,
      msg: err instanceof Error ? err.message : err,
    });
  };
  next();
});

// 解析token的全局中间件(在路由之前),自动挂载在req.user上
app.use(
  expressJWT({ secret: config.jwtSecretKey }).unless({ path: [/^\/api\//] }) //除了/api开头的url，请求时请求头都要帯Token
);

//导入并使用user路由模块
let userRouter = require("./router/user.js");
app.use("/api", userRouter);

//导入并使用userinfo路由模块
let infoRouter = require("./router/userinfo");
app.use("/my", infoRouter);

//导入并使用article路由模块
let artCate = require("./router/artcate");
app.use("/my/article", artCate);

// 用以捕获错误的中间件
app.use((err, req, res, next) => {
  //验证失败导致的错误
  if (err instanceof joi.ValidationError) {
    return res.cc(err);
  }
  //解析失败导致的错误
  if (err.name === "UnauthorizedError") return res.cc("身份认证失败！");
  // 未知错误
  res.cc(err);
});
// 启动服务器
app.listen(3007, () => {
  console.log("express is running at http://127.0.0.1");
});
