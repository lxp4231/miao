let express = require("express");
// 创建路由对象
let router = express.Router();
// 导入验证表单数据模块
let expressJoi = require("@escook/express-joi");

// 导入路由处理函数
let userinfo_handler = require("../router_handler/userinfo");
// 获取用户信息
router.get("/userinfo", userinfo_handler.getUserInfo);

// 导入验证规则
let {
  update_userinfo_schema,
  update_password_schema,
  update_avatar_schema,
} = require("../schema/user");
// 更新用户信息
router.post(
  "/userinfo",
  expressJoi(update_userinfo_schema),
  userinfo_handler.updateUserInfo
);

// 重置密码
router.post(
  "/updatepwd",
  expressJoi(update_password_schema),
  userinfo_handler.updatePassword
);

//更换头像
router.post(
  "/update/avatar",
  expressJoi(update_avatar_schema),
  userinfo_handler.updateAvatar
);
//
module.exports = router;
