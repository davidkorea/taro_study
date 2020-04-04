# taro_study


## Taro 使用原生html标签 还是 使用taro/components
1. 生成h5，使用html标签没问题，可以使用tailwindcss布局
2. 生成weapp，必须使用taro/components，否则编译无效，且不能使用taro自带组件不能使用tailwind布局





## Taro
- 请求
  ```javascript
    useEffect(()=>{
        Taro.request({
            url: url
        }).then(res=>{
            console.log(res.data.data.areaTree[4]);
            setToday(res.data.data.areaTree[4].today)
            setTotal(res.data.data.areaTree[4].total)
        })            
    },[])
  ```
  - react使用fetch，但是taro不能使用，需要使用封装好的兼容weapp的Taro.request()

## 底端tab标签
- 提前创建页面目录
  - src/pages/index/index.jsx  // 默认已创建
  - src/pages/list/list.js
- app.jsx文件中添加页面pages配置，以及tabBar的配置，和微信小程序一样

```javascript
// app.jsx

config = {
    pages: [
      'pages/index/index',
      'pages/list/list'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      list: [
        {
          pagePath: 'pages/index/index',
          text: '首页',
          // iconPath: './images/home.png',
          // selectedIconPath: './images/homeSelected.png',
        },
        {
          pagePath: 'pages/list/list',
          text: 'List',
          // iconPath: './images/mine.png',
          // selectedIconPath: './images/mineSelected.png',
        },
      ],
    }
  }

```


## Taro-ui

- [taro-ui install](https://taro-ui.jd.com/#/docs/quickstart)
  - `cnpm install taro-ui`
  - app.js + `import 'taro-ui/dist/style/index.scss' // 全局引入一次即可`


- taro-ui 
  - 布局中的card 不能自定义大小，太大了，还是不要用布局的组件了！！！

- **不要使用原生html的标签，使用taro标签，需要单独引入，都是大写字母开头**
  - `<Form />`,`<Input />`,`<Textarea />`,`<Button />`
  - 否则，编译weapp时，不能setState
  - 使用html的小写字母的标签，编译h5生效，小程序完全不生效！！！！！

- 对于表单的输入元素`<Input />`,`<Textarea />`
  - 小程序支持两种方式
    - `onInput={props.formTitleChange}`，简写模式
    - `onInput={e => props.formTitleChange(e)}`，完整模式
  - h5仅支持下面的完整模式
  
- 对于表单输入元素的事件函数`<Input />`,`<Textarea />`
  - 小程序：仅支持onInput
  - h5：onChange 和 onInput
