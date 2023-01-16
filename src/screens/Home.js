import { View, Text, SafeAreaView, FlatList, Image } from 'react-native'
import React, { useEffect } from 'react'
import { useState } from 'react'
import FocusedStatusBar from '../components/FocusedStatusBar'
import { COLORS } from '../../constants/theme'
import { NFTData } from '../../constants/dummy'
import HomeHeader from '../components/HomeHeader'
import NFTCard from '../components/NFTCard'
import assets from '../../constants/assets'
import { getCoins } from '../services/userModuleService'
const Home = () => {
  const [coinData,setCoinData]=useState([]);
  useEffect(()=>{
    getCoins()
    .then((res)=>{
      setCoinData(res.data);
    })
    .catch((err)=>{
      console.log(err)
    })
  },[])


  return (
    <SafeAreaView className='flex-1'>
      <FocusedStatusBar background={COLORS.primary} barStyle='light-content' />
      <View className='flex-1'>
        <View className='z-0'>
          <FlatList 
          data={coinData}
          renderItem={({item})=><NFTCard data={item}/>}
          keyExtractor={(item)=>item.id}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={<HomeHeader/>}
          />
        </View>
      </View>
      <View className='absolute top-0 right-0 bottom-0 left-0 z-[-1]'>
        <View className='h-80 bg-primary'/>
        <View className='flex-1 bg-gray'/>
        
      </View>
    </SafeAreaView>
  )
}

export default Home