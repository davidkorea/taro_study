import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import OrderItem from'./OrderItem'
import './OrderStore.css'
function OrderStore(props){
    return (
        <View className="orderstore">
            <View className="name">{props.storeName}</View>
            <View className='items'>
                <View className="orderitem">{props.foodCount[0]} / {props.foodCount[1]}￥ x {props.foodCount[2]}</View>
            </View>
        </View>
    )
}

export default OrderStore