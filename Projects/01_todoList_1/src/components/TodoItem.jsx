import Taro,{useState} from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtIcon } from 'taro-ui'
import './TodoItem.css'

function TodoItem(props){
    return (
        <View className="frame">
            {/* <View style={props.item && props.item.checked? 'background-color: rgb(230, 252, 242)':''} className="todoitem"> */}
            <View className="todoitem">
                <View onClick={()=>props.handleChecked(props.idx)} className="status">
                    {
                        props.item && props.item.checked
                        ? <AtIcon value='check-circle' size='15' color='darkgreen'></AtIcon>
                        : <AtIcon value='tag' size='15' color='#000'></AtIcon>
                    }
                </View>
                <View 
                onClick={()=>{props.handleChecked && props.handleChecked(props.idx)}}
                style={props.item && props.item.checked? 'text-decoration: line-through;color:gray':''} className="content">
                    {props.item.content}
                </View>
                <View onClick={()=>props.handleDelete(props.idx)} className="del">
                    {
                        props.item && props.item.delete
                        ? ''
                        : <AtIcon value='trash' size='15' color='gray'></AtIcon>
                    }
                </View>
            </View>
        </View>

    )
}

export default TodoItem