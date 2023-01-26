import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { RectButton } from '../components/Button'
import { clearUserData } from '../util/database'
import { ALL_LINKS } from '../constant'

const UserDetails = ({route,navigation}) => {
  const logoutHandler=async()=>{
    await clearUserData();
    navigation.navigate(ALL_LINKS.Login.name);
  }
  return (
    <SafeAreaView>
      <View className='p-4'>
      <RectButton handlePress={()=>{
        logoutHandler()
      }} title='Logout' />
      </View>
    </SafeAreaView>
  )
}

export default UserDetails