import React, { Component, Fragment } from "react";
import Context from "../context/context";
import Modal from "./Modal";

export const formatDateForComparison = (date, dateObject) =>
	`${date} ${dateObject.format("MMMM")} ${dateObject.format("YYYY")}`;

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
		const currentDayClass = this.props.isCurrentDay ? "current-day" : "";
		if (this.props.blank) {
			return <div className="day-center blank">{` `}</div>;
		} else {
			const classWithAppointment = this.context.appointments.find(
				elem =>
					elem.time ===
					formatDateForComparison(
						this.props.digit,
						this.props.dateObject
					)
			)
				? "with-appointment"
				: "";

			return (
				<Fragment>
					<div
						className={`day-center ${currentDayClass} ${classWithAppointment}`}
						onClick={this.showModal}>
						{this.props.digit}
					</div>
					<Modal
						show={this.state.show}
						handleClose={this.hideModal}
						children="something"
						date={this.props.digit}
						dateObject={this.props.dateObject}
					/>
				</Fragment>
			);
		}
	}
}

export default Day;
