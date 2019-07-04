import React, { Component } from "react";
import Day from "./Day";
import Weekdays from "./Weekdays";
import Controls from "./Controls";
import MonthAndYearDisplay from "./MonthAndYearDisplay";
import DateGrid from "./DateGrid";
import moment from "moment";

export class Calendar extends Component {
	state = {
		dateObject: moment()
	};

	getMonth = () => {
		return this.state.dateObject.format("MMMM");
	};

	getYear = () => {
		return this.state.dateObject.format("YYYY");
	};

	onNextMonth = () => {
		this.setState({
			dateObject: this.state.dateObject.add(1, "month")
		});
	};

	onPrevMonth = () => {
		this.setState({
			dateObject: this.state.dateObject.subtract(1, "month")
		});
	};

	onCurrentTime = () => {
		this.setState({ dateObject: moment() });
	};

	render() {
		return (
			<div>
				<MonthAndYearDisplay
					month={this.getMonth()}
					year={this.getYear()}
				/>
				<div className="container">
					<Controls
						onPrevMonth={this.onPrevMonth}
						onCurrentTime={this.onCurrentTime}
						onNextMonth={this.onNextMonth}
					/>
					<Weekdays />
					<DateGrid dateObject={this.state.dateObject} />
				</div>
			</div>
		);
	}
}

export default Calendar;
