export const ADD_APPOINTMENT = "ADD_APPOINTMENT";
export const REMOVE_APPOINTMENT = "REMOVE_APPOINTMENT";

const addAppointmentToCalend = (appointment, state) => {
    return {...state, appointments: [...state.appointments, appointment]};
}

const removeAppointmentFromCalend = (appointment, state) => {

}

export const reducer = (state, action) => {
    switch (action.type) {
        case ADD_APPOINTMENT:
                console.log("state", state);
                console.log("action", action)
            return addAppointmentToCalend(action.appointment, state); 
        case REMOVE_APPOINTMENT:
            return removeAppointmentFromCalend(action.appointment, state)
        default:
            break;
    }
}