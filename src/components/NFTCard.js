import { View, Text, Image } from 'react-native'
import React from 'react'
import { CircleButton, RectButton } from './Button'
import assets from '../../constants/assets'
import SubInfo from './SubInfo'
import { useNavigation } from '@react-navigation/native'

const NFTCard = ({data}) => {
  const navigation=useNavigation();
  console.log(data);
  return (
    <View  className='bg-white rounded-lg m-4'>
      <View className='w-[100%] h-[250px] '>
        <Image
         source={data.image}
         resizeMode='cover'
         className='w-[100%] h-[100%] rounded-lg '
         />
      </View>
      <View className='absolute top-2 right-2'>
      <CircleButton imgUrl={assets.heart}  />
      </View>

      <SubInfo/>

      <View className='p-2'>
      <Text className='text-base font-bold'>{data.name}</Text>
      <Text className=''>{data.creator}</Text>
      </View>

      <View className='flex flex-row justify-between p-4'>
        <View className='flex flex-row justify-center items-center'>
          <Image 
          source={assets.eth} 
          className='w-5 h-5'
          resizeMode='contain'
          />
          <Text className='font-bold'>{data.price}</Text>
        </View>
        <RectButton title='Place a bid' className='p-2' handlePress={()=>navigation.navigate('Details',{data})} />
      </View>

    </View>
  )
}

export default NFTCard