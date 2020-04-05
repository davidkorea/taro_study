# Input 输入框

- [https://taro-ui.jd.com/#/docs/input](https://taro-ui.jd.com/#/docs/input)
- Taro-ui 的 AtInput组件和 taro/component里面的Input组件完全不同

1. AtInput是基于微信小程序的Input组件包装而成，获取输入值的方式有所限制
    - 该组件为受控组件，开发者需要通过 onChange 事件来更新 value 值变化，value 与 onChange 函数必填。在小程序中，如果想改变 value 的值，需要 return value 从而改变输入框的当前值
    - 默认当调出手机虚拟键盘时，页面会自动向上滑动
2. Input组件为包装的html原生input组件，操作和使用原生input标签一样
    - **对于weapp，事件函数只能是onInput**，而不能使用onChange，onKeyDown等原生事件函数
    - 键盘呼出后，页面无法自动上滑
    


# 1. Taro-ui：AtInput
### 1.2 function
- 父组件
```javascript
const [inputValue, setInputValue] = useState('')

const handleChange =(inputValue)=>{   //  此处参数inputValue，就是上面创建的状态
    setInputValue(inputValue)
    return inputValue                 // 一定要return，否则无法变更输入值！！！！！！！  
}
```
- 子组件
```jaavascript
<AtInput
    placeholder='plan your today here.'
    value={props.inputValue}
    onChange={props.handleChange}
></AtInput>
```

### 1.1 class
```javascript
import Taro from '@tarojs/taro'
import { AtInput }  from 'taro-ui'
export default class Index extends Taro.Component {
  constructor () {
    super(...arguments)
    this.state = {
      value: ''
    }
  }
  
  handleChange (value) {
    this.setState({
      value
    })
    // 在小程序中，如果想改变 value 的值，需要 `return value` 从而改变输入框的当前值 !!!!!!!!!!!!!!!!!!!!!!!!!!!
    return value
  }
  
  render () {
    return (
      <AtInput
        name='value'
        title='标准五个字'
        type='text'
        placeholder='标准五个字'
        value={this.state.value}
        onChange={this.handleChange.bind(this)}
      />
    )
  }
}
```

# 2. taro/component: Inpu

这个Input组件继承自原生html的input标签，所以获取输入值可以使用`e.target.value`. 但是对于weapp，**事件函数只能是onInput**，而不能是onChange，onKeyDown等原生事件函数

- 父组件
```javascript
const [inputValue, setInputValue] = useState('')
const handleOnInput = (e)=>{
  console.log(e.target.value);
  setInputValue(e.target.value)
}
```

- 子组件

```javascript
<Input
    value={props.inputValue}
    onInput={props.handleOnInput}
    placeholder='plan your today here.'
></Input>
```
