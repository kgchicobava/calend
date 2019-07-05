import React from "react";
import moment from "moment";
import Day from "./Day";

const DateGrid = props => {
	const getFirstDayOfMonth = () => {
		const dateObject = props.dateObject;
		const firstDay = moment(dateObject)
			.startOf("month")
			.format("d");
		return firstDay === 0 ? 7 : firstDay - 1;
	};

	// checks is a day current, and assigns class for highlighting
	const findCurrentDay = day => {
		return (
			parseInt(day) === parseInt(moment().day()) &&
			parseInt(props.dateObject.format("M")) - 1 ===
				parseInt(moment().month()) &&
			parseInt(props.dateObject.format("YYYY")) ===
				parseInt(moment().year())
		);
	};

	const blanks = [],
		daysInMonth = [];

	for (let i = 0; i < getFirstDayOfMonth(); i++) {
		blanks.push(<Day key={`${i}blankdays`} blank={true} />);
	}
	for (let day = 1; day <= moment().daysInMonth(); day++) {
		daysInMonth.push(
			<Day
				blank={false}
				key={`${day}key`}
				digit={day}
				dateObject={props.dateObject}
				isCurrentDay={findCurrentDay(day)}
			/>
		);
	}
	let totalSlots = [...blanks, ...daysInMonth],
		rows = [],
		cells = [];

	if (totalSlots.length % 7 !== 0) {
		for (let i = 0; i < totalSlots.length % 7; i++) {
			totalSlots.push(<Day key={`${i}blank`} blank={true} />);
		}
	}
	totalSlots.forEach((row, i) => {
		if (i % 7 !== 0) {
			cells.push(row);
		} else {
			rows.push(cells);
			cells = [];
			cells.push(row);
		}
		if (i === totalSlots.length - 1) {
			rows.push(cells);
		}
	});
	const days = rows.map((day, i) => {
		return (
			<div key={`${i}daysinmonth`} className="row">
				{day}
			</div>
		);
	});

	return days;
};

export default DateGrid;
