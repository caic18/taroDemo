import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './index.scss'

export default function Index () {
  useLoad(() => {
    console.log('Page loaded.')
  })

  let a='第一个变量'
  const arr=['abc','cba','nba']
  const obj={
    name:"小毛米",
    age:18
  }
  let isTrue=true
  let isNull=false
  let isUndefined=undefined;
  function fn(){
    return '我是函数的返回值'
  }
  return (
    <>
    <View>{a}</View>
    <View>{arr}</View>
    <View>{obj.name}-{obj.age}</View>
    <View>{JSON.stringify(obj)}</View>
    <View>{new Date().getTime()}</View>
    <View>{isTrue}</View>
    <View>{isNull}</View>
    <View>{isUndefined}</View>
    <View>{1+2}</View>
    <View>{isTrue?'我是真的':'我是假的'}</View>
    <View>{fn()}</View>
    </>
  )
}
