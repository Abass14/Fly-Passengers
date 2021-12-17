import React, { useState } from 'react'
import { View, Text, TextInput } from 'react-native'
import styles from './styles'

export const Input = ({value, onChangeText, placeholder}) => {
    return (
        <View>
            <TextInput value={value} onChangeText={onChangeText}  style={styles.input} placeholder={placeholder} />
        </View>
    )
}

export default Input
