import React from 'react'
import moment from "moment";
import Day from "./Day";


const DateGrid = (props) => {
    const getFirstDayOfMonth = () => {
        let dateObject = props.dateObject;
        let firstDay = moment(dateObject)
            .startOf("month")
            .format("d");
        return firstDay === 0 ? 7 : firstDay - 1;
    };

    const getCurrentDay = (day) => {
        return parseInt(day) === parseInt(moment().day()) && parseInt(props.dateObject.format("M")) - 1 === parseInt(moment().month()) && parseInt(props.dateObject.format("YYYY")) === parseInt(moment().year());
    }

    let blanks = [], daysInMonth = [];
        for (let i = 0; i < getFirstDayOfMonth(); i++) {
            blanks.push(<Day blank={true} />)
        }
        for (let d = 1; d <= moment().daysInMonth(); d++) {
            daysInMonth.push(<Day blank={false} info={d} currentDay={getCurrentDay(d)} />)
        }
        let totalSlots = [...blanks, ...daysInMonth], rows = [], cells = [];
        if (totalSlots.length % 7 !== 0) {
            for (let i = 0; i < totalSlots.length % 7 ; i++) {
                totalSlots.push(<Day blank={true} />)
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
    
          console.log( moment().month())
          console.log( moment().year())
          console.log(props.dateObject.format("YYYY"))

    return daysinmonth;
}

export default DateGrid
