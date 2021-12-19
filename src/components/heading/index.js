import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Header = ({children, style}) => {
    
    return (
        <View style={[styles.view, style]}>
            <Text style={[styles.header, style]}>{children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
    },
    view: {
        marginVertical: 10
    }
})
export default Header