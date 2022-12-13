import { View, Text, Image } from 'react-native'
import React from 'react'
import assets from '../../constants/assets'

const DetailsBid = ({bid}) => {
  return (
    <View className='p-2 flex flex-row justify-between'>
      <Image
      source={bid.image}
      resizeMode='contain'
      className='w-12 h-12'
      />

      <View>
        <Text className='font-semibold'>Bid Placed by {bid.name}</Text>
        <Text>{bid.date}</Text>
      </View>

      <View className='flex flex-row justify-center items-center'>
          <Image 
          source={assets.eth} 
          className='w-5 h-5'
          resizeMode='contain'
          />
          <Text className='font-bold'>{bid.price}</Text>
        </View>
    </View>
  )
}

export default DetailsBid