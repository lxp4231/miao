let express = require("express")
// 导入expressJoi模块进行验证
let expressJoi = require("@escook/express-joi")
// 导入schame
let { add_cate_schema } = require("../schema/user")
//创建路由实例
let router = express.Router()
// 导入路由处理函数模块
let artCate_handler = require("../router_handler/artcate")
// 获取分类列表
router.get("/cates", artCate_handler.cate)
// 新增分类
router.post("/addcates", expressJoi(add_cate_schema), artCate_handler.add)
// 删除分类
router.get("/deletecate/:id", artCate_handler.delete)
module.exports = router
