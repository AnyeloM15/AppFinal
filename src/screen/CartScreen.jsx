import { TouchableOpacity, Text, View, SafeAreaView, FlatList } from 'react-native';
import React from 'react';
import Header from '../components/Header';
import CartCard from '../components/CartCard';
import { CartContext } from '../context/CartContext';

const CartScreen = () => {
  

  return (
    <SafeAreaView className="flex-1 bg-white">
      <Header isCard={true} />
      <FlatList

      
        renderItem={({ item }) => (
          <CartCard
          
          />
        )}
        ListFooterComponent={
          <>
            <View className="flex-row justify-between p-4">
              <Text className="text-3xl font-bold">Total:</Text>
              <Text className="text-2xl font-extralight"></Text>
            </View>
            <View className="flex-row justify-between p-4">
              <Text className="text-2xl">Envío:</Text>
              <Text className="text-2xl font-extralight"></Text>
            </View>
            <View className="flex-row justify-between p-4 border-t border-black mx-3">
              <Text className="text-4xl font-semibold">Total Final:</Text>
              <Text className="text-4xl font-extralight"></Text>
            </View>
            <TouchableOpacity
              className="bg-red-500 py-4 mt-5 mx-4 rounded-lg items-center mb-10"
              onPress={() => alert("Proceder al pago")}
            >
              <Text className="text-white text-lg font-semibold">Pagar carrito</Text>
            </TouchableOpacity>
          </>
        }
      />
    </SafeAreaView>
  );
};

export default CartScreen;
