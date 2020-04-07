import Taro, {useRef, useEffect, useState} from '@tarojs/taro'
import { View } from '@tarojs/components'
import './Count.css'

function Count(props){
    // const totalMoney = useRef()
    // console.log(totaalMoney.current);
    
    const [totalMoney, settotalMoney] = useState(0);
    useEffect(() => {
        let money = props.dataList && props.dataList.map(
            v=>v.items.map(
                u=>u.price * u.count).reduce((a,b)=>a+b)
            ).reduce((c,d)=>c+d)
        settotalMoney(money)
    });

    return (
        <View className="count">
            <View className="money">
                <View className="text">Total: </View>

                {/* <View ref={totaalMoney} className="totalmoney"> */}
                <View className="totalmoney">
                {/* {
                    props.dataList && props.dataList.map(
                        v=>v.items.map(
                            u=>u.price * u.count).reduce((a,b)=>a+b)
                        ).reduce((c,d)=>c+d)
                } */}
                {totalMoney}
                </View>
                <View className="text">￥</View>
            </View>
            <View className="order">
                {
                    totalMoney>60
                    ? <View onClick={props.handlePay} className="btn-order">Pay</View>
                    : `+ ${60-totalMoney}￥ for delivery`
                }
            </View>
        </View>
    )
}

export default Count