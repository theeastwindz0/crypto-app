import { View, Text, Image } from 'react-native'
import React from 'react'

const NewsCard = ({data}) => {
  const date=new Date(data.publishedAt).toLocaleDateString();
  return (
    <View className='m-4 rounded-lg'>
    <View className='w-[100%]  bg-white rounded-lg'>
        <Image source={{uri:data.image}}
        className='w-[100%] h-[200px] rounded-lg'
        resizeMode='cover'
        />
      <View className='p-2 space-y-2'>
      <Text className='text-base '>{data.title}</Text>
      <Text className='font-semibold'>Source : {data.source.name}</Text>
      <Text className='font-semibold'>Published On : {date}</Text>
      <Text className=''>{data.description}</Text>
      <Text className=''>{data.content}</Text>
      </View>
    </View>
    </View>
  )
}

export default NewsCard