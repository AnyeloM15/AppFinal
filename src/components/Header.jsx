import { Text, SafeAreaView, View, Image } from 'react-native';
import React from 'react';

const Header = () => {
  return (
    <View className="flex-row justify-between items-center w-full h-18 px-4 rounded-md">
      <View className="w-14 rounded-full">
        <Image 
          source={require("../assets/menu.jpg")} 
          className="h-16 w-16 rounded-full" 
        />
      </View>
      <Image 
        source={require("../assets/PP.jpg")} 
        className="h-14 w-14 rounded-full" 
      />
    </View>
  );
};

export default Header;
