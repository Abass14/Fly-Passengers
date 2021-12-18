import { PASSENGER_FAILURE, PASSENGER_LOADING, PASSENGER_SUCCESS } from "../../constants/actionType"

const reducer = (state, {type, payload}) => {
    switch (type) {
        case PASSENGER_SUCCESS:
            return {
                ...state,
                data: payload
            }
        case PASSENGER_FAILURE:
            return {
                ...state,
            }
        default:
            return state
    }
}

export default reducer