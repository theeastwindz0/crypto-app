import { View, Text, TextInput, Image, Button, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { Formik } from 'formik'
import InputField from '../components/InputField'
import assets from '../../constants/assets'
import * as yup from 'yup'
import { CustomButton, RectButton } from '../components/Button'
import { useNavigation } from '@react-navigation/native'
import { getLogin } from '../services/userModuleService'
import {Ionicons} from '@expo/vector-icons'
import { insertUserData } from '../util/database'
const Login = () => {

  const [error,setError]=useState('');

    const loginValidationSchema=yup.object().shape({
        username:yup
        .string()
        // .username('Please enter valid email')
        .required('Username is required'),
        password:yup
        .string()
        .min(8,({min})=>
        `Password must be ${min} characters long`)
        .required('Password is required')
    })

    const navigation=useNavigation();

    const saveUserData=async(userData)=>{
      console.log(userData)
      await insertUserData({
        userId:userData._id,
        username:userData.username,
        name:userData.name
      });
    }

    const loginHandler=async(values,resetForm)=>{
      getLogin({
      username:values.username,
      password:values.password
    })
    .then(res=>{
      const userData=res.data.user;
      saveUserData(userData);
      resetForm({
        values:'',
        errors:''
      });
      setError('');
      navigation.navigate('Home')
    })
    .catch(err=>{
      setError(err.response.data.message);
      console.log( err.response.data.message);})
}


  return (
    <View className='flex-1 bg-slate-200'>

            <View className='h-[500px] w-[100%]'>
            <Image
            source={assets.nft03} 
            resizeMode='cover'
            className='w-[100%] h-[100%]'
            />
            </View>

            <View className='absolute bottom-0 w-[100%] my-auto h-[500px] bg-white rounded-3xl p-8'>
            <ScrollView showsVerticalScrollIndicator={false}>
            <Text className='text-black text-2xl font-bold text-center' >Login</Text>
            <Formik 
            validationSchema={loginValidationSchema}
            initialValues={{username:'',password:''}}
            onSubmit={(values,{resetForm})=>{
              loginHandler(values,resetForm)
            }}
            >
            {({handleBlur,handleChange,handleSubmit,values,errors,touched})=>(
            <>
            <InputField label='Username' name='username' placeholder='Enter Username' onChangeText={handleChange('username')} onBlur={handleBlur('username')} value={values.username} keyboardType="email-address" error={errors.username} touched={touched.username} />
            <InputField label='Password' name='password' placeholder='Enter Password' onChangeText={handleChange('password')} onBlur={handleBlur('password')} value={values.password} keyboardType='default' error={errors.password} touched={touched.password} secureTextEntry={true} />
            {/* <Button onPress={handleSubmit} title="Submit" /> */}
            
            {error &&
            <View className='flex flex-row mt-4 px-2'>
              <Ionicons name='alert-circle-outline' size={28} color='red' />
            <Text className='text-lg text-red-500 font-bold'>{error}</Text>
            </View>
            }

            <CustomButton onPress={handleSubmit} title='Submit' className='bg-pink-400'>Login</CustomButton>
            <View className='flex flex-row items-center '>
            <Text className='text-base'>Don't have an account ?</Text> 
            <Button onPress={()=>navigation.navigate('Signup')} title='Sign Up' />
            </View>
            
            </>
            )}

            </Formik>
            </ScrollView>
        </View>

    </View>
  )
}

export default Login