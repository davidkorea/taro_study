# taro_study

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
