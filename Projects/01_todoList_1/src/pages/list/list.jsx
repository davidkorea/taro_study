import Taro, {useState} from '@tarojs/taro'
import {View} from '@tarojs/components'
import TodoTabs from '../../components/TodoTabs'

export const ListContext = Taro.createContext()

function List(){
    const [dataList, setDataList] = useState([
        {content:'hello context', checked:false, delete:true},
        {content:'hi context', checked:false, delete:false},
        {content:'hey context', checked:false, delete:false},
        {content:'sup context', checked:true, delete:false},
    ])

    return (
        <View className="list">
            <ListContext.Provider value={{dataList}}>
                <TodoTabs></TodoTabs>
            </ListContext.Provider>
        </View>
    )
}

List.config = {
    navigationBarTitleText: 'Todo List',
  }

export default List