import { View, Text, SafeAreaView, FlatList } from 'react-native'
import React from 'react'
import { useState } from 'react'
import FocusedStatusBar from './components/FocusedStatusBar'
import { COLORS } from '../constants/theme'
import { NFTData } from '../constants/dummy'
import HomeHeader from './components/HomeHeader'
import NFTCard from './components/NFTCard'
const Home = () => {

  return (
    <SafeAreaView className='flex-1'>
      <FocusedStatusBar background={COLORS.primary} />
      <View className='flex-1'>
        <View className='z-0'>
          <FlatList 
          data={NFTData}
          renderItem={({item})=><NFTCard data={item}/>}
          keyExtractor={(item)=>item.id}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={<HomeHeader/>}
          />
        </View>
      </View>
      <View className='absolute top-0 right-0 bottom-0 left-0 z-[-1]'>
        <View className='h-80 bg-pink-400'/>
        <View className='flex-1 bg-gray'/>
        
      </View>
    </SafeAreaView>
  )
}

export default Home