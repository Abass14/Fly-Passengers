import axios from "axios"
import { EDIT_PASSENGER, PASSENGER_SUCCESS } from "../../constants/actionType"
import { BASE_URL } from "../../constants/api"


export const getPassenger = (currentPage) => {
    try {
        return async dispatch => {
            const result = await fetch(BASE_URL + `passenger?page=${currentPage}&size=10`)
            const response = await result.json()
            if (response.data) {
                dispatch({
                    type: PASSENGER_SUCCESS,
                    payload: response.data
                })
                console.log("success " + response.data)
            } else {
                console.log("Unable to fetch movies")
            }
        }
    } catch (error) {
        console.log(error)
    }
}

export const editPassengerss = async (name, trips, id) => {

    try { 
        return async dispatch => {
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
            if (response) {
                dispatch({
                    type: EDIT_PASSENGER,
                    payload: {
                        _id: id,
                        name: name,
                        trips: trips
                    }
                })
            }
        }
    } catch (error) {
        console.log(error)
    }
}