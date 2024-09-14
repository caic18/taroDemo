import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './index.scss'

export default function Com () {
  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className='com'>
      <Text>Hello world!</Text>
    </View>
  )
}
                              