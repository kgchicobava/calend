import React, {useContext} from 'react'
import Context from "../context/context";



const Appointment = (props) => {
    console.log(props)
    const context = useContext(Context);
    return (
        <div>
            {props.appointment.text}
            <span onClick={() => context.removeAppointment(props.appointment)}>X</span>
        </div>
    )
}

export default Appointment
