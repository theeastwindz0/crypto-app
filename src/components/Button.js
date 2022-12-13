import { View, Text, Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

export const CircleButton = ({className,imgUrl,handlePress}) => {
  return (
    <TouchableOpacity onPress={handlePress} activeOpacity={0.8} className={`rounded-full w-12 h-12 bg-white flex justify-center items-center ${className}`}>
      <Image
      source={imgUrl}
      className='w-8 h-8'
      />
    </TouchableOpacity>
  )
}

export const RectButton = ({className ,handlePress,title}) => {
    return (
      <TouchableOpacity onPress={handlePress} activeOpacity={0.8} className={`px-4 py-3 bg-blue-600 rounded-full flex justify-center items-center z-10 ${className} `}>
        <Text className='text-white font-bold'>{title}</Text>
      </TouchableOpacity>
    )
  }
