import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './styles'

const CustomButton = ({children, onPress, ...props}) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress} {...props}>
            <Text style={styles.text}>{children}</Text>
        </TouchableOpacity>
    )
}

export default CustomButton
