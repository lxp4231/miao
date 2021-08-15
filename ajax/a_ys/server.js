//引入
const express = require('express')
    //创建应用对象
const app = express()
    //创建路由规则(get请求)

// app.get('/server', (request, response) => {
//     //设置响应头 设置允许跨域
//     response.setHeader('Access-Control-Allow-Origin', '*') //'*' 
//         //设置响应体
//     response.send('HOLLOW123')
// })

//POST请求
// app.post('/server', (request, response) => { //app.all 可以发任意请求
//     //设置响应头 设置允许跨域
//     response.setHeader('Access-Control-Allow-Origin', '*') //'*' 
//         //设置响应体
//     response.send('hollow everyone')
// })

// // // 接收JSON类型
// 设置延迟响应(setTimeout)
// app.post('/json-server', (request, response) => { //app.all 可以发任意请求
//     //设置响应头 设置允许跨域
//     response.setHeader('Access-Control-Allow-Origin', '*') //'*' 
//         //设置响应体
//     let data = {
//         name: 'liufengjing-2'
//     }
//     let str = JSON.stringify(data)
//         // setTimeout(() => {
//         //         response.send(str) //send传入一个字符串
//         //     }, 500)
//     response.send(str) //send传入一个字符串
// })

//axios
// app.all('/axios-server', (request, response) => { //app.all 可以发任意请求
//     //设置响应头 设置允许跨域
//     response.setHeader('Access-Control-Allow-Origin', '*') //'*' 
//         //设置响应体
//     let data = {
//         name: 'liufengjing-2'
//     }
//     let str = JSON.stringify(data)
//         // setTimeout(() => {
//         //         response.send(str) //send传入一个字符串
//         //     }, 500)
//     response.send(str) //send传入一个字符串
// })


// //fetch
// app.all('/fetch-server', (request, response) => { //app.all 可以发任意请求
//     //设置响应头 设置允许跨域
//     response.setHeader('Access-Control-Allow-Origin', '*') //'*' 
//         //设置响应体
//     let data = {
//         name: 'liufengjing-2'
//     }
//     let str = JSON.stringify(data)
//         // setTimeout(() => {
//         //         response.send(str) //send传入一个字符串
//         //     }, 500)
//     response.send(str) //send传入一个字符串
// })

//jsonp
app.all('/jsonp-server', (request, response) => { //app.all 可以发任意请求
    //设置响应体
    let data = {
        exit: 1,
        msg: '用户名已存在'
    }
    let str = JSON.stringify(data)
        // setTimeout(() => {
        //         response.send(str) //send传入一个字符串
        //     }, 500)
    response.end(`handle(${str})`) //send传入一个字符串
})

// //cors
// app.all('/cors-server', (request, response) => { //app.all 可以发任意请求
//     //设置响应头
//     response.setHeader('Access-Control-Allow-Origin', '*') //'*' 
//         // response.setHeader('Access-Control-Allow-Headers', '*') //'*' 
//         // response.setHeader('Access-Control-Allow-Method', '*') //'*' 
//     response.send(`hollow cors`) //send传入一个字符串
// })

//监听端口启动服务
app.listen(8000, () => {
        console.log('服务已经启动,8000端口');
    })
    //nodemon
    //response.end???