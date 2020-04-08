

## 1. 启用下拉刷新功能

入口文件**app.js**，全局配置中的window 开启该功能 [官方教程](https://nervjs.github.io/taro/docs/tutorial.html#window)

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

## 2. onPullDownRefresh事件处理函数
[onPullDownRefresh事件处理函数 - 官方教程](https://nervjs.github.io/taro/docs/tutorial.html#页面事件处理函数)

- 可以通过 `Taro.startPullDownRefresh` 触发下拉刷新，调用后触发下拉刷新动画，效果与用户手动下拉刷新一致
- 当处理完数据刷新后，`Taro.stopPullDownRefresh` 可以停止当前页面的下拉刷新

```javascript
Taro.startPullDownRefresh({
    success: ()=>{
        ......
        Taro.stopPullDownRefresh({
            success: ()=>{
                ......
            }
        })
    }
})

```
