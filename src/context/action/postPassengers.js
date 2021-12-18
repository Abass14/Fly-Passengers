import axiosInstance from "../../helpers/axiosInstance"

export default (id) =>dispatch=> {
    axiosInstance.post(`passenger/${id}`, {
        totalPassengers,
        totalPages,
        data
    }).then(response => {

    }).catch({
        
    })
}