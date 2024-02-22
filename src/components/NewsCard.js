import { View, Text, Image } from 'react-native'
import React from 'react'
import { RectButton } from './Button';
import * as WebBrowser from 'expo-web-browser'
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
      <Text className=''>Source : {data.source.name}</Text>
      <Text className=''>Published On : {date}</Text>
      <Text className='font-semibold'>{data.description}</Text>
      <Text className=''>{data.content}</Text>
      </View >
      <View className='flex flex-row px-2'>
      <View className='flex-1'></View>
      <RectButton handlePress={()=>WebBrowser.openBrowserAsync(data.url)} title='Details'/>

      </View>
    </View>
    </View>
  )
}

export default NewsCard