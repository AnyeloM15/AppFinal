import React, { useContext } from 'react';
import { TouchableOpacity, Text, View, SafeAreaView, FlatList } from 'react-native';
import Header from '../components/Header';
import { CartContext } from '../context/CartContext'; // Importa correctamente

const CartScreen = () => {
    const { carts } = useContext(CartContext); // Verifica que el contexto se use correctamente

    if (!carts) return <Text>Cargando carrito...</Text>; // Previene errores si carts es undefined

    return (
        <SafeAreaView className="flex-1 bg-white">
            <Header isCard={true} />
            {carts.length === 0 ? (
                <View className="flex-1 justify-center items-center">
                    <Text className="text-2xl text-gray-600">Tu carrito está vacío</Text>
                </View>
            ) : (
                <FlatList
                    data={carts}
                    keyExtractor={(item) => `${item.id}-${item.selectedSize}`}
                    renderItem={({ item }) => (
                        <View className="flex-row justify-between p-4 border-b border-gray-300">
                            <Text className="text-lg font-semibold">{item.title} ({item.selectedSize})</Text>
                            <Text className="text-lg font-light">x{item.quantity}</Text>
                            <Text className="text-lg font-light">${item.price * item.quantity}</Text>
                        </View>
                    )}
                    ListFooterComponent={
                        <>
                            <View className="flex-row justify-between p-4">
                                <Text className="text-3xl font-bold">Total:</Text>
                                <Text className="text-2xl font-extralight">
                                    ${carts.reduce((total, item) => total + item.price * item.quantity, 0)}
                                </Text>
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
            )}
        </SafeAreaView>
    );
};

export default CartScreen;
