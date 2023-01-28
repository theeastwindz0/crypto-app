import { View, Text, SafeAreaView, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import FocusedStatusBar from '../components/FocusedStatusBar';
import { CircleButton, RectButton } from '../components/Button';
import DetailsBid from '../components/DetailsBid';
import assets from '../../constants/assets';
import SubInfo from '../components/SubInfo';
import InfoCard from '../components/InfoCard';
import { fetchUserData } from '../util/database';

const Details = ({route,navigation}) => {
  const {data}=route.params;
  return (
    <View className='flex-1'>
      <FocusedStatusBar barStyle='dark-content' />

    </View>
  )
}

export default Details