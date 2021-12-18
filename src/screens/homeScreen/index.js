import React, { useEffect, useMemo, useRef, useState } from 'react'
import { View, FlatList, Modal, ToastAndroid, Alert} from 'react-native'
import Container from '../../components/container'
import Header from '../../components/heading'
import PassengerCard from '../../components/passengerCard'
import BottomSheet from "react-native-gesture-bottom-sheet";
import Bottom from '../../components/bottomSheet'
import PopUp from '../../components/popUp'
import { useSelector, useDispatch } from 'react-redux';
import { editPassengerss, getPassenger } from '../../context/action/action'
import renderLoader from '../../components/loader/renderLoader'

const HomeScreen = () => {
    const [id, setId] = useState("")
    const [passengerName, setPassengerName] = useState("")
    const [passengerTrips, setPassengerTrips] = useState("")
    const [currentPage, setCurrentPage] = useState(0)
    const [showPopup, setShowPopup] = useState(false)
    const {data} = useSelector(state => state.getPasssengerReducer)
    const dispatch = useDispatch()

    const pName = useRef("")

    const bottomSheet = useRef();
    
    //method to show edit form and set unique Id
    const handleEdit = (id) => {
        bottomSheet.current.show()
        setId(id)
    }

    //method to close popUp
    const handleContinue = () => {
        setShowPopup(false)
    }

    //method to render more items (pagination)
    const loadMorePassengers = () => {
        setCurrentPage(currentPage + 1)
    }

    //method to open popup if 100 items has been rendered
    const openPopup = () => {
        if (currentPage === 10) {
            setShowPopup(true)
        }
    }

    //method to edit passenger
    const handleUserEdit = async () => {
        if (passengerName.length === 0 || passengerTrips.length === 0) {
            Alert.alert("Warning", "Fields can't be empty", ["OK"])
        }
        if (!(passengerName.length === 0 || passengerTrips.length === 0)) {
            dispatch(await editPassengerss(passengerName, passengerTrips, id))
            dispatch(getPassenger(currentPage))
            bottomSheet.current.close()
        }
    }

    //flatlist render item
    const renderItem = ({item}) => (
        <View style={{marginBottom: 10, flex: 1}}>
            <PassengerCard 
                name={item.name}
                trips={item.trips}
                airline={item.airline[0].name}
                logo={item.airline[0].logo}
                handleEdit={() => handleEdit(item._id)}
            />
        </View>
    )

    //memorized flatlist rendered item for better performance
    const memorizedList = useMemo(() => renderItem, [data])

    //use efffect for side effect functions
    useEffect(() => {
        pName.current = passengerName
        openPopup()
        dispatch(getPassenger(currentPage))
    }, [passengerName, currentPage])

    return (
        <Container>
            <Header style={{fontSize: 25}}>Passengers</Header>
            <View>
                <FlatList 
                    style={{width: '100%', marginBottom: 100}}
                    keyExtractor={(item, index)=>index.toString()}
                    data={data}
                    renderItem={memorizedList}
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
                        onPressContinue={handleContinue}
                    />
                </Modal>
            </View>
        </Container>
    )
}

export default HomeScreen
