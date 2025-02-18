import { Text, View, Image, TouchableOpacity } from 'react-native';
import React, { useContext, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRoute } from '@react-navigation/native';
import Header from '../components/Header';

const sizeOptions = ['50ml', '100ml', '200ml'];

const ProductDetails = () => {    
    const route = useRoute();
    const item = route.params.item; 
    const [selectedSize, setSelectedSize] = useState(null);

    return (
        <SafeAreaView className="flex-1 bg-white">
        {/* Header */}
        <View>
            <Header />
        </View>
        {/* Imagen del producto */}
        <Image
            source={{ uri: item.image }}
            className="w-full h-1/2 rounded-lg"
            resizeMode="cover"
        />
        {/* Detalles del producto */}
        <View className="flex-row justify-between px-4 items-center mt-4">
            <Text className="text-2xl font-semibold text-gray-800">{item.title}</Text>
            <Text className="text-2xl font-light text-gray-800">${item.price}</Text>
        </View>
        {/* Stock */}
        <Text className="px-4 text-lg font-light text-gray-600">Stock: {item.stock}</Text>
        {/* Tamaño del producto */}
        <View className="px-4 mt-4">
            <Text className="text-lg font-medium text-gray-800">Selecciona el tamaño:</Text>
            <View className="flex-row mt-2">
            {sizeOptions.map((size) => (
                <TouchableOpacity
                key={size}
                onPress={() => setSelectedSize(size)}
                className={`px-4 py-2 rounded-lg mr-2 ${
                    selectedSize === size ? 'bg-red-500' : 'bg-gray-200'
                }`}
                >
                <Text
                    className={`text-base ${
                    selectedSize === size ? 'text-white' : 'text-gray-800'
                    }`}
                >
                    {size}
                </Text>
                </TouchableOpacity>
            ))}
            </View>
        </View>
        {/* Botón de compra */}
        <TouchableOpacity onPress={()=>{
            
        }} className="bg-red-500 py-4 mt-10 mx-4 rounded-lg items-center">
            <Text className="text-white text-lg font-semibold">Agregar al carrito</Text>
        </TouchableOpacity>
        </SafeAreaView>
    );
};

export default ProductDetails;
