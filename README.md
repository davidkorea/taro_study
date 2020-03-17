# taro_study


- taro-ui 
  - 布局中的card 不能自定义大小，太大了，还是不要用布局的组件了！！！

- **不要使用原生html的标签，使用taro标签，需要单独引入，都是大写字母开头**
  - `<Form />`,`<Input />`,`<Textarea />`,`<Button />`
  - 否则，编译weapp时，不能setState
  - 使用html的小写字母的标签，编译h5生效，小程序完全不生效！！！！！
