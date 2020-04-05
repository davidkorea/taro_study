
# Taro.createContext & useContext


#  1. weapp - Todo List
<img width="711" src="https://user-images.githubusercontent.com/26485327/78464442-61b0fc80-771c-11ea-92d5-ef9b92122244.png">

<img width="250" src="https://user-images.githubusercontent.com/26485327/78464445-6675b080-771c-11ea-89b8-8573b34c52f7.jpeg">

## 1.1 Pages

- src/pages/list/list.jsx
  - weapp必须jsx扩展名，js报错未注册页面啊
  
```javascript
import Taro, { useState } from '@tarojs/taro'
import {View, Text} from '@tarojs/components'
import Menu from '../../components/Menu'

export const GlobalContext =  Taro.createContext()

function List(){
    const [dataList, setDataList] = useState([
        {content:'hello world', checked:false, delete:false},
        {content:'hi boy', checked:false, delete:false},
        {content:'hey girl', checked:false, delete:false},
        {content:'sup', checked:true, delete:false},
    ]);

    const handleCheck = (idx)=>{
        dataList[idx].checked = !dataList[idx].checked
        setDataList([...dataList])
        
    }
    return(
        <View className="list">
            <GlobalContext.Provider value={{dataList, handleCheck}}>
                <Menu></Menu>
            </GlobalContext.Provider>
        </View>
    )
}
List.config = {
    navigationBarTitleText: 'Todo List',
  }
export default List
```

## 1.2 components

#### 1. TodoTabs
- src/components/TodoTabs.jsx

```javascript
import Taro,{useState, useContext} from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtTabs, AtTabsPane } from 'taro-ui'
import TodoItem from './TodoItem'
import {ListContext} from '../pages/list/list'

function TodoTabs(){
    const [tabList, setTabList] = useState([{ title: 'Open' }, { title: 'Finished' }, { title: 'Deleted' }]) 
    const [current, setCurrent] = useState(0)
    const handleTabClick = (value)=>{
        setCurrent(value)
    }

    const {dataList} = useContext(ListContext);

    return (
      <AtTabs current={current} tabList={tabList} onClick={handleTabClick}>
        <AtTabsPane current={current} index={0} >
            {
                dataList && dataList.map((v,i)=>{
                    if(!v.delete){
                        return  <TodoItem key={i+1} idx={i} item={v}></TodoItem>
                    }
                })
            }
            {/* <TodoItem></TodoItem>
            <TodoItem></TodoItem> */}
        </AtTabsPane>
        <AtTabsPane current={current} index={1}>
            <TodoItem></TodoItem>
            <TodoItem></TodoItem>
        </AtTabsPane>
        <AtTabsPane current={current} index={2}>
            <TodoItem></TodoItem>
            <TodoItem></TodoItem>
        </AtTabsPane>
      </AtTabs>
    )
}

export default TodoTabs
```


#### 2. TodoItem
- src/components/TodoItem.jsx

```javascript
import Taro,{useState} from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtIcon } from 'taro-ui'
import './TodoItem.css'

function TodoItem(props){
    return (
        <View className="frame">
            <View className="todoitem">
                <View className="status">
                    <AtIcon value='tag' size='15' color='#000'></AtIcon>
                </View>
                <View className="content">
                    {props.item.content}
                </View>
                <View className="del">
                    <AtIcon value='trash' size='15' color='#000'></AtIcon>
                </View>
            </View>
        </View>

    )
}

export default TodoItem
```


## 1.3 React方式单独创建Context组件，更不行！！
- src/contexts/ListContext.jsx
```javascript
import Taro, {useState}  from '@tarojs/taro'

export const GlobalContext =  Taro.createContext()

function GlobalContextProvider(props){

    const [dataList, setDataList] = useState([
        {context:'hello world', checked:false, delete:false},
        {context:'hi boy', checked:false, delete:false},
        {context:'hey girl', checked:false, delete:false},
        {context:'sup', checked:false, delete:false},
    ]);

    return (
        <GlobalContext.Provider value={{dataList}}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export default GlobalContextProvider
```



