$(function() {
    // 初始化右侧滚动条
    // 这个方法定义在scroll.js中
    resetui() //发送消失后滚动到底部
})
let ipt = document.querySelector('#text')
let btn = document.querySelector('#btn')
let talk_list = document.querySelector('.talk_list')
let voice = document.querySelector('#voice')
axios.defaults.baseURL = 'http://www.liulongbin.top:3006'
btn.addEventListener('click', function() {
    //获取btn内容
    let text = ipt.value.trim()
        //如果为空就return并清空ipt内容
    if (!text) return ipt.value = ''
        //不为空，添加到页面
    talk_list.insertAdjacentHTML("beforeend", `<li class="right_word">
    <img src="img/person02.png" /><span>${text}</span> </li>`)

    //发送后ipt清空
    ipt.value = ''
    resetui() //发送消失后滚动到底部
    getText(text)
})
ipt.addEventListener('keyup', function(e) {
        if (e.key == 'Enter') {
            btn.click()
        }
    })
    //请求信息
function getText(text) {
    axios({
        method: 'GET',
        url: '/api/robot',
        params: { //get请求参数写在params中
            spoken: text
        }
    }).then(res => {
        if (res.data.message !== 'success') console.error('请求失败');
        // res.data 响应体
        talk_list.insertAdjacentHTML('beforeend', `<li class="left_word"><img src="img/person01.png" /> 
        <span>${res.data.data.info.text}</span></li>`)
        resetui()
        getVoice(res.data.data.info.text)
    })
}
//转化为voice
function getVoice(text) {
    axios({
        method: 'GET',
        url: '/api/synthesize',
        params: {
            text: text
        }
    }).then(res => {
        // res.data 响应体
        if (res.status !== 200) console.error('请求失败');
        voice.src = res.data.voiceUrl
    })
}