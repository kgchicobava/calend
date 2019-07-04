import React, {useReducer, useState} from "react";

import Context from "./context";
import {reducer, ADD_APPOINTMENT, REMOVE_APPOINTMENT} from "./reducers";

const GlobalState = props => {
    const [state, dispatch] = useReducer(reducer, {appointments: []});

    const addAppointment = app => {
        dispatch({type: ADD_APPOINTMENT, appointment: app})
    }

    const removeAppointment = app => {
        dispatch({type: REMOVE_APPOINTMENT, appointment: app})
    }

    return (
        <Context.Provider value={{
            appointments: state.appointments,
            addAppointment,
            removeAppointment
        }}>
            {props.children}
        </Context.Provider> 
    )
}

export default GlobalState;