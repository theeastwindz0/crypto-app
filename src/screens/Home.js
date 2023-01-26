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
import { fetchUserData } from '../util/database'
const Home = () => {
  const [user,setUser]=useState({
    name:'',
    username:'',
    userId:'',
  })
  const [coinData,setCoinData]=useState([]);
  useEffect(()=>{
    getCoins()
    .then((res)=>{
      setCoinData(res.data);
    })
    .catch((err)=>{
      console.log(err)
    })

    async function fetchUserData2(){
      const data2=[];
      const data=await fetchUserData();
      for (const item of data.rows._array){
        console.log(item.username)
        data2.push({name:item.name,username:item.username,userId:item.userId});
      }
      setUser({
        name:data2[0].name,
        username:data2[0].username,
        userId:data2[0].userId,
      })
      }

      fetchUserData2();
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
          ListHeaderComponent={<HomeHeader userData={user}/>}
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