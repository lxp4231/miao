//导入mysql模块
let db = require("../db/index.js")
// 导入bcryptjs加密模块
let bcryptjs = require("bcryptjs")
//导入jwt加密文件 (生成token)
let jwt = require("jsonwebtoken")
let config = require("../config")
// 注册路由处理函数
exports.reguster = (req, res) => {
  let userinfo = req.body //获取请求数据
  //校验提交数据是否合法（此处利用第三方插件joi）
  // if (!userinfo.username || !userinfo.password) {
  //   res.send({
  //     status: 1,
  //     msg: "用户名或密码不能为空",
  //   });
  // }
  // 定义sql语句,验证username是否被占用
  let sqlStr = `select * from ev_users where username=?`
  db.query(sqlStr, userinfo.username, (err, results) => {
    if (err) {
      return res.cc(err)
    }
    if (results.length > 0) {
      return res.cc("用户名已被占用，重新填写")
    }
  })
  // 对密码加密！！！
  userinfo.password = bcryptjs.hashSync(userinfo.password, 10)
  // 定义插入用户sql
  let sqlStr1 = "insert into ev_users set ?"
  db.query(
    sqlStr1,
    { username: userinfo.username, password: userinfo.password },
    (err, results) => {
      if (err) {
        return res.cc(err)
      }
      //判断影响函数是否为1 !!!!!
      if (results.affectedRows !== 1) {
        return res.cc("注册失败，稍后再试")
      }
      //成功
      res.cc("注册成功", 0)
    }
  )
}
// 登录路由处理函数
//检查用户名是否存在
exports.login = (req, res) => {
  let userinfo = req.body //获取请求数据
  let sql = "select * from ev_users where username=?" //select的results为一个数组
  db.query(sql, userinfo.username, (err, results) => {
    if (err) {
      return res.cc(err)
    }
    if (!results.length) return res.cc("登录失败") //没有结果

    // 验证密码是否正确
    let compareResult = bcryptjs.compareSync(userinfo.password, results[0].password) //结果为boolean值，
    if (!compareResult) {
      return res.cc("登录失败")
    }
    // TODO 在服务端生成token字符串（对results信息进行加密）
    const user = { ...results[0], user_pic: "", password: "" }
    let tokenStr = jwt.sign(user, config.jwtSecretKey, { expiresIn: "10h" })
    res.send({
      status: 0,
      msg: "登录成功",
      Token: `Bearer ${tokenStr}`,
    })
  })
}
