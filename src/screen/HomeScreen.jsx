import { Text, View, SafeAreaView, TextInput, FlatList } from 'react-native';
import React, { useState } from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Header from '../components/Header';
import Categories from '../components/Categories';
import ProductsCard from '../components/ProductsCard';
import data from '../data/data.json';

const categories = ['Todos', 'Unisex', 'Arabes', 'Hombre', 'Mujer'];

const HomeScreen = () => {
    const [products, setProducts] = useState(data.products);
    const [SelectedCategory, setSelectedCategory] = useState(null);

    return (
        <SafeAreaView className="bg-gray-100 flex-1">
            <Header />
            <FlatList
                data={products}
                renderItem={({ item }) => (
                    <ProductsCard item={item} />
                )}
                keyExtractor={(item) => item.id.toString()} 
                showsVerticalScrollIndicator={false}
                numColumns={2}
                ListHeaderComponent={
                    <>
                        <View className="mx-5 mt-2">
                            <Text className="text-5xl font-extralight text-gray-600">
                                Encuentra lo que deseas
                            </Text>
                        </View>
                        <View className="mt-2 mx-4">
                            <View className="flex-row items-center bg-white h-12 rounded-xl border border-gray-300 px-3">
                                <FontAwesome
                                    name="search"
                                    size={20}
                                    color="#C0C0C0"
                                    className="mr-3"
                                />
                                <TextInput
                                    className="flex-1 text-base text-gray-700 mx-5 mt"
                                    placeholder="Buscar..."
                                    placeholderTextColor="#C0C0C0"
                                />
                            </View>
                        </View>
                        <FlatList
                            className="mt-2"
                            data={categories}
                            renderItem={({ item }) => (
                                <Categories
                                    title={item}
                                    SelectedCategory={SelectedCategory}
                                    setSelectedCategory={setSelectedCategory}
                                />
                            )}
                            keyExtractor={(item) => item}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={{ paddingHorizontal: 10 }}
                        />
                    </>
                }
            />
        </SafeAreaView>
    );
};

export default HomeScreen;
