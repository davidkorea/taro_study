import Taro, {useState,useEffect} from '@tarojs/taro'
import { View } from '@tarojs/components'
import OrderStore from './OrderStore'
import './OrderList.css'
function OrderList(props){

    const [foodCount, setFoodCount] = useState([])
    useEffect(() => {
        var list = [...foodCount] 

        props.orderItems&&props.orderItems.map((v,i)=>{
            // console.log(v.storeName);
            var storeName = v.storeName
            
            v.items&&v.items.map((u,j)=>{
                // console.log(u);
                if(u.count>0){
                    console.log(storeName, u.itemName, u.count);
                    let money = u.price*u.count
                    list.push({store:storeName,food:[u.itemName,u.price, u.count], money:money})
                    setFoodCount(list)
                }
            })
            console.log(list);
        })        
    },[]);
    
    return (
        <View className="orderlist">
            <View className='orderid'>Orderid: {props.orderId}</View>
            <View className="stores">
                {
                    foodCount.map((v,i)=>{
                        return  <OrderStore storeName={v.store} foodCount={v.food} key={i+1}></OrderStore>
                    })
                }
               
            </View>
            <View className="money">
                <View className='text'>Total: </View>
                <View className='num'> 
                {
                    foodCount.length>0
                    ? foodCount.map((v,i)=>v.money).reduce((a,b)=>a+b)
                    : ''
                }
                </View>
                
                <View className='num'>￥</View>
                
            </View>
        </View>
    )
}

export default OrderList