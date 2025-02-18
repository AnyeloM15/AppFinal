import { View, Text, Image , TouchableOpacity} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';

const image = "https://www.elpalaciodehierro.com/on/demandware.static/-/Sites-palacio-master-catalog/default/dwab71724c/images/30439629/large/30439629_x1.jpg";

const CartCard = () => {
    return (
        <View className="flex-row items-center mx-1 p-1">
        <Image 
            source={{ uri: image }} 
            className="w-40 h-44 m-2 rounded-md"
        />
        <View className="flex-1">
            <Text className="text-lg font-bold">Perfume 1</Text>
            <Text className="text-md font-semibold">$150</Text>
            <View className="flex-row justify-between ">
            <Text className="text-xs font-extralight">Tamaño: </Text>
            </View>
        </View>
        <TouchableOpacity>
            <Feather name="trash" color={"red"} size={'24'} className="" />
        </TouchableOpacity>
        </View>
    );
    }

export default CartCard;
