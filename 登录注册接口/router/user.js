let express = require("express");
// 创建路由对象
let router = express.Router();
// 导入用户路由处理函数对应的模块
let user_handler = require("../router_handler/user");
// 导入验证表单数据模块
let expressJoi = require("@escook/express-joi");

// 导入schema中要验证的对象
let { reg_login_schema } = require("../schema/user");

//注册新用户
router.post("/reguster", expressJoi(reg_login_schema), user_handler.reguster);

// 登录 验证：expressJoi(reg_login_schema)
router.post("/login", expressJoi(reg_login_schema), user_handler.login);

module.exports = router;
