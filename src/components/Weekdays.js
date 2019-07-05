import React from "react";
import moment from "moment";

const Weekdays = () => {
	// hack for moment, because by default it starts week from sunday, and changes of locale didnt help
	const weekdays = Array.apply(null, Array(7)).map((_, i) =>
		moment(i, "e")
			.startOf("week")
			.isoWeekday(i + 1)
			.format("ddd")
	);
	return (
		<div className="row weekday">
			{weekdays.map(elem => (
				<div key={elem}>{elem}</div>
			))}
		</div>
	);
};

export default Weekdays;
