import { ADDPERSON } from "../constant"
// 创建增加一个人的action动作对象
const createPersonAction = data => ({ type: ADDPERSON, data })
export default createPersonAction
