import { Text, View, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const ProductsCard = ({ item }) => {
    const [isLiked, setIsLiked] = useState(false);
    const navigation = useNavigation();

    const toggleLike = () => {
        setIsLiked(!isLiked);
    };

    return (
        <TouchableOpacity
        onPress={() => navigation.navigate('PRODUCT_DETAILS', { item })}
        className="relative flex-1 mt-4 mx-2"
        >
            <Image
                source={{ uri: item.image }}
                className="h-64 w-full rounded-xl"
            />
            <Text className="mx-2 mt-2 text-xl font-bold text-gray-700">
                {item.title}
            </Text>
            <Text className="mx-2 text-xs font-light text-gray-700">
                ${item.price}
            </Text>
            <TouchableOpacity
                className="absolute top-3 right-3 h-9 w-9 bg-white justify-center items-center rounded-full shadow"
                onPress={toggleLike}
            >
                <AntDesign
                name={isLiked ? 'heart' : 'hearto'}
                size={24}
                color="red"
                />
            </TouchableOpacity>
        </TouchableOpacity>
    );
    };

export default ProductsCard;
