import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, Image } from 'react-native';
import Header from '../components/Header';
import HeaderExample from '../components/HeaderExample';


const AccountScreen = () => {


  return (
    <SafeAreaView>
      
      <HeaderExample/>
      <View className="flex-row justify-center items-center">
        <Image source={require('../assets/PP.jpg')} className= " h-40 w-40 rounded-full"/>
      </View>
      <View className="flex-col justify-center items-center">
        <Text className="text-4xl font-extralight mt-8">Nombre</Text>
        <TextInput placeholder="Nombre" className="my-2 text-xl font-extralight border-b-2 border-red-500 w-48 px-4 text-left"/>
        <Text className="text-4xl font-extralight mt-8">Email</Text>
        <TextInput placeholder="Email" className="text-xl text-left font-extralight border-b-2 border-red-500 w-48 px-4"/>
        <Text className="text-4xl font-extralight mt-8">Telefono</Text>
        <TextInput placeholder="Telefono" className="text-xl text-left font-extralight border-b-2 border-red-500 w-48 px-4"/>
      </View>
    </SafeAreaView>
  );
}

export default AccountScreen;
