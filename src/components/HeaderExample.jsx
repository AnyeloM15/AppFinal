import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'

const HeaderExample = () => {
    return (
        <TouchableOpacity className = "flex-row justify-between items-center mx-10 mt-10">
            <AntDesign name='left' size={50} />
            <AntDesign name='shoppingcart' size={50} />
        </TouchableOpacity>
    )
    }

export default HeaderExample

const styles = StyleSheet.create({})