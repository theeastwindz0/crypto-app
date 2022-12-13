import { View, Text,StatusBar } from 'react-native'
import { useIsFocused } from '@react-navigation/native'
import React from 'react'

const FocusedStatusBar = (props) => {
  const isFocused=useIsFocused();


  return <StatusBar barStyle='light-content' animated={true} backgroundColor='white' {...props}/>
}

export default FocusedStatusBar