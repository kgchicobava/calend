import React from "react";

export default React.createContext({
    appointments: [],
    addAppointment: apptmnt => {},
    removeAppointment: apptmnt => {}
})