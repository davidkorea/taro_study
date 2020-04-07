import Taro, {useState, useEffect} from '@tarojs/taro'
import { View } from '@tarojs/components'
import './order.css'

function Order(){
    const [keyList, setKeyList] = useState([]);
    const [item, setItem] = useState([]);

    useEffect(() => {
        console.log('hi');
        
        Taro.getStorageInfo({
            success: function (res) {
                console.log(res.keys)
                setKeyList(res.keys)
            }
          })
    },[]);

    useEffect(() => {
        keyList.map((v=>{
            Taro.getStorage({
                key: v,
                success: function (res) {
                //   console.log({id:v,items:res.data})
                  setItem(item.concat({id:v,items:res.data}))
                }
              })
        }))
        
    },[keyList]);

    
    return (
        <View className="order">
            {
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

            }
        </View>
    )
}
Order.config = {
    navigationBarTitleText: 'My Orders',
}
export default Order