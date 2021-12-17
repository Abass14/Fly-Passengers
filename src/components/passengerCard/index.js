import React from 'react'
import { View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native'
import Header from '../heading'
import Paragraph from '../paragraph'
import styles from './styles'

export const PassengerCard = ({name, trips, airline, handleEdit}) => {
    return (
        <View style={styles.wrapper}>
            <ImageBackground source={{uri: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/58/Thai_Airways_Logo.svg/200px-Thai_Airways_Logo.svg.png'}} resizeMode='contain' style={styles.flightImage}>
                {/* <Image style={styles.imageView} source={require('../../../../assets/favicon.png')} /> */}
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
