import Taro, {useState, useEffect} from '@tarojs/taro'
import { View } from '@tarojs/components'
import './order.css'
import OrderList from '../../components/OrderList'
function Order(){
    const [keyList, setKeyList] = useState([]);
    const [orderList, setOrderList] = useState([]);

    useEffect(() => {
        // console.log('hi');
        Taro.getStorageInfo({
            success: function (res) {
                console.log(res.keys)
                setKeyList(res.keys)
            }
          })
    },[]);

    useEffect(() => {
        var list = []
        keyList.map((v=>{
            Taro.getStorage({
                key: v,
                success: function (res) {
                //   console.log({id:v,items:res.data})
                    list.push({id:v,items:res.data})
                    setOrderList(list)
                }
            })
            console.log(list);
        }))
        
    },[keyList]);

    // Taro.startPullDownRefresh({
    //     success: ()=>{
    //         setOrderList(orderList)
    //         // setTimeout(() => {
    //         //     Taro.stopPullDownRefresh()
    //         // }, 3000);
    //     }
    // })
    return (
        <View className="order">
            {
                orderList.map((v,i)=>{
                    return <OrderList orderId={v.id} orderItems={v.items} key={i+1}></OrderList>

                })
            }

            {/* {
                item&&item.map((v,i)=>{
                    return (
                        <View className="orderitem" key={i+1}>
                            <View>Order: {v.id}</View>
                            {
                                v.items.map((u,j)=>{
                                    return( 
                                        <View key={j+1}>
                                            <View>{u.storeName}</View>
                                            {
                                                u.items.map((w,l)=>{
                                                    return <View style={w.count==0?'visibility: hidden':''} key={l+1}>{w.itemName} - {w.count}</View>
                                                    // if(w.count > 0){
                                                    // }
                                                })
                                            }
                                        </View>
                                    )
                                })
                            }
                        </View>
                    )
                })

            } */}
        </View>
    )
}
Order.config = {
    navigationBarTitleText: 'My Orders',
}
export default Order