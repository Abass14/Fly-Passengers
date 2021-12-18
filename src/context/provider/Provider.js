import React, { createContext, useReducer } from "react";
import passenger from "../initialState/passenger";
import reducer from "../reducer/reducers";

export const GlobalContext = createContext({})

const GlobalProvider = ({children}) => {
    const [passengerSate, passengerDispatch] = useReducer(reducer, passenger)

    return (
        <GlobalContext.Provider
            value={{
                passengerSate,
                passengerDispatch,
                passenger,
                reducer
            }}
        >
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalProvider