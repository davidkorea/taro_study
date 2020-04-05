import Taro, { useState } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.less'
import TodoTabs from '../../components/TodoTabs'
import Add  from '../../components/Add'
import { AtMessage } from 'taro-ui'

export default function Index(){
  const [itemList, setItemList] = useState([
      {content:'hello world props delete', checked:false, delete:true},
      {content:'hi boy props', checked:false, delete:false},
      {content:'hey girl props', checked:false, delete:false},
      {content:'sup props', checked:true, delete:false},
      {content:'checked props', checked:true, delete:false},
      {content:'delete props', checked:false, delete:true},
  ])

  const handleChecked = (idx)=>{
    console.log(idx);
    itemList[idx].checked = !itemList[idx].checked
    setItemList([...itemList])
  }

  const handleDelete = (idx)=>{
    console.log(idx);
    itemList[idx].delete = !itemList[idx].delete
    setItemList([...itemList])
  }

  const [isOpened, setIsOpened] = useState(false)
  const handleClose = ()=>{
      setIsOpened(false)
  }
  const handleFab = ()=>{
      setIsOpened(true)
  }

  const [inputValue, setInputValue] = useState('')
  const handleOnInput = (e)=>{
      console.log(e.target.value);
      setInputValue(e.target.value)
  }

  const handleOnSubmit = (e)=>{
    // e.preventDefault()
    console.log(inputValue);
    if(inputValue==''){
      setIsToastOpened(true)
      setTimeout(() => {
        setIsToastOpened(false)
      }, 2000);
    }else{
      setItemList(itemList.concat({content:inputValue, checked:false, delete:false}))
      setInputValue('')
      setIsOpened(false)
      Taro.atMessage({
        'message': 'Add item successfully',
        'type': 'success',
      })
    }
  }

  const handleChange =(inputValue)=>{
    setInputValue(inputValue)
    return inputValue
  }

  const [isToastOpened, setIsToastOpened] = useState(false);

  return (
      <View className="list">
        <AtMessage />

        <TodoTabs itemList={itemList} 
        handleChecked={handleChecked}
        handleDelete={handleDelete}
        ></TodoTabs>
        <Add 
          inputValue={inputValue}
          // handleOnInput={e=>setInputValue(e.target.value)}
          handleOnInput={e=>handleOnInput(e)}
          handleOnSubmit={e=>handleOnSubmit(e)}

          isOpened={isOpened}
          handleFab={handleFab}
          handleClose={handleClose}
          handleChange={handleChange}

          isToastOpened={isToastOpened}
        ></Add>
      </View>
  )
}

Index.config = {
  navigationBarTitleText: '首页'
}