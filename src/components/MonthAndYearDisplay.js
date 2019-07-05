import React from "react";

const MonthAndYearDisplay = props => {
	return (
		<div className="month-and-year">{`${props.month}, ${props.year}`}</div>
	);
};

export default MonthAndYearDisplay;
