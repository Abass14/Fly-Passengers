import { EDIT_PASSENGER, PASSENGER_SUCCESS } from "../../constants/actionType";
import { GET_PASSENGERS } from "../../constants/api";
import { passengerData } from "../initialStates/initialState";

const getPasssengerReducer = (state = passengerData, action) => {
    switch(action.type){
        case PASSENGER_SUCCESS:
            return {
                ...state, 
                data: [...state.data, ...action.payload]
            }
        case EDIT_PASSENGER:{
            const prevPasengerIndex = state.data.findIndex((passenger) => passenger._id === action.payload._id)
            let updatedSate = [...state.data]
            if (prevPasengerIndex > -1) {
                updatedSate[prevPasengerIndex] = action.payload
            }
            return {
                ...state,
                data: updatedSate
            }
        } 
        default:
            return state
    }
}

export default getPasssengerReducer