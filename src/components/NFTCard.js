import { View, Text, Image } from 'react-native'
import React, { useState } from 'react'
import { CircleButton, RectButton } from './Button'
import assets from '../../constants/assets'
import SubInfo from './SubInfo'
import { useNavigation } from '@react-navigation/native';
import {Ionicons} from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler'

const NFTCard = ({data}) => {
  const [isLiked,setIsLiked]=useState(data.liked);

  const navigation=useNavigation();
  return (
    <View  className='bg-white rounded-lg m-4'>
      <View className='w-[100%] h-[250px] flex items-center justify-center'>
        <Image
         source={{uri:data.image}}
         resizeMode='contain'
         className='w-[80%] h-[80%] rounded-lg '
         />
      </View>
      <View className='absolute top-2 right-2'>
      <TouchableOpacity activeOpacity={0.6} onPress={()=>setIsLiked(!isLiked)} >
      {/* <CircleButton imgUrl={assets.heart}  /> */}
      {isLiked ?
      <Ionicons name='heart-dislike-circle' size={48} color='red' />:
      <Ionicons name='heart-circle-sharp' size={48} color='red' />
      }
      </TouchableOpacity>
      </View>

      <SubInfo data={data}/>

      <View className='p-2'>
      <Text className='text-base font-bold '>{data.name}</Text>
      <Text className=''>{data.symbol}</Text>
      </View>

      <View className='flex flex-row justify-between p-4'>
        <View className='flex flex-row justify-center items-center'>
          <Image 
          source={assets.eth} 
          className='w-5 h-5'
          resizeMode='contain'
          />
          <Text className='font-bold text-lg'>$ {data.current_price}</Text>
        </View>
        <RectButton title='Details' className='p-2' handlePress={()=>navigation.navigate('Details',{data})} />
      </View>

    </View>
  )
}

export default NFTCard