import React from 'react'
import { View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native'
import Header from '../heading'
import Paragraph from '../paragraph'
import styles from './styles'

export const PassengerCard = ({name, trips, airline, handleEdit, logo}) => {
    return (
        <View style={styles.wrapper}>
            <ImageBackground source={{uri: logo}} resizeMode='contain' style={styles.flightImage}>
            </ImageBackground>
            <View style={styles.details}>
                <View>
                    <View style={styles.nameView}>
                        <Paragraph style={styles.paragraph}>Name:</Paragraph>
                        <Paragraph>{name}</Paragraph>
                    </View>
                    <View style={styles.nameView}>
                        <Paragraph style={styles.paragraph}>Trips:</Paragraph>
                        <Paragraph>{trips}</Paragraph>
                    </View>
                    <View style={styles.nameViews}>
                        <View style={{flexDirection: 'row'}}>
                            <Paragraph style={styles.paragraph}>Airline:</Paragraph>
                            <Paragraph>{airline}</Paragraph>
                        </View>
                        <TouchableOpacity onPress={handleEdit} style={styles.editBtn}>
                            <Paragraph style={styles.editBtnText}>EDIT</Paragraph>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default PassengerCard
