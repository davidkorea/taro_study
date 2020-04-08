import Taro, {useState} from '@tarojs/taro'
import { View } from '@tarojs/components'
import './Menulist.css'
import Store from './Store'

function MenuList(props){
    return (
        <View className="menulist">
            {
                props.dataList && props.dataList.map((v,i)=>{
                    return <Store key={i+1} item={v} storeIdx={i} 
                    handleAdd={props.handleAdd}
                    handleRemove={props.handleRemove}
                    ></Store>
                })
            }
        </View>
    )
}

export default MenuList