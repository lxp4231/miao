// 引入count的ui组件
import countUI from "../components/Count"
// 引入react-redux的connect，用于链接redux与UI组件
import { connect } from "react-redux"
import {
  createIncrementAction,
  createDecrementAction,
  createDecrementSyncAction,
} from "../Redux/count_action"
//a作为传递给ui组件的状态
function mapStateToProps(state) {
  //state底层自动传入，因为是映射状态
  return { count: state }
}
//b作为传递给ui组件的方法
function mapDispatchToProps(dispatch) {
  return {
    add: n => {
      dispatch(createIncrementAction(n))
    },
    jian: n => {
      dispatch(createDecrementAction(n))
    },
    syncAdd: (n, time) => {
      dispatch(createDecrementSyncAction(n, time))
    },
  }
}
// 使用connect()()创建并暴露Count的容器组件(把ui组件包含进来)
// connect(a,b)() 第一个参数a用于传递状态，被用于传递方法
// export default connect(a, b)(countUI)
export default connect(mapStateToProps, mapDispatchToProps)(countUI)

// mapDispatchToProps 可以简写：写成对象形式
// {
//     add: createIncrementAction,
//     jian: createDecrementAction,
//     syncAdd:createDecrementSyncAction
// }
