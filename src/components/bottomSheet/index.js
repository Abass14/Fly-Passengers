import React from 'react'
import { View, Text } from 'react-native'
import CustomButton from '../button'
import Header from '../heading'
import Input from '../input'
import styles from './styles'

const Bottom = ({onChangeText, value}) => {
    return (
        <View style={styles.wrapper}>
            <Header>Edit Passenger</Header>
            <Input 
                placeholder="Enter Name"
                onChangeText={onChangeText}
                value={value}
            />
            <Input 
                placeholder="Enter Trips"
                onChangeText={onChangeText}
                value={value}
            />
            <CustomButton>Edit User</CustomButton>
        </View>
    )
}

export default Bottom
