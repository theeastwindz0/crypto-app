import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'
import assets from '../../constants/assets'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import { ALL_LINKS } from '../constant'

const HomeHeader = ({userData}) => {
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
    <Text className='text-white text-xl font-bold'>Let's find a masterpiece</Text>

      
      <View className='bg-gray-400 p-2 py-4 rounded-md  my-2 flex flex-row space-x-2'>
        <Image
        source={assets.search} 
        className='w-5 h-5'
        />
        <TextInput
        className='text-white'
        placeholder='Search NFTs'
        />
      </View>
    </View>
  )
}

export default HomeHeader