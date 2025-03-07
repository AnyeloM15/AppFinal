import React from 'react';
import { SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';

 

const AccountScreen = ({navigation}) => {
  return (
    <SafeAreaView className="flex-1 bg-gray-100 justify-center items-center">
      <View className="bg-white p-8 rounded-lg shadow-md w-4/5">
        <Text className="text-2xl font-bold mb-6 text-center text-gray-800">Login</Text>

        <TextInput
          className="w-full h-12 border border-gray-300 rounded-md px-4 mb-4"
          placeholder="Email"
          keyboardType="email-address"
        />

        <TextInput
          className="w-full h-12 border border-gray-300 rounded-md px-4 mb-6"
          placeholder="Password"
          secureTextEntry
        />

        <TouchableOpacity
          className="w-full bg-blue-500 py-3 rounded-md items-center"
          onPress={() => navigation.navigate('HOME_STACK')}
        >
          <Text className="text-white font-semibold">Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default AccountScreen;