import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import './Item.css'
function Item(props){
    return (
        <View className="item">
            <View className="name">{props.food.itemName}</View>
            <View className="price">{props.food.price}￥</View>
            <View className="quantity">
                <View 
                onClick={()=>props.handleRemove(props.storeIdx, props.itemIdx)}
                className="remove">-</View>
                <View style={props.food&&props.food.count>0? 'color:tomato;font-weight:800':''} className="num">{props.food.count}</View>
                <View 
                onClick={()=>props.handleAdd(props.storeIdx, props.itemIdx)}
                className="add">+</View>
            </View>
        </View>
    )
}

export default Item