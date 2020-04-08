# src-3 新增下拉刷新功能

### 相对于src-2，仅变更order.js页面

```javascript
import Taro, {useState, useEffect, usePullDownRefresh} from '@tarojs/taro'
import { View } from '@tarojs/components'
import './order.css'
import OrderList from '../../components/OrderList'
import { AtNoticebar } from 'taro-ui'

function Order(){
    const [keyList, setKeyList] = useState([]);
    const [orderList, setOrderList] = useState([]);
    
    usePullDownRefresh(() => {
        console.log('onPullDownRefresh')
        Taro.getStorageInfo({             // 将下面的useEffect的逻辑，在刷新时同样执行一遍
            success: function (res) {
                console.log(res.keys)
                setKeyList(res.keys)

                var list = []
                keyList.map((v=>{
                    Taro.getStorage({
                        key: v,
                        success: function (res) {
                            list.push({id:v,items:res.data})
                            setOrderList(list)
                        }
                    })
                    console.log(list);
                }))
            }
        })
        
    })
    
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

    

    return (
        <View className="order">
            <AtNoticebar icon='volume-plus'>
                请下拉刷新当前页面，以获取最新订单更新
            </AtNoticebar>

            {
                orderList.map((v,i)=>{
                    return <OrderList orderId={v.id} orderItems={v.items} key={i+1}></OrderList>

                })
            }
        </View>
    )
}
Order.config = {
    navigationBarTitleText: 'My Orders',
}
export default Order
```
