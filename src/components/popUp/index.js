import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import CustomButton from '../button'
import Header from '../heading'
import styles from './styles'

const PopUp = ({onPressContinue}) => {
    return (
        <View style={styles.wrapper}>
            <View style={styles.headerView}>
                <Header>Yay! You've viewed over 100 passengers</Header>
            </View>
            
            <View style={styles.btnRow}>
                <View style={styles.btnView1}>
                    <CustomButton onPress={onPressContinue} style={styles.button}>Continue</CustomButton>
                </View>
            </View>
        </View>
    )
}

export default PopUp
