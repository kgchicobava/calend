export const ADD_APPOINTMENT = "ADD_APPOINTMENT";
export const REMOVE_APPOINTMENT = "REMOVE_APPOINTMENT";

const addAppointmentToCalend = (appointment, state) => {
	return { ...state, appointments: [...state.appointments, appointment] };
};

const removeAppointmentFromCalend = (appointment, state) => {
	return {
		...state,
		appointments: [...state.appointments].filter(
			elem => appointment.time !== elem.time
		)
	};
};

export const reducer = (state, action) => {
	switch (action.type) {
		case ADD_APPOINTMENT:
			return addAppointmentToCalend(action.appointment, state);
		case REMOVE_APPOINTMENT:
			return removeAppointmentFromCalend(action.appointment, state);
		default:
			break;
	}
};
