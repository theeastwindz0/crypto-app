import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Details from './src/Details';
import Home from './src/Home';

export default function App() {

  const [loaded]=useFonts({
    InterBold:require('./assets/fonts/Inter-Bold.ttf'),
    InterSemiBold:require('./assets/fonts/Inter-SemiBold.ttf'),
    InterMedium:require('./assets/fonts/Inter-Medium.ttf'),
    InterRegular:require('./assets/fonts/Inter-Regular.ttf'),
    InterLight:require('./assets/fonts/Inter-Light.ttf'),
  })

  const theme={
    ...DefaultTheme,
    colors:{
    ...DefaultTheme.colors,
    background:'transparent'
  }
  }
  const Stack=createStackNavigator();

  if(!loaded)return null;
  return (
    <NavigationContainer >
    <Stack.Navigator screenOptions={{headerShown:false}}
    initialRouteName='Home'
    >
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='Details' component={Details} />
    </Stack.Navigator>
  </NavigationContainer>

  );
}