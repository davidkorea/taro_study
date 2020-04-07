import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import './Store.css'
import Item from './Item'

function Store(props){
    return (
        <View className="store">
            <View className="name">{props.item.storeName}</View>
            <View className="itemlist">
                {
                    props.item && props.item.items.map((v,i)=>{
                        return <Item key={i+1} storeIdx={props.storeIdx} itemIdx={i} food={v} 
                        handleAdd={props.handleAdd}
                        handleRemove={props.handleRemove}
                        ></Item>
                    })
                }

            </View>
        </View>
    )
}

export default Store