import Taro, {useState} from '@tarojs/taro'
import { View } from '@tarojs/components'
import MenuList from '../../components/MenuList'
import Count from '../../components/Count'
import './cart.css'
import { AtToast } from "taro-ui"

function Cart(){
    const [dataList, setDataList] = useState([
        {
            storeName:'hello restaurant',
            items:[
                    {itemName:'steak (1p)', price:12, count: 0},
                    {itemName:'fired chicken', price:48, count: 0},
                    {itemName:'shirmp pizza', price:52, count: 0}
            ]
        },        
        {
            storeName:'world drinks',
            items:[
                    {itemName:'americano', price:22, count: 0},
                    {itemName:'latte', price:36, count: 0},
                    {itemName:'milk tea', price:18, count: 0},
                    {itemName:'orange juice', price:25, count: 0},
                    {itemName:'mango shake', price:26, count: 0},

            ]
        },
        {
            storeName:'Italy restaurant',
            items:[
                    {itemName:'pasta (2p set)', price:88, count: 0},
                    {itemName:'lobster (4p)', price:62, count: 0},
                    {itemName:'roast chicken', price:49, count: 0}
            ]
        },  
        {
            storeName:'Italy restaurant',
            items:[
                    {itemName:'pasta (2p set)', price:88, count: 0},
                    {itemName:'lobster (4p)', price:62, count: 0},
                    {itemName:'roast chicken', price:49, count: 0}
            ]
        }, 
        {
            storeName:'Italy restaurant',
            items:[
                    {itemName:'pasta (2p set)', price:88, count: 0},
                    {itemName:'lobster (4p)', price:62, count: 0},
                    {itemName:'roast chicken', price:49, count: 0}
            ]
        }, 
    ])

    const handleAdd = (storeId, itemId)=>{
        console.log(storeId, ' - ',itemId);
        dataList[storeId].items[itemId].count += 1
        setDataList([...dataList])
    }

    const handleRemove = (storeId, itemId)=>{
        console.log(storeId, ' - ',itemId);
        if(dataList[storeId].items[itemId].count > 0){
            dataList[storeId].items[itemId].count -= 1
            setDataList([...dataList])
        }
    }

    const [toastOpened, setToastOpened] = useState(false);

    const handlePay = ()=>{
        setToastOpened(true)

        const date = new Date()
        const time = String( date.getTime())
        Taro.setStorage({
            key:time,
            data:[...dataList]
        })

        setTimeout(() => {
            setToastOpened(false)
            dataList.map(v=>v.items.map(u=>u.count=0))
            setDataList([...dataList])
        }, 1000);
  
    }
    return (
        <View className="cart">
            <View className="menulist">
                <MenuList dataList={dataList} handleAdd={handleAdd} handleRemove={handleRemove}></MenuList>
            </View>
            <View className="countbar">
                <Count dataList={dataList} handlePay={handlePay}></Count>
            </View>
            <AtToast isOpened={toastOpened} status="success" text="Your order has been submit" ></AtToast>
        </View>
    )
}

Cart.config = {
    navigationBarTitleText: 'Food Court',
}

export default Cart