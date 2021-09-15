// 定义验证规则
const joi = require("joi");
//用户名验证规则
const username = joi.string().alphanum().min(1).max(10).required();
const password = joi
  .string()
  .pattern(/^[\S]{6,12}$/)
  .required();

// 注册和登录表单的验证规则对象
exports.reg_login_schema = {
  // 对req.body中的数据进行验证
  body: {
    username,
    password,
  },
};
// 更改基本信息的验证规则
const id = joi.number().integer().min(1).required();
const nickname = joi.string().required();
const email = joi.string().email().required();
// 更新数据的验证规则对象
exports.update_userinfo_schema = {
  // 对req.body中的数据进行验证
  body: {
    id,
    nickname,
    email,
  },
};
//重置密码验证
exports.update_password_schema = {
  body: {
    oldPwd: password,
    newPwd: joi.not(joi.ref("oldPwd")).concat(password),
  },
};

//验证头像
let avatar = joi.string().dataUri().required();
exports.update_avatar_schema = {
  body: {
    avatar,
  },
};

//新增分类验证
let name = joi.string().required();
let alias = joi.string().alphanum().required();
exports.add_cate_schema = {
  body: {
    name,
    alias,
  },
};
