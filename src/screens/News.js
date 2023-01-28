import { View, Text, SafeAreaView, FlatList, Image } from 'react-native'
import React, { useEffect } from 'react'
import { useState } from 'react'
import FocusedStatusBar from '../components/FocusedStatusBar'
import { COLORS } from '../../constants/theme'
import { NFTData } from '../../constants/dummy'
import HomeHeader from '../components/HomeHeader'
import NFTCard from '../components/NFTCard'
import assets from '../../constants/assets'
import { fetchNews, getCoins, getLiked } from '../services/userModuleService'
import { fetchUserData } from '../util/database'
import NewsHeader from '../components/NewsHeader'
import NewsCard from '../components/NewsCard'
const News = () => {
  const [user,setUser]=useState({
    name:'',
    username:'',
    userId:'',
  })
  const [newsData,setNewsData]=useState([]);
  const [search,setSearch]=useState('btc');
  useEffect(()=>{

    fetchNews(search)
    .then((res)=>{
      setNewsData(res.data.articles)
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
    setSearch(text);
  }

  const searchButtonHandler=()=>{
    fetchNews(search)
    .then(res=>{
      setNewsData(res.data.articles);
      setSearch('');
    })
    .catch(err=>console.log(err))
  }

  return (
    <SafeAreaView className='flex-1'>
      <FocusedStatusBar background={COLORS.primary} barStyle='light-content' />
      <NewsHeader search={search} searchButtonHandler={searchButtonHandler} searchHandler={searchHandler} userData={user}/>
      <View className='flex-1'>
        <View className='z-0'>
          {newsData.length===0 ?
          <Text className='text-white text-lg font-semibold text-center uppercase mt-4'>Loading News !</Text>:
          <FlatList 
          data={newsData}
          renderItem={({item})=><NewsCard data={item}/>}
          keyExtractor={(item)=>item.publishedAt}
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

export default News