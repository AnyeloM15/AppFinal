import { Text, View, TouchableOpacity } from 'react-native';
import React from 'react';

const Categories = ({ title, SelectedCategory, setSelectedCategory }) => {
    const isSelected = SelectedCategory === title;

    return (
        <TouchableOpacity
            onPress={() => setSelectedCategory(title)}
            className={`rounded-full px-4 py-2 mx-2 mt-2 ${
                isSelected ? 'bg-red-600' : 'bg-gray-400'
            }`}
        >
            <Text
                className={`text-base font-bold text-center ${
                    isSelected ? 'text-white' : 'text-gray-700'
                }`}
            >
                {title}
            </Text>
        </TouchableOpacity>
    );
};

export default Categories;
