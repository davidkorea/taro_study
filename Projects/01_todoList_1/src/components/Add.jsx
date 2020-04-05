import Taro, { useState } from '@tarojs/taro'
import { View, Text, Form, Input } from '@tarojs/components'
import { AtToast,AtIcon,AtFab, AtFloatLayout,AtInput,AtButton,AtTextarea } from 'taro-ui'
import './Add.css'


function Add(props){

    // const [isOpened, setIsOpened] = useState(false)
    // const handleClose = ()=>{
    //     setIsOpened(false)
    // }
    // const handleFab = ()=>{
    //     setIsOpened(true)
    // }


    return (
        <View className="add">
            <AtFloatLayout isOpened={props.isOpened} title="Add an Item" onClose={props.handleClose}>
                {/* <Form onSubmit={props.handleOnSubmit}> */}
                {/* <View className="input">
                    <Input
                        value={props.inputValue}
                        onInput={props.handleOnInput}
                        // confirmType='done'
                        placeholder='plan your today here.'
                    ></Input>
                </View> */}
                <AtInput
                    // name='value'
                    // type='text'
                    placeholder='plan your today here.'
                    value={props.inputValue}
                    onChange={props.handleChange}
                ></AtInput>

                <AtToast isOpened={props.isToastOpened} text="Please input your plan"></AtToast>

                <View className="add-btn">
                {/* <AtButton formType="submit" type="primary" size="normal">Add</AtButton> */}
                <AtButton onClick={props.handleOnSubmit} type="primary" size="normal">Add</AtButton>
                </View>
                {/* </Form> */}

            </AtFloatLayout>

            <View className='post-btn'>
                <AtFab onClick={props.handleFab} size="normal" >
                    <AtIcon value='edit' size='20' color='#fff'></AtIcon>
                    {/* <Text className='at-fab__icon at-icon at-icon-menu'></Text> */}
                </AtFab>
            </View>
        </View>
    )
}

export default Add