import { View, Text, SafeAreaView, FlatList, Image } from 'react-native'
import React, { useState } from 'react'
import FocusedStatusBar from '../components/FocusedStatusBar';
import { CircleButton, RectButton } from '../components/Button';
import DetailsBid from '../components/DetailsBid';
import assets from '../../constants/assets';
import SubInfo from '../components/SubInfo';
import InfoCard from '../components/InfoCard';
 const  DetailsHeader=(props)=>{
  
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
        <InfoCard title='test' icon='add' value='20' iconClass='bg-green-500' outerClass='bg-blue-500' />

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