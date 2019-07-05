import React, { useContext } from "react";
import Context from "../context/context";

const Appointment = props => {
	const context = useContext(Context);
	return (
		<div className="appointment">
			<div className="appointment-day">{props.appointment.time}</div>
			<div className="appointment-body">
				{props.appointment.text}
				<label title="Delete">
					<span
						className="delete"
						onClick={() =>
							context.removeAppointment(props.appointment)
						}>
						&times;
					</span>
				</label>
			</div>
		</div>
	);
};

export default Appointment;
