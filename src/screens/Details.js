import { View, Text, SafeAreaView, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import FocusedStatusBar from '../components/FocusedStatusBar';
import { CircleButton, RectButton } from '../components/Button';
import DetailsBid from '../components/DetailsBid';
import assets from '../../constants/assets';
import SubInfo from '../components/SubInfo';
import InfoCard from '../components/InfoCard';
import { fetchUserData } from '../util/database';
 const  DetailsHeader=(props)=>{

  useEffect(() => {

  }, [])
  
  
  return(
    <View>
    <View className='w-[100%] h-[400px]'>
      <View className='flex justify-center items-center'>
      <Image
      source={{uri:props.data.image}}
      resizeMode='contain'
      className='w-[90%] h-[90%]'
      />
      </View>
      <View className='absolute top-10 w-[100%]'> 
      <View className='flex flex-row justify-between px-2'>
      <CircleButton
      imgUrl={assets.left}
      className='mt-10'
      handlePress={()=>props.navigation.goBack()}
      />

      <CircleButton
      imgUrl={assets.heart}
      className='mt-10'
      />
      </View>
      </View>
    </View>

    <SubInfo data={props.data} />

    <View className='p-2'>
      <Text className='text-xl font-bold'>{props.data.name}</Text>
      
      <View className='flex flex-row justify-between '>
        <View className='bg-purple-500 px-2 py-1 rounded-sm'>
      <Text className='text-base font-bold uppercase text-white '>{props.data.symbol}</Text>
      </View>
      
      <View className='flex flex-row justify-center items-center'>
          <Image 
          source={assets.eth} 
          className='w-5 h-5'
          resizeMode='contain'
          />
          <Text className='font-bold text-lg'>$ {props.data.current_price}</Text>
        </View>
      </View>
      
      <View className='space-y-2 my-4'>
        <InfoCard title='24H Low' icon='trending-down-outline' value={props.data.low_24h} iconClass='bg-green-500' outerClass='bg-blue-500' />
        <InfoCard title='24H High' icon='trending-up-outline' value={props.data.high_24h} iconClass='bg-green-500' outerClass='bg-pink-500' />
        <InfoCard title='Market Cap' icon='podium-outline' value={props.data.market_cap} iconClass='bg-green-500' outerClass='bg-yellow-500' />
        <InfoCard title='Total Volume' icon='analytics-outline' value={props.data.total_volume} iconClass='bg-green-500' outerClass='bg-orange-500' />
        <InfoCard title='24H Change' icon='pulse-outline' value={props.data.price_change_24h} iconClass='bg-green-500' outerClass='bg-slate-500' />
        <InfoCard title='24H % Change' icon='pulse-outline' value={props.data.price_change_percentage_24h} iconClass='bg-green-500' outerClass='bg-purple-500' />
        <InfoCard title='Circulating Supply' icon='layers-outline' value={props.data.circulating_supply} iconClass='bg-green-500' outerClass='bg-black' />
        <InfoCard title='Total Supply' icon='pie-chart-outline' value={props.data.total_supply} iconClass='bg-green-500' outerClass='bg-teal-500' />
        <InfoCard title='Max Supply' icon='pie-chart-outline' value={props.data.max_supply} iconClass='bg-green-500' outerClass='bg-lime-500' />
        <InfoCard title='24H M Cap Change' icon='pulse-outline' value={props.data.market_cap_change_24h} iconClass='bg-green-500' outerClass='bg-red-500' />
        <InfoCard title='24H M Cap % Change' icon='pulse-outline' value={props.data.market_cap_change_percentage_24h} iconClass='bg-green-500' outerClass='bg-indigo-500' />

      </View>

      {/* <Text className='text-base font-bold mt-4 '>Description</Text>
      <Text>
        {text}
        <Text className='font-semibold' onPress={()=>{
          !readMore ? setText(props.data.description) : setText(props.data.description.slice(0,100));
          setReadMore(!readMore)
        }}>{!readMore ? '...Read More' : ' Show Less'}</Text>
      </Text> */}
    </View>

    </View>
  )
}
const Details = ({route,navigation}) => {
  const {data}=route.params;
  return (
    <View className='flex-1'>
      <FocusedStatusBar barStyle='dark-content' />
      {/* <View className='absolute bottom-5 w-[100%] z-10  '>
      <View className='mx-20'>
      <RectButton title='Place a bid' className='bg-pink-500' />
      </View>
      </View> */}

      <FlatList
      data={data.bids}
      renderItem={({item})=><DetailsBid bid={item} />}
      keyExtractor={(item)=>item.id}
      showsVerticalScrollIndicator={false}
      // contentContainerStyle={{paddingBottom:'20px'}}
      ListHeaderComponent={()=>
      <React.Fragment>
        <DetailsHeader data={data} navigation={navigation} />
      </React.Fragment>}
      />
    </View>
  )
}

export default Details