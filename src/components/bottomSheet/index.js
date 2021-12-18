import React from 'react'
import { View, Text } from 'react-native'
import CustomButton from '../button'
import Header from '../heading'
import Input from '../input'
import styles from './styles'

const Bottom = ({onChangeName, onChangeTrips, valueName, valueTrips, onPress}) => {
    return (
        <View style={styles.wrapper}>
            <Header>Edit Passenger</Header>
            <Input 
                placeholder="Enter Name"
                onChangeText={onChangeName}
                value={valueName}
            />
            <Input 
                placeholder="Enter Trips"
                onChangeText={onChangeTrips}
                value={valueTrips}
            />
            <CustomButton onPress={onPress}>Edit User</CustomButton>
        </View>
    )
}

export default Bottom
