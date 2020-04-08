

1. 入口文件**app.js**，全局配置中的window 开启该功能 [官方教程](https://nervjs.github.io/taro/docs/tutorial.html#window)

```diff
// app.jsx

config = {
    pages: [
      'pages/index/index'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black',
+     enablePullDownRefresh: true
    },
}
```
