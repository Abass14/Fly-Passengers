import React from 'react'
import { View, Text, ScrollView, SafeAreaView } from 'react-native'
import styles from './styles'

export const Container = ({children}) => {
    return (
        <SafeAreaView style={styles.wrapper}>
            <View>
                {children}
            </View>
        </SafeAreaView>
    )
}

export default Container
