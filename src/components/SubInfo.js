import { View, Text, Image } from 'react-native'
import React from 'react'
import assets from '../../constants/assets'



const SubInfo = () => {
  return (
    <View className='mt-[-32px] bottom-0 left-0 right-0'>
    <View className='w-[100%] flex flex-row justify-between   p-2'>

    <View className='flex flex-row'>
        {[assets.person02,assets.person03,assets.person04].map((imgUrl,index)=>
        <Image
        source={imgUrl}
        resizeMode='contain'
        className={`w-12 h-12 rounded-full bg-white ${index===0 ? 'ml-0' : 'ml-[-12px]'}`}
        />
        )}
    </View>
    <View className='bg-white shadow-md rounded-md p-2 px-4 flex justify-center items-center'>
        <Text>Ending in</Text>
        <Text className='font-bold text-base'>12H 30M</Text>
    </View>

    </View>
    </View>
  )
}

export default SubInfo