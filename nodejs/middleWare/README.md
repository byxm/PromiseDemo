文章 https://blog.csdn.net/u011392772/article/details/81153795
# 中间件的实现原理简单分析

核心的实现是关于中间件的级联调用，洋葱圈模型可以看做是一个栈的结构，请求体和响应体是一个很对称的后进先出的关系

而它的内部实现就是一个koa-compose方法

中间件执行完毕按照压入栈的顺序回退执行后面的饿代码使用的是async,await的特性
