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