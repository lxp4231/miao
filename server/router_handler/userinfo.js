// 导入数据库模块
let db = require("../db/index");
// 导入解析密码的 bcryptjs
let bcryptjs = require("bcryptjs");
// 获取用户信息
exports.getUserInfo = (req, res) => {
  // 定义sql语句
  let sqlStr =
    "select id,username,email,nickname,user_pic from ev_users where id=?";
  //执行sql
  db.query(sqlStr, req.user.id, (err, results) => {
    if (err) return res.cc(err);
    if (!results.length) return res.cc("获取用户信息失败");
    res.send({
      status: 0,
      msg: "获取用户信息成功",
      data: results[0],
    });
  });
};
// 更新信息
exports.updateUserInfo = (req, res) => {
  let sqlStr = "update ev_users set ? where id=?"; //where id=?
  db.query(sqlStr, [req.body, req.body.id], (err, results) => {
    if (err) return res.cc(err);
    if (results.affectedRows !== 1) return res.cc("修改信息失败");
    return res.send({
      status: 0,
      msg: "修改信息成功",
    });
  });
};
// 重置密码
exports.updatePassword = (req, res) => {
  let sqlStr = "select * from ev_users where id=?"; //where id=?
  //配置了解析Token的全局中间件，自动挂载req.user
  db.query(sqlStr, req.user.id, (err, results) => {
    if (err) return res.cc(err);
    if (!results.length) return res.cc("用户不存在");
    let compareSync = bcryptjs.compareSync(
      //解密密码并进行验证是否正确
      req.body.oldPwd,
      results[0].password
    );
    //TODO 判断旧密码是否正确
    if (!compareSync) {
      return res.cc("原密码不正确");
    }
    //对新密码进行加密
    req.body.newPwd = bcryptjs.hashSync(req.body.newPwd, 10);
    let sqlStr1 = "update ev_users set ? where id=?"; //更新新密码
    db.query(
      sqlStr1,
      [{ password: req.body.newPwd }, req.user.id],
      (err, results) => {
        if (err) return res.cc(err);
        if (results.affectedRows !== 1) {
          return res.cc("修改密码失败");
        }
        res.send({
          status: 0,
          msg: "修改密码成功",
        });
      }
    );
  });
};
// 更换头像
exports.updateAvatar = (req, res) => {
  // 定义sql语句
  let sqlStr = "update ev_users set user_pic=? where id=?";
  db.query(sqlStr, [req.body.avatar, req.user.id], (err, results) => {
    if (err) return res.cc(err);
    if (results.affectedRows !== 1) return res.cc("更换头像失败");
    return res.cc("更换头像成功", 0);
  });
};
