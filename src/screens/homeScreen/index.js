import React, { useRef, useState } from 'react'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import Container from '../../components/container'
import Header from '../../components/heading'
import PassengerCard from '../../components/passengerCard'
import BottomSheet from "react-native-gesture-bottom-sheet";
import Bottom from '../../components/bottomSheet'

const HomeScreen = () => {
    const [passenger, setPassenger] = useState([
        {name: 'Abass', trips: '500', airline: 'Thai'},
        {name: 'Abass', trips: '500', airline: 'Thai'},
        {name: 'Abass', trips: '500', airline: 'Thai'},
        {name: 'Abass', trips: '500', airline: 'Thai'},
        {name: 'Abass', trips: '500', airline: 'Thai'},
    ])
    
    const handleEdit = () => {
        bottomSheet.current.show()
    }

    const bottomSheet = useRef();

    return (
        <View>
            <Header>Passengers</Header>
            <View>
                <FlatList 
                    style={{width: '100%'}}
                    keyExtractor={(item, index)=>index.toString()}
                    data={passenger}
                    renderItem={passengers =>(
                    <View style={{marginBottom: 10, flex: 1}}>
                        <PassengerCard 
                            name={passengers.item.name}
                            trips={passengers.item.name}
                            airline={passengers.item.airline}
                            handleEdit={() => bottomSheet.current.show()}
                        />
                    </View>
                    )
                    }
                />
            </View>
            <BottomSheet hasDraggableIcon ref={bottomSheet} height={300}>
                <Bottom />
            </BottomSheet>
        </View>
    )
}

export default HomeScreen
