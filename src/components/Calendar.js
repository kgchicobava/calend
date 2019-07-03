import React, { Component } from "react";
import { weekdays } from "../consts";
import moment from "moment";
moment().locale("ua");
export class Calendar extends Component {
	state = {
		dateObject: moment()
	};

	getFirstDayOfMonth = () => {
		let dateObject = this.state.dateObject;
		let firstDay = moment(dateObject)
			.startOf("month")
			.format("d");
		return firstDay === 0 ? 7 : firstDay - 1;
    };
    
    getMonth = () => {
        return this.state.dateObject.format("MMMM")
    }

    onNextMonth = () => {
        this.setState({
            dateObject: this.state.dateObject.add(1, "month")
        })
    }

    onPrevMonth = () => {
        this.setState({
            dateObject: this.state.dateObject.subtract(1, "month")
        })
    }

    onCurrentTime = () => {
        this.setState({dateObject: moment()})
    }

	render() {
        let blanks = [], daysInMonth = [];
        for (let i = 0; i < this.getFirstDayOfMonth(); i++) {
            blanks.push(<div>blank</div>)
        }
        for (let d = 1; d <= moment().daysInMonth(); d++) {
            daysInMonth.push(<div>{d}</div>)
        }
        let totalSlots = [...blanks, ...daysInMonth], rows = [], cells = [];
        if (totalSlots.length % 7 !== 0) {
            for (let i = 0; i < totalSlots.length % 7 ; i++) {
                totalSlots.push(<div/>)
            }
        }
        totalSlots.forEach((row, i) => {
            if (i % 7 !== 0) {
                cells.push(row)
            } else {
                rows.push(cells);
                cells = [];
                cells.push(row);
            }
            if (i === totalSlots.length - 1) {
                rows.push(cells)
            }

        })
        let daysinmonth = rows.map((d, i) => {
            return <div className="row">{d}</div>;
          });
        
		return (
			<div>
                {this.getMonth()}
                <button onClick={(e) => this.onPrevMonth()}>Prev</button>
                <button onClick={(e) => this.onCurrentTime()}>Home</button>
                <button onClick={(e) => this.onNextMonth()}>Next</button>
				<div className="row">
					{weekdays.map(elem => (
						<div key={elem}>{elem}</div>
					))}
				</div>
                {daysinmonth}
			</div>
		);
	}
}

export default Calendar;
