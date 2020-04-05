# Input 输入框

- Taro-ui 的 AtInput组件和 taro/component里面的Input组件完全不同
1. AtInput是基于微信小程序的Input组件包装而成，获取输入值的方式有所限制
    - 该组件为受控组件，开发者需要通过 onChange 事件来更新 value 值变化，value 与 onChange 函数必填。在小程序中，如果想改变 value 的值，需要 return value 从而改变输入框的当前值
2. Input组件为包装的html原生input组件，操作和使用原生input标签一样


## 1. AtInput
