import { View, Text, TextInput, Image, Button } from "react-native";
import React from "react";
import { Formik } from "formik";
import InputField from "../components/InputField";
import assets from "../../constants/assets";
import * as yup from "yup";
import { CustomButton, RectButton } from "../components/Button";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";
const Signup = () => {
  const loginValidationSchema = yup.object().shape({
    username: yup
      .string()
      // .username('Please enter valid email')
      .required("Username is required"),
    password: yup
      .string()
      .min(8, ({ min }) => `Password must be ${min} characters long`)
      .required("Password is required"),
    email: yup
      .string()
      .email("Please enter valid email")
      .required("Email is required"),
    name: yup.string()
    .required("Name is required"),
  });

  const navigation = useNavigation();

  return (
    <View className='flex-1 bg-slate-200'>

            <View className='h-[500px] w-[100%]'>
            <Image
            source={assets.nft02} 
            resizeMode='cover'
            className='w-[100%] h-[100%]'
            />
            </View>

            <View className='absolute bottom-0 w-[100%] my-auto h-[600px] bg-white rounded-3xl p-8 '>
            <ScrollView showsVerticalScrollIndicator={false}>
            <Text className='text-black text-2xl font-bold text-center' >Signup</Text>
            <Formik 
            validationSchema={loginValidationSchema}
            initialValues={{
                username:'',
                password:'',
                name:'',
                email:''
            }}
            onSubmit={(values)=>console.log(values)}
            >
            {({handleBlur,handleChange,handleSubmit,values,errors,touched})=>(
            <>
            <InputField label='Name' name='name' placeholder='Enter Name' onChangeText={handleChange('name')} onBlur={handleBlur('name')} value={values.name} keyboardType="email-address" error={errors.name} touched={touched.name} />
            <InputField label='Email' name='email' placeholder='Enter Email' onChangeText={handleChange('email')} onBlur={handleBlur('email')} value={values.email} keyboardType="email-address" error={errors.email} touched={touched.email} />
            <InputField label='Username' name='username' placeholder='Enter Username' onChangeText={handleChange('username')} onBlur={handleBlur('username')} value={values.username} keyboardType="email-address" error={errors.username} touched={touched.username} />
            <InputField label='Password' name='password' placeholder='Enter Password' onChangeText={handleChange('password')} onBlur={handleBlur('password')} value={values.password} keyboardType='default' error={errors.password} touched={touched.password} secureTextEntry={true} />
            {/* <Button onPress={handleSubmit} title="Submit" /> */}
            <CustomButton onPress={handleSubmit} title='Submit' className='bg-pink-400'>Signup</CustomButton>
            <View className='flex flex-row items-center '>
            <Text className='text-base'>Already have an account ?</Text> 
            <Button onPress={()=>navigation.navigate('Login')} title='Login' />
            </View>
            
            </>
            )}

            </Formik>
            </ScrollView>
             </View>

    </View>
  );
};

export default Signup;
