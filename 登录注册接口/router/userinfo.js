let express = require("express");
// 创建路由对象
let router = express.Router();
// 初始化路由
router.get("/userinfo", (req, res) => {
  res.send({
    status: 0,
    msg: req.user,
  });
});
module.exports = router;
