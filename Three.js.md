# Three.js
1.Three.js 
1.1 Three.js是基于原生WebGL封装运行的三维引擎。
1.2 OpenGL 、 WebGL、Canvas
● WebGL (WebGL（Web Graphics Library）是一种3D绘图协议。)
       WebGL是一种Javascript的3D图形接口，把JavaScript和OpenGL ES 2.0结合在一起。
● OpenGL (OpenGL 是一个跨平台的3D/2D的绘图标准（规范）)
       OpenGL是开放式图形标准，跨编程语言、跨平台，Javascript、Java 、C、C++ 、 python 等都能          支持OpenGL ，OpenGL的Javascript实现就是WebGL。OpenGL ES 2.0是OpenGL的子集，针对手          机、游戏主机等嵌入式设备而设计。
● Canvas
    Canvas是HTML5的画布元素，在使用Canvas时，需要用到Canvas的上下文，可以用2D上下文绘制二      维的图像，也可以使用3D上下文绘制三维的图像，其中3D上下文就是指WebGL。
● OpenGL、WebGL、Canvas、Three.js四者关系
       OpenGL：3D绘图标准
       WebGL：OpenGL + JavaScript
       Canvas：WebGL + Canvas 2D
       Three.js：一个基于WebGL封装的库
1.3 应用
![](media/16535810351508/16535811514345.jpg)
● 物联网3D可视化
工业、建筑等各个领域与物联网相关Web项目网页交互界面都会呈现出3D化的趋势。物联网相比较传统互联网更强调的是人与物、物与物的联系，比如通过网页页面远程控制工厂中的一台机器启动或关停，以3D的形式展示在网页上
物联网粮仓3D可视化案例 http://www.yanhuangxueyuan.com/3D/liangcang/index.html
● 产品在线预览
沙发在线预览：http://app.xuanke3d.com/apps/trayton/#/show
服装在线预览：http://suit.xuantech.cn/
洗衣机在线交互预览：https://cdn.weshape3d.com/hir001/1021/web/index.html
● 数据可视化
● H5/微信小游戏
● 科教领域
● 在科教领域通过3D方式展示特定的知识相比较图像更为直观。
科研平台-蛋白质结构可视化案例：http://www.rcsb.org/3d-view/2JEN/1
地理天文相关——太阳系3D预览：http://www.yanhuangxueyuan.com/3D/solarSystem/index.html
● 机械领域
机械模型在线预览demo：http://www.yanhuangxueyuan.com/3D/jixiezhuangpei/index.html
● WebVR（基于Web实现的VR内容）
室内设计作品展示案例：http://www.yanhuangxueyuan.com/3D/houseDesign/index.html
1.4 Three.js资源
github链接：https://github.com/mrdoob/three.js
Three.js官网：https://threejs.org/
Threejs中文文档：Threejs中文文档
相关课程：http://www.webgl3d.cn/Three.js/
相关的库：
![](media/16535810351508/16535812332323.jpg)
1.5 基本使用
● 库链接 gitHub: https://github.com/mrdoob/three.js   
      目录结构：
![](media/16535810351508/16535812581304.jpg)
● 整个程序结构
![](media/16535810351508/16535813041136.jpg)
![](media/16535810351508/16535813406383.jpg)
● 使用
![](media/16535810351508/16535813740563.jpg)
![](media/16535810351508/16535813823370.jpg)
2.举例
2.1 基本使用
![](media/16535810351508/16535813957262.jpg)
● 有关Threejs更多内容
2.2 月球环绕地球
2.3 可视化3D地图
![](media/16535810351508/16535814235086.jpg)
2.4 智慧城市
● 常用建模软件
● Three.js加载solidworks模型
● Three.js的场景对象最重要的几个函数
● ShaderMaterial材质介绍
![](media/16535810351508/16535814429939.jpg)
