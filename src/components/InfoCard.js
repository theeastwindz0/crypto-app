import { View, Text } from 'react-native'
import React from 'react'
import {Ionicons} from '@expo/vector-icons'

const InfoCard = ({icon,title,value,outerClass,iconClass}) => {
  return (
    <View className={`flex flex-row   items-center bg-pink-400 rounded-lg p-2 my-2 ${outerClass}`}>
    <View className={`bg-orange-400 p-2 rounded-full ${iconClass}`}>
      <Ionicons name={icon} size={40} color='white' />
    </View>
      <Text className='text-lg text-white font-bold ml-2 flex-1 '>{title}</Text>
      <Text className='text-lg text-white font-bold'>{value}</Text>
  </View>
  )
}

export default InfoCard