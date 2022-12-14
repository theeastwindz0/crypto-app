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
      <TouchableOpacity onPress={handlePress} activeOpacity={0.8} className={`px-4 py-3 bg-blue-600 rounded-full flex justify-center items-center  ${className} `}>
        <Text className='text-white font-bold'>{title}</Text>
      </TouchableOpacity>
    )
  }

export const CustomButton = ({className,children,onPress,title}) => {
    return (
      <TouchableOpacity title={title} onPress={onPress} activeOpacity={0.8} className={`w-[100%] bg-secondary my-4 p-3 rounded-md ${className}`}>
        <Text className='text-center text-base font-bold text-white '>{children}</Text>
      </TouchableOpacity>
    )
  }
  
