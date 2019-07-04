import React, {
	Component,
	Fragment,
	useContext,
	useState,
	useEffect
} from "react";
import Context from "../context/context";
import Appointment from "./Appointment";

const formatDateForComparison = (date, dateObject) =>
	`${date} ${dateObject.format("MMMM")} ${dateObject.format("YYYY")}`;

const Modal = ({ handleClose, show, children, date, dateObject }) => {
	const context = useContext(Context);
	const [textValue, setText] = useState("");
	const showHideClassName = show
		? "modal display-block"
		: "modal display-none";
	const withApp = context.appointments.find(
		elem => elem.time === formatDateForComparison(date, dateObject)
	);
	return (
		<div className={showHideClassName} onClick={handleClose}>
			<section
				className="modal-main"
				onClick={event => event.stopPropagation()}>
				{withApp ? (
					<Appointment appointment={withApp} />
				) : (
					<Fragment>
						<textarea
							name="appointment"
							onChange={e => setText(e.target.value)}
						/>
						<button
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
							Add apointment
						</button>
					</Fragment>
				)}

				<button onClick={handleClose}>close</button>
			</section>
		</div>
	);
};

class Day extends Component {
	state = { show: false };
	static contextType = Context;
	showModal = () => {
		this.setState({ show: true });
	};

	hideModal = () => {
		this.setState({
			show: false
		});
	};
	render() {
		const currentDayClass = this.props.currentDay ? "current-day" : "";
		if (this.props.blank) {
			return <div className="day-center blank">{` `}</div>;
		} else {
			const classWithAppointment = this.context.appointments.find(
				elem =>
					elem.time ===
					formatDateForComparison(
						this.props.info,
						this.props.dateObject
					)
			)
				? "with-appointment"
				: "";
			console.log(
				this.context.appointments,
				formatDateForComparison(this.props.info, this.props.dateObject)
			);
			return (
				<Fragment>
					<div
						className={`day-center ${currentDayClass} ${classWithAppointment}`}
						onClick={this.showModal}>
						{this.props.info}
					</div>
					<Modal
						show={this.state.show}
						handleClose={this.hideModal}
						children="something"
						date={this.props.info}
						dateObject={this.props.dateObject}
					/>
				</Fragment>
			);
		}
	}
}

export default Day;
