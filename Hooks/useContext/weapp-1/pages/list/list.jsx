import Taro, {useState} from '@tarojs/taro'
import {View} from '@tarojs/components'
import TodoTabs from '../../components/TodoTabs'


export const ListContext = Taro.createContext({})

function List(){
    const [dataList, setDataList] = useState([
        {content:'hello world', checked:false, delete:true},
        {content:'hi boy', checked:false, delete:false},
        {content:'hey girl', checked:false, delete:false},
        {content:'sup', checked:true, delete:false},
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