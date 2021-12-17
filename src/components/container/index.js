import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import styles from './styles'

export const Container = ({children}) => {
    return (
        <ScrollView contentContainerStyle={styles.wrapper}>
            <View>
                {children}
            </View>
        </ScrollView>
    )
}

export default Container
