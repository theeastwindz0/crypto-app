import { View, Text, Image, Alert } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { CircleButton, RectButton } from '../components/Button'
import { clearUserData } from '../util/database'
import { ALL_LINKS } from '../constant'
import assets from '../../constants/assets'

const UserDetails = ({route,navigation}) => {
  const logoutHandler=async()=>{
    await clearUserData();
    navigation.navigate(ALL_LINKS.Login.name);
    Alert.alert('Logged Out','Logged Out Successfully !','Okay')
  }
  return (
    <SafeAreaView className='flex-1 bg-secondary'>
      <View className='p-4 '>

      <CircleButton
      imgUrl={assets.left}
      className='mt-10'
      handlePress={()=>navigation.goBack()}
      />
      <View className='flex items-center my-4'>
        <Image 
        source={assets.person01}
        className='w-28 h-28'
        />
      </View>

      <View className=''>
      <RectButton  handlePress={()=>{navigation.navigate('Home')}} title='Home' />
      <RectButton  handlePress={()=>{navigation.navigate('News')}} title='News' />
      <RectButton  handlePress={()=>{logoutHandler()}} title='Logout' />
      </View>

      </View>

      {/* <View className='absolute top-0 right-0 bottom-0 left-0 z-[-1]'>
        <View className=' bg-primary'/>
        <View className='flex-1 bg-gray'/>
      </View> */}
    </SafeAreaView>
  )
}

export default UserDetails