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
        case EDIT_PASSENGER:
            return {
                ...state
            }
        default:
            return state
    }
}

export default getPasssengerReducer