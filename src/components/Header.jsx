import { Text, SafeAreaView, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const Header = ({isCard}) => {
  const navigation = useNavigation();
  
  return (
    <View className="flex-row justify-between items-center w-full h-18 px-4 rounded-md">
      <TouchableOpacity 
      onPress={()=> navigation.navigate("HOME_STACK")} className="w-14 rounded-full">
        {
        isCard ? (
          <Ionicons name="chevron-back" size={24} color="black" />
        ) : (
          <TouchableOpacity>
            <Image
              source={require("../assets/menu.jpg")}
              style={{ height: 64, width: 64, borderRadius: 32 }} 
            />
          </TouchableOpacity>
          
        )
      }
      
      </TouchableOpacity>
      {
        isCard ? (
          <Text className="text-lg font-bold">Mi Carrito</Text>
        ) : (
          <Text className="text-lg font-bold"></Text>
        )
      }
      <TouchableOpacity onPress={() => navigation.navigate('ACCOUNT')}>
        <Image 
        source={require("../assets/PP.jpg")} 
        className="h-14 w-14 rounded-full" 
      />
      </TouchableOpacity>
      
    </View>
  );
};

export default Header;
