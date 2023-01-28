import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts } from 'expo-font';
import { useEffect } from 'react';
import { ALL_LINKS } from './src/constant';
import { fetchUserData, init } from './src/util/database';

export default function App() {


  useEffect(() => {
    init();


  }, [])
  

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
  const SCREENS=[
    ALL_LINKS.Signup,
    ALL_LINKS.Login,
    ALL_LINKS.Home,
    ALL_LINKS.Details,
    ALL_LINKS.UserDetails,
    ALL_LINKS.News
  ];

  const isLoggedIn=true;
  return (
    <NavigationContainer >
    <Stack.Navigator screenOptions={{headerShown:false}}
    initialRouteName='Login'
    >
      {SCREENS.map((item,i)=>
      // item.loginRequire ?
      // <Stack.Screen key={i} name={item.name} component={
      //   item.component
      // }/>
      // :
      <Stack.Screen key={i} name={item.name} component={item.component}/>

      )}
    </Stack.Navigator>
  </NavigationContainer>

  );
}