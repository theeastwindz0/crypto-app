import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

export const CircleButton = ({className}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} className={`rounded-full w-12 h-12 bg-white ${className}`}>
    </TouchableOpacity>
  )
}

export const RectButton = ({className ,handlePress,title}) => {
    return (
      <TouchableOpacity onPress={handlePress} activeOpacity={0.8} className={`px-4 py-3 bg-blue-600 rounded-full ${className}`}>
        <Text className='text-white font-bold'>{title}</Text>
      </TouchableOpacity>
    )
  }
