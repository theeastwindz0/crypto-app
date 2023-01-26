import { View, Text } from "react-native";
import React from "react";
import { TextInput } from "react-native-gesture-handler";

const InputField = ({
    label,
    name,
    placeholder,
    onChangeText,
    onBlur,
    value,
    keyboardType,
    error,
    touched,
    secureTextEntry
}) => {
  return (
    <View className="">
      <Text className="p-2 pl-0 text-black text-base font-bold">{label}</Text>
      <TextInput
      autoCapitalize="none"
        className="bg-gray-200 text-black p-4 rounded-md"
        name={name}
        placeholder={placeholder}
        onChangeText={onChangeText}
        onBlur={onBlur}
        value={value}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
      ></TextInput>
       {touched && error && <Text className='text-red-600 py-2 font-bold text-sm uppercase'>{error}</Text>}
    </View>
  );
};

export default InputField;
