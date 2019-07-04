import React from "react";

const Controls = (props) => {
	return (
		<div className="controls">
			<button onClick={e => props.onPrevMonth()}>&#60; Prev</button>
			<button onClick={e => props.onCurrentTime()}>Current</button>
			<button onClick={e => props.onNextMonth()}>Next &#62;</button>
		</div>
	);
};

export default Controls;
