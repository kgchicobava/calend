import React from "react";
import moment from "moment";

const Weekdays = () => {
	const weekdays = Array.apply(null, Array(7)).map(function(_, i) {
		return moment(i, "e")
			.startOf("week")
			.isoWeekday(i + 1)
			.format("ddd");
	});
	return (
		<div className="row weekday">
			{weekdays.map(elem => (
				<div key={elem}>{elem}</div>
			))}
		</div>
	);
};

export default Weekdays;
