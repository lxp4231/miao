// 导入数据库模块
let db = require("../db/index")
// 获取分类列表
exports.cate = (req, res) => {
  let sqlStr = "select * from ev_article_cate where is_delete=0 order by id asc" //根据id升序
  db.query(sqlStr, (err, results) => {
    if (err) return res.cc(err)
    if (!results.length) return res.cc("获取分类列表失败")
    return res.send({
      status: 0,
      msg: "获取分类列表成功",
      data: results,
    })
  })
}
//新增分类
exports.add = (req, res) => {
  // // 检查分类是否已有，是否符合命名规范(使用第三方模块)，最后追加分类
  let sqlStr = "select * from ev_article_cate where name=? or alias=?"
  //select 出的结果为对象形式，其余为对象格式
  db.query(sqlStr, [req.body.name, req.body.alias], (err, results) => {
    if (err) return res.cc(err) // 判断 分类名称 和 分类别名 是否被占用
    if (results.length === 2)
      return res.cc("分类名称与别名被占用，请更换后重试！")
    if (results.length === 1 && results[0].name === req.body.name)
      return res.cc("分类名称被占用，请更换后重试！")
    if (results.length === 1 && results[0].alias === req.body.alias)
      return res.cc("分类别名被占用，请更换后重试！")
    // // 添加分类
    let sql = "insert into ev_article_cate set ?" //？为对象格式
    db.query(sql, req.body, (err, results) => {
      if (err) return res.cc(err)
      if (results.affectedRows !== 1) return res.cc("新增分类失败")
      return res.send({
        status: 0,
        msg: "新增分类成功",
      })
    })
  })
}
// 删除分类
exports.delete = (req, res) => {
  console.log(req.params.id)
  res.send("delete ok")
}
