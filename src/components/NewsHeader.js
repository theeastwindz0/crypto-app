import { View, Text, Image, TextInput, Button } from 'react-native'
import React from 'react'
import assets from '../../constants/assets'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import { ALL_LINKS } from '../constant'
import { RectButton } from './Button'

const NewsHeader = ({userData,searchHandler,searchButtonHandler,search}) => {
  const navigation=useNavigation();


  return (
    <View className='p-2'>
    <View className='flex flex-row justify-between items-center'>
      <Image
      source={assets.logo} 
      className='w-[90px] h-[25px]'
      />

      <TouchableOpacity activeOpacity={0.8} onPress={()=>navigation.navigate(ALL_LINKS.UserDetails.name)}>
      <View className=''>
        <Image 
        source={assets.person01}
        className='w-12 h-12'
        />
        <Image 
        source={assets.badge}
        className='w-4 h-4 absolute bottom-0 right-0'
        />
      </View>
      </TouchableOpacity>
    </View>
    <Text className='text-white text-lg font-bold'>Hello {userData.name} 👋</Text>
    <Text className='text-white text-xl font-bold'>Let's search news .</Text>

      
      <View className='bg-gray-400 p-2 py-0 rounded-md  my-2 flex flex-row space-x-2 items-center '>
        <Image
        source={assets.search} 
        className='w-5 h-5'
        />
        <TextInput
        className='text-white flex-1'
        placeholder='Search News'
        onChangeText={searchHandler}
        value={search}
        />
        <RectButton handlePress={searchButtonHandler} title='Search'/>
      </View>
    </View>
  )
}

export default NewsHeader