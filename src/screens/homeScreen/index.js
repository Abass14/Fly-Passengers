import React, { useContext, useEffect, useRef, useState } from 'react'
import { View, Text, FlatList, TouchableOpacity, Modal, ActivityIndicator, ToastAndroid } from 'react-native'
import Container from '../../components/container'
import Header from '../../components/heading'
import PassengerCard from '../../components/passengerCard'
import BottomSheet from "react-native-gesture-bottom-sheet";
import Bottom from '../../components/bottomSheet'
import PopUp from '../../components/popUp'
import colors from '../../../assets/colors/colors'

const HomeScreen = () => {
    const [passengers, setPassenger] = useState([])
    const [id, setId] = useState("")
    const [passengerName, setPassengerName] = useState("")
    const [passengerTrips, setPassengerTrips] = useState(null)
    const [currentPage, setCurrentPage] = useState(0)
    const [count, setCount] = useState(0)

    const bottomSheet = useRef();

    const getPassengers = async () => {
        try {
          const response = await fetch(`https://api.instantwebtools.net/v1/passenger?page=${currentPage}&size=10`);
          const json = await response.json();
            setPassenger([...passengers, ...json.data]);
        } catch (error) {
          console.error(error)
        }
      }
    
    const editPassenger = async (id, name, trips) => {
        try {
            const response = await fetch(`https://api.instantwebtools.net/v1/passenger/${id}`, {
                method: 'PATCH',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: name,
                    trips: trips
                })
            })
        }catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getPassengers()
    }, [currentPage])

    const [showPopup, setShowPopup] = useState(false)
    
    const handleEdit = (id) => {
        bottomSheet.current.show()
        setId(id)
    }

    const handleCancel = () => {
        
    }

    const handleContinue = () => {

    }

    const renderLoader = () => {
        return (
            <View style={{marginBottom: 15}}>
                <ActivityIndicator size="large" color={colors.LIGHT_RED} />
            </View>
        )
    }

    const getCount = () => {

    }

    const loadMorePassengers = (index) => {
        setCurrentPage(currentPage + 1)
    }

    const openPopup = (index) => {
        if (index === 29) {
            console.log("pop up")
        }
    }

    const handleUserEdit = () => {
        editPassenger(id, passengerName, passengerTrips)
        getPassengers()
        bottomSheet.current.close()
    }

    return (
        <Container>
            <Header>Passengers</Header>
            <View>
                <FlatList 
                    style={{width: '100%', marginBottom: 30}}
                    keyExtractor={(item, index)=>index.toString()}
                    data={passengers}
                    renderItem={passengers =>(
                        <View style={{marginBottom: 15}}>
                            <PassengerCard 
                                name={passengers.item.name}
                                trips={passengers.item.trips}
                                airline={passengers.item.airline[0].name}
                                logo={passengers.item.airline[0].logo}
                                handleEdit={() => handleEdit(passengers.item._id)}
                            />
                        </View>
                    )}
                    ListFooterComponent={renderLoader}
                    onEndReached={loadMorePassengers}
                    onEndReachedThreshold={0.5}
                />
            </View>
            <BottomSheet hasDraggableIcon ref={bottomSheet} height={300}>
                <Bottom 
                    onChangeName={(value) => setPassengerName(value)}
                    onChangeTrips={(value) => setPassengerTrips(value)}
                    valueName={passengerName}
                    valueTrips={passengerTrips}
                    onPress={handleUserEdit}
                />
            </BottomSheet>
            <View style={{width: '50%'}}>
                <Modal 
                    style={{width: '50%'}}
                    visible={showPopup}
                    transparent
                    animationType='slide'
                >
                    <PopUp 
                        onPressCancel={handleCancel}
                        onPressContinue={handleContinue}
                    />
                </Modal>
            </View>
        </Container>
    )
}

export default HomeScreen
