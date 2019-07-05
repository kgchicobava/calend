import React, { useState, useContext, Fragment } from "react";
import Context from "../context/context";
import Appointment from "./Appointment";
import { formatDateForComparison } from "./Day";

const Modal = ({ handleClose, show, date, dateObject }) => {
	const context = useContext(Context);
	const [textValue, setText] = useState("");
	const showHideClassName = show
		? "modal display-block"
		: "modal display-none";
	const withAppointment = context.appointments.find(
		elem => elem.time === formatDateForComparison(date, dateObject)
	);
	return (
		<div className={showHideClassName} onClick={handleClose}>
			<section
				className="modal-main"
				onClick={event => event.stopPropagation()}>
				{withAppointment ? (
					<Appointment appointment={withAppointment} />
				) : (
					<Fragment>
						<div className="appointment-day">
							{formatDateForComparison(date, dateObject)}
						</div>
						<textarea
							name="appointment"
							placeholder="Add appointment..."
							className="app-textarea"
							onChange={e => setText(e.target.value)}
						/>
						<button
							className="modal-controls"
							onClick={() => {
								context.addAppointment({
									text: textValue,
									time: formatDateForComparison(
										date,
										dateObject
									)
								});
								handleClose();
							}}>
							Save
						</button>
					</Fragment>
				)}
				<button className="modal-controls" onClick={handleClose}>
					Cancel
				</button>
			</section>
		</div>
	);
};

export default Modal;
