import { PASSENGER_SUCCESS } from "../../constants/actionType"
import axiosInstance from "../../helpers/axiosInstance"

export default (pages, sizes) =>dispatch=> {
    axiosInstance.get(`passenger?page=${pages}&size=${sizes}`).then(response => {
        dispatch({
            type: PASSENGER_SUCCESS,
            payload: response.data.data
        })
    }).catch((error) => {
        dispatch({
            type: PASSENGER_FAILURE,
            payload: error.response ? error.response.data : {error: "Something went wrong"}
        })
    })
}