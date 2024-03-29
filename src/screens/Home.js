import { View, Text, SafeAreaView, FlatList, Image } from 'react-native'
import React, { useEffect } from 'react'
import { useState } from 'react'
import FocusedStatusBar from '../components/FocusedStatusBar'
import { COLORS } from '../../constants/theme'
import { NFTData } from '../../constants/dummy'
import HomeHeader from '../components/HomeHeader'
import NFTCard from '../components/NFTCard'
import assets from '../../constants/assets'
import { getCoins, getLiked } from '../services/userModuleService'
import { fetchUserData } from '../util/database'
const Home = () => {
  const [user,setUser]=useState({
    name:'',
    username:'',
    userId:'',
  })
  const [coinData,setCoinData]=useState([]);
  const [liked,setLiked]=useState([]);
  const [allCoinData,setAllCoinData]=useState([]);
  useEffect(()=>{
    getLiked()
    .then((res)=>{
      setLiked(res.data);
      console.log(res.data);
    })
    .catch((err)=>{
      console.log(err);
    })

    getCoins()
    .then((res)=>{
      let data=[];
      res.data.map((item)=>{
          data.push({...item,liked:false})
      })
      setCoinData(data);
      setAllCoinData(data);
    })
    .catch((err)=>{
      console.log(err)
    })

    async function fetchUserData2(){
      const data2=[];
      const data=await fetchUserData();
      for (const item of data.rows._array){
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

  const searchHandler=(text)=>{
    let data=[];
    if(text===''){
      data=allCoinData;
    }
    else{
    data=allCoinData.filter((item)=>
      item.name.toLowerCase().includes(text.toLowerCase()) ||
      item.symbol.toLowerCase().includes(text.toLowerCase()) 
    );
    }
    setCoinData(data);
  }

  return (
    <SafeAreaView className='flex-1'>
      <FocusedStatusBar background={COLORS.primary} barStyle='light-content' />
      <HomeHeader searchHandler={searchHandler} userData={user}/>
      <View className='flex-1'>
        <View className='z-0'>
          {coinData.length===0 ?
          <Text className='text-white text-lg font-semibold text-center uppercase mt-4'>No Crypto Found !</Text>:
          <FlatList 
          data={coinData}
          renderItem={({item})=><NFTCard data={item}/>}
          keyExtractor={(item)=>item.id}
          showsVerticalScrollIndicator={false}
          // ListHeaderComponent={}
          />
        }
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