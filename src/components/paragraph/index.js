import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Paragraph = ({children, style}) => {

    return (
        <View style={styles.view}>
            <Text style={[styles.paragraph, style]}>{children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    paragraph: {
        fontSize: 14,
        color: 'black',
    },
    view:{
        marginVertical: 3
    }
})

export default Paragraph
