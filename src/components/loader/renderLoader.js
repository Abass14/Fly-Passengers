import React from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import colors from '../../../assets/colors/colors'

const renderLoader = () => {
    return (
        <View style={{marginBottom: 15}}>
            <ActivityIndicator size="large" color={colors.LIGHT_RED} />
        </View>
    )
}

export default renderLoader
