import Taro,{useState, useContext} from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtTabs, AtTabsPane } from 'taro-ui'
import TodoItem from './TodoItem'
import {ListContext} from '../pages/list/list'

function TodoTabs(props){
    const [tabList, setTabList] = useState([{ title: 'Open' }, { title: 'Finished' }, { title: 'Deleted' }]) 
    const [current, setCurrent] = useState(0)
    const handleTabClick = (value)=>{
        setCurrent(value)
    }

    const {dataList} = useContext(ListContext);

    return (
      <AtTabs current={current} tabList={tabList} onClick={handleTabClick}>
        <AtTabsPane current={current} index={0} >
            {/* {
                dataList && dataList.map((v,i)=>{
                    if(!v.delete){
                        return  <TodoItem key={i+1} idx={i} item={v}></TodoItem>
                    }
                })
            } */}
            {
                props.itemList && props.itemList.map((v,i)=>{
                    if(!v.delete){
                        return  <TodoItem key={i+1} idx={i} item={v} 
                                    handleChecked={props.handleChecked}
                                    handleDelete={props.handleDelete}
                                ></TodoItem>
                    }
                })
            }
        </AtTabsPane>
        <AtTabsPane current={current} index={1}>
            {
                props.itemList && props.itemList.map((v,i)=>{
                    if(v.checked && !v.delete){
                        return  <TodoItem key={i+1} idx={i} item={v} 
                                    handleChecked={props.handleChecked}
                                    handleDelete={props.handleDelete}
                                ></TodoItem>
                    }
                })
            }
        </AtTabsPane>
        <AtTabsPane current={current} index={2}>
            {
                props.itemList && props.itemList.map((v,i)=>{
                    if(v.delete){
                        return  <TodoItem key={i+1} idx={i} item={v}></TodoItem>
                    }
                })
            }
        </AtTabsPane>
      </AtTabs>
    )
}

export default TodoTabs