var posts=["2021/07/02/04.循环结构/","2021/07/02/02.语言元素/","2021/07/02/05.构造程序逻辑/","2021/07/02/08.面向对象编程基础/","2021/07/02/10.图形用户界面和游戏开发/","2021/07/02/11.文件和异常/","2021/07/02/12.字符串和正则表达式/","2021/07/02/15.图像和办公文档处理/","2022/12/23/Linux冲冲冲/","2021/07/02/01.初识Python/","2023/01/08/Linux工具/","2023/01/09/Python模块/","2023/01/08/linux中安装python3/","2022/05/26/test/","2022/11/22/健身/","2021/07/02/03.分支结构/","2023/01/16/字典/","2022/11/25/心路历程/","2023/01/15/操作列表/","2021/07/02/06.函数和模块的使用/","2022/11/22/职场/","2023/01/08/青龙面板/","2022/12/11/一镜到底—ChatGPT/","2022/11/25/写给未来/","2021/07/02/07.字符串和常用数据结构/","2021/07/02/09.面向对象进阶/","2021/07/02/13.进程和线程/","2021/07/02/14.网络编程入门和网络应用开发/","2022/11/22/时间管理大师/","2022/12/19/宝塔破解/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};