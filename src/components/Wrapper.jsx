import { View, Text, ScrollView } from 'react-native'
import React from 'react'

export default function Wrapper({children}) {
    return (
    <View>
        <ScrollView>
            {children}        
        </ScrollView>
    </View>
)
}